import { ArrowDown, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { heroStats, navItems, profile, profileLinks } from "../data";
import { ContactButton } from "./ContactButton";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative flex min-h-screen flex-col overflow-x-clip px-5 py-6 sm:px-8 md:min-h-[840px] lg:px-10" id="top">
      <FadeIn as="nav" y={-20} className="relative z-30 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-black uppercase text-ink" aria-label="Likhith Ramesha home">
          LR
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase text-muted transition hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink/10 bg-white text-ink shadow-soft md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </FadeIn>

      {isOpen ? (
        <div className="absolute right-5 top-20 z-40 grid w-[min(260px,calc(100vw-40px))] gap-2 rounded-lg border border-ink/10 bg-white p-3 shadow-lift md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-sm font-bold uppercase text-muted hover:bg-shell hover:text-teal"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}

      <div className="relative z-10 grid min-w-0 flex-1 content-between pt-8 sm:pt-10 lg:pt-8">
        <div className="grid min-w-0 gap-4">
          <FadeIn delay={0.05} y={24}>
            <div className="inline-flex max-w-full items-center gap-2 rounded-lg border border-forest/15 bg-white px-4 py-2 text-[0.68rem] font-extrabold uppercase leading-tight text-forest shadow-soft sm:w-fit sm:rounded-full sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-forest" aria-hidden="true" />
              {profile.availability}
            </div>
          </FadeIn>

          <FadeIn as="h1" delay={0.15} y={42} className="hero-heading text-[2.7rem] sm:text-8xl md:text-9xl lg:text-[8.8rem]">
            Hi, I&apos;m Likhith
          </FadeIn>

          <FadeIn delay={0.24} y={20} className="purdue-hero-card">
            <img src={profile.purdueWordmarkUrl} alt="" aria-hidden="true" />
            <div>
              <span>Purdue University</span>
              <strong>M.S. Engineering Management</strong>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={20} className="hero-pitch-card">
            <h2>{profile.heroQuestion}</h2>
            <p>{profile.heroPitch}</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.45} y={32} className="relative z-0 mt-10 flex w-full min-w-0 justify-center md:pointer-events-none md:absolute md:inset-x-0 md:top-[17rem] md:mt-0">
          <Magnet strength={7} className="md:pointer-events-auto">
            <div className="portrait-stage">
              <img src={profile.portraitUrl} alt="Likhith Ramesha" className="h-full w-full object-cover" />
              <div className="portrait-badge">
                <span>Purdue MEM</span>
                <strong>AI Product Builder</strong>
                <em>Ex-Qualcomm PM</em>
              </div>
            </div>
          </Magnet>
        </FadeIn>

        <div className="relative z-20 grid gap-8 pb-2 pt-8 md:justify-items-end md:pt-[15rem] lg:pt-[15.5rem]">
          <FadeIn delay={0.55} y={24} className="grid w-full min-w-0 justify-items-start gap-5 md:max-w-[560px] md:justify-items-end">
            <div className="grid w-full min-w-0 gap-3 sm:flex sm:flex-wrap md:justify-end">
              <ContactButton />
              <a href="#projects" className="secondary-button">
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
                View work
              </a>
              {profileLinks
                .filter((link) => link.type === "social")
                .map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener" className="icon-button hero-social-button" aria-label={link.label}>
                    <Linkedin className="h-5 w-5" />
                  </a>
                ))}
            </div>

            <div className="grid w-full max-w-full grid-cols-1 gap-2 sm:max-w-[430px] sm:grid-cols-3 sm:gap-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="stat-tile">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
