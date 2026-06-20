import { capabilities } from "../data";
import { FadeIn } from "./FadeIn";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn as="h2" className="mb-12 text-center font-display text-6xl font-black uppercase text-ink sm:text-8xl md:text-9xl">
          Capabilities
        </FadeIn>

        <div className="mx-auto max-w-5xl border-y border-ink/15">
          {capabilities.map((capability, index) => (
            <FadeIn
              as="article"
              key={capability.number}
              delay={index * 0.08}
              y={24}
              className="capability-row"
            >
              <span>{capability.number}</span>
              <div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
