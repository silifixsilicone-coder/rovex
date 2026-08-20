import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROVEX — Building businesses, products and technology for what comes next.",
  description: "ROVEX is a technology and venture studio building products across manufacturing, productivity, AI and the future of work.",
  keywords: ["ROVEX", "Venture Studio", "Silifix Silicone", "WinSizer", "Falcon AI", "Future AI", "Manufacturing", "AI Keyboard"],
  authors: [{ name: "ROVEX Studio" }],
  openGraph: {
    title: "ROVEX — Venture Studio & Technology Products",
    description: "Building businesses, products and technology for what comes next.",
    url: "https://rovex.studio",
    siteName: "ROVEX",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F8F7E8] text-[#111615] font-sans-body selection:bg-[#00584F] selection:text-[#F8F7E8]">
        {children}
      </body>
    </html>
  );
}
