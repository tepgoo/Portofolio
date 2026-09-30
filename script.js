// ===== Tahun otomatis =====
document.getElementById("year").textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===== Efek ketik di hero =====
const typedEl = document.getElementById("typed");
const phrases = [
  "cd ~/backend && npm run dev",
  "git commit -m \"belajar hal baru\"",
  "deploy --target cloud",
  "SELECT * FROM opportunities;",
];
if (typedEl) {
  if (reduceMotion) {
    typedEl.textContent = phrases[0];
  } else {
    let p = 0, c = 0, deleting = false;
    (function tick() {
      const full = phrases[p];
      c += deleting ? -1 : 1;
      typedEl.textContent = full.slice(0, c);
      let delay = deleting ? 45 : 80;
      if (!deleting && c === full.length) { delay = 1600; deleting = true; }
      else if (deleting && c === 0) { deleting = false; p = (p + 1) % phrases.length; delay = 400; }
      setTimeout(tick, delay);
    })();
  }
}

// ===== Toggle sidebar (mobile) =====
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => sidebar.classList.toggle("open"));
  sidebar.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => sidebar.classList.remove("open"))
  );
}

// ===== Theme toggle =====
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});
function applyTheme(theme) {
  if (theme === "dark") { root.setAttribute("data-theme", "dark"); themeToggle.textContent = "◑"; }
  else { root.removeAttribute("data-theme"); themeToggle.textContent = "◐"; }
}

// ===== Filter proyek =====
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".proj");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    projectCards.forEach((card) => {
      card.classList.toggle("hide", !(f === "all" || card.dataset.category === f));
    });
  });
});

// ===== Sinkron tab + file explorer + status bar dengan scroll =====
const editor = document.getElementById("editor");
const panes = document.querySelectorAll(".pane");
const tabs = document.querySelectorAll(".tab");
const files = document.querySelectorAll(".sidebar .file");
const sbSection = document.getElementById("sbSection");

function labelFor(id) {
  const map = { home: "home.js", about: "about.md", projects: "projects/", edu: "education.log", certs: "certs.json", contact: "contact.sh" };
  return map[id] || id;
}
function setActive(id) {
  tabs.forEach((t) => t.classList.toggle("active", t.getAttribute("href") === "#" + id));
  files.forEach((f) => f.classList.toggle("active", f.getAttribute("href") === "#" + id));
  if (sbSection) sbSection.textContent = labelFor(id);
}

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
  },
  { root: editor, rootMargin: "-40% 0px -55% 0px" }
);
panes.forEach((p) => spy.observe(p));

// ===== Reveal saat scroll (di dalam editor) =====
const revealTargets = document.querySelectorAll(".card, .log-row, .code-block, .term");
revealTargets.forEach((el) => el.classList.add("reveal"));
const revealObs = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  },
  { root: editor, threshold: 0.15 }
);
revealTargets.forEach((el) => revealObs.observe(el));

// ===== Spotlight mengikuti kursor pada kartu =====
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});
