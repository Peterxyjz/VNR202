"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Theme {
  slug: string;
  title: string;
  description: string;
  timeline: Array<{
    daiHoiId: string;
    time: string;
    snippet: string;
  }>;
}

interface DongChayChuDeClientProps {
  themes: Theme[];
}

export default function DongChayChuDeClient({
  themes,
}: DongChayChuDeClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-200 rounded-full blur-3xl opacity-30 -z-10" />

          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
              <svg
                className="w-12 h-12 text-white"
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

          <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-yellow-600 mb-6 leading-tight">
            Dòng chảy Chủ đề
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Khám phá sự phát triển liên tục của các chủ đề quan trọng xuyên suốt
            các kỳ Đại hội Đảng. Mỗi chủ đề là một &ldquo;dòng chảy&rdquo; tư
            tưởng, chính sách, định hướng được thể hiện qua các giai đoạn lịch
            sử.
          </p>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors font-semibold group"
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
            <span className="group-hover:underline">Quay lại trang chủ</span>
          </Link>
        </motion.div>

        {/* Themes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {themes.map((theme, index) => (
            <motion.div key={theme.slug} variants={itemVariants}>
              <Link href={`/dong-chay-chu-de/${theme.slug}`} className="group">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col border-2 border-transparent hover:border-red-400 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500 to-yellow-500 rounded-bl-full opacity-10" />

                  {/* Icon Circle with animation */}
                  <div className="relative mb-6 z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-br from-red-500 via-red-600 to-yellow-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform"
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-2xl md:text-3xl font-black text-gray-800 mb-4 group-hover:text-red-600 transition-colors leading-tight">
                    {theme.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-gray-600 leading-relaxed mb-6 flex-grow">
                    {theme.description}
                  </p>

                  {/* Timeline Info */}
                  <div className="relative z-10 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-5 h-5 text-red-600"
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
                        </div>
                        <span className="font-semibold text-gray-700">
                          {theme.timeline.length} mốc lịch sử
                        </span>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        className="text-red-600 font-black text-2xl"
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 border-l-4 border-blue-500 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 -z-0" />

          <div className="relative z-10">
            <h3 className="font-black text-2xl text-blue-900 mb-4 flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              Về Dòng chảy Chủ đề
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg pl-16">
              Mỗi &ldquo;Dòng chảy&rdquo; thể hiện sự phát triển liên tục của
              một chủ đề quan trọng qua các kỳ Đại hội. Bạn sẽ thấy được sự kế
              thừa, phát triển và đổi mới tư duy của Đảng qua từng giai đoạn
              lịch sử. Chọn một chủ đề để khám phá chi tiết hành trình phát
              triển của nó qua thời gian.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
