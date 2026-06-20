import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects, type Project } from "../data";
import { FadeIn } from "./FadeIn";

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.65", "end 0.35"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.025;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="min-h-[auto] py-3 md:h-[46vh] md:min-h-[390px] md:py-0">
      <motion.article
        className="project-card md:sticky"
        style={{ scale, top: `calc(5rem + ${index * 14}px)` }}
      >
        <div className="grid gap-5">
          <div className="grid gap-4 lg:grid-cols-[74px_minmax(0,1fr)_auto] lg:items-start">
            <span className="font-display text-5xl font-black leading-none text-ink sm:text-6xl">{project.number}</span>
            <div className="grid gap-3">
              <p className="text-xs font-extrabold uppercase text-teal">{project.category}</p>
              <h3 className="font-display text-3xl font-black uppercase leading-none text-ink sm:text-4xl md:text-[2.65rem]">
                {project.name}
              </h3>
              <p className="font-bold text-ink">{project.role}</p>
              <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{project.summary}</p>
            </div>
            {project.href ? (
              <a href={project.href} target="_blank" rel="noopener" className="live-button">
                Live project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <span className="internal-chip">Internal platform</span>
            )}
          </div>

          <div className="project-proof-strip">
            {project.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>

          <div className="tag-strip">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-shell px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-12 grid gap-4 text-center">
          <p className="text-sm font-extrabold uppercase text-teal">Selected proof</p>
          <h2 className="hero-heading text-6xl sm:text-8xl md:text-9xl">Projects</h2>
        </FadeIn>

        <div className="grid gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
