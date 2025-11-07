"use client";

import { useState, useTransition } from "react";
import { useGuest } from "@/hooks/useGuest";
import { toggleReaction } from "@/lib/actions";

interface Reaction {
  id: string;
  emoji: string;
  guestId: string;
}

interface ReactionButtonsProps {
  targetId: string;
  targetType: "question" | "answer";
  initialReactions: Reaction[];
}

const EMOJI_OPTIONS = [
  { emoji: "👍", label: "Hữu ích" },
  { emoji: "💡", label: "Hay" },
  { emoji: "🤔", label: "Cần suy nghĩ" },
];

export default function ReactionButtons({
  targetId,
  targetType,
  initialReactions,
}: ReactionButtonsProps) {
  const { guestId } = useGuest();
  const [isPending, startTransition] = useTransition();
  const [reactions, setReactions] = useState(initialReactions);

  // Đếm số lượng reaction cho mỗi emoji
  const getReactionCount = (emoji: string) => {
    return reactions.filter((r) => r.emoji === emoji).length;
  };

  // Kiểm tra xem user đã react chưa
  const hasUserReacted = (emoji: string) => {
    return reactions.some((r) => r.emoji === emoji && r.guestId === guestId);
  };

  // Xử lý click reaction
  const handleReaction = (emoji: string) => {
    if (!guestId) return;

    // Optimistic update
    const hasReacted = hasUserReacted(emoji);

    if (hasReacted) {
      // Remove reaction
      setReactions(
        reactions.filter((r) => !(r.emoji === emoji && r.guestId === guestId))
      );
    } else {
      // Add reaction
      setReactions([
        ...reactions,
        { id: `temp-${Date.now()}`, emoji, guestId },
      ]);
    }

    // Server action
    startTransition(async () => {
      const formData = new FormData();
      formData.append("guestId", guestId);
      formData.append("emoji", emoji);

      if (targetType === "question") {
        formData.append("questionId", targetId);
        formData.append("answerId", "");
      } else {
        formData.append("questionId", "");
        formData.append("answerId", targetId);
      }

      try {
        await toggleReaction(formData);
      } catch (error) {
        console.error("Error toggling reaction:", error);
        // Revert optimistic update on error
        setReactions(initialReactions);
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {EMOJI_OPTIONS.map(({ emoji, label }) => {
        const count = getReactionCount(emoji);
        const isActive = hasUserReacted(emoji);

        return (
          <button
            key={emoji}
            onClick={() => handleReaction(emoji)}
            disabled={isPending || !guestId}
            className={`flex items-center gap-2 px-3 py-2 rounded-full border-2 transition-all ${
              isActive
                ? "border-red-500 bg-red-50 text-red-700"
                : "border-gray-300 bg-white text-gray-700 hover:border-red-400 hover:bg-red-50"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            title={label}
          >
            <span className="text-lg">{emoji}</span>
            {count > 0 && (
              <span className="text-sm font-semibold">{count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
