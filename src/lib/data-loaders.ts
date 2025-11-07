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

// ==================== QUIZ DATA ====================

export interface QuizQuestion {
  QuestionNumber: number;
  Question: string;
  Options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  CorrectAnswer: string;
  SourceText: string;
}

export interface QuizData {
  DaiHoi: string;
  Questions: QuizQuestion[];
}

// Đọc dữ liệu quiz từ file JSON
export function getQuizData(): QuizData[] {
  const filePath = path.join(process.cwd(), "src", "data", "vnr202_quiz.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

// Lấy quiz của một Đại hội cụ thể
export function getQuizByDaiHoiId(id: string): QuizData | undefined {
  const quizData = getQuizData();
  return quizData.find((quiz) => quiz.DaiHoi === id);
}

// Lấy danh sách các Đại hội có quiz
export function getQuizDaiHoiIds(): string[] {
  const quizData = getQuizData();
  return quizData.map((quiz) => quiz.DaiHoi);
}

// ==================== THEME DATA ====================

export interface ThemeTimelineItem {
  daiHoiId: string;
  time: string;
  snippet: string;
}

export interface ThemeData {
  slug: string;
  title: string;
  description: string;
  timeline: ThemeTimelineItem[];
}

export interface ThemesData {
  [key: string]: ThemeData;
}

// Đọc dữ liệu themes từ file JSON
export function getThemesData(): ThemesData {
  const filePath = path.join(process.cwd(), "src", "data", "vnr202_themes.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

// Lấy danh sách các slug của themes
export function getThemeSlugs(): string[] {
  const themesData = getThemesData();
  return Object.keys(themesData);
}

// Lấy thông tin chi tiết của một theme
export function getThemeBySlug(slug: string): ThemeData | undefined {
  const themesData = getThemesData();
  return themesData[slug];
}

// Lấy tất cả themes dưới dạng array
export function getAllThemes(): ThemeData[] {
  const themesData = getThemesData();
  return Object.values(themesData);
}
