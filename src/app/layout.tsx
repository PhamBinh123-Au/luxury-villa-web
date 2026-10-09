import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | ${siteConfig.brandSubtitle} - Da Nang, Vietnam`,
  description: siteConfig.description,
  keywords: [
    "B Villa",
    "Da Nang Villa",
    "Luxury Villa Da Nang",
    "Son Tra Villa",
    "Ngu Hanh Son Villa",
    "Private Pool Villa",
    "Vietnam Vacation Rental",
  ],
  authors: [{ name: siteConfig.brandName }],
  openGraph: {
    title: `${siteConfig.brandName} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/images/villa-b1.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#fbfaf8] text-stone-900 antialiased selection:bg-amber-100 selection:text-stone-900">
        {children}
      </body>
    </html>
  );
}

