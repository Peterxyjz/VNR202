import HomeClient from "@/components/HomeClient";
import { getContentData } from "@/lib/data-loaders";

export default function Home() {
  const contentData = getContentData();
  const daiHoiList = Object.values(contentData);

  return <HomeClient daiHoiList={daiHoiList} />;
}
