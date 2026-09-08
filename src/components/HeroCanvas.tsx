"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─── Config ─── */
const N          = 80;           // particle count
const SPEED      = 0.00045;      // drift speed per frame
const CONNECT_D  = 0.52;         // world-units, connection threshold
const WRAP_X     = 2.6;
const WRAP_Y     = 1.8;

// Colors tuned for dark navy hero background
const NODE_COLOR   = 0x7ab4ff;   // soft cornflower blue
const LINE_COLOR   = 0x4a90d9;   // slightly darker blue for lines
const NODE_OPACITY = 0.65;
const LINE_OPACITY = 0.22;
const NODE_SIZE    = 0.022;

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ── Respect prefers-reduced-motion ── */
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    /* ── Scene / Camera ── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 2.8;

    /* ── Particles ── */
    const pos = new Float32Array(N * 3);
    const vel: { x: number; y: number }[] = [];

    for (let i = 0; i < N; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * WRAP_X * 2;
      pos[i * 3 + 1] = (Math.random() - 0.5) * WRAP_Y * 2;
      pos[i * 3 + 2] = 0;
      vel.push({
        x: (Math.random() - 0.5) * SPEED,
        y: (Math.random() - 0.5) * SPEED,
      });
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({
      color:       NODE_COLOR,
      size:        NODE_SIZE,
      opacity:     NODE_OPACITY,
      transparent: true,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(geo, mat));

    /* ── Pre-allocate a pool of line geometries ── */
    // Max possible connections: N*(N-1)/2 = 3160 — pool 256 (more than enough per frame)
    const LINE_POOL = 256;
    const lineMat = new THREE.LineBasicMaterial({
      color:       LINE_COLOR,
      opacity:     LINE_OPACITY,
      transparent: true,
    });
    const linePool: THREE.Line[] = [];
    const lineGeos: THREE.BufferGeometry[] = [];
    for (let k = 0; k < LINE_POOL; k++) {
      const lg = new THREE.BufferGeometry();
      lg.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6), 3));
      const line = new THREE.Line(lg, lineMat);
      line.visible = false;
      scene.add(line);
      linePool.push(line);
      lineGeos.push(lg);
    }

    /* ── Subtle mouse parallax ── */
    const mouse = { tx: 0, ty: 0, cx: 0, cy: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth  - 0.5) * 0.08;
      mouse.ty = -(e.clientY / window.innerHeight - 0.5) * 0.05;
    };
    if (!reduced) window.addEventListener("mousemove", onMouseMove, { passive: true });

    /* ── Resize ── */
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize, { passive: true });

    /* ── IntersectionObserver — pause when off-screen ── */
    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(mount);

    /* ── Animation Loop ── */
    let rafId = 0;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      if (!visible) return;   // skip rendering when scrolled away

      if (!reduced) {
        /* Drift particles */
        for (let i = 0; i < N; i++) {
          posAttr.array[i * 3]     += vel[i].x;
          posAttr.array[i * 3 + 1] += vel[i].y;

          // Wrap
          if ((posAttr.array[i * 3] as number)     >  WRAP_X) posAttr.array[i * 3]     = -WRAP_X;
          if ((posAttr.array[i * 3] as number)     < -WRAP_X) posAttr.array[i * 3]     =  WRAP_X;
          if ((posAttr.array[i * 3 + 1] as number) >  WRAP_Y) posAttr.array[i * 3 + 1] = -WRAP_Y;
          if ((posAttr.array[i * 3 + 1] as number) < -WRAP_Y) posAttr.array[i * 3 + 1] =  WRAP_Y;
        }
        posAttr.needsUpdate = true;

        /* Smooth parallax */
        mouse.cx += (mouse.tx - mouse.cx) * 0.04;
        mouse.cy += (mouse.ty - mouse.cy) * 0.04;
        scene.rotation.y = mouse.cx;
        scene.rotation.x = mouse.cy;
      }

      /* Update connection lines using pool */
      let poolIdx = 0;
      for (let i = 0; i < N && poolIdx < LINE_POOL; i++) {
        for (let j = i + 1; j < N && poolIdx < LINE_POOL; j++) {
          const ax = posAttr.array[i * 3]     as number;
          const ay = posAttr.array[i * 3 + 1] as number;
          const bx = posAttr.array[j * 3]     as number;
          const by = posAttr.array[j * 3 + 1] as number;
          const dx = ax - bx, dy = ay - by;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_D) {
            const buf = (lineGeos[poolIdx].attributes.position as THREE.BufferAttribute).array as Float32Array;
            buf[0] = ax; buf[1] = ay; buf[2] = 0;
            buf[3] = bx; buf[4] = by; buf[5] = 0;
            (lineGeos[poolIdx].attributes.position as THREE.BufferAttribute).needsUpdate = true;
            linePool[poolIdx].visible = true;
            poolIdx++;
          }
        }
      }
      // Hide unused pool entries
      for (let k = poolIdx; k < LINE_POOL; k++) linePool[k].visible = false;

      renderer.render(scene, camera);
    };

    tick();

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      lineGeos.forEach((g) => g.dispose());
      geo.dispose();
      mat.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
