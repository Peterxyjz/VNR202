"use client";

import { useState } from "react";
import Link from "next/link";

export default function GioiThieuPageClient() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
      title: "Nội dung Lịch sử",
      description:
        "Hiển thị nội dung chi tiết của 7 kỳ Đại hội, được render tĩnh (SSG) để tối ưu hiệu suất",
      color: "red",
      details: [
        "Timeline tương tác với các mốc lịch sử",
        "Hình ảnh và video tư liệu đầy đủ",
        "Nội dung được tổ chức khoa học, dễ đọc",
      ],
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      ),
      title: "Quiz Tương tác",
      description:
        "Bài trắc nghiệm cho từng Đại hội với giải thích chi tiết và thống kê điểm số",
      color: "blue",
      details: [
        "Mind map tương tác để khám phá kiến thức",
        "Tóm tắt nội dung với tính năng copy",
        "Câu hỏi trắc nghiệm được thiết kế chất lượng",
      ],
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      ),
      title: "Hỏi đáp",
      description:
        "Diễn đàn ẩn danh cho phép người dùng đặt câu hỏi, trả lời và tương tác thông qua reactions",
      color: "green",
      details: [
        "Hệ thống tìm kiếm và lọc mạnh mẽ",
        "Reactions để thể hiện cảm xúc",
        "Giao diện thân thiện, dễ sử dụng",
      ],
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
        />
      ),
      title: "Dòng Chảy Chủ Đề",
      description:
        "Theo dõi sự phát triển của các chủ đề xuyên suốt các Đại hội",
      color: "purple",
      details: [
        "Timeline chủ đề trực quan",
        "So sánh nội dung qua các kỳ Đại hội",
        "Tìm kiếm theo chủ đề dễ dàng",
      ],
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      ),
      title: "AI Chatbot",
      description:
        "Trợ lý AI thông minh sử dụng Google Gemini để trả lời câu hỏi về lịch sử các Đại hội",
      color: "cyan",
      details: [
        "Phản hồi nhanh chóng và chính xác",
        "Dựa trên cơ sở tri thức chuyên sâu",
        "Hỗ trợ tiếng Việt tự nhiên",
        "Gợi ý câu hỏi thông minh",
      ],
    },
  ];

  const stats = [
    { label: "Đại hội", value: "7", icon: "📚", color: "red" },
    { label: "Câu hỏi Quiz", value: "100+", icon: "❓", color: "blue" },
    { label: "Chủ đề", value: "10+", icon: "🏷️", color: "green" },
    { label: "Tài liệu", value: "50+", icon: "📄", color: "purple" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Bảo tàng số
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Hành trình Đổi Mới
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nền tảng học tập tương tác về lịch sử các kỳ Đại hội Đảng Cộng sản
            Việt Nam từ VII đến XIII
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className={`text-3xl font-bold mb-1 text-${stat.color}-600`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Project Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-1 h-16 bg-gradient-to-b from-red-600 to-blue-600 rounded-full"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Về dự án
              </h2>
              <p className="text-red-600 font-semibold">
                Giáo dục - Công nghệ - Lịch sử
              </p>
            </div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <span className="font-bold text-red-600">
                &ldquo;Hành trình Đổi Mới&rdquo;
              </span>{" "}
              là một trang web bảo tàng số kết hợp nền tảng học tập tương tác,
              trình bày về lịch sử các kỳ Đại hội Đảng Cộng sản Việt Nam từ VII
              đến XIII.
            </p>

            <p>
              Dự án được xây dựng với mục đích giúp người dùng dễ dàng tiếp cận,
              tìm hiểu và học hỏi về lịch sử phát triển của Đảng thông qua:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Nội dung lịch sử chi tiết và sinh động",
                "Hệ thống quiz tương tác để kiểm tra kiến thức",
                "Diễn đàn hỏi đáp cộng đồng",
                "Giao diện thân thiện, responsive trên mọi thiết bị",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gradient-to-r from-red-50 to-blue-50 p-4 rounded-lg"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Tính năng chính
            </h2>
            <p className="text-gray-600">
              Click vào từng tính năng để xem chi tiết
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() =>
                  setActiveFeature(activeFeature === index ? null : index)
                }
                className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? "ring-4 ring-" + feature.color + "-300 scale-105"
                    : "hover:shadow-xl hover:scale-102"
                }`}
              >
                <div className="flex gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center`}
                  >
                    <svg
                      className={`w-7 h-7 text-${feature.color}-600`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {feature.description}
                    </p>

                    {activeFeature === index && (
                      <div className="space-y-2 mt-4 border-t pt-4 animate-fadeIn">
                        {feature.details.map((detail, dIndex) => (
                          <div
                            key={dIndex}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <span className={`text-${feature.color}-600`}>
                              •
                            </span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-red-600 to-blue-600 rounded-full"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Thành viên nhóm
              </h2>
              <p className="text-red-600 font-semibold">
                Nhóm phát triển dự án
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Phan Tấn Phát",
                code: "SE170522",
                role: "Soạn nội dung, làm câu đố, thuyết trình đại hội VII và XI",
              },
              {
                name: "Đỗ Quốc Cường",
                code: "SE170588",
                role: "Soạn nội dung, làm câu đố, thuyết trình đại hội XII và XIII",
              },
              {
                name: "Nguyễn Phúc Điền",
                code: "SE171952",
                role: "Soạn nội dung, làm câu đố, thuyết trình đại hội IX và X",
              },
              {
                name: "Nguyễn Quốc Phong",
                code: "SE172516",
                role: "Soạn nội dung, làm câu đố, thuyết trình đại hội VIII và trò chơi hoạt động kết",
              },
              {
                name: "Lê Quang Huy",
                code: "SE172573",
                role: "Xây dựng và hoàn thiện website cho sản phẩm sáng tạo của nhóm",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-1">
                      {member.name}
                      {" - "}
                      <span className="text-red-600">{member.code}</span>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        {/* <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Công nghệ sử dụng
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Được xây dựng với các công nghệ hiện đại nhất
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-bold mb-1">{tech.name}</div>
                <div className="text-sm text-gray-300">{tech.description}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Sứ mệnh</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Mang đến một trải nghiệm học tập hiện đại, sinh động và dễ tiếp cận
            về lịch sử phát triển của Đảng, giúp thế hệ trẻ hiểu rõ hơn về hành
            trình đổi mới và phát triển đất nước.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/dai-hoi"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Khám phá ngay
            </Link>
            <Link
              href="/quiz"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border-2 border-white"
            >
              Làm Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
