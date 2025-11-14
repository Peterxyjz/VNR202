"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ChinhSachPageClient() {
  const sections = [
    {
      title: "1. Thu thập thông tin",
      icon: "📋",
      content: [
        {
          subtitle: "Thông tin chúng tôi thu thập",
          text: "Khi bạn sử dụng website của chúng tôi, chúng tôi có thể thu thập các thông tin sau:",
          list: [
            "Thông tin cá nhân: Tên, email khi bạn đăng ký hoặc liên hệ",
            "Thông tin sử dụng: Các trang bạn truy cập, thời gian sử dụng",
            "Dữ liệu kỹ thuật: Địa chỉ IP, loại trình duyệt, thiết bị",
            "Cookies: Để cải thiện trải nghiệm người dùng",
          ],
        },
        {
          subtitle: "Cách thức thu thập",
          text: "Thông tin được thu thập thông qua:",
          list: [
            "Form đăng ký, liên hệ, hoặc hỏi đáp trên website",
            "Cookies và công nghệ theo dõi tương tự",
            "Phân tích hành vi người dùng trên website",
          ],
        },
      ],
    },
    {
      title: "2. Sử dụng thông tin",
      icon: "🎯",
      content: [
        {
          subtitle: "Mục đích sử dụng",
          text: "Thông tin thu thập được sử dụng để:",
          list: [
            "Cung cấp và cải thiện dịch vụ của chúng tôi",
            "Phản hồi câu hỏi và yêu cầu hỗ trợ của bạn",
            "Gửi thông báo về cập nhật nội dung mới",
            "Phân tích và cải thiện trải nghiệm người dùng",
            "Bảo vệ website khỏi gian lận và lạm dụng",
            "Tuân thủ các yêu cầu pháp luật",
          ],
        },
      ],
    },
    {
      title: "3. Chia sẻ thông tin",
      icon: "🔗",
      content: [
        {
          subtitle: "Chính sách chia sẻ",
          text: "Chúng tôi cam kết không bán hoặc cho thuê thông tin cá nhân của bạn. Thông tin có thể được chia sẻ trong các trường hợp:",
          list: [
            "Với các đối tác dịch vụ để vận hành website",
            "Khi có yêu cầu từ cơ quan pháp luật",
            "Để bảo vệ quyền lợi và an toàn của chúng tôi và người dùng",
            "Với sự đồng ý rõ ràng của bạn",
          ],
        },
      ],
    },
    {
      title: "4. Bảo mật thông tin",
      icon: "🔒",
      content: [
        {
          subtitle: "Các biện pháp bảo mật",
          text: "Chúng tôi áp dụng các biện pháp bảo mật để bảo vệ thông tin của bạn:",
          list: [
            "Mã hóa dữ liệu khi truyền tải (HTTPS/SSL)",
            "Kiểm soát truy cập nghiêm ngặt đến dữ liệu",
            "Cập nhật và vá lỗi bảo mật thường xuyên",
            "Sao lưu dữ liệu định kỳ",
            "Giám sát hệ thống 24/7",
          ],
        },
        {
          subtitle: "Trách nhiệm của bạn",
          text: "Bạn cũng có trách nhiệm:",
          list: [
            "Bảo mật thông tin đăng nhập của mình",
            "Không chia sẻ tài khoản với người khác",
            "Thông báo ngay nếu phát hiện hoạt động đáng ngờ",
          ],
        },
      ],
    },
    {
      title: "5. Cookies",
      icon: "🍪",
      content: [
        {
          subtitle: "Sử dụng Cookies",
          text: "Website sử dụng cookies để:",
          list: [
            "Ghi nhớ tùy chọn và cài đặt của bạn",
            "Phân tích lượng truy cập và hành vi người dùng",
            "Cải thiện hiệu suất website",
            "Cung cấp nội dung được cá nhân hóa",
          ],
        },
        {
          subtitle: "Quản lý Cookies",
          text: "Bạn có thể quản lý hoặc xóa cookies thông qua cài đặt trình duyệt. Tuy nhiên, việc tắt cookies có thể ảnh hưởng đến trải nghiệm sử dụng website.",
        },
      ],
    },
    {
      title: "6. Quyền của người dùng",
      icon: "⚖️",
      content: [
        {
          subtitle: "Các quyền của bạn",
          text: "Bạn có các quyền sau đối với thông tin cá nhân:",
          list: [
            "Quyền truy cập: Yêu cầu xem thông tin chúng tôi có về bạn",
            "Quyền sửa đổi: Cập nhật hoặc sửa thông tin không chính xác",
            "Quyền xóa: Yêu cầu xóa thông tin cá nhân của bạn",
            "Quyền từ chối: Từ chối xử lý thông tin của bạn",
            "Quyền khiếu nại: Khiếu nại với cơ quan chức năng",
          ],
        },
        {
          subtitle: "Cách thực hiện quyền",
          text: "Để thực hiện các quyền trên, vui lòng liên hệ với chúng tôi qua email: contact@vnr202.edu.vn",
        },
      ],
    },
    {
      title: "7. Liên kết bên thứ ba",
      icon: "🔗",
      content: [
        {
          text: "Website có thể chứa liên kết đến các trang web bên thứ ba. Chúng tôi không chịu trách nhiệm về chính sách bảo mật hoặc nội dung của các trang web này. Vui lòng đọc chính sách bảo mật của họ trước khi cung cấp thông tin cá nhân.",
        },
      ],
    },
    {
      title: "8. Trẻ em",
      icon: "👶",
      content: [
        {
          text: "Website của chúng tôi không nhắm đến trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em. Nếu bạn phát hiện chúng tôi đã thu thập thông tin từ trẻ em, vui lòng liên hệ để chúng tôi xóa ngay.",
        },
      ],
    },
    {
      title: "9. Thay đổi chính sách",
      icon: "📝",
      content: [
        {
          text: "Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian. Mọi thay đổi sẽ được đăng tải trên trang này với ngày cập nhật mới. Việc bạn tiếp tục sử dụng website sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.",
        },
      ],
    },
    {
      title: "10. Liên hệ",
      icon: "📧",
      content: [
        {
          text: "Nếu bạn có bất kỳ câu hỏi nào về Chính sách Bảo mật này, vui lòng liên hệ:",
          list: [
            "Email: huylqse172573@fpt.edu.vn",
            "Điện thoại: (083) 4564 869",
            "Địa chỉ: Thủ Đức, Tp. Hồ Chí Minh, Việt Nam",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Chính sách & Bảo mật
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Chính sách Bảo mật
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
            Cam kết bảo vệ thông tin và quyền riêng tư của bạn
          </p>
          <p className="text-sm text-gray-500">
            Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-blue-500"
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            Chào mừng bạn đến với{" "}
            <span className="font-bold text-blue-600">Hành trình Đổi Mới</span>.
            Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của
            bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng, và
            bảo vệ thông tin của bạn khi sử dụng website.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-4xl">{section.icon}</span>
                <span>{section.title}</span>
              </h2>

              <div className="space-y-4">
                {section.content.map((item, idx) => (
                  <div key={idx}>
                    {"subtitle" in item && item.subtitle && (
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.subtitle}
                      </h3>
                    )}
                    {"text" in item && item.text && (
                      <p className="text-gray-700 leading-relaxed mb-3">
                        {item.text}
                      </p>
                    )}
                    {"list" in item && item.list && (
                      <ul className="space-y-2 ml-4">
                        {item.list.map((listItem, listIdx) => (
                          <li
                            key={listIdx}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="text-blue-600 font-bold mt-1">
                              •
                            </span>
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Có câu hỏi?</h2>
          <p className="text-xl mb-6 opacity-90">
            Chúng tôi luôn sẵn sàng giải đáp thắc mắc của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
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
              Liên hệ chúng tôi
            </Link>
            <Link
              href="/dieu-khoan"
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Điều khoản sử dụng
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
