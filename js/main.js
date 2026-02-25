/* ============================================================
   DATA — edit these objects to update your portfolio
   ============================================================ */

const PROJECTS = [
  {
    name: "PinGuard",
    description: "Production-grade iOS security SDK enforcing SSL pinning, mutual TLS, and configurable trust evaluation policies. Drop-in, auditable, testable.",
    tags: ["iOS", "Security", "Swift", "SPM"],
    links: { github: "https://github.com/pinguard/pinguard-ios", caseStudy: null },
    highlights: [
      "Supports URLSession and custom URLProtocol stacks",
      "Zero runtime dependencies — ships as an SPM package",
      "Handles certificate rotation without app resubmission"
    ]
  },
  {
    name: "MovieProjectConcurrency",
    description: "UIKit + SwiftUI hybrid app demonstrating production-grade Swift Concurrency patterns: TaskGroup, cooperative cancellation, and actor isolation.",
    tags: ["iOS", "Swift Concurrency", "Architecture"],
    links: { github: "https://github.com/cagatayegilmez/MovieProjectConcurrency", caseStudy: null },
    highlights: [
      "MVVM-C architecture with clean coordinator pattern",
      "TaskGroup-based parallel network fetching with cancellation",
      "Zero Combine dependency — pure async/await throughout"
    ]
  },
  {
    name: "MovieProjectHybrid",
    description: "SwiftUI + UIKit hybrid project showing Combine and Swift Concurrency co-existing in a single MVVM-C architecture without coupling.",
    tags: ["iOS", "SwiftUI", "UIKit", "Combine"],
    links: { github: "https://github.com/cagatayegilmez/MovieProjectHybrid", caseStudy: null },
    highlights: [
      "MVVM-C with seamless UIKit ↔ SwiftUI boundary bridging",
      "Combine publishers for reactive state + async/await for I/O",
      "Demonstrates migration path from Combine to Concurrency"
    ]
  },
  {
    name: "ViperChallange",
    description: "SwiftUI + UIKit hybrid project using only Concurrency in a single VIPER architecture without coupling.",
    tags: ["iOS", "SwiftUI", "UIKit", "Concurrency", "VIPER"],
    links: { github: "https://github.com/cagatayegilmez/ViperChallange", caseStudy: null },
    highlights: [
      "VIPER with seamless UIKit ↔ SwiftUI boundary bridging",
      "TaskGroup-based parallel network fetching with cancellation",
      "Zero Combine dependency — pure async/await throughout"
    ]
  }
];

/* ============================================================
   UTILITIES
   ============================================================ */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

/* ============================================================
   TYPEWRITER
   ============================================================ */

async function runTypewriter() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const body = document.getElementById("terminal-body");
  if (!body) return;

  const sequences = [
    { kind: "cmd", text: "whoami" },
    { kind: "out", text: "Senior iOS Developer · 9+ yrs · Bakırköy / İstanbul" },
    { kind: "cmd", text: "cat highlights.txt" },
    { kind: "out", text: "9 yrs shipping  ·  14M+ users  ·  5 companies  ·  0 security incidents" }
  ];

  body.innerHTML = "";

  for (const seq of sequences) {
    if (seq.kind === "cmd") {
      const line    = document.createElement("div");
      line.className = "terminal-line";

      const promptEl = document.createElement("span");
      promptEl.className = "prompt";
      promptEl.textContent = "cagatay@portfolio:~$";

      const textEl = document.createElement("span");
      textEl.style.paddingLeft = "0.5rem";

      line.appendChild(promptEl);
      line.appendChild(textEl);
      body.appendChild(line);

      await sleep(250);

      for (const char of seq.text) {
        textEl.textContent += char;
        await sleep(52 + Math.random() * 28);
      }

      await sleep(160);

    } else {
      const out = document.createElement("div");
      out.className = "terminal-output";
      out.textContent = seq.text;
      body.appendChild(out);
      await sleep(80);
    }
  }

  // final idle prompt
  const final = document.createElement("div");
  final.className = "terminal-line";
  final.style.marginTop = "0.4em";
  final.innerHTML =
    '<span class="prompt">cagatay@portfolio:~$</span>' +
    '<span class="terminal-cursor" aria-hidden="true"></span>';
  body.appendChild(final);
}

/* ============================================================
   PROJECTS — render + filter
   ============================================================ */

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  const filterBar = document.getElementById("projects-filter");
  if (!grid || !filterBar) return;

  // Render cards
  PROJECTS.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("role", "listitem");
    card.dataset.tags = project.tags.join(",");

    const linksHTML = [
      project.links.github
        ? `<a href="${project.links.github}" class="project-link" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`
        : "",
      project.links.caseStudy
        ? `<a href="${project.links.caseStudy}" class="project-link" target="_blank" rel="noopener noreferrer">Case Study ↗</a>`
        : ""
    ].filter(Boolean).join("");

    const highlightsHTML = project.highlights
      .map(h => `<li>${h}</li>`)
      .join("");

    const tagsHTML = project.tags
      .map(t => `<span class="project-tag">${t}</span>`)
      .join("");

    card.innerHTML = `
      <h3 class="project-name">${project.name}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-tags">${tagsHTML}</div>
      <ul class="project-highlights">${highlightsHTML}</ul>
      <div class="project-links">${linksHTML}</div>
    `;

    grid.appendChild(card);
  });

  // Collect unique tags
  const allTags = [...new Set(PROJECTS.flatMap(p => p.tags))].sort();

  let activeTag = null;

  function updateFilter() {
    const cards = grid.querySelectorAll(".project-card");
    let visibleCount = 0;
    cards.forEach(card => {
      const tags = card.dataset.tags.split(",");
      const show = !activeTag || tags.includes(activeTag);
      card.classList.toggle("hidden", !show);
      if (show) visibleCount++;
    });
    const empty = document.getElementById("projects-empty");
    if (empty) empty.classList.toggle("visible", visibleCount === 0);
  }

  function setActive(chipEl) {
    filterBar.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
    if (chipEl) chipEl.classList.add("active");
  }

  // "All" chip
  const allChip = document.createElement("button");
  allChip.className = "filter-chip active";
  allChip.textContent = "All";
  allChip.addEventListener("click", () => {
    activeTag = null;
    updateFilter();
    setActive(allChip);
  });
  filterBar.appendChild(allChip);

  // Tag chips
  allTags.forEach(tag => {
    const chip = document.createElement("button");
    chip.className = "filter-chip";
    chip.textContent = tag;
    chip.addEventListener("click", () => {
      activeTag = tag;
      updateFilter();
      setActive(chip);
    });
    filterBar.appendChild(chip);
  });

  // Empty state
  const empty = document.createElement("p");
  empty.id = "projects-empty";
  empty.className = "projects-empty";
  empty.textContent = "No projects match that filter.";
  grid.after(empty);
}

/* ============================================================
   COPY EMAIL
   ============================================================ */

function initCopyEmail() {
  const btn = document.getElementById("copy-email-btn");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const email = document.getElementById("email-display")?.textContent?.trim();
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      btn.textContent = "copied!";
      btn.classList.add("copied");
      showToast("Email copied to clipboard");
      setTimeout(() => {
        btn.textContent = "copy";
        btn.classList.remove("copied");
      }, 2000);
    } catch {
      showToast("Copy failed — select manually");
    }
  });
}

/* ============================================================
   SCROLL SPY
   ============================================================ */

function initScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  runTypewriter();
  renderProjects();
  initCopyEmail();
  initScrollSpy();
});
