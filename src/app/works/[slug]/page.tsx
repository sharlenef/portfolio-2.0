import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case Study — Sharlene Fang" };
  }

  return {
    title: `${study.title} — Sharlene Fang`,
    description: study.description,
  };
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}
