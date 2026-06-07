const fallbackData = {
  profile: {
    name: "Kris",
    initials: "KR",
    title: "Automation & Backend Systems",
    metaDescription: "Automation engineer portfolio focused on Oracle Cloud bot hosting, Discord systems, n8n workflows, GoHighLevel CRM, and API integrations.",
    profileImage: "assets/profile-placeholder.svg"
  },
  hero: {
    eyebrow: "Automation Engineer | Oracle Cloud | Discord Bots | n8n | GoHighLevel",
    title: "I build backend systems that remove manual work and keep online businesses moving.",
    subtitle: "I design automations, connect APIs, host Discord bot stacks on Oracle Cloud Ubuntu, and build backend workflows that reduce manual work for e-commerce teams, online communities, and service businesses.",
    primaryCta: { label: "Work With Me", href: "#contact" },
    secondaryCta: { label: "View Systems", href: "#systems" }
  },
  stats: [
    { value: "24/7", label: "systemd-managed bot uptime mindset" },
    { value: "API", label: "Custom integrations and webhooks" },
    { value: "GHL", label: "CRM, SMS, funnels, automations" }
  ],
  tools: ["Oracle Cloud", "systemd", "Discord Bots", "Python", "n8n", "GoHighLevel", "APIs", "Webhooks", "Telnyx", "JavaScript", "Ubuntu", "GitHub Deploy"],
  about: {
    title: "Backend automation for operators who need speed, reliability, and clean workflows.",
    body: "I help businesses connect their tools, automate repetitive tasks, and build systems that can run without constant manual checking. My work is focused on practical execution: Oracle Cloud Ubuntu hosting with systemd services, Discord bot infrastructure, n8n workflow automation, API and webhook integrations, SMS/CRM automations, and deploy tooling that keeps multi-bot stacks in sync.",
    specialties: ["Oracle Cloud Ops", "Workflow Automation", "API Integrations", "Discord Infrastructure", "CRM Automation", "Backend Operations"]
  },
  services: [
    {
      icon: "⚙️",
      title: "n8n Workflow Automation",
      description: "Build automated workflows for lead routing, notifications, data syncing, reporting, and internal operations."
    },
    {
      icon: "🔌",
      title: "API & Webhook Integrations",
      description: "Connect apps together using APIs, webhooks, custom payloads, and backend logic."
    },
    {
      icon: "🤖",
      title: "Discord Bot Systems",
      description: "Create and maintain Discord bots for announcements, monitoring, slash commands, role workflows, and community operations."
    },
    {
      icon: "📲",
      title: "GoHighLevel Automation",
      description: "Set up GHL workflows, SMS/email automations, forms, funnels, pipelines, and customer follow-up systems."
    },
    {
      icon: "☁️",
      title: "Oracle Cloud & systemd Hosting",
      description: "Deploy bot stacks on Oracle Ubuntu, install mirror-world-style systemd units, configure auto-restart, manage secrets and env vars, and keep production services running."
    },
    {
      icon: "🧰",
      title: "Deploy, Sync & Admin Tooling",
      description: "Build deploy scripts, manifest verification, SSH workflows, and admin commands so code updates reach the server safely and predictably."
    }
  ],
  projects: [
    {
      title: "Discord Automation Bot Stack",
      description: "Multi-bot Discord setup for community announcements, role-based alerts, slash commands, monitoring channels, and automated operational posting.",
      image: "assets/discord-bot-flow-showcase.svg",
      video: "",
      tags: ["Discord.js", "Oracle Cloud", "Slash Commands", "Automation"]
    },
    {
      title: "GHL + SMS Automation Workflow",
      description: "GoHighLevel CRM workflow for opt-ins, customer replies, failed billing follow-ups, Telnyx SMS routing, and segmented staff notifications.",
      image: "assets/ghl-sms-automation-workflow.svg",
      video: "",
      tags: ["GoHighLevel", "Telnyx", "SMS", "CRM"]
    },
    {
      title: "n8n API Operations Hub",
      description: "n8n workflows that move data between tools, trigger alerts, clean webhook payloads, and cut down repeated admin work across connected systems.",
      image: "assets/n8n-api-operations-hub.svg",
      video: "",
      tags: ["n8n", "APIs", "Webhooks", "Data Sync"]
    },
    {
      title: "Oracle Cloud Bot Infrastructure",
      description: "Ubuntu deployment stack for running many bots from one repo root: shared Python venv, per-bot systemd services, RSAdminBot sync/deploy commands, manifest checks, and SSH-managed updates.",
      image: "assets/oracle-infrastructure.webp",
      video: "",
      tags: ["Oracle Cloud", "systemd", "Ubuntu", "Python"]
    }
  ],
  proof: {
    intro: "Live system visuals, walkthrough videos, and screenshots you can expand.",
    showcase: {
      title: "Live Systems Showcase",
      description: "Animated overview of bot operations, CRM automations, n8n workflows, API syncs, and Oracle Cloud infrastructure.",
      src: "assets/automation-backend-live-showcase.svg",
      alt: "Automation and backend systems animated showcase"
    },
    slides: [
      {
        type: "embed",
        title: "Workflow Walkthrough",
        description: "Loom demo of backend automation and bot operations in practice.",
        src: "https://www.loom.com/embed/f92c44c8c8c04ecdb20bb5aa7aefa04b"
      },
      {
        type: "image",
        title: "API Integration Layer",
        description: "Webhook and API connections between Discord bots, CRM tools, sheets, and third-party services.",
        src: "assets/automation-backend-showcase-base.svg"
      },
      {
        type: "video",
        title: "Bot Demo Video",
        description: "Add an MP4 path when ready, e.g. assets/demo.mp4",
        src: "",
        poster: ""
      }
    ]
  },
  testimonials: [
    {
      quote: "Fast, practical, and easy to work with. The workflow was built around how our business actually operates.",
      author: "Pawel Sniadala, Amazon FBA Seller"
    },
    {
      quote: "The bot and automation setup saved hours of repeated admin work each week.",
      author: "Cho, Reselling Secrets"
    },
    {
      quote: "He created a simple but useful system for our Facebook dropshipping business. It helped us stay organized with listings, order sheets, and profit/loss calculations.",
      author: "Vanessa Colmenares, WAG - Facebook Dropshipping Automation"
    }
  ],
  contact: {
    title: "Need a system built or fixed?",
    body: "Send me what you are trying to automate, what tools you use, and where the manual work is slowing you down. I can help map the workflow and build the backend system around it.",
    email: "mailto:apaapkristian@gmail.com",
    facebook: "https://www.facebook.com/krislangpo",
    whatsapp: "https://wa.me/639055196946"
  }
};

