import { notFound } from "next/navigation";
import Link from "next/link";
import { getThemeSlugs, getThemeBySlug } from "@/lib/data-loaders";

// Generate static params for SSG
export async function generateStaticParams() {
  const slugs = getThemeSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const theme = getThemeBySlug(params.slug);

  if (!theme) {
    return {
      title: "Chủ đề không tìm thấy",
    };
  }

  return {
    title: `${theme.title} | Dòng chảy Chủ đề`,
    description: theme.description,
  };
}

export default function ThemeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const theme = getThemeBySlug(params.slug);

  if (!theme) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dong-chay-chu-de"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 transition-colors"
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
            Quay lại danh sách chủ đề
          </Link>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  {theme.title}
                </h1>
                <p className="text-lg text-red-100">{theme.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-red-300 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {theme.timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-8 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center transform -translate-x-1/2 z-10">
                  <span className="text-white text-xs font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Content Card */}
                <div className="md:ml-24">
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border-l-4 border-red-600">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                        Đại hội {item.daiHoiId}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{item.time}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {item.snippet}
                    </p>

                    {/* Link to Detail */}
                    <Link
                      href={`/dai-hoi/${item.daiHoiId}`}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors group"
                    >
                      <span>Xem chi tiết tại Đại hội {item.daiHoiId}</span>
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Box */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-3 flex items-center">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Tổng kết
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Qua {theme.timeline.length} mốc lịch sử quan trọng, chủ đề &ldquo;
            {theme.title}&rdquo; cho thấy sự phát triển liên tục và nhất quán
            trong tư duy của Đảng. Mỗi kỳ Đại hội đều kế thừa, phát triển và làm
            sâu sắc thêm những định hướng từ các kỳ trước, thể hiện tính kế thừa
            và sáng tạo trong xây dựng đất nước.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dong-chay-chu-de"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
            >
              Khám phá chủ đề khác
            </Link>
            <Link
              href="/"
              className="bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-block"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
