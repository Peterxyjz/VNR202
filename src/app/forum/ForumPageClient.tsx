"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Question {
  id: string;
  title: string;
  content: string;
  guestName: string;
  daiHoiTag: string;
  createdAt: Date;
  _count: {
    answers: number;
    reactions: number;
  };
}

interface ForumPageClientProps {
  questions: Question[];
}

type SortType = "newest" | "popular" | "mostAnswered";
type FilterType = "all" | string; // 'all' or specific daiHoiTag

export default function ForumPageClient({ questions }: ForumPageClientProps) {
  const [sortBy, setSortBy] = useState<SortType>("newest");
  const [filterBy, setFilterBy] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique daiHoiTags for filter
  const daiHoiTags = useMemo(() => {
    const tags = new Set(questions.map((q) => q.daiHoiTag));
    return Array.from(tags).sort();
  }, [questions]);

  // Filter and sort questions
  const filteredQuestions = useMemo(() => {
    let filtered = questions;

    // Apply tag filter
    if (filterBy !== "all") {
      filtered = filtered.filter((q) => q.daiHoiTag === filterBy);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (q) =>
          q.title.toLowerCase().includes(query) ||
          q.content.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case "newest":
        sorted.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "popular":
        sorted.sort((a, b) => b._count.reactions - a._count.reactions);
        break;
      case "mostAnswered":
        sorted.sort((a, b) => b._count.answers - a._count.answers);
        break;
    }

    return sorted;
  }, [questions, filterBy, searchQuery, sortBy]);

  // Statistics
  const stats = useMemo(() => {
    return {
      totalQuestions: questions.length,
      totalAnswers: questions.reduce((sum, q) => sum + q._count.answers, 0),
      totalReactions: questions.reduce((sum, q) => sum + q._count.reactions, 0),
    };
  }, [questions]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Forum Q&A
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Diễn đàn hỏi đáp và thảo luận về các kỳ Đại hội Đảng
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <Link
              href="/forum/ask"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl"
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Đặt câu hỏi mới
            </Link>

            {/* Stats */}
            <div className="flex gap-4 text-sm">
              <div className="bg-white px-4 py-2 rounded-lg shadow-md">
                <span className="text-gray-600">Câu hỏi:</span>{" "}
                <span className="font-bold text-red-600">
                  {stats.totalQuestions}
                </span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-md">
                <span className="text-gray-600">Trả lời:</span>{" "}
                <span className="font-bold text-blue-600">
                  {stats.totalAnswers}
                </span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-md">
                <span className="text-gray-600">Tương tác:</span>{" "}
                <span className="font-bold text-green-600">
                  {stats.totalReactions}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tìm kiếm
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm câu hỏi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-gray-700 w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Filter by Đại hội */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lọc theo Đại hội
              </label>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="text-gray-700 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
              >
                <option value="all">Tất cả</option>
                {daiHoiTags.map((tag) => (
                  <option key={tag} value={tag}>
                    Đại hội {tag}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort by */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sắp xếp
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortType)}
                className="text-gray-700 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none bg-white"
              >
                <option value="newest">Mới nhất</option>
                <option value="popular">Phổ biến nhất</option>
                <option value="mostAnswered">Nhiều câu trả lời nhất</option>
              </select>
            </div>
          </div>

          {/* Active filters info */}
          {(filterBy !== "all" || searchQuery) && (
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="text-gray-600">Đang lọc:</span>
              {filterBy !== "all" && (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                  Đại hội {filterBy}
                  <button
                    onClick={() => setFilterBy("all")}
                    className="ml-2 hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">
                  &ldquo;{searchQuery}&rdquo;
                  <button
                    onClick={() => setSearchQuery("")}
                    className="ml-2 hover:text-red-900"
                  >
                    ×
                  </button>
                </span>
              )}
              <span className="text-gray-500">
                ({filteredQuestions.length} kết quả)
              </span>
            </div>
          )}
        </div>

        {/* Questions List */}
        {filteredQuestions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <svg
              className="w-20 h-20 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <p className="text-gray-600 text-lg mb-2">
              {questions.length === 0
                ? "Chưa có câu hỏi nào"
                : "Không tìm thấy câu hỏi phù hợp"}
            </p>
            <p className="text-gray-500 text-sm">
              {questions.length === 0
                ? "Hãy là người đầu tiên đặt câu hỏi!"
                : "Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm"}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredQuestions.map((question, index) => (
              <Link
                key={question.id}
                href={`/forum/${question.id}`}
                className="block group"
                style={{
                  animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`,
                }}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-red-500 group-hover:border-red-600 group-hover:scale-[1.01]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                        {question.title}
                      </h3>

                      {/* Content Preview */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {question.content}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <svg
                            className="w-4 h-4 text-blue-500"
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
                          <span className="font-medium">
                            {question.guestName}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="bg-gradient-to-r from-red-100 to-red-200 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                            Đại hội {question.daiHoiTag}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-gray-600">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          <span className="font-semibold text-green-600">
                            {question._count.answers}
                          </span>
                          <span>câu trả lời</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-gray-600">
                          <span className="text-lg">❤️</span>
                          <span className="font-semibold text-pink-600">
                            {question._count.reactions}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
