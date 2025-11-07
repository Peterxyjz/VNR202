export const metadata = {
  title: "Giới thiệu | Hành trình Đổi Mới",
  description: "Về dự án Bảo tàng số Đại hội Đảng Cộng sản Việt Nam",
};

export default function GioiThieuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            Về dự án
          </h1>
          <p className="text-lg text-gray-700">
            Bảo tàng số - Nền tảng học tập tương tác về lịch sử Đại hội Đảng
          </p>
        </div>

        {/* Project Info */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
            <span className="w-2 h-8 bg-red-600 mr-4"></span>
            Về dự án &ldquo;Hành trình Đổi Mới&rdquo;
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              &ldquo;Hành trình Đổi Mới&rdquo; là một trang web bảo tàng số kết
              hợp nền tảng học tập tương tác, trình bày về lịch sử các kỳ Đại
              hội Đảng Cộng sản Việt Nam từ VII đến XIII.
            </p>

            <p>
              Dự án được xây dựng với mục đích giúp người dùng dễ dàng tiếp cận,
              tìm hiểu và học hỏi về lịch sử phát triển của Đảng thông qua:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nội dung lịch sử chi tiết và sinh động</li>
              <li>Hệ thống quiz tương tác để kiểm tra kiến thức</li>
              <li>Diễn đàn hỏi đáp cộng đồng</li>
              <li>Giao diện thân thiện, responsive trên mọi thiết bị</li>
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
            <span className="w-2 h-8 bg-red-600 mr-4"></span>
            Tính năng chính
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Nội dung Lịch sử
                </h3>
                <p className="text-gray-700">
                  Hiển thị nội dung chi tiết của 7 kỳ Đại hội, được render tĩnh
                  (SSG) để tối ưu hiệu suất
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Quiz Tương tác</h3>
                <p className="text-gray-700">
                  Bài trắc nghiệm cho từng Đại hội với giải thích chi tiết và
                  thống kê điểm số
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Forum Q&A</h3>
                <p className="text-gray-700">
                  Diễn đàn ẩn danh cho phép người dùng đặt câu hỏi, trả lời và
                  tương tác thông qua reactions
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Hệ thống Guest</h3>
                <p className="text-gray-700">
                  Không cần đăng nhập, sử dụng localStorage để quản lý người
                  dùng ẩn danh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600">
          <p className="mt-2">© 2025 Hành trình Đổi Mới</p>
        </div>
      </div>
    </div>
  );
}
