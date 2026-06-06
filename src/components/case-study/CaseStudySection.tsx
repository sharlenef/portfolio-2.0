export function CaseStudySection({
  id,
  title,
  accentTextColor,
  children,
}: {
  id: string;
  title: string;
  accentTextColor: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 space-y-4">
      <h2
        className="font-sans text-xl font-bold"
        style={{ color: accentTextColor }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export function CaseStudyMetaGrid({
  items,
  accentTextColor,
}: {
  items: { label: string; values: string[] }[];
  accentTextColor: string;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
      {items.map((item) => (
        <div key={item.label} className="space-y-2">
          <p
            className="font-sans text-sm sm:text-base font-bold"
            style={{ color: accentTextColor }}
          >
            {item.label}
          </p>
          <div className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed space-y-0.5">
            {item.values.map((value) => (
              <p key={value}>{value}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyCallout({
  children,
  accentTextColor,
  calloutBg,
}: {
  children: React.ReactNode;
  accentTextColor: string;
  calloutBg: string;
}) {
  return (
    <blockquote
      className="rounded-lg px-6 py-5 sm:px-8 sm:py-6"
      style={{ backgroundColor: calloutBg }}
    >
      <p
        className="font-serif italic text-base sm:text-lg leading-relaxed"
        style={{ color: accentTextColor }}
      >
        {children}
      </p>
    </blockquote>
  );
}
