"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { DaiHoiData } from "@/lib/data-loaders";

interface DaiHoiListClientProps {
  daiHoiList: DaiHoiData[];
}

export default function DaiHoiListClient({
  daiHoiList,
}: DaiHoiListClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-700 to-red-600 text-white py-20 px-4 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
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
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.3,
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

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors group"
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
              <span className="font-semibold">Quay lại trang chủ</span>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 relative inline-block"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-2xl">
                Các kỳ Đại hội
              </span>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute -top-8 -right-12 text-5xl"
              >
                ⭐
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-yellow-100 font-semibold mb-4"
            >
              Hành trình 35 năm Đổi Mới và Phát triển
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 w-48 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto rounded-full"
            />
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-red-50 to-transparent" />
      </section>

      {/* Main Content - Grid of Dai Hoi Cards */}
      <section className="container mx-auto max-w-7xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Khám phá {daiHoiList.length} kỳ Đại hội lịch sử
          </h2>
          <p className="text-gray-600 text-lg">
            Từ Đại hội VII (1991) đến Đại hội XIII (2021)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {daiHoiList.map((daiHoi, index) => (
            <motion.div
              key={daiHoi.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={`/dai-hoi/${daiHoi.id}`}>
                <div className="relative h-full">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-yellow-500 rounded-3xl p-[3px] opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="w-full h-full bg-white rounded-3xl" />
                  </div>

                  {/* Card content */}
                  <div className="relative bg-white rounded-3xl shadow-xl group-hover:shadow-2xl transition-all overflow-hidden h-full">
                    {/* Animated gradient overlay */}
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hero Image */}
                    {daiHoi.heroImage && (
                      <div className="relative h-48 overflow-hidden rounded-t-3xl">
                        <img
                          src={daiHoi.heroImage}
                          alt={daiHoi.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Badge on image */}
                        <div className="absolute top-4 left-4">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
                          >
                            <span className="text-yellow-300">★</span>
                            Đại hội {daiHoi.id}
                          </motion.div>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="relative p-6 space-y-4">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                        {daiHoi.title}
                      </h3>

                      {/* Meta info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-lg">📅</span>
                          <span className="font-medium">{daiHoi.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-lg">📍</span>
                          <span className="font-medium">{daiHoi.location}</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                      {/* Highlights preview */}
                      <div className="space-y-2">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide flex items-center gap-1">
                          <span>✨</span>
                          Điểm nổi bật
                        </p>
                        <ul className="space-y-1">
                          {daiHoi.contentHighlights
                            .slice(0, 2)
                            .map((highlight, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-700 flex items-start gap-2"
                              >
                                <span className="text-red-600 mt-0.5 flex-shrink-0">
                                  ▸
                                </span>
                                <span className="line-clamp-1">
                                  {highlight.title}
                                </span>
                              </li>
                            ))}
                          {daiHoi.contentHighlights.length > 2 && (
                            <li className="text-xs text-gray-500 italic ml-4">
                              +{daiHoi.contentHighlights.length - 2} nội dung
                              khác...
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 flex items-center justify-between">
                        <span className="text-red-600 font-bold text-sm group-hover:underline">
                          Xem chi tiết
                        </span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                          }}
                          className="text-red-600 text-xl font-bold"
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl shadow-2xl p-10 text-center text-white relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Kiểm tra kiến thức của bạn
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Tham gia câu đố về các kỳ Đại hội để hiểu rõ hơn về lịch sử
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quiz"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                📝 Tham gia câu đố
              </Link>
              <Link
                href="/forum"
                className="bg-red-800 text-white border-2 border-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                💬 Thảo luận tại diễn đàn
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
