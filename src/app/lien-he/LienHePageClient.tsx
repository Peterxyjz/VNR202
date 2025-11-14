"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LienHePageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      title: "Email",
      detail: "huylqse172573@fpt.edu.vn",
      link: "mailto:huylqse172573@fpt.edu.vn",
      color: "red",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      ),
      title: "Điện thoại",
      detail: "(+84) 3456 4869",
      link: "tel:+8434564869",
      color: "blue",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      ),
      title: "Địa chỉ",
      detail: "Thủ Đức, Tp. Hồ Chí Minh, Việt Nam",
      link: "#",
      color: "green",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      title: "Giờ làm việc",
      detail: "T2-T6: 8:00 - 17:00",
      link: "#",
      color: "purple",
    },
  ];

  const faqs = [
    {
      question: "Làm thế nào để tham gia diễn đàn?",
      answer:
        "Bạn có thể truy cập vào mục Hỏi đáp và đặt câu hỏi hoặc trả lời câu hỏi của người khác mà không cần đăng ký tài khoản.",
    },
    {
      question: "Tôi có thể đóng góp nội dung cho dự án không?",
      answer:
        "Có! Chúng tôi luôn chào đón các đóng góp từ cộng đồng. Vui lòng liên hệ qua email hoặc form bên dưới.",
    },
    {
      question: "Dữ liệu trong website có chính xác không?",
      answer:
        "Tất cả nội dung được tham khảo từ các nguồn chính thống và được kiểm duyệt kỹ lưỡng trước khi đăng tải.",
    },
    {
      question: "Tôi gặp lỗi kỹ thuật, phải làm sao?",
      answer:
        "Vui lòng mô tả chi tiết lỗi bạn gặp phải thông qua form liên hệ hoặc email. Chúng tôi sẽ hỗ trợ bạn trong thời gian sớm nhất.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-red-50 via-white to-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-linear-to-r from-red-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Liên hệ & Hỗ trợ
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe ý kiến đóng góp và hỗ trợ bạn
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all border-t-4 border-${method.color}-500`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 bg-${method.color}-100 rounded-full flex items-center justify-center`}
              >
                <svg
                  className={`w-8 h-8 text-${method.color}-600`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {method.icon}
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm">{method.detail}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Gửi tin nhắn
            </h2>
            <p className="text-gray-600 mb-6">
              Điền thông tin bên dưới và chúng tôi sẽ phản hồi sớm nhất có thể
            </p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Gửi thành công!
                </h3>
                <p className="text-green-700">
                  Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Họ và tên <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="text-gray-600 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="text-gray-600 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Chủ đề <span className="text-red-600">*</span>
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="text-gray-600 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="support">Hỗ trợ kỹ thuật</option>
                    <option value="feedback">Góp ý nội dung</option>
                    <option value="collaboration">Hợp tác</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nội dung <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="text-gray-600 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors resize-none"
                    placeholder="Nội dung tin nhắn của bạn..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-red-600 to-red-700 text-white py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Gửi tin nhắn
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Câu hỏi thường gặp
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-4 hover:bg-red-100 transition-colors"
                  >
                    <h3 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                      <span className="text-red-600 text-lg">Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-gray-700 ml-6 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Tài nguyên hữu ích</h3>
              <div className="space-y-3">
                {[
                  { label: "Hướng dẫn sử dụng", href: "/huong-dan" },
                  { label: "Chính sách bảo mật", href: "/chinh-sach" },
                  { label: "Điều khoản sử dụng", href: "/dieu-khoan" },
                  { label: "Giới thiệu dự án", href: "/gioi-thieu" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-3 transition-all group"
                  >
                    <span className="flex items-center justify-between">
                      <span>{link.label}</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Kết nối với chúng tôi
          </h2>
          <p className="text-gray-600 mb-6">
            Theo dõi chúng tôi trên các nền tảng mạng xã hội
          </p>
          <div className="flex justify-center gap-4">
            {[
              { name: "Facebook", color: "blue-600", icon: "f" },
              { name: "Twitter", color: "sky-500", icon: "𝕏" },
              { name: "YouTube", color: "red-600", icon: "▶" },
              { name: "LinkedIn", color: "blue-700", icon: "in" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-${social.color} text-white rounded-full flex items-center justify-center font-bold shadow-lg hover:shadow-xl transition-all`}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
