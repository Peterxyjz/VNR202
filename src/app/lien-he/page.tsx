import { Metadata } from "next";
import LienHePageClient from "./LienHePageClient";

export const metadata: Metadata = {
  title: "Liên hệ - Hành trình Đổi Mới",
  description:
    "Liên hệ với chúng tôi để được hỗ trợ hoặc đóng góp ý kiến về dự án Hành trình Đổi Mới",
};

export default function LienHePage() {
  return <LienHePageClient />;
}
