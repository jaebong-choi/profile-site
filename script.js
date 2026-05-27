const toggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const header = document.querySelector("[data-header]");
const sectionLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

toggle?.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

sectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggle?.setAttribute("aria-expanded", "false");
    navLinks?.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  });
});

let lastScrollY = window.scrollY;
window.addEventListener(
  "scroll",
  () => {
    const currentY = window.scrollY;
    if (header) {
      header.style.transform = currentY > lastScrollY && currentY > 180 ? "translateY(-120%)" : "translateY(0)";
      header.style.opacity = currentY > lastScrollY && currentY > 180 ? ".2" : "1";
    }
    lastScrollY = currentY;
  },
  { passive: true }
);

const navObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    sectionLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-40% 0px -50% 0px", threshold: [0, .25, .5, .75, 1] }
);

sections.forEach((section) => navObserver.observe(section));

const countElements = document.querySelectorAll("[data-count]");
const countObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const target = Number(element.getAttribute("data-count") || 0);
      const duration = 1100;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.round(target * eased).toLocaleString("ko-KR");

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  },
  { threshold: .45 }
);

countElements.forEach((element) => countObserver.observe(element));
