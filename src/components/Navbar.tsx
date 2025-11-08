"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const isHomePage = pathname === "/";

  const navItems = [
    { href: "/", label: "Trang chủ" },
    { href: "/dai-hoi", label: "Đại hội" },
    { href: "/dong-chay-chu-de", label: "Chủ đề" },
    { href: "/quiz", label: "Câu đố" },
    { href: "/forum", label: "Diễn đàn" },
    { href: "/gioi-thieu", label: "Giới thiệu" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`text-white shadow-xl sticky top-0 z-50 backdrop-blur-sm ${
        isHomePage
          ? "bg-red-700/80"
          : "bg-gradient-to-r from-red-700 via-red-600 to-red-700"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with animation */}
          <Link href="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold flex items-center gap-2"
            >
              <motion.span
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-2xl"
              >
                ⭐
              </motion.span>
              <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                Hành trình Đổi Mới
              </span>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2"
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.span
                    className={`relative z-10 font-medium transition-colors ${
                      isActive ? "text-white" : "text-red-100"
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/20 rounded-lg"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover effect */}
                  {hoveredItem === item.href && !isActive && (
                    <motion.div
                      layoutId="hoverTab"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom accent line with animation */}
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.nav>
  );
}
