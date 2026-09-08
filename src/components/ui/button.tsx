"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

/* ─── Types ─── */
type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "outline-paper"
  | "ghost"
  | "gradient"
  | "paper";

type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

/* ─── Variant styles ─── */
const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "var(--color-blue)",
    color: "var(--color-paper)",
    border: "none",
  },
  secondary: {
    background: "var(--color-mist)",
    color: "var(--color-ink)",
    border: "1px solid var(--color-line)",
  },
  outline: {
    background: "transparent",
    color: "var(--color-blue)",
    border: "1.5px solid var(--color-blue)",
  },
  "outline-paper": {
    background: "transparent",
    color: "var(--color-paper)",
    border: "1.5px solid rgba(255,255,255,0.6)",
  },
  ghost: {
    background: "transparent",
    color: "var(--color-slate)",
    border: "none",
  },
  gradient: {
    background: "var(--gradient-primary)",
    color: "var(--color-paper)",
    border: "none",
  },
  paper: {
    background: "var(--color-paper)",
    color: "var(--color-blue)",
    border: "none",
  },
};

const sizeStyles: Record<Size, React.CSSProperties> = {
  sm: { padding: "0.375rem 0.875rem", fontSize: "0.8125rem" },
  md: { padding: "0.5rem 1.25rem", fontSize: "0.9375rem" },
  lg: { padding: "0.75rem 1.75rem", fontSize: "1rem" },
};

/* ─── Component ─── */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      asChild = false,
      style,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const baseStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.375rem",
      borderRadius: "0.625rem",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      cursor: "pointer",
      transition:
        "background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease, opacity 0.15s ease",
      whiteSpace: "nowrap",
      userSelect: "none",
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...style,
    };

    return (
      <Comp
        ref={ref}
        style={baseStyle}
        className={className}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.opacity = "0.88";
          el.style.transform = "translateY(-1px)";
          el.style.boxShadow = "var(--shadow-md)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
        onMouseDown={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(0)";
        }}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
