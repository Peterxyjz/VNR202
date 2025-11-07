import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hành trình Đổi Mới - Bảo tàng số Đại hội Đảng",
  description:
    "Tìm hiểu lịch sử các kỳ Đại hội Đảng Cộng sản Việt Nam từ VII đến XIII",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Chatbot />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
