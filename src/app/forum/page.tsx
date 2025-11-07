import Link from "next/link";
import { prisma } from "@/app/lib/prisma";

export const metadata = {
  title: "Forum Q&A | Hành trình Đổi Mới",
  description: "Diễn đàn hỏi đáp về lịch sử các kỳ Đại hội Đảng",
};

export const revalidate = 30; // Revalidate every 30 seconds

export default async function ForumPage() {
  const questions = await prisma.question.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          answers: true,
          reactions: true,
        },
      },
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            Forum Q&A
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Diễn đàn hỏi đáp và thảo luận về các kỳ Đại hội Đảng
          </p>

          <Link
            href="/forum/ask"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Đặt câu hỏi mới
          </Link>
        </div>

        {/* Questions List */}
        {questions.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg
              className="w-16 h-16 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <p className="text-gray-600 text-lg">
              Chưa có câu hỏi nào. Hãy là người đầu tiên đặt câu hỏi!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {questions.map((question) => (
              <Link
                key={question.id}
                href={`/forum/${question.id}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-red-600"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-red-600 transition-colors">
                      {question.title}
                    </h3>

                    {/* Content Preview */}
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {question.content}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>{question.guestName}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                          Đại hội {question.daiHoiTag}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span>{question._count.answers} câu trả lời</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <span>❤️</span>
                        <span>{question._count.reactions} reactions</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="w-6 h-6 text-gray-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
