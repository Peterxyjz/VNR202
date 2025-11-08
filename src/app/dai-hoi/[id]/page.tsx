import { notFound } from "next/navigation";
import { getDaiHoiIds, getDaiHoiById } from "@/lib/data-loaders";
import DaiHoiDetailClient from "./DaiHoiDetailClient";

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

  // Get all dai hoi IDs for navigation
  const allDaiHoiIds = getDaiHoiIds();

  return <DaiHoiDetailClient daiHoi={daiHoi} allDaiHoiIds={allDaiHoiIds} />;
}
