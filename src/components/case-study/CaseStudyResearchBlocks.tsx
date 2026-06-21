import Image from "next/image";
import type {
  CaseStudyBlock,
  CaseStudyKeyInsight,
  CaseStudyResearchCard,
  CaseStudyScreen,
  CaseStudySubsection,
  CaseStudyTextCard,
} from "@/data/case-studies/types";

function ResearchCard({
  card,
  accentTextColor,
  calloutBg,
}: {
  card: CaseStudyResearchCard;
  accentTextColor: string;
  calloutBg: string;
}) {
  return (
    <div
      className="rounded-lg p-4 sm:p-6 space-y-4 min-h-[238px]"
      style={{ backgroundColor: calloutBg }}
    >
      <p
        className="font-sans text-lg font-bold"
        style={{ color: accentTextColor }}
      >
        {card.title}
      </p>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {card.images.map((image) => (
          <div
            key={image.src}
            className="relative flex-1 min-w-[140px] h-[159px] border border-black/50 overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-left-top"
              sizes="(max-width: 768px) 50vw, 240px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function KeyInsightItem({ insight }: { insight: CaseStudyKeyInsight }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative size-28 sm:size-36">
        <Image
          src={insight.iconSrc}
          alt={insight.iconAlt}
          fill
          className="object-contain"
          sizes="144px"
        />
      </div>
      <div className="space-y-2 text-center">
        <p className="font-sans text-sm sm:text-base font-bold text-neutral-900">
          {insight.label}
        </p>
        <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
          {insight.description}
        </p>
      </div>
    </div>
  );
}

function KeyInsightsBlock({
  title = "Key Insights",
  subtitle,
  insights,
  accentTextColor,
  calloutBg,
}: {
  title?: string;
  subtitle: string;
  insights: CaseStudyKeyInsight[];
  accentTextColor: string;
  calloutBg: string;
}) {
  return (
    <div
      className="rounded-lg px-4 py-5 sm:px-6 sm:py-6 space-y-6"
      style={{ backgroundColor: calloutBg }}
    >
      <div className="space-y-2">
        <p
          className="font-sans text-lg font-bold"
          style={{ color: accentTextColor }}
        >
          {title}
        </p>
        <p className="font-sans text-sm sm:text-base text-neutral-900">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-2">
        {insights.map((insight) => (
          <KeyInsightItem key={insight.label} insight={insight} />
        ))}
      </div>
    </div>
  );
}

function TextCard({
  card,
  accentTextColor,
  calloutBg,
}: {
  card: CaseStudyTextCard;
  accentTextColor: string;
  calloutBg: string;
}) {
  return (
    <div
      className="rounded-lg p-4 sm:p-6 space-y-4 h-full"
      style={{ backgroundColor: calloutBg }}
    >
      <p
        className="font-sans text-lg font-bold"
        style={{ color: accentTextColor }}
      >
        {card.title}
      </p>
      <ul className="list-disc space-y-2 pl-5">
        {card.items.map((item) => (
          <li
            key={item}
            className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TextCardsBlock({
  title,
  subtitle,
  cards,
  columns = 3,
  accentTextColor,
  calloutBg,
  isFirstBlock = false,
}: {
  title?: string;
  subtitle?: string;
  cards: CaseStudyTextCard[];
  columns?: 2 | 3;
  accentTextColor: string;
  calloutBg: string;
  isFirstBlock?: boolean;
}) {
  const gridClass =
    columns === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-4"
      : "grid grid-cols-1 md:grid-cols-3 gap-4";

  return (
    <div className={`space-y-4 ${isFirstBlock ? "" : "mt-10"}`}>
      {(title || subtitle) && (
        <div className="space-y-2">
          {title && (
            <p className="font-sans text-sm sm:text-base font-bold text-neutral-900 leading-relaxed">
              {title}
            </p>
          )}
          {subtitle && (
            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={gridClass}>
        {cards.map((card) => (
          <TextCard
            key={card.title}
            card={card}
            accentTextColor={accentTextColor}
            calloutBg={calloutBg}
          />
        ))}
      </div>
    </div>
  );
}

function StickyNotesBlock({
  title,
  subtitle,
  items,
  accentTextColor,
  calloutBg,
}: {
  title?: string;
  subtitle?: string;
  items: string[];
  accentTextColor: string;
  calloutBg: string;
}) {
  return (
    <div className="mb-6 space-y-4">
      {(title || subtitle) && (
        <div className="space-y-2">
          {title && (
            <p className="font-sans text-sm sm:text-base font-bold text-neutral-900 leading-relaxed">
              {title}
            </p>
          )}
          {subtitle && (
            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {items.map((item, index) => (
          <div
            key={item}
            className="flex min-h-[88px] min-w-[120px] max-w-[180px] flex-1 items-center justify-center rounded-sm px-4 py-3 text-center shadow-[2px_3px_8px_rgba(0,0,0,0.12)] sm:min-w-[140px]"
            style={{
              backgroundColor: calloutBg,
              transform: `rotate(${index % 2 === 0 ? -1.5 : 1.5}deg)`,
            }}
          >
            <p className="font-sans text-sm sm:text-base text-neutral-800 leading-snug">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubsectionsBlock({
  items,
  accentTextColor,
  variant = "accent",
}: {
  items: CaseStudySubsection[];
  accentTextColor: string;
  variant?: "accent" | "inline";
}) {
  const isInline = variant === "inline";

  return (
    <div className="space-y-8 pt-4">
      {items.map((item) => (
        <div key={item.title} className="space-y-2">
          <p
            className={
              isInline
                ? "font-sans text-sm sm:text-base font-bold text-neutral-900 leading-relaxed"
                : "font-sans text-lg font-bold"
            }
            style={isInline ? undefined : { color: accentTextColor }}
          >
            {item.title}
          </p>
          {item.items ? (
            <ul className="list-disc space-y-2 pl-5">
              {item.items.map((entry) => (
                <li
                  key={entry}
                  className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed"
                >
                  {entry}
                </li>
              ))}
            </ul>
          ) : (
            item.body && (
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed whitespace-pre-line">
                {item.body}
              </p>
            )
          )}
        </div>
      ))}
    </div>
  );
}

function ScreensBlock({ screens }: { screens: CaseStudyScreen[] }) {
  return (
    <div className="space-y-8 pt-4">
      {screens.map((screen) => (
        <figure key={screen.src} className="space-y-3">
          <div className="relative w-full overflow-hidden rounded-lg border border-black/10">
            <Image
              src={screen.src}
              alt={screen.alt}
              width={1352}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
          {screen.caption && (
            <figcaption className="font-sans text-sm text-neutral-600 leading-relaxed">
              {screen.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function IframeEmbedBlock({
  src,
  title = "Embedded preview",
  heading,
  href,
}: {
  src: string;
  title?: string;
  heading?: string;
  href?: string;
}) {
  return (
    <div className="space-y-3">
      {(heading || href) && (
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          {heading && (
            <p className="font-sans text-sm sm:text-base font-bold text-neutral-900 leading-relaxed">
              {heading}
            </p>
          )}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-neutral-600 underline underline-offset-2 transition-colors hover:text-neutral-900"
            >
              Open in new tab
            </a>
          )}
        </div>
      )}
      <div className="w-full overflow-hidden rounded-lg border border-black/10 aspect-video">
        <iframe
          className="h-full w-full"
          src={src}
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  );
}

function ExternalLinkBlock({
  heading,
  href,
  label,
}: {
  heading?: string;
  href: string;
  label: string;
}) {
  return (
    <div className="space-y-2">
      {heading && (
        <p className="font-sans text-sm sm:text-base font-bold text-neutral-900 leading-relaxed">
          {heading}
        </p>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex font-sans text-sm sm:text-base text-neutral-600 underline underline-offset-2 transition-colors hover:text-neutral-900"
      >
        {label}
      </a>
    </div>
  );
}

export default function CaseStudyResearchBlocks({
  blocks,
  accentTextColor,
  calloutBg,
}: {
  blocks: CaseStudyBlock[];
  accentTextColor: string;
  calloutBg: string;
}) {
  return (
    <div className="space-y-6 pt-4">
      {blocks.map((block, index) => {
        if (block.type === "research-cards") {
          return (
            <div
              key={`research-cards-${index}`}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              {block.cards.map((card) => (
                <ResearchCard
                  key={card.title}
                  card={card}
                  accentTextColor={accentTextColor}
                  calloutBg={calloutBg}
                />
              ))}
            </div>
          );
        }

        if (block.type === "subsections") {
          return (
            <SubsectionsBlock
              key={`subsections-${index}`}
              items={block.items}
              accentTextColor={accentTextColor}
              variant={block.variant}
            />
          );
        }

        if (block.type === "text-cards") {
          return (
            <TextCardsBlock
              key={`text-cards-${index}`}
              title={block.title}
              subtitle={block.subtitle}
              cards={block.cards}
              columns={block.columns}
              accentTextColor={accentTextColor}
              calloutBg={calloutBg}
              isFirstBlock={index === 0}
            />
          );
        }

        if (block.type === "sticky-notes") {
          return (
            <StickyNotesBlock
              key={`sticky-notes-${index}`}
              title={block.title}
              subtitle={block.subtitle}
              items={block.items}
              accentTextColor={accentTextColor}
              calloutBg={calloutBg}
            />
          );
        }

        if (block.type === "screens") {
          return (
            <ScreensBlock key={`screens-${index}`} screens={block.screens} />
          );
        }

        if (block.type === "figma-embed") {
          return (
            <IframeEmbedBlock
              key={`figma-embed-${index}`}
              src={block.src}
              title={block.title}
              heading={block.heading}
              href={block.href}
            />
          );
        }

        if (block.type === "external-link") {
          return (
            <ExternalLinkBlock
              key={`external-link-${index}`}
              heading={block.heading}
              href={block.href}
              label={block.label}
            />
          );
        }

        return (
          <KeyInsightsBlock
            key={`key-insights-${index}`}
            title={block.title}
            subtitle={block.subtitle}
            insights={block.insights}
            accentTextColor={accentTextColor}
            calloutBg={calloutBg}
          />
        );
      })}
    </div>
  );
}
