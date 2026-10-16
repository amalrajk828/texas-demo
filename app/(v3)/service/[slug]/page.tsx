import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/v3/service";
import { getServiceData, getAllServiceSlugs } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getServiceData(slug);
  if (!data) return {};
  return data.meta;
}

export default async function ServiceDynamicPage({ params }: Props) {
  const { slug } = await params;
  const data = getServiceData(slug);
  if (!data) {
    notFound();
  }
  return <ServicePage data={data} />;
}
