"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface PainPointCardData {
  id: string;
  badgeNumber: string;
  badgeBg: string;
  badgeTextColor: string;
  iconBg: string;
  iconColor: string;
  iconSvg: React.ReactNode;
  title: string;
  description: string;
  solutionTitle: string;
  solutionDescription: string;
}

const PAIN_POINTS: PainPointCardData[] = [
  {
    id: "friction-01",
    badgeNumber: "Friction 01",
    badgeBg: "#FEF2F2",
    badgeTextColor: "#BA1A1A",
    iconBg: "#FEF2F2",
    iconColor: "#BA1A1A",
    iconSvg: (
      <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[21px] h-[19px]">
        <path
          d="M5.4 19L4 17.6L10.9 10.675L14.4 14.175L19.575 9L21 10.425L14.4 17L10.9 13.5L5.4 19ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V6.2H2V16V18ZM2 4.2H16V2H2V4.2ZM2 4.2V2V4.2Z"
          fill="#BA1A1A"
        />
      </svg>
    ),
    title: "Manual Order & WhatsApp Chaos",
    description:
      "Tracking customer orders, stock dispatches, and updates across phone chats, Excel sheets, and handwritten books. Orders get misread or delayed.",
    solutionTitle: "The Quantara Solution",
    solutionDescription:
      "A central web portal with automated customer notifications, synchronized inventory, and direct multi-channel intake.",
  },
  {
    id: "friction-02",
    badgeNumber: "Friction 02",
    badgeBg: "#FFFBEB",
    badgeTextColor: "#B45309",
    iconBg: "#FFFBEB",
    iconColor: "#D97706",
    iconSvg: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[16px]">
        <path
          d="M16.4 9L15 7.6L17.075 5.5L15 3.425L16.4 2L18.5 4.1L20.575 2L22 3.425L19.9 5.5L22 7.6L20.575 9L18.5 6.925L16.4 9ZM8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM2 14H14V13.2C14 13.0167 13.9542 12.85 13.8625 12.7C13.7708 12.55 13.65 12.4333 13.5 12.35C12.6 11.9 11.6917 11.5625 10.775 11.3375C9.85833 11.1125 8.93333 11 8 11C7.06667 11 6.14167 11.1125 5.225 11.3375C4.30833 11.5625 3.4 11.9 2.5 12.35C2.35 12.4333 2.22917 12.55 2.1375 12.7C2.04583 12.85 2 13.0167 2 13.2V14ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6Z"
          fill="#D97706"
        />
      </svg>
    ),
    title: "Losing Track of High-Value Leads",
    description:
      "Inquiries slip through the cracks when handed off between marketing campaigns, reps, and messaging channels without clear pipeline visibility.",
    solutionTitle: "The Quantara Solution",
    solutionDescription:
      "Instant CRM routing, real-time trigger alarms for uncontacted prospects, and pipeline telemetry dashboards.",
  },
  {
    id: "friction-03",
    badgeNumber: "Friction 03",
    badgeBg: "#EFF6FF",
    badgeTextColor: "#00609A",
    iconBg: "#EFF6FF",
    iconColor: "#00609A",
    iconSvg: (
      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[20px]">
        <path
          d="M15.1 10.5L13.65 9.05C13.8 8.26667 13.575 7.53333 12.975 6.85C12.375 6.16667 11.6 5.9 10.65 6.05L9.2 4.6C9.48333 4.46667 9.77083 4.36667 10.0625 4.3C10.3542 4.23333 10.6667 4.2 11 4.2C12.25 4.2 13.3125 4.6375 14.1875 5.5125C15.0625 6.3875 15.5 7.45 15.5 8.7C15.5 9.03333 15.4667 9.34583 15.4 9.6375C15.3333 9.92917 15.2333 10.2167 15.1 10.5ZM18.3 13.65L16.85 12.25C17.4833 11.7667 18.0458 11.2375 18.5375 10.6625C19.0292 10.0875 19.45 9.43333 19.8 8.7C18.9667 7.01667 17.7708 5.67917 16.2125 4.6875C14.6542 3.69583 12.9167 3.2 11 3.2C10.5167 3.2 10.0417 3.23333 9.575 3.3C9.10833 3.36667 8.65 3.46667 8.2 3.6L6.65 2.05C7.33333 1.76667 8.03333 1.55417 8.75 1.4125C9.46667 1.27083 10.2167 1.2 11 1.2C13.5167 1.2 15.7583 1.89583 17.725 3.2875C19.6917 4.67917 21.1167 6.48333 22 8.7C21.6167 9.68333 21.1125 10.5958 20.4875 11.4375C19.8625 12.2792 19.1333 13.0167 18.3 13.65ZM18.8 19.8L14.6 15.65C14.0167 15.8333 13.4292 15.9708 12.8375 16.0625C12.2458 16.1542 11.6333 16.2 11 16.2C8.48333 16.2 6.24167 15.5042 4.275 14.1125C2.30833 12.7208 0.883333 10.9167 0 8.7C0.35 7.81667 0.791667 6.99583 1.325 6.2375C1.85833 5.47917 2.46667 4.8 3.15 4.2L0.4 1.4L1.8 0L20.2 18.4L18.8 19.8ZM4.55 5.6C4.06667 6.03333 3.625 6.50833 3.225 7.025C2.825 7.54167 2.48333 8.1 2.2 8.7C3.03333 10.3833 4.22917 11.7208 5.7875 12.7125C7.34583 13.7042 9.08333 14.2 11 14.2C11.3333 14.2 11.6583 14.1792 11.975 14.1375C12.2917 14.0958 12.6167 14.05 12.95 14L12.05 13.05C11.8667 13.1 11.6917 13.1375 11.525 13.1625C11.3583 13.1875 11.1833 13.2 11 13.2C9.75 13.2 8.6875 12.7625 7.8125 11.8875C6.9375 11.0125 6.5 9.95 6.5 8.7C6.5 8.51667 6.5125 8.34167 6.5375 8.175C6.5625 8.00833 6.6 7.83333 6.65 7.65L4.55 5.6Z"
          fill="#00609A"
        />
      </svg>
    ),
    title: "Zero Real-Time Visibility",
    description:
      "No reliable live insight into what your team is executing or how operations are performing until end-of-month tally reports arrive too late.",
    solutionTitle: "The Quantara Solution",
    solutionDescription:
      "Automated telemetry dashboards pulling synchronized stats on margin, order statuses, and team velocity in real time.",
  },
  {
    id: "friction-04",
    badgeNumber: "Friction 04",
    badgeBg: "#FAF5FF",
    badgeTextColor: "#7E22CE",
    iconBg: "#FAF5FF",
    iconColor: "#9333EA",
    iconSvg: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]">
        <path
          d="M9 18C6.7 18 4.69583 17.2375 2.9875 15.7125C1.27917 14.1875 0.3 12.2833 0.05 10H2.1C2.33333 11.7333 3.10417 13.1667 4.4125 14.3C5.72083 15.4333 7.25 16 9 16C10.95 16 12.6042 15.3208 13.9625 13.9625C15.3208 12.6042 16 10.95 16 9C16 7.05 15.3208 5.39583 13.9625 4.0375C12.6042 2.67917 10.95 2 9 2C7.85 2 6.775 2.26667 5.775 2.8C4.775 3.33333 3.93333 4.06667 3.25 5H6V7H0V1H2V3.35C2.85 2.28333 3.8875 1.45833 5.1125 0.875C6.3375 0.291667 7.63333 0 9 0C10.25 0 11.4208 0.2375 12.5125 0.7125C13.6042 1.1875 14.5542 1.82917 15.3625 2.6375C16.1708 3.44583 16.8125 4.39583 17.2875 5.4875C17.7625 6.57917 18 7.75 18 9C18 10.25 17.7625 11.4208 17.2875 12.5125C16.8125 13.6042 16.1708 14.5542 15.3625 15.3625C14.5542 16.1708 13.6042 16.8125 12.5125 17.2875C11.4208 17.7625 10.25 18 9 18ZM11.8 13.2L8 9.4V4H10V8.6L13.2 11.8L11.8 13.2Z"
          fill="#9333EA"
        />
      </svg>
    ),
    title: "Rigid, Bloated Legacy Software",
    description:
      "Expensive off-the-shelf software never quite fits. It forces your team to bend around rigid constraints, causing friction and slowdowns.",
    solutionTitle: "The Quantara Solution",
    solutionDescription:
      "Purpose-built software that fits your company's actual operating rhythms, eliminating extraneous bloat and per-seat license gouging.",
  },
];

