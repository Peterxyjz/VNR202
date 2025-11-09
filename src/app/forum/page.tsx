import { prisma } from "@/lib/prisma";
import ForumPageClient from "./ForumPageClient";

export const metadata = {
  title: "Hỏi đáp | Hành trình Đổi Mới",
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

  // Serialize dates for client component
  const serializedQuestions = questions.map((q) => ({
    ...q,
    createdAt: q.createdAt,
    updatedAt: q.updatedAt,
  }));

  return <ForumPageClient questions={serializedQuestions} />;
}
