// ===== Tahun otomatis di footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Toggle menu mobile =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

// Tutup menu saat link diklik (mode mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== Navbar shadow saat scroll =====
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  navbar.classList.toggle("scrolled", y > 8);
  backToTop.classList.toggle("show", y > 400);
});

// ===== Highlight link nav aktif berdasarkan section =====
const sections = document.querySelectorAll("section[id]");
const navAnchors = navLinks.querySelectorAll("a");

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navAnchors.forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === "#" + id);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => spy.observe(s));

// ===== Filter portfolio =====
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    projectCards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hide", !match);
    });
  });
});

// ===== Reveal on scroll =====
const revealTargets = document.querySelectorAll(
  ".about-card, .project-card, .timeline-item, .contact-card, .section-head"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => revealObserver.observe(el));

// ===== Dark / Light mode =====
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Pakai preferensi tersimpan atau ikuti sistem
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initial = saved || (prefersDark ? "dark" : "light");
applyTheme(initial);

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

function applyTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    root.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
  }
}
