import { Metadata } from "next";
import DieuKhoanPageClient from "./DieuKhoanPageClient";

export const metadata: Metadata = {
  title: "Điều khoản Sử dụng - Hành trình Đổi Mới",
  description:
    "Điều khoản và điều kiện sử dụng dịch vụ của dự án Hành trình Đổi Mới",
};

export default function DieuKhoanPage() {
  return <DieuKhoanPageClient />;
}
