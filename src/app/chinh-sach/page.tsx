import { Metadata } from "next";
import ChinhSachPageClient from "./ChinhSachPageClient";

export const metadata: Metadata = {
  title: "Chính sách Bảo mật - Hành trình Đổi Mới",
  description:
    "Chính sách bảo mật thông tin người dùng của dự án Hành trình Đổi Mới",
};

export default function ChinhSachPage() {
  return <ChinhSachPageClient />;
}
