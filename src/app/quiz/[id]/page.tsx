import { notFound } from "next/navigation";
import Link from "next/link";
import { getQuizByDaiHoiId, getQuizDaiHoiIds, getDaiHoiById } from "@/app/lib/data-loaders";
import QuizClient from "@/app/components/QuizClient";

// Generate static params for SSG
export async function generateStaticParams() {
  const ids = getQuizDaiHoiIds();
  return ids.map((id) => ({
    id: id,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const daiHoiInfo = getDaiHoiById(params.id);

  if (!daiHoiInfo) {
    return {
      title: "Quiz không tìm thấy",
    };
  }

  return {
    title: `Quiz ${daiHoiInfo.title} | Hành trình Đổi Mới`,
    description: `Kiểm tra kiến thức của bạn về ${daiHoiInfo.title}`,
  };
}

export default function QuizDetailPage({ params }: { params: { id: string } }) {
  const quizData = getQuizByDaiHoiId(params.id);
  const daiHoiInfo = getDaiHoiById(params.id);

  if (!quizData || !daiHoiInfo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/quiz"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại danh sách quiz
          </Link>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="inline-block bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold mb-3">
              Đại hội {params.id}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Quiz: {daiHoiInfo.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{quizData.Questions.length} câu hỏi</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>~{Math.ceil(quizData.Questions.length * 1.5)} phút</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Component */}
        <QuizClient questions={quizData.Questions} daiHoiId={params.id} />
      </div>
    </div>
  );
}
