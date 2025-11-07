import Link from "next/link";
import { getAllThemes } from "@/lib/data-loaders";

export const metadata = {
  title: "Dòng chảy Chủ đề | Hành trình Đổi Mới",
  description: "Khám phá các chủ đề xuyên suốt qua các kỳ Đại hội Đảng",
};

export default function ThemesIndexPage() {
  const themes = getAllThemes();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            Dòng chảy Chủ đề
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Khám phá sự phát triển liên tục của các chủ đề quan trọng xuyên suốt
            các kỳ Đại hội Đảng. Mỗi chủ đề là một &ldquo;dòng chảy&rdquo; tư
            tưởng, chính sách, định hướng được thể hiện qua các giai đoạn lịch
            sử.
          </p>
        </div>

        {/* Back to Home */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Quay lại trang chủ
          </Link>
        </div>

        {/* Themes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <Link
              key={theme.slug}
              href={`/dong-chay-chu-de/${theme.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full flex flex-col border-2 border-transparent hover:border-red-400 group-hover:scale-105">
                {/* Icon Circle */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                  {theme.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                  {theme.description}
                </p>

                {/* Timeline Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      <span>{theme.timeline.length} mốc lịch sử</span>
                    </div>

                    {/* Arrow */}
                    <span className="text-red-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">
                      Khám phá →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-900 mb-2 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Về Dòng chảy Chủ đề
          </h3>
          <p className="text-sm text-gray-700">
            Mỗi &ldquo;Dòng chảy&rdquo; thể hiện sự phát triển liên tục của một
            chủ đề quan trọng qua các kỳ Đại hội. Bạn sẽ thấy được sự kế thừa,
            phát triển và đổi mới tư duy của Đảng qua từng giai đoạn lịch sử.
          </p>
        </div>
      </div>
    </div>
  );
}
