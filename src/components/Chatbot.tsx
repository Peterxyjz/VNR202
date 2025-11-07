"use client";

import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { knowledgeBase, systemPrompt } from "@/lib/knowledge-base";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "Đại hội VII có ý nghĩa gì?",
  "Cương lĩnh 1991 nói điều gì?",
  "Mục tiêu CNH-HĐH là gì?",
  "Đại hội nào đề ra mô hình kinh tế thị trường?",
];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

      if (!apiKey) {
        throw new Error("API key not configured");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const modelName =
        process.env.NEXT_PUBLIC_GEMINI_MODEL || "gemini-2.0-flash-lite";
      const apiVersion = process.env.NEXT_PUBLIC_GEMINI_API_VERSION || "v1";
      const model = genAI.getGenerativeModel(
        { model: modelName },
        { apiVersion }
      );

      const prompt = `${systemPrompt}\n\nTÀI LIỆU THAM KHẢO:\n${knowledgeBase}\n\nCÂU HỎI: ${messageText}\n\nHÃY TRẢ LỜI (ngắn gọn, dễ hiểu):`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const textRes = response.text();

      const assistantMessage: Message = {
        role: "assistant",
        content: textRes,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);

      let errorMessage = "Xin lỗi, có lỗi xảy ra. ";

      if (error instanceof Error) {
        const msg = error.message || "";
        if (msg.includes("API key")) {
          errorMessage +=
            "Chưa cấu hình API key. Vui lòng kiểm tra biến môi trường.";
        } else if (msg.toLowerCase().includes("quota")) {
          errorMessage += "Đã vượt quota API. Vui lòng thử lại sau.";
        } else {
          errorMessage += "Vui lòng thử lại sau vài giây.";
        }
      }

      const errorMsg: Message = {
        role: "assistant",
        content: errorMessage,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question);
  };

  const clearChat = () => {
    if (window.confirm("Bạn có chắc muốn xóa toàn bộ lịch sử chat?")) {
      setMessages([]);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 left-8 z-50 flex items-center gap-3 rounded-full bg-blue-500 p-3 text-white shadow-lg"
          aria-label="Mở trợ lý AI"
        >
          🤖 Trợ lý
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-8 left-8 z-50 flex h-[560px] w-[420px] flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b p-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                🤖
              </div>
              <div>
                <h3 className="font-bold">Trợ lý VNR202</h3>
                <p className="text-xs text-gray-600">
                  Sẵn sàng trả lời về Đại hội Đảng
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {messages.length > 0 && (
                <button onClick={clearChat} title="Xóa lịch sử" className="p-2">
                  🗑️
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                title="Đóng"
                className="p-2"
              >
                ✖️
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-sm text-gray-600">
                <p className="mb-2">
                  Xin chào! Tôi là trợ lý AI cho nội dung Đại hội Đảng.
                </p>
                <div className="space-y-2">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestedQuestion(q)}
                      className="w-full rounded bg-white p-2 text-left text-sm"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-white border"
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">
                    {msg.content}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1">
                    {msg.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="text-sm text-gray-600">Đang trả lời...</div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t p-3 bg-white">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Hỏi về Đại hội, cương lĩnh, mốc lịch sử..."
                disabled={isLoading}
                className="flex-1 rounded border px-3 py-2"
              />
              <button
                onClick={() => sendMessage()}
                disabled={isLoading || !input.trim()}
                className="bg-blue-500 text-white px-4 rounded"
              >
                Gửi
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              AI có thể sai - kiểm tra nguồn khi cần.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