const CONTACT_CHANNELS = {
  email: {
    label: "Gmail",
    external: false,
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.727L12 10.09 21.637 3.82h.727A1.636 1.636 0 0 1 24 5.457Z"/><path fill="#FBBC04" d="m23.377 4.652-10.19 7.903L2.998 4.652"/><path fill="#34A853" d="M0 5.457v.364L12 14.09 24 5.821v-.364A1.636 1.636 0 0 0 22.364 3.82H1.636A1.636 1.636 0 0 0 0 5.457Z"/><path fill="#4285F4" d="M0 19.002V5.821l12 8.269L24 5.821v13.181c0 .904-.732 1.636-1.636 1.636H1.636A1.636 1.636 0 0 1 0 19.002Z"/></svg>`
  },
  facebook: {
    label: "Facebook",
    external: true,
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 22.594 10.125 23.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.594 24 18.1 24 12.073z"/></svg>`
  },
  whatsapp: {
    label: "WhatsApp",
    external: true,
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`
  }
};

const CONTACT_ORDER = ["email", "facebook", "whatsapp"];

function renderContactLinks(contact) {
  const container = document.getElementById("contact-links");
  if (!container || !contact) return;

  container.innerHTML = CONTACT_ORDER.filter(key => contact[key]).map(key => {
    const channel = CONTACT_CHANNELS[key];
    const href = contact[key];
    const targetAttrs = channel?.external ? ` target="_blank" rel="noopener noreferrer"` : "";
    return `
      <a class="contact-link" href="${href}"${targetAttrs} aria-label="${channel?.label || key}">
        <span class="contact-icon">${channel?.icon || ""}</span>
        <span class="contact-label">${channel?.label || key}</span>
      </a>
    `;
  }).join("");
}

async function loadData() {
  try {
    const res = await fetch("content.json", { cache: "no-store" });
    if (!res.ok) throw new Error("content.json not found");
    return await res.json();
  } catch (err) {
    console.warn("Using fallback content because content.json could not be loaded.", err);
    return fallbackData;
  }
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text || "";
}

function setHref(id, href, label) {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = href || "#";
  if (label) el.textContent = label;
}

function normalizeEmbedUrl(src) {
  if (!src) return "";
  const value = src.trim();
  if (value.includes("loom.com/share/")) {
    return value.replace("loom.com/share/", "loom.com/embed/");
  }
  if (value.includes("youtube.com/watch")) {
    try {
      const id = new URL(value).searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    } catch (_) {}
  }
  if (value.includes("youtu.be/")) {
    const id = value.split("youtu.be/")[1]?.split(/[?#]/)[0];
    if (id) return `https://www.youtube.com/embed/${id}`;
  }
  return value;
}

