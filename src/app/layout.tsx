import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MAJESTIC Motors | Ultra-Luxury Car Rental Experience",
  description: "Experience the pinnacle of automotive luxury. Rent the world's most exclusive supercars, luxury sedans, and grand tourers with MAJESTIC Motors. Bespoke service, white-glove delivery, and unforgettable drives.",
  keywords: ["luxury car rental", "supercar rental", "exotic car hire", "Rolls-Royce rental", "Ferrari rental", "Lamborghini rental", "premium car service", "MAJESTIC Motors"],
  authors: [{ name: "MAJESTIC Motors" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "MAJESTIC Motors | Ultra-Luxury Car Rental",
    description: "Experience the pinnacle of automotive luxury. Rent the world's most exclusive vehicles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}