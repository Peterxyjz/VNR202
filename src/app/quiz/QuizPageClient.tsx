'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DaiHoiData, QuizData } from '@/lib/data-loaders';
import MindMapView from '@/components/quiz/MindMapView';
import SummaryNotes from '@/components/quiz/SummaryNotes';

interface QuizPageClientProps {
  quizData: QuizData[];
  daiHoiData: { [key: string]: DaiHoiData };
}

type TabType = 'quiz' | 'mindmap' | 'summary';

export default function QuizPageClient({
  quizData,
  daiHoiData,
}: QuizPageClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>('quiz');

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Kiểm tra kiến thức
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Khám phá, học tập và kiểm tra kiến thức về các kỳ Đại hội Đảng
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-lg p-1 border-2 border-gray-200">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="flex items-center gap-2">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Quiz
              </span>
            </button>
            <button
              onClick={() => setActiveTab('mindmap')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'mindmap'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="flex items-center gap-2">
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
                    d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
                  />
                </svg>
                Mind Map
              </span>
            </button>
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'summary'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="flex items-center gap-2">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Tóm tắt
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fadeIn">
          {activeTab === 'quiz' && (
            <div>
              {/* Quiz Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {quizData.map((quiz) => {
                  const daiHoiInfo = daiHoiData[quiz.DaiHoi];
                  const questionCount = quiz.Questions.length;

                  return (
                    <Link
                      key={quiz.DaiHoi}
                      href={`/quiz/${quiz.DaiHoi}`}
                      className="group"
                    >
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-transparent hover:border-red-400 group-hover:scale-105 h-full">
                        {/* Badge */}
                        <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-md">
                          Đại hội {quiz.DaiHoi}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                          {daiHoiInfo?.title || `Đại hội ${quiz.DaiHoi}`}
                        </h3>

                        {/* Info */}
                        <div className="space-y-2 text-gray-600 text-sm mb-4">
                          {daiHoiInfo && (
                            <p className="flex items-center gap-2">
                              <svg
                                className="w-4 h-4 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span className="font-semibold">Thời gian:</span>{' '}
                              {daiHoiInfo.time}
                            </p>
                          )}
                          <p className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <span className="font-semibold">Số câu hỏi:</span>{' '}
                            {questionCount} câu
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t">
                          <div className="flex items-center text-sm text-gray-500">
                            <svg
                              className="w-4 h-4 mr-1"
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
                            ~{Math.ceil(questionCount * 1.5)} phút
                          </div>

                          {/* Arrow */}
                          <span className="text-red-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">
                            Bắt đầu →
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Info Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500 shadow-md">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center text-lg">
                  <svg
                    className="w-6 h-6 mr-2"
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
                  Hướng dẫn
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Mỗi bài quiz có nhiều câu hỏi trắc nghiệm về nội dung Đại hội</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Chọn đáp án và xem giải thích chi tiết ngay lập tức</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Điểm số được tính tự động sau khi hoàn thành</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Bạn có thể làm lại bài quiz bất cứ lúc nào để củng cố kiến thức</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'mindmap' && (
            <div>
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Sơ đồ tư duy các Đại hội
                </h2>
                <p className="text-gray-600">
                  Khám phá mối liên hệ giữa các Đại hội và nội dung chính
                </p>
              </div>
              <MindMapView daiHoiData={daiHoiData} />
            </div>
          )}

          {activeTab === 'summary' && (
            <div>
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Tóm tắt các Đại hội
                </h2>
                <p className="text-gray-600">
                  Xem tóm tắt nội dung và sao chép để học tập
                </p>
              </div>
              <SummaryNotes daiHoiData={daiHoiData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
