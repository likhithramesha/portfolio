(function () {
  "use strict";

  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const railLinks = Array.from(document.querySelectorAll(".rail-link"));
  const sections = railLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (!mobileNav.classList.contains("open")) return;
      if (mobileNav.contains(event.target) || mobileToggle.contains(event.target)) return;
      mobileNav.classList.remove("open");
      mobileToggle.setAttribute("aria-expanded", "false");
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        railLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${visible.target.id}`;
          link.classList.toggle("active", isActive);
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
