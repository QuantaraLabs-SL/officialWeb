import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

/* ─── next/font — self-hosted via Google Fonts (no external request at runtime) ─── */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

/* ─── Metadata ─── */
export const metadata: Metadata = {
  title: {
    default: "Quantara",
    template: "%s | Quantara",
  },
  description:
    "Quantara builds intelligent software, AI automation, and business optimisation solutions for modern organisations.",
  keywords: [
    "software development",
    "AI automation",
    "business optimisation",
    "Quantara",
  ],
  authors: [{ name: "Quantara" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Quantara",
    title: "Quantara",
    description:
      "Intelligent software and business optimisation solutions — built to perform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantara",
    description:
      "Intelligent software and business optimisation solutions — built to perform.",
    site: "@quantara",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1B4B8F",
  width: "device-width",
  initialScale: 1,
};

/* ─── Root Layout ─── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Global Header */}
        <Header />

        {/* Page content — labelled for skip-link target */}
        <main id="main-content" className="flex flex-col flex-1" tabIndex={-1}>
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
