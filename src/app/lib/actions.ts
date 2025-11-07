"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";

// ==================== QUESTION ACTIONS ====================

export async function createQuestion(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const guestName = formData.get("guestName") as string;
  const guestId = formData.get("guestId") as string;
  const daiHoiTag = formData.get("daiHoiTag") as string;

  // Validation
  if (!title || !content || !guestName || !guestId || !daiHoiTag) {
    throw new Error("Vui lòng điền đầy đủ thông tin");
  }

  const question = await prisma.question.create({
    data: {
      title,
      content,
      guestName,
      guestId,
      daiHoiTag,
    },
  });

  revalidatePath("/forum");
  redirect(`/forum/${question.id}`);
}

// ==================== ANSWER ACTIONS ====================

export async function createAnswer(formData: FormData) {
  const content = formData.get("content") as string;
  const guestName = formData.get("guestName") as string;
  const guestId = formData.get("guestId") as string;
  const questionId = formData.get("questionId") as string;

  // Validation
  if (!content || !guestName || !guestId || !questionId) {
    throw new Error("Vui lòng điền đầy đủ thông tin");
  }

  await prisma.answer.create({
    data: {
      content,
      guestName,
      guestId,
      questionId,
    },
  });

  revalidatePath(`/forum/${questionId}`);
}

// ==================== REACTION ACTIONS ====================

export async function toggleReaction(formData: FormData) {
  const guestId = formData.get("guestId") as string;
  const emoji = formData.get("emoji") as string;
  const questionId = formData.get("questionId") as string | null;
  const answerId = formData.get("answerId") as string | null;

  // Validation
  if (!guestId || !emoji) {
    throw new Error("Thông tin không hợp lệ");
  }

  if (!questionId && !answerId) {
    throw new Error("Phải có questionId hoặc answerId");
  }

  // Tìm reaction hiện tại
  const existingReaction = await prisma.reaction.findFirst({
    where: {
      guestId,
      emoji,
      questionId: questionId || undefined,
      answerId: answerId || undefined,
    },
  });

  if (existingReaction) {
    // Nếu đã có reaction, xóa nó (toggle off)
    await prisma.reaction.delete({
      where: {
        id: existingReaction.id,
      },
    });
  } else {
    // Nếu chưa có, tạo mới (toggle on)
    await prisma.reaction.create({
      data: {
        guestId,
        emoji,
        questionId: questionId || undefined,
        answerId: answerId || undefined,
      },
    });
  }

  // Revalidate trang detail
  if (questionId) {
    revalidatePath(`/forum/${questionId}`);
  }
}
