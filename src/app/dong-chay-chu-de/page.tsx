import { getAllThemes } from "@/lib/data-loaders";
import DongChayChuDeClient from "./DongChayChuDeClient";

export const metadata = {
  title: "Dòng chảy Chủ đề | Hành trình Đổi Mới",
  description: "Khám phá các chủ đề xuyên suốt qua các kỳ Đại hội Đảng",
};

export default function ThemesIndexPage() {
  const themes = getAllThemes();

  return <DongChayChuDeClient themes={themes} />;
}
