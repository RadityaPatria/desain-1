import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "VIP Executive Portal — Ibu Gubernur Jawa Timur | JawaPos Awards 2026",
  description: "Portal Undangan Resmi & Penataan Meja Kehormatan VVIP JawaPos Awards 2026 di Grand Ballroom Hotel Surabaya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-[#071518] text-[#eef2ee] antialiased selection:bg-[#d8a21a]/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
