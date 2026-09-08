import type { CSSProperties, HTMLAttributes, ElementType } from "react";

interface PageWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /** Pass `as="section"` etc. to render a semantic element instead of div */
  as?: ElementType;
  /** Extra top padding beyond the sticky header clearance */
  padTop?: string;
  /** Extra bottom padding */
  padBottom?: string;
  /** Override max-width (defaults to --page-max-width = 75rem) */
  maxWidth?: string;
  /** Whether to add top padding that accounts for the sticky header */
  offsetHeader?: boolean;
}

/**
 * PageWrapper — constrains content to the design max-width and applies
 * horizontal padding. Also optionally offsets for the sticky header.
 *
 * Usage:
 *   <PageWrapper>…</PageWrapper>
 *   <PageWrapper as="section" offsetHeader padTop="4rem">…</PageWrapper>
 */
export default function PageWrapper({
  as: Tag = "div",
  padTop,
  padBottom,
  maxWidth,
  offsetHeader = false,
  style,
  children,
  ...rest
}: PageWrapperProps) {
  const wrapperStyle: CSSProperties = {
    width: "100%",
    maxWidth: maxWidth ?? "var(--page-max-width)",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "var(--page-padding-x)",
    paddingRight: "var(--page-padding-x)",
    paddingTop: padTop ?? (offsetHeader ? "var(--header-height)" : undefined),
    paddingBottom: padBottom,
    ...style,
  };

  return <Tag style={wrapperStyle} {...rest}>{children}</Tag>;
}
