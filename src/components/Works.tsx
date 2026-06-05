const projects = [
  { id: 1, title: "", description: "", tags: [], slug: "" },
  { id: 2, title: "", description: "", tags: [], slug: "" },
  { id: 3, title: "", description: "", tags: [], slug: "" },
  { id: 4, title: "", description: "", tags: [], slug: "" },
];

export default function Works() {
  return (
    <section id="works" className="max-w-5xl mx-auto px-6 py-20 w-full">
      <h2 className="font-sans text-xl font-medium text-neutral-900 mb-8">
        What I&apos;ve made
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  slug,
}: {
  id: number;
  title: string;
  description: string;
  tags: string[];
  slug: string;
}) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-neutral-100 aspect-[4/3] cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
    >
      {/* Thumbnail placeholder */}
      <div className="absolute inset-0 bg-neutral-200 group-hover:bg-neutral-300 transition-colors duration-300" />

      {/* Overlay on hover */}
      {title && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <p className="font-sans text-xs text-neutral-400 mb-1 uppercase tracking-widest">
            Case study
          </p>
          <h3 className="font-sans text-base font-medium text-neutral-900">
            {title}
          </h3>
          {slug && (
            <span className="mt-3 inline-flex items-center gap-1 font-sans text-xs text-neutral-600">
              View project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