function resolveProofData(data) {
  if (data.proof) return data.proof;
  return {
    intro: "Live system visuals, walkthrough videos, and screenshots you can expand.",
    showcase: {
      title: "Live Systems Showcase",
      description: "",
      src: "assets/automation-backend-live-showcase.svg",
      alt: "Automation and backend systems animated showcase"
    },
    slides: (data.media || []).filter(item => item.src)
  };
}

function activeProofSlides(slides) {
  return (slides || []).filter(slide => {
    const src = slide.src || slide.video || "";
    return Boolean(src.trim());
  }).map(slide => ({
    ...slide,
    src: normalizeEmbedUrl(slide.src || slide.video || "")
  }));
}

function proofSlideMediaMarkup(slide, { preview = false } = {}) {
  const className = preview ? "proof-slide-preview" : "";
  if (slide.type === "video") {
    const poster = slide.poster ? ` poster="${slide.poster}"` : "";
    return `<video class="${className}" controls${poster}><source src="${slide.src}" type="video/mp4"></video>`;
  }
  if (slide.type === "embed") {
    return `<iframe class="${className}" src="${slide.src}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${slide.title || "Embedded demo"}"></iframe>`;
  }
  return `<img class="${className}" src="${slide.src}" alt="${slide.title || "Proof screenshot"}">`;
}

function lightboxMarkup(slide) {
  if (slide.type === "video") {
    const poster = slide.poster ? ` poster="${slide.poster}"` : "";
    return `<video controls autoplay${poster}><source src="${slide.src}" type="video/mp4"></video>`;
  }
  if (slide.type === "embed") {
    return `<iframe src="${slide.src}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${slide.title || "Embedded demo"}"></iframe>`;
  }
  return `<img src="${slide.src}" alt="${slide.title || "Proof screenshot"}">`;
}

const proofState = { slides: [], index: 0 };

function setProofIndex(nextIndex) {
  if (!proofState.slides.length) return;
  const total = proofState.slides.length;
  proofState.index = ((nextIndex % total) + total) % total;
  updateProofCarousel();
}

function updateProofCarousel() {
  const track = document.getElementById("proof-carousel-track");
  const meta = document.getElementById("proof-carousel-meta");
  const dots = document.getElementById("proof-carousel-dots");
  const prev = document.getElementById("proof-prev");
  const next = document.getElementById("proof-next");
  if (!track || !proofState.slides.length) return;

  track.style.transform = `translateX(-${proofState.index * 100}%)`;
  const slide = proofState.slides[proofState.index];
  meta.textContent = `${proofState.index + 1} / ${proofState.slides.length} — ${slide.title || "Demo"}`;

  dots.innerHTML = proofState.slides.map((_, i) => `
    <button type="button" class="proof-dot${i === proofState.index ? " active" : ""}" aria-label="Go to slide ${i + 1}" data-index="${i}"></button>
  `).join("");

  dots.querySelectorAll(".proof-dot").forEach(dot => {
    dot.addEventListener("click", () => setProofIndex(Number(dot.dataset.index)));
  });

  const single = proofState.slides.length <= 1;
  prev.disabled = single;
  next.disabled = single;
}

