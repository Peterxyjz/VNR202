"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 flex items-center justify-center px-4 py-12 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-red-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* 404 Illustration with Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.div
            className="text-[10rem] md:text-[12rem] font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 leading-none"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
            }}
          >
            404
          </motion.div>

          <div className="relative inline-block">
            <motion.svg
              className="w-48 h-48 mx-auto"
              viewBox="0 0 200 200"
              fill="none"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Lost Document Icon */}
              <motion.path
                d="M50 40 L50 160 L150 160 L150 70 L120 40 Z"
                stroke="#dc2626"
                strokeWidth="3"
                fill="#fee2e2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M120 40 L120 70 L150 70"
                stroke="#dc2626"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              {/* Question marks */}
              <motion.text
                x="100"
                y="110"
                fontSize="48"
                fill="#dc2626"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ?
              </motion.text>
              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={80 + i * 10}
                  cy={130}
                  r="2"
                  fill="#3b82f6"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.svg>
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 mb-6 border border-gray-100"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trang không tồn tại
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
            <br />
            Hãy thử một trong các tùy chọn bên dưới!
          </p>

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                href: "/",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                ),
                label: "Trang chủ",
                color: "red",
              },
              {
                href: "/forum",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                ),
                label: "Hỏi đáp",
                color: "green",
              },
              {
                href: "/quiz",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                ),
                label: "Quiz",
                color: "blue",
              },
              {
                href: "/gioi-thieu",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                label: "Giới thiệu",
                color: "purple",
              },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`block bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 hover:from-${item.color}-100 hover:to-${item.color}-200 border-2 border-${item.color}-200 rounded-xl p-6 transition-all shadow-md hover:shadow-xl`}
                >
                  <svg
                    className={`w-10 h-10 mx-auto mb-3 text-${item.color}-600`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                  <span className={`font-bold text-${item.color}-700`}>
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Về trang chủ
            </Link>

            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Liên hệ hỗ trợ
            </Link>
          </div>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-l-4 border-blue-500 shadow-lg"
        >
          <h3 className="font-bold text-blue-900 mb-4 text-xl flex items-center justify-center gap-2">
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
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Gợi ý cho bạn
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                text: "Xem các Đại hội từ VII đến XIII",
                href: "/dai-hoi",
                icon: "📚",
              },
              {
                text: "Làm Quiz để kiểm tra kiến thức",
                href: "/quiz",
                icon: "❓",
              },
              {
                text: "Khám phá Dòng chảy chủ đề",
                href: "/dong-chay-chu-de",
                icon: "🌊",
              },
              { text: "Tìm hiểu về dự án", href: "/gioi-thieu", icon: "ℹ️" },
              { text: "Đặt câu hỏi tại diễn đàn", href: "/forum", icon: "💬" },
              { text: "Xem hướng dẫn sử dụng", href: "/huong-dan", icon: "📖" },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition-colors bg-white/50 rounded-lg p-3 hover:bg-white group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.text}</span>
                  <svg
                    className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
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
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
