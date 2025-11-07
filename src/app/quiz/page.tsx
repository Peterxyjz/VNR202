import Link from "next/link";
import { getQuizData, getDaiHoiById } from "@/lib/data-loaders";

export const metadata = {
  title: "Quiz - Kiểm tra kiến thức | Hành trình Đổi Mới",
  description: "Làm bài quiz để kiểm tra kiến thức về các kỳ Đại hội Đảng",
};

export default function QuizIndexPage() {
  const quizData = getQuizData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            Kiểm tra kiến thức
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Chọn một Đại hội để bắt đầu làm bài quiz và kiểm tra sự hiểu biết
            của bạn
          </p>
        </div>

        {/* Quiz Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizData.map((quiz) => {
            const daiHoiInfo = getDaiHoiById(quiz.DaiHoi);
            const questionCount = quiz.Questions.length;

            return (
              <Link
                key={quiz.DaiHoi}
                href={`/quiz/${quiz.DaiHoi}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-transparent hover:border-red-400 group-hover:scale-105">
                  {/* Badge */}
                  <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    Đại hội {quiz.DaiHoi}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                    {daiHoiInfo?.title || `Đại hội ${quiz.DaiHoi}`}
                  </h3>

                  {/* Info */}
                  <div className="space-y-2 text-gray-600 text-sm mb-4">
                    {daiHoiInfo && (
                      <p>
                        <span className="font-semibold">Thời gian:</span>{" "}
                        {daiHoiInfo.time}
                      </p>
                    )}
                    <p>
                      <span className="font-semibold">Số câu hỏi:</span>{" "}
                      {questionCount} câu
                    </p>
                  </div>

                  {/* Difficulty Badge */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      ~{Math.ceil(questionCount * 1.5)} phút
                    </div>

                    {/* Arrow */}
                    <span className="text-red-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">
                      Bắt đầu →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-900 mb-2 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Hướng dẫn
          </h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Mỗi bài quiz có nhiều câu hỏi trắc nghiệm</li>
            <li>• Chọn đáp án và xem giải thích chi tiết ngay lập tức</li>
            <li>• Điểm số được tính tự động sau khi hoàn thành</li>
            <li>• Bạn có thể làm lại bài quiz bất cứ lúc nào</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
