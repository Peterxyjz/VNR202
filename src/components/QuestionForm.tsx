"use client";

import { useGuest } from "@/hooks/useGuest";
import { createQuestion } from "@/lib/actions";
import { useRef } from "react";
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
        {pending ? "Đang gửi..." : "Đăng câu hỏi"}
      </button>
      {!guestId && (
        <p className="text-sm text-gray-500 italic">Đang tải thông tin...</p>
      )}
    </>
  );
}

export default function QuestionForm() {
  const { guestId } = useGuest();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} action={createQuestion} className="space-y-6">
      {/* Guest Name */}
      <div>
        <label
          htmlFor="guestName"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Tên hiển thị <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="guestName"
          name="guestName"
          required
          maxLength={50}
          placeholder="Nhập tên của bạn"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800"
        />
      </div>

      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Tiêu đề câu hỏi <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          maxLength={200}
          placeholder="Tóm tắt ngắn gọn câu hỏi của bạn"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800"
        />
      </div>

      {/* Content */}
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Nội dung chi tiết <span className="text-red-600">*</span>
        </label>
        <textarea
          id="content"
          name="content"
          required
          rows={6}
          placeholder="Mô tả chi tiết câu hỏi của bạn..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-gray-800"
        />
      </div>

      {/* Dai Hoi Tag */}
      <div>
        <label
          htmlFor="daiHoiTag"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Chủ đề <span className="text-red-600">*</span>
        </label>
        <select
          id="daiHoiTag"
          name="daiHoiTag"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800"
        >
          <option value="">-- Chọn Đại hội --</option>
          <option value="VII">Đại hội VII</option>
          <option value="VIII">Đại hội VIII</option>
          <option value="IX">Đại hội IX</option>
          <option value="X">Đại hội X</option>
          <option value="XI">Đại hội XI</option>
          <option value="XII">Đại hội XII</option>
          <option value="XIII">Đại hội XIII</option>
          <option value="Chung">Chung</option>
        </select>
      </div>

      {/* Hidden guestId */}
      <input type="hidden" name="guestId" value={guestId || ""} />

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
  );
}
