import { rangeHighlights, timeline, profile } from "../data";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";
import { FadeIn } from "./FadeIn";

const aboutText =
  "I sit between product, engineering, and users, translating vague workflow pain into roadmaps, prototypes, backend systems, and AI features people can actually use. My edge is not just shipping the demo; it is making the product useful when stakeholders, data, and constraints get messy.";

export function AboutSection() {
  return (
    <section id="about" className="relative isolate min-h-screen overflow-hidden px-5 py-20 sm:px-8 md:py-28 lg:px-10">
      <img
        src={profile.purdueLogoUrl}
        alt=""
        className="absolute left-4 top-8 -z-10 w-24 rotate-[-9deg] opacity-15 sm:left-8 sm:w-32 md:w-40"
        loading="lazy"
      />
      <img
        src={profile.purdueWordmarkUrl}
        alt=""
        className="absolute bottom-10 right-4 -z-10 w-24 rotate-[8deg] opacity-15 sm:right-8 sm:w-32 md:w-40"
        loading="lazy"
      />

      <div className="mx-auto grid max-w-6xl gap-12">
        <div className="grid justify-items-center gap-10 text-center">
          <FadeIn as="h2" className="hero-heading text-6xl sm:text-8xl md:text-9xl">
            About me
          </FadeIn>
          <AnimatedText className="mx-auto max-w-[680px] text-center text-lg font-semibold leading-relaxed text-muted [text-wrap:balance] sm:text-xl" text={aboutText} />
          <FadeIn delay={0.18} y={20}>
            <ContactButton label="Start a conversation" />
          </FadeIn>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn delay={0.12} y={28} className="timeline-panel">
            {timeline.map((item) => (
              <article key={`${item.date}-${item.organization}`} className="timeline-row">
                <span>{item.date}</span>
                <div>
                  <h3>{item.organization}</h3>
                  <strong>{item.role}</strong>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </FadeIn>

          <FadeIn delay={0.2} y={28} className="range-panel">
            {rangeHighlights.map((item) => (
              <article key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener">
                    Visit project
                  </a>
                ) : null}
              </article>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
