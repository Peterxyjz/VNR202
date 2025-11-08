"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface TimelineItem {
  daiHoiId: string;
  time: string;
  snippet: string;
}

interface Theme {
  slug: string;
  title: string;
  description: string;
  timeline: TimelineItem[];
}

interface DongChayDetailClientProps {
  theme: Theme;
}

export default function DongChayDetailClient({
  theme,
}: DongChayDetailClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/dong-chay-chu-de"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 transition-colors font-semibold group"
          >
            <motion.svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: -3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </motion.svg>
            <span className="group-hover:underline">
              Quay lại danh sách chủ đề
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-red-600 via-red-700 to-yellow-600 text-white rounded-3xl shadow-2xl p-10 relative overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15 + Math.random() * 10,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 100 100">
                    <path
                      d="M50 10 L61 39 L92 39 L67 57 L78 86 L50 68 L22 86 L33 57 L8 39 L39 39 Z"
                      fill="#fef08a"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 flex items-start gap-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex-shrink-0"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                  <svg
                    className="w-12 h-12 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                  {theme.title}
                </h1>
                <p className="text-xl text-red-100 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mb-16"
        >
          {/* Timeline Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-2 h-16 bg-gradient-to-b from-red-600 to-yellow-600 rounded-full" />
            <h2 className="text-4xl font-black text-gray-800">
              Hành trình phát triển
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-red-200 to-transparent rounded-full" />
          </div>

          {/* Vertical Timeline Line */}
          <div className="absolute left-10 top-24 bottom-0 w-1 bg-gradient-to-b from-red-500 via-yellow-500 to-red-500 hidden md:block rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-10">
            {theme.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  className="absolute left-10 w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full border-4 border-white shadow-2xl hidden md:flex items-center justify-center transform -translate-x-1/2 z-10"
                >
                  <span className="text-white text-sm font-black">
                    {index + 1}
                  </span>
                </motion.div>

                {/* Content Card */}
                <div className="md:ml-28">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all p-8 border-l-4 border-red-600 relative overflow-hidden"
                  >
                    {/* Decorative corner gradient */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/10 to-yellow-500/10 rounded-bl-full" />

                    {/* Header */}
                    <div className="relative z-10 flex flex-wrap items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white px-5 py-2 rounded-full text-sm font-black shadow-lg"
                      >
                        <span className="text-2xl">⭐</span>
                        <span>Đại hội {item.daiHoiId}</span>
                      </motion.div>
                      <div className="flex items-center text-gray-500 text-sm font-semibold bg-gray-100 px-4 py-2 rounded-full">
                        <svg
                          className="w-4 h-4 mr-2 text-red-600"
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
                        <span>{item.time}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="relative z-10 text-gray-700 leading-relaxed text-lg mb-6">
                      {item.snippet}
                    </p>

                    {/* Link to Detail */}
                    <Link
                      href={`/dai-hoi/${item.daiHoiId}`}
                      className="relative z-10 inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-bold transition-colors group"
                    >
                      <span className="text-lg">
                        Xem chi tiết tại Đại hội {item.daiHoiId}
                      </span>
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </Link>

                    {/* Number indicator on mobile */}
                    <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-red-600 to-yellow-600 rounded-full flex items-center justify-center text-white font-black shadow-lg md:hidden">
                      {index + 1}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-10 border-l-4 border-blue-500 relative overflow-hidden mb-12"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
          />

          <div className="relative z-10">
            <h3 className="text-3xl font-black text-blue-900 mb-6 flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 shadow-xl">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              Tổng kết
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Qua {theme.timeline.length} mốc lịch sử quan trọng, chủ đề
              &ldquo;{theme.title}&rdquo; cho thấy sự phát triển liên tục và
              nhất quán trong tư duy của Đảng. Mỗi kỳ Đại hội đều kế thừa, phát
              triển và làm sâu sắc thêm những định hướng từ các kỳ trước, thể
              hiện tính kế thừa và sáng tạo trong xây dựng đất nước.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dong-chay-chu-de">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Khám phá chủ đề khác</span>
              </motion.button>
            </Link>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-red-50 transition-all inline-flex items-center gap-2"
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Về trang chủ</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
