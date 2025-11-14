import { Metadata } from "next";
import HuongDanPageClient from "./HuongDanPageClient";

export const metadata: Metadata = {
  title: "Hướng dẫn Sử dụng - Hành trình Đổi Mới",
  description:
    "Hướng dẫn chi tiết cách sử dụng các tính năng của dự án Hành trình Đổi Mới",
};

export default function HuongDanPage() {
  return <HuongDanPageClient />;
}
