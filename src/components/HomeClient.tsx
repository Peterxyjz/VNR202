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
      <section className="relative h-[93vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-red-900 via-red-700 to-yellow-600">
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
                className="text-6xl md:text-8xl lg:text-9xl font-black relative"
                style={{
                  textShadow:
                    "3px 3px 12px rgba(0,0,0,0.5), 0 0 60px rgba(255,237,88,0.4)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative inline-block"
                >
                  <motion.span
                    className="block text-yellow-300 mb-2"
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
                  >
                    35 NĂM
                  </motion.span>
                  {/* Decorative stars around number */}
                  <motion.span
                    className="absolute -left-8 top-0 text-yellow-400 text-3xl"
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ★
                  </motion.span>
                  <motion.span
                    className="absolute -right-8 top-0 text-yellow-400 text-3xl"
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
                  className="block text-white leading-none tracking-wider"
                  style={{
                    fontFamily:
                      "'Poppins', 'Inter', 'Noto Sans', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 900,
                    letterSpacing: "0.15em",
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
            <motion.div
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
            </motion.div>

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

      {/* Timeline Section - Vertical */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative"
          >
            {/* Decorative background */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 -z-10 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="w-96 h-96 bg-gradient-to-br from-red-200 to-yellow-200 rounded-full blur-3xl"
              />
            </motion.div>

            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-6 relative inline-block"
            >
              <span className="bg-gradient-to-r from-red-700 via-red-600 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                Dòng chảy Đổi Mới
              </span>
              {/* Decorative stars */}
              <motion.span
                animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-8 text-3xl"
              >
                ⭐
              </motion.span>
              <motion.span
                animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-2 -left-8 text-2xl"
              >
                ✨
              </motion.span>
            </motion.h2>

            {/* Enhanced divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-2 w-48 mx-auto mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full" />
              <motion.div
                animate={{
                  x: [-200, 200],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-700 font-semibold max-w-2xl mx-auto"
            >
              Lịch sử phát triển qua các kỳ Đại hội từ VII đến XIII
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm text-gray-500 mt-2"
            >
              Khám phá những bước tiến lịch sử đưa đất nước vươn lên
            </motion.p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Central timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5 }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-300 via-red-500 to-red-300 origin-top"
            />

            {/* Timeline items */}
            <div className="space-y-12">
              {daiHoiList.map((daiHoi, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={daiHoi.id}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-row`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-8 h-8 -ml-4 z-10">
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className="w-full h-full rounded-full bg-red-600 border-4 border-white shadow-lg flex items-center justify-center"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                          className="absolute inset-0 rounded-full bg-red-400"
                        />
                        <span className="text-white text-xs font-bold relative z-10">
                          {daiHoi.id}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                        isEven ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <Link href={`/dai-hoi/${daiHoi.id}`}>
                        <motion.div
                          whileHover={{ scale: 1.03, y: -8 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="relative overflow-hidden group"
                        >
                          {/* Gradient border effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-yellow-500 rounded-2xl p-[2px]">
                            <div className="w-full h-full bg-white rounded-2xl" />
                          </div>

                          {/* Main content */}
                          <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300">
                            {/* Animated gradient overlay on hover */}
                            <motion.div className="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                            {/* Vietnamese pattern corner */}
                            <div
                              className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity"
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5l3 9h10l-8 6 3 9-8-6-8 6 3-9-8-6h10z' fill='%23dc2626'/%3E%3C/svg%3E")`,
                                backgroundSize: "40px 40px",
                              }}
                            />

                            {/* Badge */}
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                              <motion.span
                                whileHover={{ scale: 1.05 }}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg group-hover:shadow-xl transition-shadow"
                              >
                                <span className="text-yellow-300">★</span>
                                Đại hội {daiHoi.id}
                              </motion.span>
                              <motion.span
                                className="text-2xl"
                                animate={{ rotate: [0, 360] }}
                                transition={{
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              >
                                ⭐
                              </motion.span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors relative z-10">
                              {daiHoi.title}
                            </h3>

                            {/* Time & Location */}
                            <div className="space-y-3 mb-5 relative z-10">
                              <motion.div
                                whileHover={{ x: 3 }}
                                className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 rounded-lg p-3"
                              >
                                <span className="text-xl">📅</span>
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="font-bold text-red-600">
                                    Thời gian:
                                  </span>
                                  <span className="font-medium">
                                    {daiHoi.time}
                                  </span>
                                </div>
                              </motion.div>
                              <motion.div
                                whileHover={{ x: 3 }}
                                className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 rounded-lg p-3"
                              >
                                <span className="text-xl">📍</span>
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="font-bold text-red-600">
                                    Địa điểm:
                                  </span>
                                  <span className="font-medium">
                                    {daiHoi.location}
                                  </span>
                                </div>
                              </motion.div>
                            </div>

                            {/* Highlights */}
                            <div className="border-t-2 border-gradient-to-r from-transparent via-gray-200 to-transparent pt-5 relative z-10">
                              <p className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="text-xl">✨</span>
                                <span className="text-red-600">
                                  Điểm nổi bật:
                                </span>
                              </p>
                              <ul className="space-y-2">
                                {daiHoi.contentHighlights
                                  .slice(0, 2)
                                  .map((highlight, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -10 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="text-sm text-gray-700 flex items-start gap-3 bg-gradient-to-r from-red-50 to-transparent p-2 rounded-lg"
                                    >
                                      <span className="text-red-600 font-bold mt-0.5">
                                        ▸
                                      </span>
                                      <span className="flex-1">
                                        {highlight.title}
                                      </span>
                                    </motion.li>
                                  ))}
                              </ul>
                            </div>

                            {/* Arrow indicator */}
                            <div className="mt-5 flex items-center justify-end gap-2 text-red-600 font-bold text-sm relative z-10">
                              <span className="group-hover:underline">
                                Xem chi tiết
                              </span>
                              <motion.span
                                animate={{ x: [0, 8, 0] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  repeatDelay: 0.5,
                                }}
                                className="text-lg"
                              >
                                →
                              </motion.span>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </div>

                    {/* Empty space for alternating layout on desktop */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                );
              })}
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
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
              transition={{ delay: 0.4 }}
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
