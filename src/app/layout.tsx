import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
      <body className={`${inter.variable} ${quicksand.variable} antialiased`}>
        <Navbar />
        <Chatbot />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
