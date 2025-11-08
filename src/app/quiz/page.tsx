import { getQuizData, getContentData } from "@/lib/data-loaders";
import QuizPageClient from "./QuizPageClient";

export const metadata = {
  title: "Quiz - Kiểm tra kiến thức | Hành trình Đổi Mới",
  description: "Làm bài quiz để kiểm tra kiến thức về các kỳ Đại hội Đảng",
};

export default function QuizIndexPage() {
  const quizData = getQuizData();
  const daiHoiData = getContentData();

  return <QuizPageClient quizData={quizData} daiHoiData={daiHoiData} />;
}
