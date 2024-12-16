import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sfDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sf-display",
});

const sfText = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Text-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sf-text",
});

export const metadata: Metadata = {
  title: "Create Your Apple Watch Series 10 Style - Apple",
  description: "A Clone to the Apple Watch Series 10 studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sfDisplay.variable} ${sfText.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
