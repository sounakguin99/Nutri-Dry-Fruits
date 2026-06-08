import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nature's Harvest",
    default: "Nature's Harvest - Premium Dry Fruits & Nuts",
  },
  description: "Curating the finest, premium quality dry fruits, nuts, and exotic dates from around the world for your healthy lifestyle.",
  keywords: ["dry fruits", "nuts", "exotic dates", "premium snacks", "healthy eating"],
  openGraph: {
    title: "Nature's Harvest",
    description: "Premium quality dry fruits, nuts, and exotic dates.",
    url: "https://naturesharvest.com",
    siteName: "Nature's Harvest",
    images: [
      {
        url: "/logo/logo.png",
        width: 800,
        height: 600,
        alt: "Nature's Harvest Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature's Harvest",
    description: "Premium quality dry fruits, nuts, and exotic dates.",
    images: ["/logo/logo.png"],
  },
  icons: {
    icon: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
