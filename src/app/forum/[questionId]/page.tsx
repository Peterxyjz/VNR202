import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ReactionButtons from "@/components/ReactionButtons";
import AnswerForm from "@/components/AnswerForm";

// Local (minimal) types to avoid relying on generated Prisma types at build time.
// This prevents build failures when the Prisma client types are not available
// during the deployment build (for example, if postinstall scripts are disabled).
type AnswerWithReactions = {
  id: string;
  content: string;
  guestName: string;
  createdAt: Date | string;
  reactions: { id: string; emoji: string; guestId: string }[];
};

export const revalidate = 10; // Revalidate every 10 seconds

export async function generateMetadata({
  params,
}: {
  params: { questionId: string };
}) {
  const question = await prisma.question.findUnique({
    where: { id: params.questionId },
  });

  if (!question) {
    return {
      title: "Câu hỏi không tìm thấy",
    };
  }

  return {
    title: `${question.title} | Forum Q&A`,
    description: question.content.substring(0, 150),
  };
}

export default async function QuestionDetailPage({
  params,
}: {
  params: { questionId: string };
}) {
  const question = await prisma.question.findUnique({
    where: { id: params.questionId },
    include: {
      reactions: true,
      answers: {
        include: {
          reactions: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  if (!question) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
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
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          {/* Tag */}
          <div className="mb-4">
            <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
              Đại hội {question.daiHoiTag}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {question.title}
          </h1>

          {/* Content */}
          <div className="text-gray-700 leading-relaxed mb-6 whitespace-pre-wrap">
            {question.content}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
              <svg
                className="w-4 h-4"
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
              <span>
                {new Date(question.createdAt).toLocaleDateString("vi-VN")}
              </span>
            </div>
          </div>

          {/* Reactions */}
          <ReactionButtons
            targetId={question.id}
            targetType="question"
            initialReactions={question.reactions}
          />
        </div>

        {/* Answers Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Câu trả lời ({question.answers.length})
          </h2>

          {question.answers.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
              Chưa có câu trả lời nào. Hãy là người đầu tiên trả lời!
            </div>
          ) : (
            <div className="space-y-4">
              {question.answers.map((answer: AnswerWithReactions) => (
                <div
                  key={answer.id}
                  className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-400"
                >
                  {/* Answer Content */}
                  <div className="text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">
                    {answer.content}
                  </div>

                  {/* Answer Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>{answer.guestName}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
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
                      <span>
                        {new Date(answer.createdAt).toLocaleDateString("vi-VN")}
                      </span>
                    </div>
                  </div>

                  {/* Answer Reactions */}
                  <ReactionButtons
                    targetId={answer.id}
                    targetType="answer"
                    initialReactions={answer.reactions}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Answer Form */}
        <AnswerForm questionId={question.id} />
      </div>
    </div>
  );
}
