"use client";

import { useState } from "react";
import { QuizQuestion } from "@/lib/data-loaders";
import Link from "next/link";

interface QuizClientProps {
  questions: QuizQuestion[];
  daiHoiId: string;
}

export default function QuizClient({ questions, daiHoiId }: QuizClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Xử lý khi chọn đáp án
  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return; // Đã chọn rồi thì không cho chọn nữa

    setSelectedAnswer(answer);

    // Cập nhật điểm nếu đúng
    if (answer === currentQuestion.CorrectAnswer) {
      setScore(score + 1);
    }

    // Đánh dấu câu hỏi này đã trả lời
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnswered);
  };

  // Chuyển sang câu hỏi tiếp theo
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  // Reset quiz
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
  };

  // Lấy class cho mỗi option button
  const getOptionClass = (option: string) => {
    // Ensure explicit text color for good contrast regardless of global CSS variables
    const baseClass =
      "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 text-gray-800 ";

    if (!selectedAnswer) {
      return baseClass + "border-gray-300 hover:border-red-400 hover:bg-red-50";
    }

    // Nếu đã chọn
    if (option === currentQuestion.CorrectAnswer) {
      return (
        baseClass + "border-green-500 bg-green-100 text-green-900 font-semibold"
      );
    }

    if (option === selectedAnswer && option !== currentQuestion.CorrectAnswer) {
      return baseClass + "border-red-500 bg-red-100 text-red-900 font-semibold";
    }

    return baseClass + "border-gray-300 opacity-60";
  };

  // Hiển thị màn hình kết quả
  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "";
    let bgColor = "";

    if (percentage >= 80) {
      message = "Xuất sắc! Bạn hiểu rất rõ về Đại hội này!";
      bgColor = "bg-green-100";
    } else if (percentage >= 60) {
      message = "Khá tốt! Bạn có kiến thức vững về Đại hội này.";
      bgColor = "bg-blue-100";
    } else if (percentage >= 40) {
      message = "Cần cố gắng thêm! Hãy đọc lại nội dung Đại hội.";
      bgColor = "bg-yellow-100";
    } else {
      message = "Hãy học thêm về Đại hội này nhé!";
      bgColor = "bg-red-100";
    }

    return (
      <div className="max-w-2xl mx-auto">
        <div className={`${bgColor} rounded-lg shadow-lg p-8 text-center`}>
          <div className="mb-6">
            <div className="text-6xl font-bold text-gray-800 mb-2">
              {score}/{questions.length}
            </div>
            <div className="text-2xl font-semibold text-gray-700">
              {percentage}% chính xác
            </div>
          </div>

          <p className="text-xl text-gray-800 mb-8">{message}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Làm lại
            </button>
            <Link
              href={`/dai-hoi/${daiHoiId}`}
              className="bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-block"
            >
              Xem lại nội dung
            </Link>
            <Link
              href="/quiz"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-block"
            >
              Chọn quiz khác
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Hiển thị câu hỏi
  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>
            Câu hỏi {currentQuestionIndex + 1}/{questions.length}
          </span>
          <span>Điểm: {score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-red-600 h-3 rounded-full transition-all duration-300"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {currentQuestion.Question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {Object.entries(currentQuestion.Options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleAnswerSelect(key)}
              disabled={selectedAnswer !== null}
              className={getOptionClass(key)}
            >
              <span className="font-semibold mr-2">{key}.</span>
              {value}
            </button>
          ))}
        </div>

        {/* Explanation (shown after answer) */}
        {selectedAnswer && (
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <h3 className="font-bold text-blue-900 mb-2">Giải thích:</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {currentQuestion.SourceText}
            </p>
          </div>
        )}
      </div>

      {/* Next Button */}
      {selectedAnswer && (
        <div className="flex justify-end">
          <button
            onClick={handleNextQuestion}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            {isLastQuestion ? "Xem kết quả" : "Câu tiếp theo"}
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
