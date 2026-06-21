import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySidebar from "@/components/case-study/CaseStudySidebar";
import CaseStudyResearchBlocks from "@/components/case-study/CaseStudyResearchBlocks";
import {
  CaseStudyCallout,
  CaseStudyMetaGrid,
  CaseStudySection,
} from "@/components/case-study/CaseStudySection";
import { defaultSidebarSections } from "@/data/case-studies/sections";
import { getAccentTextColor, getHeroTextColor } from "@/data/case-studies";
import type { CaseStudy } from "@/data/case-studies/types";

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  const accentTextColor = getAccentTextColor(study);
  const heroTextColor = getHeroTextColor(study);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-0 w-full sm:pt-28">
          <CaseStudyHero
            src={study.bannerSrc}
            alt={study.bannerAlt}
            title={study.title}
            accentColor={study.accentColor}
            accentTextColor={heroTextColor}
          />
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-12 lg:gap-16">
            <CaseStudySidebar
              title={study.title}
              accentTextColor={accentTextColor}
              sections={defaultSidebarSections}
            />

            <div className="space-y-16 min-w-0">
              <section id="overview" className="scroll-mt-32 space-y-8">
                <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {study.overview}
                </p>
                <CaseStudyMetaGrid
                  items={study.meta}
                  accentTextColor={accentTextColor}
                />
              </section>

              {study.sections.map((section) => (
                <CaseStudySection
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  accentTextColor={accentTextColor}
                >
                  {section.body && (
                    <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {section.body}
                    </p>
                  )}
                  {section.callout && (
                    <CaseStudyCallout
                      accentTextColor={accentTextColor}
                      calloutBg={study.calloutBg}
                    >
                      {section.callout}
                    </CaseStudyCallout>
                  )}
                  {section.blocks && (
                    <CaseStudyResearchBlocks
                      blocks={section.blocks}
                      accentTextColor={accentTextColor}
                      calloutBg={study.calloutBg}
                    />
                  )}
                </CaseStudySection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
