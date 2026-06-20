import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";
import { ContactButton } from "./ContactButton";
import { FadeIn } from "./FadeIn";

export function ContactSection() {
  return (
    <section id="contact" className="bg-paper px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end">
        <FadeIn className="grid gap-5">
          <p className="text-sm font-extrabold uppercase text-teal">Contact</p>
          <h2 className="font-display text-5xl font-black uppercase leading-none text-ink sm:text-7xl">
            Have an AI product problem that needs a builder-PM?
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            I am looking for Summer/Fall 2026 AI PM / TPM internships and teams building practical AI products,
            data platforms, developer tools, or workflow automation.
          </p>
          <ContactButton className="w-fit" />
        </FadeIn>

        <FadeIn delay={0.15} y={26} className="contact-panel">
          <a href={`mailto:${profile.email}`}>
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span>{profile.email}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener">
            <Linkedin className="h-5 w-5" aria-hidden="true" />
            <span>linkedin.com/in/likhithramesha</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
