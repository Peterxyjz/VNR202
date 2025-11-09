"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { DaiHoiData } from "@/lib/data-loaders";
import MarkdownContent from "@/components/MarkdownContent";

interface DaiHoiDetailClientProps {
  daiHoi: DaiHoiData;
  allDaiHoiIds: string[];
}

export default function DaiHoiDetailClient({
  daiHoi,
  allDaiHoiIds,
}: DaiHoiDetailClientProps) {
  // Find previous and next dai hoi for navigation
  const currentIndex = allDaiHoiIds.indexOf(daiHoi.id);
  const prevId = currentIndex > 0 ? allDaiHoiIds[currentIndex - 1] : null;
  const nextId =
    currentIndex < allDaiHoiIds.length - 1
      ? allDaiHoiIds[currentIndex + 1]
      : null;

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
          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-8"
          >
            <Link
              href="/dai-hoi"
              className="inline-flex items-center text-white/90 hover:text-white transition-colors group"
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
              <span className="font-semibold">Tất cả đại hội</span>
            </Link>

            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Trang chủ
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white text-red-600 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg"
          >
            <span className="text-yellow-500">★</span>
            Đại hội {daiHoi.id}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            style={{
              textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            {daiHoi.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 text-lg"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-2xl">📅</span>
              <span className="font-semibold">{daiHoi.time}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-2xl">📍</span>
              <span className="font-semibold">{daiHoi.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-red-50 to-transparent" />
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Context Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-12 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-800">
              Bối cảnh lịch sử
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-red-200 to-transparent rounded-full" />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-600">
            <div className="space-y-4">
              {daiHoi.context.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 text-justify text-lg"
                >
                  <MarkdownContent content={paragraph} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Content Highlights Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-12 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-800">
              Nội dung nổi bật
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-red-200 to-transparent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {daiHoi.contentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl p-[2px]">
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>

                {/* Content */}
                <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow p-6 h-full">
                  {/* Number badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>

                  <div className="mt-3">
                    <h3 className="text-xl font-bold text-red-700 mb-3 group-hover:text-red-600 transition-colors">
                      {highlight.title}
                    </h3>
                    <div className="text-gray-700">
                      <MarkdownContent content={highlight.description} />
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-4 right-4 text-red-200 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">
                    ✨
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Full Content Summary Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-12 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-800">
              Nội dung chính
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-red-200 to-transparent rounded-full" />
          </div>

          <div className="bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
            <div className="space-y-4">
              {daiHoi.fullContentSummary.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 text-justify text-lg"
                >
                  <MarkdownContent content={paragraph} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Significance Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-12 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-800">
              Ý nghĩa lịch sử
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-red-200 to-transparent rounded-full" />
          </div>

          <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-2xl p-8 text-white overflow-hidden">
            {/* Decorative pattern */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"
            />

            <div className="relative z-10 space-y-4">
              {daiHoi.significance.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-yellow-50 text-justify text-lg font-medium"
                >
                  <MarkdownContent content={paragraph} className="text-yellow-50" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Media Section */}
        {daiHoi.media && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-12 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-800">
                Tư liệu hình ảnh & video
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-red-200 to-transparent rounded-full" />
            </div>

            {/* Video */}
            {daiHoi.media.videoUrl && (
              <div className="mb-8 bg-white rounded-2xl shadow-xl p-6">
                <video
                  controls
                  className="w-full rounded-lg"
                  poster={daiHoi.heroImage}
                >
                  <source src={daiHoi.media.videoUrl} type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ video.
                </video>

                <div className="mt-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  Nếu video không phát được, bạn có thể{" "}
                  <a
                    href={daiHoi.media.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 underline font-semibold"
                  >
                    mở video trong tab mới
                  </a>
                </div>
              </div>
            )}

            {/* Images Gallery */}
            {daiHoi.media.images && daiHoi.media.images.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {daiHoi.media.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <p className="p-4 text-sm text-gray-600 italic border-t">
                      {image.caption}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Navigation Between Dai Hoi */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Previous Dai Hoi */}
            {prevId ? (
              <Link href={`/dai-hoi/${prevId}`}>
                <motion.div
                  whileHover={{ scale: 1.03, x: -5 }}
                  className="bg-gradient-to-r from-gray-100 to-white rounded-2xl shadow-lg hover:shadow-xl p-6 border-2 border-gray-200 hover:border-red-400 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">←</div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        Đại hội trước
                      </p>
                      <p className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                        Đại hội {prevId}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                <p className="text-sm font-semibold"></p>
              </div>
            )}

            {/* Next Dai Hoi */}
            {nextId ? (
              <Link href={`/dai-hoi/${nextId}`}>
                <motion.div
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-lg hover:shadow-xl p-6 border-2 border-gray-200 hover:border-red-400 transition-all group"
                >
                  <div className="flex items-center gap-4 justify-end">
                    <div className="text-right">
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        Đại hội tiếp theo
                      </p>
                      <p className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                        Đại hội {nextId}
                      </p>
                    </div>
                    <div className="text-3xl">→</div>
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                <p className="text-sm font-semibold"></p>
              </div>
            )}
          </div>
        </motion.section>

        {/* CTA to Quiz */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
            {/* Animated background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-transparent"
            />

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="text-6xl mb-4"
              >
                📝
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Kiểm tra kiến thức của bạn
              </h3>
              <p className="text-xl mb-8 text-red-100">
                Tham gia câu đố về Đại hội {daiHoi.id} để hiểu rõ hơn
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href={`/quiz/${daiHoi.id}`}
                  className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  <span>Tham gia câu đố ngay</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/forum"
                  className="bg-red-900 text-white border-2 border-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  <span>💬</span>
                  <span>Thảo luận tại diễn đàn</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
