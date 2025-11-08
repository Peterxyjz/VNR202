import { notFound } from "next/navigation";
import { getThemeSlugs, getThemeBySlug } from "@/lib/data-loaders";
import DongChayDetailClient from "./DongChayDetailClient";

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

  return <DongChayDetailClient theme={theme} />;
}
