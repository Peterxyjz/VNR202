"use client";

import { useRef } from "react";
import { useGuest } from "@/app/hooks/useGuest";
import { createAnswer } from "@/app/lib/actions";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  const { guestId } = useGuest();

  return (
    <>
      <button
        type="submit"
        disabled={pending || !guestId}
        className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {pending ? "Đang gửi..." : "Gửi câu trả lời"}
      </button>
      {!guestId && (
        <p className="text-sm text-gray-500 italic">Đang tải thông tin...</p>
      )}
    </>
  );
}

interface AnswerFormProps {
  questionId: string;
}

export default function AnswerForm({ questionId }: AnswerFormProps) {
  const { guestId } = useGuest();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Trả lời câu hỏi</h3>

      <form ref={formRef} action={createAnswer} className="space-y-4">
        {/* Guest Name */}
        <div>
          <label
            htmlFor="answerGuestName"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Tên hiển thị <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="answerGuestName"
            name="guestName"
            required
            maxLength={50}
            placeholder="Nhập tên của bạn"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800"
          />
        </div>

        {/* Content */}
        <div>
          <label
            htmlFor="answerContent"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Nội dung trả lời <span className="text-red-600">*</span>
          </label>
          <textarea
            id="answerContent"
            name="content"
            required
            rows={4}
            placeholder="Viết câu trả lời của bạn..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-gray-800"
          />
        </div>

        {/* Hidden fields */}
        <input type="hidden" name="guestId" value={guestId || ""} />
        <input type="hidden" name="questionId" value={questionId} />

        {/* Submit Button */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <SubmitButton />
            <button
              type="button"
              onClick={() => formRef.current?.reset()}
              className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Xóa
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
