"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DieuKhoanPageClient() {
  const sections = [
    {
      title: "1. Chấp nhận điều khoản",
      icon: "✅",
      content:
        "Bằng việc truy cập và sử dụng website Hành trình Đổi Mới (vnr202.edu.vn), bạn đồng ý tuân thủ và bị ràng buộc bởi các điều khoản và điều kiện sử dụng dưới đây. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng website của chúng tôi.",
      points: [],
    },
    {
      title: "2. Mục đích sử dụng",
      icon: "🎯",
      content:
        "Website được thiết kế với các mục đích giáo dục và học tập về lịch sử các kỳ Đại hội Đảng Cộng sản Việt Nam. Người dùng có thể:",
      points: [
        "Xem và học tập nội dung lịch sử về các kỳ Đại hội",
        "Tham gia quiz để kiểm tra kiến thức",
        "Đặt câu hỏi và tham gia thảo luận tại diễn đàn",
        "Khám phá các chủ đề xuyên suốt các kỳ Đại hội",
        "Sử dụng chatbot AI để tìm hiểu thêm thông tin",
      ],
    },
    {
      title: "3. Tài khoản và trách nhiệm người dùng",
      icon: "👤",
      content:
        "Khi sử dụng các tính năng tương tác của website, bạn đồng ý:",
      points: [
        "Cung cấp thông tin chính xác và trung thực",
        "Không mạo danh người khác hoặc tổ chức",
        "Bảo mật thông tin đăng nhập (nếu có)",
        "Chịu trách nhiệm về mọi hoạt động dưới tài khoản của bạn",
        "Thông báo ngay cho chúng tôi nếu phát hiện vi phạm bảo mật",
        "Không sử dụng website cho mục đích bất hợp pháp",
      ],
    },
    {
      title: "4. Nội dung người dùng",
      icon: "📝",
      content:
        "Khi đăng tải nội dung lên website (câu hỏi, câu trả lời, bình luận), bạn cam kết:",
      points: [
        "Nội dung không vi phạm pháp luật Việt Nam",
        "Không chứa thông tin sai lệch, xuyên tạc lịch sử",
        "Không xúc phạm, phỉ báng cá nhân hoặc tổ chức",
        "Không chứa nội dung khiêu dâm, bạo lực",
        "Không spam hoặc quảng cáo trái phép",
        "Tôn trọng quyền sở hữu trí tuệ của người khác",
        "Cấp cho chúng tôi quyền sử dụng nội dung để vận hành website",
      ],
    },
    {
      title: "5. Quyền sở hữu trí tuệ",
      icon: "©️",
      content:
        "Tất cả nội dung trên website bao gồm văn bản, hình ảnh, video, logo, thiết kế thuộc quyền sở hữu của dự án Hành trình Đổi Mới hoặc được cấp phép hợp pháp. Bạn không được:",
      points: [
        "Sao chép, phân phối nội dung mà không có sự cho phép",
        "Sử dụng nội dung cho mục đích thương mại",
        "Chỉnh sửa hoặc tạo tác phẩm phái sinh từ nội dung",
        "Gỡ bỏ các thông tin về bản quyền",
        "Sử dụng logo, thương hiệu của dự án không có sự cho phép",
      ],
    },
    {
      title: "6. Hành vi bị cấm",
      icon: "🚫",
      content: "Người dùng KHÔNG được phép:",
      points: [
        "Tấn công, phá hoại hệ thống website",
        "Sử dụng bot, script để truy cập tự động",
        "Thu thập dữ liệu người dùng khác trái phép",
        "Gửi virus, malware, hoặc mã độc hại",
        "Can thiệp vào hoạt động bình thường của website",
        "Truy cập trái phép vào hệ thống hoặc dữ liệu",
        "Đăng tải nội dung vi phạm pháp luật",
        "Quấy rối, đe dọa người dùng khác",
      ],
    },
    {
      title: "7. Liên kết đến website khác",
      icon: "🔗",
      content:
        "Website có thể chứa liên kết đến các trang web bên thứ ba. Chúng tôi:",
      points: [
        "Không chịu trách nhiệm về nội dung của các trang web đó",
        "Không đảm bảo tính chính xác của thông tin bên ngoài",
        "Khuyến nghị bạn đọc điều khoản của các trang web khác",
        "Không chịu trách nhiệm về thiệt hại từ việc truy cập liên kết",
      ],
    },
    {
      title: "8. Từ chối trách nhiệm",
      icon: "⚠️",
      content:
        "Website được cung cấp 'nguyên trạng' mà không có bảo đảm nào về:",
      points: [
        "Tính chính xác, đầy đủ của thông tin",
        "Hoạt động liên tục, không gián đoạn",
        "Không có lỗi hoặc virus",
        "Kết quả cụ thể từ việc sử dụng website",
      ],
      extra:
        "Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng hoặc không thể sử dụng website, bao gồm nhưng không giới hạn: mất dữ liệu, mất lợi nhuận, hoặc thiệt hại gián tiếp khác.",
    },
    {
      title: "9. Giới hạn trách nhiệm",
      icon: "⚖️",
      content:
        "Trong mọi trường hợp, trách nhiệm của chúng tôi đối với bạn sẽ không vượt quá:",
      points: [
        "Số tiền bạn đã trả (nếu có) để sử dụng dịch vụ",
        "100.000 VNĐ (nếu dịch vụ miễn phí)",
      ],
    },
    {
      title: "10. Quyền chấm dứt",
      icon: "🛑",
      content:
        "Chúng tôi có quyền, theo quyết định riêng và không cần thông báo trước:",
      points: [
        "Chấm dứt hoặc đình chỉ quyền truy cập của bạn",
        "Xóa hoặc chỉnh sửa nội dung vi phạm",
        "Thay đổi hoặc ngừng cung cấp dịch vụ",
        "Thay đổi các điều khoản sử dụng",
      ],
    },
    {
      title: "11. Bồi thường",
      icon: "💰",
      content:
        "Bạn đồng ý bồi thường và bảo vệ chúng tôi khỏi mọi khiếu nại, thiệt hại, chi phí phát sinh từ:",
      points: [
        "Vi phạm điều khoản sử dụng của bạn",
        "Vi phạm pháp luật hoặc quyền của bên thứ ba",
        "Nội dung bạn đăng tải lên website",
        "Hành vi của bạn khi sử dụng website",
      ],
    },
    {
      title: "12. Luật áp dụng",
      icon: "⚖️",
      content:
        "Các điều khoản này được điều chỉnh và giải thích theo pháp luật Việt Nam. Mọi tranh chấp sẽ được giải quyết tại:",
      points: [
        "Thương lượng hòa giải giữa hai bên",
        "Tòa án có thẩm quyền tại Việt Nam (nếu không thương lượng được)",
      ],
    },
    {
      title: "13. Thay đổi điều khoản",
      icon: "🔄",
      content:
        "Chúng tôi có quyền cập nhật các Điều khoản Sử dụng này bất cứ lúc nào. Các thay đổi:",
      points: [
        "Có hiệu lực ngay khi đăng tải trên website",
        "Bạn có trách nhiệm xem lại định kỳ",
        "Việc tiếp tục sử dụng = chấp nhận điều khoản mới",
        "Thay đổi quan trọng sẽ được thông báo rõ ràng",
      ],
    },
    {
      title: "14. Điều khoản tách biệt",
      icon: "📋",
      content:
        "Nếu bất kỳ điều khoản nào được xác định là không hợp lệ hoặc không thể thi hành:",
      points: [
        "Các điều khoản khác vẫn có hiệu lực đầy đủ",
        "Điều khoản không hợp lệ sẽ được thay thế bằng điều khoản hợp lệ tương đương",
      ],
    },
    {
      title: "15. Liên hệ",
      icon: "📧",
      content:
        "Nếu bạn có câu hỏi về các Điều khoản Sử dụng này, vui lòng liên hệ:",
      points: [
        "Email: huylqse172573@fpt.edu.vn",
        "Điện thoại: (024) 1234 5678",
        "Địa chỉ: Hà Nội, Việt Nam",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-50 via-white to-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-linear-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Điều khoản & Điều kiện
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Điều khoản Sử dụng
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
            Quy định và điều kiện khi sử dụng dịch vụ của chúng tôi
          </p>
          <p className="text-sm text-gray-500">
            Có hiệu lực từ: {new Date().toLocaleDateString("vi-VN")}
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-linear-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-r-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Thông báo quan trọng
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Vui lòng đọc kỹ các điều khoản này trước khi sử dụng website.
                Việc truy cập và sử dụng website đồng nghĩa với việc bạn đã
                đọc, hiểu và đồng ý với tất cả các điều khoản dưới đây.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-6 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.03 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-4xl">{section.icon}</span>
                <span>{section.title}</span>
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                {section.content}
              </p>

              {section.points.length > 0 && (
                <ul className="space-y-3 ml-4">
                  {section.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-purple-600 font-bold text-xl flex-shrink-0 mt-0.5">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.extra && (
                <p className="mt-4 text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                  {section.extra}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-linear-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-8 text-white mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Tóm tắt các điểm chính
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "✅",
                title: "Bạn có thể",
                items: [
                  "Học tập và nghiên cứu miễn phí",
                  "Tham gia quiz và diễn đàn",
                  "Chia sẻ nội dung có trách nhiệm",
                ],
              },
              {
                icon: "❌",
                title: "Bạn không được",
                items: [
                  "Vi phạm pháp luật Việt Nam",
                  "Sao chép nội dung trái phép",
                  "Tấn công hoặc phá hoại hệ thống",
                ],
              },
            ].map((column, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>{column.icon}</span>
                  <span>{column.title}</span>
                </h3>
                <ul className="space-y-2">
                  {column.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Cần thêm thông tin?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Tham khảo các tài liệu liên quan hoặc liên hệ với chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chinh-sach"
              className="inline-flex items-center justify-center bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Chính sách bảo mật
            </Link>
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
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
              Liên hệ hỗ trợ
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
