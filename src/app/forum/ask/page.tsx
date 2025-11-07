import Link from "next/link";
import QuestionForm from "@/components/QuestionForm";

export const metadata = {
  title: "Đặt câu hỏi mới | Forum Q&A",
  description: "Đặt câu hỏi mới về các kỳ Đại hội Đảng",
};

export default function AskQuestionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/forum"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-4 transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Quay lại forum
          </Link>

          <h1 className="text-4xl font-bold text-red-800 mb-2">
            Đặt câu hỏi mới
          </h1>
          <p className="text-gray-700">Chia sẻ câu hỏi của bạn với cộng đồng</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <QuestionForm />
        </div>

        {/* Guidelines */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
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
            Hướng dẫn đặt câu hỏi
          </h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Tiêu đề nên ngắn gọn và rõ ràng</li>
            <li>• Mô tả chi tiết vấn đề bạn muốn hỏi</li>
            <li>• Chọn chủ đề phù hợp với câu hỏi</li>
            <li>• Câu hỏi của bạn sẽ được đăng ẩn danh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
