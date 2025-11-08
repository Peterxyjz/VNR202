import type { Metadata } from "next";
import { Poppins, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
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
        className={`${poppins.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Chatbot />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
