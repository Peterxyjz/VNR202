"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HuongDanPageClient() {
  const [activeGuide, setActiveGuide] = useState(0);

  const guides = [
    {
      id: "dai-hoi",
      title: "Xem nội dung Đại hội",
      icon: "📚",
      color: "red",
      description: "Tìm hiểu lịch sử các kỳ Đại hội từ VII đến XIII",
      steps: [
        {
          title: "Bước 1: Truy cập trang Đại hội",
          content:
            "Từ trang chủ, click vào menu 'Đại hội' hoặc chọn một trong các thẻ Đại hội được hiển thị.",
          image: "🏠",
        },
        {
          title: "Bước 2: Chọn Đại hội muốn xem",
          content:
            "Danh sách các Đại hội từ VII đến XIII sẽ hiển thị. Click vào Đại hội bạn muốn tìm hiểu.",
          image: "📋",
        },
        {
          title: "Bước 3: Khám phá nội dung",
          content:
            "Xem thông tin chi tiết bao gồm: Thời gian, địa điểm, ý nghĩa lịch sử, nội dung chính, hình ảnh và video tư liệu.",
          image: "📖",
        },
        {
          title: "Tips:",
          content:
            "Cuộn xuống để xem timeline tương tác và các sự kiện quan trọng theo thời gian.",
          image: "💡",
        },
      ],
      link: "/dai-hoi",
    },
    {
      id: "quiz",
      title: "Làm Quiz kiểm tra kiến thức",
      icon: "❓",
      color: "blue",
      description: "Trả lời câu hỏi trắc nghiệm và kiểm tra hiểu biết của bạn",
      steps: [
        {
          title: "Bước 1: Chọn Quiz",
          content:
            "Vào menu 'Quiz' và chọn bộ quiz theo Đại hội bạn muốn kiểm tra.",
          image: "🎯",
        },
        {
          title: "Bước 2: Xem Mind Map (tùy chọn)",
          content:
            "Trước khi làm quiz, bạn có thể xem Mind Map để tổng quan kiến thức hoặc xem phần tóm tắt.",
          image: "🗺️",
        },
        {
          title: "Bước 3: Bắt đầu Quiz",
          content:
            "Click 'Bắt đầu Quiz'. Đọc kỹ câu hỏi và chọn đáp án bạn cho là đúng.",
          image: "▶️",
        },
        {
          title: "Bước 4: Xem kết quả",
          content:
            "Sau mỗi câu trả lời, bạn sẽ biết ngay đúng/sai và xem giải thích chi tiết. Cuối cùng xem tổng điểm của bạn.",
          image: "🏆",
        },
        {
          title: "Tips:",
          content:
            "Đọc kỹ giải thích sau mỗi câu để hiểu sâu hơn về nội dung lịch sử.",
          image: "💡",
        },
      ],
      link: "/quiz",
    },
    {
      id: "forum",
      title: "Tham gia Hỏi đáp",
      icon: "💬",
      color: "green",
      description: "Đặt câu hỏi và thảo luận với cộng đồng",
      steps: [
        {
          title: "Bước 1: Truy cập Diễn đàn",
          content:
            "Click vào menu 'Hỏi đáp' để xem danh sách các câu hỏi và thảo luận.",
          image: "🏛️",
        },
        {
          title: "Bước 2: Tìm kiếm hoặc lọc câu hỏi",
          content:
            "Sử dụng thanh tìm kiếm hoặc bộ lọc theo Đại hội để tìm câu hỏi bạn quan tâm.",
          image: "🔍",
        },
        {
          title: "Bước 3: Đặt câu hỏi mới",
          content:
            "Click 'Đặt câu hỏi', điền tiêu đề, nội dung chi tiết, chọn Đại hội liên quan và gửi đi.",
          image: "✍️",
        },
        {
          title: "Bước 4: Trả lời câu hỏi",
          content:
            "Click vào câu hỏi bạn muốn trả lời, viết câu trả lời và gửi. Bạn cũng có thể thả reaction.",
          image: "💬",
        },
        {
          title: "Tips:",
          content:
            "Viết câu hỏi rõ ràng, chi tiết để nhận được câu trả lời tốt nhất từ cộng đồng.",
          image: "💡",
        },
      ],
      link: "/forum",
    },
    {
      id: "themes",
      title: "Khám phá Dòng chảy Chủ đề",
      icon: "🌊",
      color: "purple",
      description: "Theo dõi sự phát triển của các chủ đề xuyên suốt các Đại hội",
      steps: [
        {
          title: "Bước 1: Vào mục Dòng chảy Chủ đề",
          content:
            "Click vào menu 'Dòng chảy Chủ đề' để xem danh sách các chủ đề chính.",
          image: "🏷️",
        },
        {
          title: "Bước 2: Chọn chủ đề quan tâm",
          content:
            "Các chủ đề như Kinh tế, Chính trị, Xã hội, Công nghệ... Click vào chủ đề bạn muốn khám phá.",
          image: "📌",
        },
        {
          title: "Bước 3: Xem Timeline",
          content:
            "Timeline hiển thị sự phát triển của chủ đề qua các kỳ Đại hội, từ VII đến XIII.",
          image: "⏳",
        },
        {
          title: "Bước 4: So sánh và phân tích",
          content:
            "Xem các trích dẫn và nội dung chính từ mỗi kỳ Đại hội để hiểu sự thay đổi theo thời gian.",
          image: "📊",
        },
        {
          title: "Tips:",
          content:
            "Sử dụng tính năng này để hiểu sâu về sự phát triển liên tục của các chính sách.",
          image: "💡",
        },
      ],
      link: "/dong-chay-chu-de",
    },
    {
      id: "chatbot",
      title: "Sử dụng AI Chatbot",
      icon: "🤖",
      color: "indigo",
      description: "Trò chuyện với AI để tìm hiểu thông tin nhanh chóng",
      steps: [
        {
          title: "Bước 1: Mở Chatbot",
          content:
            "Tìm biểu tượng chat (thường ở góc dưới bên trái màn hình) và click để mở chatbot.",
          image: "💬",
        },
        {
          title: "Bước 2: Chọn câu hỏi gợi ý hoặc tự đặt câu hỏi",
          content:
            "Bạn có thể chọn một trong các câu hỏi gợi ý hoặc tự nhập câu hỏi của mình.",
          image: "❓",
        },
        {
          title: "Bước 3: Nhận câu trả lời",
          content:
            "AI sẽ phân tích và trả lời dựa trên cơ sở dữ liệu về các kỳ Đại hội. Thời gian phản hồi thường rất nhanh.",
          image: "⚡",
        },
        {
          title: "Bước 4: Tiếp tục hội thoại",
          content:
            "Bạn có thể đặt câu hỏi tiếp theo để tìm hiểu sâu hơn. Click 'Xóa lịch sử' nếu muốn bắt đầu cuộc trò chuyện mới.",
          image: "🔄",
        },
        {
          title: "Tips:",
          content:
            "Đặt câu hỏi cụ thể để nhận câu trả lời chính xác hơn. VD: 'Đại hội VII có ý nghĩa gì?'",
          image: "💡",
        },
      ],
      link: "/",
    },
  ];

  const faqs = [
    {
      question: "Tôi có cần đăng ký tài khoản không?",
      answer:
        "Không! Hầu hết các tính năng đều miễn phí và không cần đăng ký. Bạn có thể xem nội dung, làm quiz, và tham gia diễn đàn mà không cần tạo tài khoản.",
    },
    {
      question: "Website có hoạt động trên điện thoại không?",
      answer:
        "Có! Website được thiết kế responsive, hoạt động tốt trên mọi thiết bị: máy tính, tablet, và điện thoại di động.",
    },
    {
      question: "Làm sao để tìm kiếm thông tin nhanh?",
      answer:
        "Bạn có thể sử dụng AI Chatbot để hỏi trực tiếp, hoặc dùng tính năng tìm kiếm trong Diễn đàn và các trang nội dung.",
    },
    {
      question: "Điểm quiz có được lưu lại không?",
      answer:
        "Hiện tại điểm quiz chỉ hiển thị sau khi bạn hoàn thành, không được lưu vĩnh viễn. Bạn có thể làm lại quiz bất cứ lúc nào.",
    },
    {
      question: "Tôi muốn đóng góp nội dung, làm thế nào?",
      answer:
        "Tuyệt vời! Vui lòng liên hệ với chúng tôi qua trang Liên hệ để thảo luận về nội dung bạn muốn đóng góp.",
    },
  ];

  const quickLinks = [
    { label: "Trang chủ", href: "/", icon: "🏠" },
    { label: "Đại hội", href: "/dai-hoi", icon: "📚" },
    { label: "Quiz", href: "/quiz", icon: "❓" },
    { label: "Hỏi đáp", href: "/forum", icon: "💬" },
    { label: "Dòng chảy Chủ đề", href: "/dong-chay-chu-de", icon: "🌊" },
    { label: "Giới thiệu", href: "/gioi-thieu", icon: "ℹ️" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Hướng dẫn & Trợ giúp
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Hướng dẫn Sử dụng
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Tìm hiểu cách sử dụng các tính năng của website một cách hiệu quả
          </p>
        </motion.div>

        {/* Guide Selection Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-xl p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {guides.map((guide, index) => (
                <motion.button
                  key={guide.id}
                  onClick={() => setActiveGuide(index)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`p-4 rounded-xl transition-all ${
                    activeGuide === index
                      ? `bg-linear-to-br from-${guide.color}-500 to-${guide.color}-600 text-white shadow-lg`
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <div className="text-3xl mb-2">{guide.icon}</div>
                  <div className="font-bold text-sm">{guide.title}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Active Guide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGuide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Guide Header */}
              <div
                className={`bg-linear-to-r from-${guides[activeGuide].color}-500 to-${guides[activeGuide].color}-600 p-8 text-white`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-6xl">{guides[activeGuide].icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {guides[activeGuide].title}
                    </h2>
                    <p className="text-lg opacity-90">
                      {guides[activeGuide].description}
                    </p>
                  </div>
                </div>
                <Link
                  href={guides[activeGuide].link}
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Đi đến trang này
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>

              {/* Guide Steps */}
              <div className="p-8">
                <div className="space-y-6">
                  {guides[activeGuide].steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 bg-${guides[activeGuide].color}-100 rounded-full flex items-center justify-center text-3xl`}
                        >
                          {step.image}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-bold mb-2 text-${guides[activeGuide].color}-700`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {step.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Liên kết nhanh
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link
                  href={link.href}
                  className="block bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
                >
                  <div className="text-4xl mb-3">{link.icon}</div>
                  <div className="font-bold text-gray-700">{link.label}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Câu hỏi thường gặp
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="border-l-4 border-indigo-500 bg-indigo-50 rounded-r-xl p-6 hover:bg-indigo-100 transition-colors"
                >
                  <h3 className="font-bold text-gray-800 mb-3 text-lg flex items-start gap-3">
                    <span className="text-indigo-600 text-2xl flex-shrink-0">
                      Q:
                    </span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-700 ml-9 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Help CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white text-center"
        >
          <div className="text-6xl mb-4">🤝</div>
          <h2 className="text-3xl font-bold mb-4">
            Vẫn cần hỗ trợ thêm?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Đừng ngại liên hệ với chúng tôi. Chúng tôi luôn sẵn sàng giúp đỡ!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
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
            <Link
              href="/forum"
              className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all"
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Hỏi cộng đồng
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
