"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Chỉ hiện nút khi:
      // 1. Trang cao hơn viewport (document.body.scrollHeight > window.innerHeight)
      // 2. Đã scroll xuống ít nhất 300px
      const shouldShow =
        document.body.scrollHeight > window.innerHeight && window.scrollY > 300;
      setShowScrollTop(shouldShow);
    };

    // Check ngay khi mount
    handleScroll();

    // Listen scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Listen resize để cập nhật khi window resize
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const footerLinks = [
    {
      title: "Khám phá",
      links: [
        { href: "/", label: "Trang chủ" },
        { href: "/quiz", label: "Quiz" },
        { href: "/forum", label: "Hỏi đáp" },
        { href: "/gioi-thieu", label: "Giới thiệu" },
        { href: "/dong-chay-chu-de", label: "Dòng chảy Chủ đề" },
      ],
    },
    {
      title: "Đại hội",
      links: [
        { href: "/dai-hoi/VII", label: "Đại hội VII" },
        { href: "/dai-hoi/VIII", label: "Đại hội VIII" },
        { href: "/dai-hoi/IX", label: "Đại hội IX" },
        { href: "/dai-hoi/X", label: "Đại hội X" },
        { href: "/dai-hoi/XI", label: "Đại hội XI" },
        { href: "/dai-hoi/XII", label: "Đại hội XII" },
        { href: "/dai-hoi/XIII", label: "Đại hội XIII" },
      ],
    },
    {
      title: "Thông tin",
      links: [
        { href: "/gioi-thieu", label: "Về chúng tôi" },
        { href: "/lien-he", label: "Liên hệ" },
        { href: "/chinh-sach", label: "Chính sách" },
        { href: "/dieu-khoan", label: "Điều khoản" },
        { href: "/huong-dan", label: "Hướng dẫn" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Main Footer Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-1">
            <Link href="/" className="inline-block group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 mb-4"
              >
                <motion.span
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-3xl"
                >
                  ⭐
                </motion.span>
                <span className="text-xl font-bold text-white">
                  Hành trình
                  <br />
                  Đổi Mới
                </span>
              </motion.div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Khám phá lịch sử các kỳ Đại hội Đảng Cộng sản Việt Nam, từ Đổi Mới
              đến Công nghiệp hóa - Hiện đại hóa.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {["facebook", "p", "t", "u"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-red-600/20 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-sm capitalize">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
                {section.title}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-red-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-red-400 transition-colors inline-block group"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        → {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent my-8"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              ©
            </motion.span>
            <span>
              {currentYear} Hành trình Đổi Mới. Tất cả quyền được bảo lưu.
            </span>
          </div>

          <div className="flex gap-6">
            <Link
              href="/chinh-sach"
              className="hover:text-red-400 transition-colors"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/dieu-khoan"
              className="hover:text-red-400 transition-colors"
            >
              Điều khoản sử dụng
            </Link>
          </div>
        </motion.div>

        {/* Scroll to top button - chỉ hiện khi cần */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-8 right-8 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all z-40"
              initial={{ opacity: 0, y: 100, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
                  strokeWidth={2.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Animated wave effect at top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-16 -translate-y-full">
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(239, 68, 68, 0.1) 50px, rgba(239, 68, 68, 0.1) 100px)`,
          }}
        />
      </div>
    </footer>
  );
}