function openLightbox(slide) {
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightbox-content");
  if (!lightbox || !content) return;
  content.innerHTML = lightboxMarkup(slide);
  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightbox-content");
  if (!lightbox || !content) return;
  content.innerHTML = "";
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function projectLightboxSlide(project) {
  if (project.video) {
    return { type: "video", src: project.video, poster: project.image || "", title: project.title };
  }
  if (project.image) {
    return { type: "image", src: project.image, title: project.title };
  }
  return null;
}

function bindProjectMediaLightbox(projects) {
  const grid = document.getElementById("project-grid");
  if (!grid) return;
  grid.querySelectorAll(".project-media[data-expandable='true']").forEach(el => {
    const index = Number(el.dataset.projectIndex);
    const slide = projectLightboxSlide(projects[index]);
    if (!slide) return;
    const open = () => openLightbox(slide);
    el.addEventListener("click", open);
    el.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function bindProfileLightbox(profile) {
  const frame = document.querySelector(".profile-frame");
  const src = profile.profileImage;
  if (!frame || !src) return;
  frame.classList.add("is-expandable");
  frame.setAttribute("role", "button");
  frame.setAttribute("tabindex", "0");
  frame.setAttribute("aria-label", `Expand ${profile.title || profile.name} showcase`);
  const open = () => openLightbox({ type: "image", src, title: profile.title || profile.name });
  frame.addEventListener("click", open);
  frame.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
}

function bindLightboxControls() {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  if (!lightbox || closeBtn.dataset.bound) return;
  closeBtn.dataset.bound = "true";
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

function bindProofCarouselControls() {
  const prev = document.getElementById("proof-prev");
  const next = document.getElementById("proof-next");
  if (!prev || !next || prev.dataset.bound) return;
  prev.dataset.bound = "true";
  prev.addEventListener("click", () => setProofIndex(proofState.index - 1));
  next.addEventListener("click", () => setProofIndex(proofState.index + 1));
}

function renderProof(proof) {
  const showcaseEl = document.getElementById("proof-showcase");
  const carouselWrap = document.getElementById("proof-carousel-wrap");
  const track = document.getElementById("proof-carousel-track");
  if (!showcaseEl || !carouselWrap || !track) return;

  setText("proof-intro", proof.intro);

  const showcase = proof.showcase || {};
  showcaseEl.innerHTML = `
    <div class="proof-showcase-head">
      <h3>${showcase.title || "Live Systems Showcase"}</h3>
      <p>${showcase.description || ""}</p>
    </div>
    <div class="proof-showcase-frame">
      <img
        class="proof-showcase-img"
        src="${showcase.src || "assets/automation-backend-live-showcase.svg"}"
        alt="${showcase.alt || "Automation and backend systems animated showcase"}"
        loading="lazy"
      />
    </div>
  `;

  proofState.slides = activeProofSlides(proof.slides);
  proofState.index = 0;

  if (!proofState.slides.length) {
    carouselWrap.hidden = true;
    track.innerHTML = "";
    return;
  }

  carouselWrap.hidden = false;
  track.innerHTML = proofState.slides.map((slide, index) => {
    const expandable = slide.type === "image" || slide.type === "video" || slide.type === "embed";
    const mediaClickable = slide.type === "image";
    return `
      <article class="proof-slide" data-slide-index="${index}">
        <div class="proof-slide-media${mediaClickable ? "" : " is-static"}" data-expandable="${mediaClickable}" data-slide-index="${index}">
          ${proofSlideMediaMarkup(slide)}
        </div>
        <div class="proof-slide-body">
          <h3>${slide.title || "Demo"}</h3>
          <p>${slide.description || ""}</p>
          ${expandable ? `<button type="button" class="proof-expand-btn" data-slide-index="${index}">Open larger view</button>` : ""}
        </div>
      </article>
    `;
  }).join("");

  track.querySelectorAll("[data-expandable='true']").forEach(mediaWrap => {
    mediaWrap.addEventListener("click", () => {
      const index = Number(mediaWrap.dataset.slideIndex || 0);
      openLightbox(proofState.slides[index]);
    });
  });

  track.querySelectorAll(".proof-expand-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.slideIndex || 0);
      openLightbox(proofState.slides[index]);
    });
  });

  bindProofCarouselControls();
  updateProofCarousel();
}

function initReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".reveal");
  if (prefersReducedMotion) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
}

