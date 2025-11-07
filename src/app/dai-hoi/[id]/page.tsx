import { notFound } from "next/navigation";
import Link from "next/link";
import { getDaiHoiIds, getDaiHoiById } from "@/app/lib/data-loaders";

// Generate static params for all �i h�i pages (SSG)
export async function generateStaticParams() {
  const ids = getDaiHoiIds();
  return ids.map((id) => ({
    id: id,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { id: string } }) {
  // `params` can be an awaited object in newer Next.js runtimes - await it before
  // accessing its properties to avoid the sync-dynamic-apis warning.
  const { id } = (await params) as { id: string };
  const daiHoi = getDaiHoiById(id);

  if (!daiHoi) {
    return {
      title: "Không tìm thấy",
    };
  }

  return {
    title: `${daiHoi.title} - Hành trình Đổi Mới`,
    description: daiHoi.context[0] || "Tìm hiểu về lịch sử đại hội đảng",
  };
}

export default async function DaiHoiDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Await params before using its properties (fixes Next.js sync dynamic APIs warning)
  const { id } = (await params) as { id: string };
  const daiHoi = getDaiHoiById(id);

  // If data not found, show 404
  if (!daiHoi) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-800 to-red-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
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

          {/* Badge */}
          <div className="inline-block bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
            Đại hội {daiHoi.id}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {daiHoi.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-lg">
            <div className="flex items-center">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{daiHoi.time}</span>
            </div>
            <div className="flex items-center">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{daiHoi.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-4 py-12">
        {/* Context Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-red-600 mr-4"></span>
            Bối cảnh lịch sử
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            {daiHoi.context.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 leading-relaxed text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Content Highlights Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-red-600 mr-4"></span>
            Nội dung nổi bật
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {daiHoi.contentHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-white rounded-lg shadow-md p-6 border-l-4 border-red-600 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-red-700 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Full Content Summary Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-red-600 mr-4"></span>
            Nội dung chính
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            {daiHoi.fullContentSummary.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 leading-relaxed text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Significance Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-red-600 mr-4"></span>� ngh)a l�ch s�
          </h2>
          <div className="bg-gradient-to-r from-red-100 to-red-50 rounded-lg shadow-md p-6 border-l-4 border-red-600">
            {daiHoi.significance.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-800 leading-relaxed text-justify font-medium"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Media Section */}
        {daiHoi.media && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-red-600 mr-4"></span>
              Tư liệu hình ảnh & video
            </h2>

            {/* Video */}
            {daiHoi.media.videoUrl && (
              <div className="mb-8 bg-white rounded-lg shadow-md p-4">
                <video
                  controls
                  className="w-full rounded-lg"
                  poster={daiHoi.heroImage}
                  crossOrigin="anonymous"
                >
                  <source src={daiHoi.media.videoUrl} type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ video.
                </video>

                {/* Helpful fallback / debug link if the video doesn't play in the embedded player */}
                <div className="mt-2 text-sm text-gray-600">
                  Nếu video không phát được, bạn có thể mở trực tiếp:
                  <a
                    href={daiHoi.media.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-red-600 underline"
                  >
                    Mở video trong tab mới
                  </a>
                </div>
              </div>
            )}

            {/* Images Gallery */}
            {daiHoi.media.images && daiHoi.media.images.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {daiHoi.media.images.map((image, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-64 object-cover"
                    />
                    <p className="p-4 text-sm text-gray-600 italic">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Navigation to Quiz */}
        <section className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Kiểm tra kiến thức của bạn
            </h3>
            <p className="mb-6">
              Làm bài quiz để kiểm tra sự hiểu biết của bạn về Đại hội{" "}
              {daiHoi.id}
            </p>
            <Link
              href={`/quiz/${daiHoi.id}`}
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Làm bài Quiz ngay
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
