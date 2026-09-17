import { BlogPost } from "../config/posts";

export function getCardBadgeStyles(cardType: BlogPost["cardType"]) {
  switch (cardType) {
    case "telemetry":
      return {
        pillBg: "#00CBA8",
        pillText: "#006B55",
        badgeBg: "rgba(0, 203, 168, 0.1)",
        badgeBorder: "rgba(0, 203, 168, 0.2)",
      };
    case "fintech":
      return {
        pillBg: "#00609A",
        pillText: "#00609A",
        badgeBg: "rgba(0, 96, 154, 0.1)",
        badgeBorder: "rgba(0, 96, 154, 0.2)",
      };
    case "agentic":
      return {
        pillBg: "#4BDDB7",
        pillText: "#006B55",
        badgeBg: "rgba(75, 221, 183, 0.1)",
        badgeBorder: "rgba(75, 221, 183, 0.2)",
      };
    case "saas-cost":
      return {
        pillBg: "#4F5C76",
        pillText: "#4F5C76",
        badgeBg: "rgba(79, 92, 118, 0.1)",
        badgeBorder: "rgba(79, 92, 118, 0.2)",
      };
    case "inventory-sync":
      return {
        pillBg: "#0084D1",
        pillText: "#00609A",
        badgeBg: "rgba(0, 132, 209, 0.1)",
        badgeBorder: "rgba(0, 132, 209, 0.2)",
      };
    case "friction-ebitda":
      return {
        pillBg: "#131B2E",
        pillText: "#131B2E",
        badgeBg: "rgba(19, 27, 46, 0.1)",
        badgeBorder: "rgba(19, 27, 46, 0.2)",
      };
    default:
      return {
        pillBg: "#00609A",
        pillText: "#00609A",
        badgeBg: "rgba(0, 96, 154, 0.1)",
        badgeBorder: "rgba(0, 96, 154, 0.2)",
      };
  }
}