function mediaMarkup(item, className = "") {
  if (item.video) {
    return `<video class="${className}" controls poster="${item.image || ""}"><source src="${item.video}" type="video/mp4"></video>`;
  }
  if (item.type === "video" && item.src) {
    return `<video class="${className}" controls><source src="${item.src}" type="video/mp4"></video>`;
  }
  if (item.type === "embed" && item.src) {
    return `<iframe class="${className}" src="${item.src}" loading="lazy" allowfullscreen></iframe>`;
  }
  if (item.image || item.src) {
    return `<img class="${className}" src="${item.image || item.src}" alt="${item.title || "Portfolio media"}">`;
  }
  return `<div class="empty-media">Add media in content.json</div>`;
}

function render(data) {
  document.title = data.profile.title;
  document.getElementById("page-description").setAttribute("content", data.profile.metaDescription || "");
  setText("brand-initials", data.profile.initials);
  setText("brand-name", data.profile.title);
  setText("footer-name", data.profile.title);

  setText("hero-eyebrow", data.hero.eyebrow);
  setText("hero-title", data.hero.title);
  setText("hero-subtitle", data.hero.subtitle);
  setHref("primary-cta", data.hero.primaryCta.href, data.hero.primaryCta.label);
  setHref("secondary-cta", data.hero.secondaryCta.href, data.hero.secondaryCta.label);

  const profileImg = document.getElementById("profile-image");
  profileImg.src = data.profile.profileImage;
  profileImg.alt = `${data.profile.name} profile image`;
  bindProfileLightbox(data.profile);

  document.getElementById("stats").innerHTML = data.stats.map(s => `
    <div class="stat"><strong>${s.value}</strong><span>${s.label}</span></div>
  `).join("");

  document.getElementById("tool-cloud").innerHTML = data.tools.map(t => `<span class="chip">${t}</span>`).join("");

  setText("about-title", data.about.title);
  setText("about-body", data.about.body);
  document.getElementById("specialties").innerHTML = data.about.specialties.map(s => `<span class="chip">${s}</span>`).join("");

  document.getElementById("services-grid").innerHTML = data.services.map(service => `
    <article class="item-card">
      <div class="icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </article>
  `).join("");

  document.getElementById("project-grid").innerHTML = data.projects.map((project, index) => {
    const expandable = Boolean(project.image || project.video);
    return `
    <article class="project-card">
      <div class="project-media${expandable ? " is-expandable" : ""}" data-expandable="${expandable}" data-project-index="${index}"${expandable ? ` role="button" tabindex="0" aria-label="Expand ${project.title}"` : ""}>
        ${mediaMarkup(project, "project-preview")}
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${(project.tags || []).map(tag => `<span class="chip">${tag}</span>`).join("")}</div>
      </div>
    </article>
  `;
  }).join("");
  bindProjectMediaLightbox(data.projects);

  renderProof(resolveProofData(data));
  bindLightboxControls();
  initReveal();

  document.getElementById("testimonials-grid").innerHTML = data.testimonials.map(item => `
    <article class="item-card">
      <p>“${item.quote}”</p>
      <strong class="testimonial-author">${item.author}</strong>
    </article>
  `).join("");

  setText("contact-title", data.contact.title);
  setText("contact-body", data.contact.body);
  renderContactLinks(data.contact);
}

document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
});

loadData().then(render);
