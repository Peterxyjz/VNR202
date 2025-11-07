import fs from "fs";
import path from "path";

// Interface cho dữ liệu Đại hội
export interface DaiHoiData {
  id: string;
  title: string;
  time: string;
  location: string;
  heroImage: string;
  context: string[];
  contentHighlights: Array<{
    title: string;
    description: string;
  }>;
  fullContentSummary: string[];
  significance: string[];
  media: {
    images: Array<{
      src: string;
      caption: string;
    }>;
    videoUrl: string;
  };
}

export interface ContentData {
  [key: string]: DaiHoiData;
}

// Đọc dữ liệu từ file JSON
export function getContentData(): ContentData {
  const filePath = path.join(process.cwd(), "src", "data", "vnr202_content.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

// Lấy danh sách các key của Đại hội (VII, VIII, IX, ...)
export function getDaiHoiIds(): string[] {
  const contentData = getContentData();
  return Object.keys(contentData);
}

// Lấy thông tin chi tiết của một Đại hội
export function getDaiHoiById(id: string): DaiHoiData | undefined {
  const contentData = getContentData();
  return contentData[id];
}
