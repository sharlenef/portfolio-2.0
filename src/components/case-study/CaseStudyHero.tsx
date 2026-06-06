import Image from "next/image";

export default function CaseStudyHero({
  src,
  alt,
  title,
  accentColor,
  accentTextColor,
}: {
  src?: string;
  alt: string;
  title: string;
  accentColor: string;
  accentTextColor: string;
}) {
  if (src) {
    return (
      <div className="relative overflow-hidden rounded-lg w-full aspect-[1352/542]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1280px) 100vw, 1024px"
        />
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg w-full aspect-[1352/542] flex items-center justify-center"
      style={{ backgroundColor: accentColor }}
    >
      <h1
        className="font-sans text-3xl sm:text-4xl font-medium"
        style={{ color: accentTextColor }}
      >
        {title}
      </h1>
    </div>
  );
}
