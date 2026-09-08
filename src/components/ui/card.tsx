import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ style, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          background: "var(--color-paper)",
          border: "1px solid var(--color-line)",
          borderRadius: "1rem",
          padding: "1.75rem",
          boxShadow: "var(--shadow-sm)",
          transition: "box-shadow 0.2s ease, transform 0.2s ease",
          ...style,
        }}
        className={className}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = "var(--shadow-md)";
          el.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = "var(--shadow-sm)";
          el.style.transform = "translateY(0)";
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

/* ── Sub-components for composition ── */

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ style, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      marginBottom: "1rem",
      paddingBottom: "1rem",
      borderBottom: "1px solid var(--color-line)",
      ...style,
    }}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ style, ...props }, ref) => (
  <h3
    ref={ref}
    style={{
      fontSize: "var(--text-h4)",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      ...style,
    }}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ style, ...props }, ref) => (
  <div
    ref={ref}
    style={{ color: "var(--color-slate)", lineHeight: 1.6, ...style }}
    {...props}
  />
));
CardBody.displayName = "CardBody";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ style, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      marginTop: "1rem",
      paddingTop: "1rem",
      borderTop: "1px solid var(--color-line)",
      display: "flex",
      gap: "0.75rem",
      alignItems: "center",
      ...style,
    }}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
