import { getContentData } from "@/lib/data-loaders";
import DaiHoiListClient from "./DaiHoiListClient";

export const metadata = {
  title: "Các kỳ Đại hội - Hành trình Đổi Mới",
  description: "Khám phá lịch sử các kỳ Đại hội Đảng Cộng sản Việt Nam từ VII đến XIII",
};

export default function DaiHoiListPage() {
  const contentData = getContentData();
  const daiHoiList = Object.values(contentData);

  return <DaiHoiListClient daiHoiList={daiHoiList} />;
}
