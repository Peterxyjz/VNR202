import Link from "next/link";
import { getContentData } from "./lib/data-loaders";

export default function Home() {
  const contentData = getContentData();
  const daiHoiList = Object.values(contentData);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
          Hành trình Đổi Mới
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Khám phá lịch sử các kỳ Đại hội Đảng Cộng sản Việt Nam từ VII đến XIII
          <br />
          Từ Đổi Mới đến Công nghiệp hóa - Hiện đại hóa
        </p>
      </section>

      {/* Timeline Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
          Dòng chảy Đổi Mới
        </h2>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-300 hidden md:block"
               style={{ transform: "translateY(-50%)" }}></div>

          {/* Timeline Cards Container */}
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-8 px-4 md:px-8 min-w-max">
              {daiHoiList.map((daiHoi, index) => (
                <Link
                  key={daiHoi.id}
                  href={`/dai-hoi/${daiHoi.id}`}
                  className="group relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-600 rounded-full z-10 hidden md:block"
                       style={{ transform: "translate(-50%, -50%)" }}></div>

                  {/* Card */}
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 w-80 group-hover:scale-105">
                    {/* Badge */}
                    <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                      Đại hội {daiHoi.id}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                      {daiHoi.title}
                    </h3>

                    {/* Time & Location */}
                    <div className="space-y-1 text-gray-600 text-sm mb-4">
                      <p>
                        <span className="font-semibold">Thời gian:</span> {daiHoi.time}
                      </p>
                      <p>
                        <span className="font-semibold">Địa điểm:</span> {daiHoi.location}
                      </p>
                    </div>

                    {/* Highlights Preview */}
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-700 font-semibold mb-2">Điểm nổi bật:</p>
                      <ul className="space-y-1">
                        {daiHoi.contentHighlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>{highlight.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow */}
                    <div className="mt-4 text-right">
                      <span className="text-red-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">
                        Xem chi tiết →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <p className="text-center text-gray-500 text-sm mt-4 md:hidden">
          ← Vuốt ngang để xem thêm →
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-4 text-center bg-red-50">
        <h2 className="text-2xl font-bold text-red-800 mb-4">
          Khám phá thêm
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/quiz"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Làm bài Quiz
          </Link>
          <Link
            href="/forum"
            className="bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            Tham gia Forum
          </Link>
        </div>
      </section>
    </div>
  );
}
