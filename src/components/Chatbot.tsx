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
          className="fixed bottom-8 left-8 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
          aria-label="Mở trợ lý AI"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          {/* <span className="font-semibold">Trợ lý AI</span> */}
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-8 left-8 z-50 flex h-[600px] w-[440px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header với gradient */}
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Trợ lý VNR202</h3>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
                  Sẵn sàng trả lời về Đại hội Đảng
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  title="Xóa lịch sử"
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                title="Đóng"
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.length === 0 && (
              <div className="text-center">
                <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <div className="text-4xl mb-2">👋</div>
                  <p className="text-sm text-gray-700 font-medium mb-1">
                    Xin chào! Tôi là trợ lý AI
                  </p>
                  <p className="text-xs text-gray-600">
                    Hỏi tôi về lịch sử Đại hội Đảng Cộng sản Việt Nam
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-semibold mb-2">
                    Câu hỏi gợi ý:
                  </p>
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestedQuestion(q)}
                      className="text-gray-700 w-full rounded-lg bg-white p-3 text-left text-sm border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 hover:shadow-md"
                    >
                      <span className="text-blue-600 mr-2">→</span>
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
                } animate-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white border border-gray-200 shadow-sm text-gray-700"
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm leading-relaxed ">
                    {msg.content}
                  </div>
                  <div
                    className={`text-[10px] mt-2 ${
                      msg.role === "user" ? "text-blue-100" : "text-gray-400"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString("vi-VN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="flex gap-1">
                      <span className="text-gray-700 w-2 h-2 bg-blue-600 rounded-full animate-bounce"></span>
                      <span
                        className="text-gray-700 w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                      <span
                        className="text-gray-700 w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></span>
                    </div>
                    <span>Đang suy nghĩ...</span>
                  </div>
                </div>
              </div>
            )}

            <div className="text-gray-700" ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Hỏi về Đại hội, cương lĩnh, mốc lịch sử..."
                disabled={isLoading}
                className="text-gray-700 flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                onClick={() => sendMessage()}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none hover:scale-105 active:scale-95"
              >
                <svg
                  style={{ transform: "rotate(90deg)" }}
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
              <svg
                className="w-3 h-3"
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
              AI có thể sai - kiểm tra nguồn khi cần.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