export default function PainPointGridSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="problem"
      aria-label="Sound Familiar? Pain Points"
      className="relative w-full border-t border-[#E2E8F0] overflow-hidden"
      style={{
        backgroundColor: "#FAF8FF",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="page-wrapper max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-left max-w-3xl mb-14 sm:mb-16"
        >
          {/* Eyebrow */}
          <span
            className="inline-block text-[12px] font-semibold tracking-[0.14em] uppercase mb-3 text-[#00609A]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            SOUND FAMILIAR?
          </span>

          {/* Heading 2 */}
          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#131B2E] tracking-tight leading-[1.2] mb-4"
            style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            Running a business is hard enough without fighting your own systems.
          </h2>

          {/* Subtitle */}
          <p
            className="text-[15px] sm:text-[16px] text-[#404751] leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Most growing enterprises don’t have a people problem; they have an architecture problem. Here is how operational friction silently drains margin:
          </p>
        </motion.div>

        {/* 2x2 Pain Point Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PAIN_POINTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-between bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:-translate-y-0.5"
            >
              {/* Card Upper Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    {item.iconSvg}
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-[12px] font-semibold tracking-wide"
                    style={{
                      backgroundColor: item.badgeBg,
                      color: item.badgeTextColor,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {item.badgeNumber}
                  </span>
                </div>

                {/* Card Title */}
                <h3
                  className="text-[19px] sm:text-[20px] font-semibold text-[#131B2E] tracking-tight leading-snug mb-3"
                  style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
                >
                  {item.title}
                </h3>

                {/* Card Description */}
                <p
                  className="text-[14.5px] sm:text-[15px] text-[#404751] leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Card Footer: The Quantara Solution */}
              <div
                className="px-6 py-4 sm:px-8 sm:py-5 border-t border-[#E2E8F0] flex items-start gap-3.5"
                style={{ backgroundColor: "#F2F8FF" }}
              >
                {/* Solution Icon (Checkmark circle) */}
                <div className="shrink-0 mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <path
                      d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.1708 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                      fill="#00CBA8"
                    />
                  </svg>
                </div>

                {/* Solution Text */}
                <div className="flex flex-col">
                  <span
                    className="text-[13.5px] sm:text-[14px] font-semibold text-[#131B2E] mb-1"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.solutionTitle}
                  </span>
                  <p
                    className="text-[12.5px] sm:text-[13px] text-[#707882] leading-relaxed font-normal"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.solutionDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
