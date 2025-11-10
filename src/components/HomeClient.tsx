"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { DaiHoiData } from "../lib/data-loaders";

interface HomeClientProps {
  daiHoiList: DaiHoiData[];
}

export default function HomeClient({ daiHoiList }: HomeClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-red-900 via-red-700 to-yellow-600 -mt-16 pt-16">
        {/* Animated Vietnamese star pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                rotate: 0,
                scale: 0.5 + Math.random() * 0.5,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: 360,
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <svg width="40" height="40" viewBox="0 0 100 100">
                <path
                  d="M50 10 L61 39 L92 39 L67 57 L78 86 L50 68 L22 86 L33 57 L8 39 L39 39 Z"
                  fill="#fef08a"
                  opacity="0.6"
                />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Rays of light */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-full origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255, 237, 88, 0.3), transparent)",
                transform: `rotate(${i * 45}deg)`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Vietnamese silk wave pattern */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 50 20, 100 50 T 200 50 L 200 100 L 0 100 Z' fill='%23dc2626' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 100px",
            backgroundRepeat: "repeat-x",
          }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main hero text */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 relative"
            >
              {/* Glow effect behind text */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 blur-3xl bg-yellow-400/30"
              />

              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black relative space-y-4"
                style={{
                  textShadow:
                    "3px 3px 12px rgba(0,0,0,0.5), 0 0 60px rgba(255,237,88,0.4)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <motion.span
                    className="block text-yellow-300 mb-6 md:mb-8"
                    animate={{
                      textShadow: [
                        "3px 3px 12px rgba(0,0,0,0.5)",
                        "3px 3px 20px rgba(255,237,88,0.8)",
                        "3px 3px 12px rgba(0,0,0,0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    style={{
                      lineHeight: "1.2",
                    }}
                  >
                    35 NĂM
                  </motion.span>
                  {/* Decorative stars around number */}
                  <motion.span
                    className="absolute -left-6 md:-left-8 top-0 text-yellow-400 text-2xl md:text-3xl"
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ★
                  </motion.span>
                  <motion.span
                    className="absolute -right-6 md:-right-8 top-0 text-yellow-400 text-2xl md:text-3xl"
                    animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  >
                    ★
                  </motion.span>
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block text-white mt-4 md:mt-6"
                  style={{
                    fontFamily:
                      "'Poppins', 'Inter', 'Noto Sans', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 900,
                    letterSpacing: "0.15em",
                    lineHeight: "1.2",
                  }}
                >
                  ĐỔI MỚI
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="relative mt-8"
              >
                {/* Decorative Vietnamese pattern */}
                <motion.div
                  className="flex items-center justify-center gap-4 mb-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <motion.div
                    className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-yellow-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.svg
                    width="30"
                    height="30"
                    viewBox="0 0 100 100"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <path
                      d="M50 10 L61 39 L92 39 L67 57 L78 86 L50 68 L22 86 L33 57 L8 39 L39 39 Z"
                      fill="#fef08a"
                    />
                  </motion.svg>
                  <motion.div
                    className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-400 to-yellow-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>

                <motion.h2
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-100"
                  initial={{ letterSpacing: "0.5em", opacity: 0 }}
                  animate={{ letterSpacing: "0.1em", opacity: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  HÀNH TRÌNH XÂY DỰNG
                </motion.h2>
                <motion.h2
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-100 mt-2"
                  initial={{ letterSpacing: "0.5em", opacity: 0 }}
                  animate={{ letterSpacing: "0.1em", opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  ĐẤT NƯỚC
                </motion.h2>
              </motion.div>
            </motion.div>

            {/* Subtitle with animation */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="max-w-3xl mx-auto mb-12 px-4"
            >
              <motion.p
                className="text-xl md:text-2xl text-yellow-50 font-medium leading-relaxed"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                Khám phá lịch sử các kỳ Đại hội Đảng Cộng sản Việt Nam
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-yellow-100/80 mt-2"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                Từ Đổi Mới đến Công nghiệp hóa - Hiện đại hóa
              </motion.p>
            </motion.div> */}

            {/* Large Vietnamese star emblem */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1.2,
                delay: 1.6,
                type: "spring",
                stiffness: 200,
              }}
              className="inline-block relative"
            >
              {/* Glow rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 1.5 + i * 0.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                  }}
                >
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 100 100"
                    className="drop-shadow-2xl"
                  >
                    <path
                      d="M50 10 L61 39 L92 39 L67 57 L78 86 L50 68 L22 86 L33 57 L8 39 L39 39 Z"
                      fill="none"
                      stroke="#fef08a"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
              ))}

              {/* Main star */}
              <motion.svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                className="drop-shadow-2xl relative z-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <defs>
                  <radialGradient id="starGradient">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#fde047" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </radialGradient>
                </defs>
                <motion.path
                  d="M50 10 L61 39 L92 39 L67 57 L78 86 L50 68 L22 86 L33 57 L8 39 L39 39 Z"
                  fill="url(#starGradient)"
                  stroke="#fde047"
                  strokeWidth="3"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-yellow-200"
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section - Horizontal */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-4"
            >
              <span className="bg-gradient-to-r from-red-700 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Dòng chảy Đổi Mới
              </span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 w-32 mx-auto mb-6 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-700 font-medium"
            >
              Tiếp tục công cuộc đổi mới, đẩy mạnh công nghiệp hoá, hiện đại
              hoá và hội nhập quốc tế
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm text-gray-500 mt-2"
            >
              (từ năm 1996 đến nay)
            </motion.p>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative py-12">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-red-300 via-red-500 to-red-300 origin-left"
            />

            {/* Timeline items */}
            <div className="relative flex justify-between items-start">
              {daiHoiList.map((daiHoi, index) => (
                <motion.div
                  key={daiHoi.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center flex-1"
                >
                  {/* Timeline dot */}
                  <Link href={`/dai-hoi/${daiHoi.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-yellow-500 border-4 border-white shadow-lg flex items-center justify-center cursor-pointer group mb-4"
                    >
                      <span className="text-white text-sm font-bold">
                        {daiHoi.id}
                      </span>
                      {/* Pulse effect */}
                      <motion.div
                        initial={{ scale: 1, opacity: 0 }}
                        whileHover={{ scale: 1.8, opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 rounded-full bg-red-400"
                      />
                    </motion.div>
                  </Link>

                  {/* Content */}
                  <Link href={`/dai-hoi/${daiHoi.id}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="text-center group cursor-pointer px-2"
                    >
                      <p className="text-xs text-gray-500 mb-2 font-medium">
                        {daiHoi.time}
                      </p>
                      <h3 className="text-sm font-bold text-gray-800 group-hover:text-red-600 transition-colors leading-tight">
                        {daiHoi.title}
                      </h3>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-4 text-center bg-gradient-to-br from-red-50 via-white to-yellow-50 overflow-hidden">
        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-8 border-red-600 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-yellow-500 rounded-full"
          />
        </div>

        {/* Floating stars */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {i % 2 === 0 ? "⭐" : "✨"}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.h2 className="text-4xl md:text-6xl font-black mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-red-700 via-red-600 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                Khám phá thêm
              </span>
              <motion.span
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute -top-6 -right-10 text-4xl"
              >
                🔥
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 font-semibold mb-3 max-w-2xl mx-auto"
          >
            Kiểm tra kiến thức của bạn hoặc tham gia thảo luận cùng cộng đồng
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 mb-12 max-w-xl mx-auto"
          >
            Hãy cùng nhau tìm hiểu sâu hơn về lịch sử vẻ vang của Đảng
          </motion.p>

          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/dong-chay-chu-de"
                className="group relative inline-block overflow-hidden rounded-2xl shadow-2xl"
              >
                {/* Animated gradient background */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600 bg-[length:200%_100%]"
                />

                {/* Shimmer effect */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />

                <div className="relative px-10 py-5 flex items-center gap-3">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-3xl"
                  >
                    ⚡
                  </motion.span>
                  <div className="text-left">
                    <div className="text-white font-black text-xl tracking-wide">
                      Dòng chảy Chủ đề
                    </div>
                    <div className="text-yellow-100 text-xs font-medium">
                      Xem sự phát triển qua các kỳ
                    </div>
                  </div>
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                    className="text-white text-2xl font-bold ml-2"
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/quiz"
                className="group relative inline-block overflow-hidden rounded-2xl shadow-2xl"
              >
                {/* Animated gradient background */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%_100%]"
                />

                {/* Shimmer effect */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />

                <div className="relative px-10 py-5 flex items-center gap-3">
                  <span className="text-3xl">📝</span>
                  <div className="text-left">
                    <div className="text-white font-black text-xl tracking-wide">
                      Câu đố
                    </div>
                    <div className="text-red-100 text-xs font-medium">
                      Kiểm tra kiến thức ngay
                    </div>
                  </div>
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                    className="text-white text-2xl font-bold ml-2"
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/forum"
                className="group relative inline-block overflow-hidden rounded-2xl shadow-2xl border-4 border-red-600"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-white" />
                <motion.div className="absolute inset-0 bg-gradient-to-br from-red-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Shimmer effect */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: 0.5,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-red-200/30 to-transparent skew-x-12"
                />

                <div className="relative px-10 py-5 flex items-center gap-3">
                  <span className="text-3xl">💬</span>
                  <div className="text-left">
                    <div className="text-red-600 font-black text-xl tracking-wide">
                      Tham gia diễn đàn
                    </div>
                    <div className="text-red-500 text-xs font-medium">
                      Thảo luận cùng cộng đồng
                    </div>
                  </div>
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                    className="text-red-600 text-2xl font-bold ml-2"
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Stats or Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto"
          >
            {[
              {
                icon: "📚",
                number: "7+",
                label: "Đại hội lịch sử",
                color: "from-red-500 to-red-600",
              },
              {
                icon: "❓",
                number: "70+",
                label: "Câu đố",
                color: "from-yellow-500 to-yellow-600",
              },
              {
                icon: "👥",
                number: "10+",
                label: "Thảo luận",
                color: "from-orange-500 to-orange-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                {/* Gradient border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>

                {/* Content */}
                <div className="relative bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-shadow">
                  {/* Icon with glow */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl mb-4 inline-block"
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Number with counter animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <div className="text-gray-700 font-bold text-lg">
                    {stat.label}
                  </div>

                  {/* Animated underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className={`h-1 bg-gradient-to-r ${stat.color} mt-3 rounded-full origin-left`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
