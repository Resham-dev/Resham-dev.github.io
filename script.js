const tools = [
 {
  name: "Photoshop",
  icon: "Ps",
  color: "#31a8ff",
  skills: [
    {
      label: "Social Media Creatives",
      image: "Asset/icons/photoshop/social-media-creatives.png"
    },
    {
      label: "Presentation Visuals",
      image: "Asset/icons/photoshop/presentation-visuals.png"
    },
    {
      label: "Photo Editing & Retouching",
      image: "Asset/icons/photoshop/photo-editing-retouching.png"
    },
    {
      label: "Brand & Marketing Collateral",
      image: "Asset/icons/photoshop/brand-marketing-collateral.png"
    }
  ]
},

  {
    name: "Illustrator",
    icon: "Ai",
    color: "#ff9a00",
    
    skills: [
      { label: "Print-Ready Artwork",
        image: "Asset/icons/illustrator/print-ready-artwork.png"
       },
      { label: "Vector Design",
        image: "Asset/icons/illustrator/vector-design.png"
       },
      { label: "Infographics",
        image: "Asset/icons/illustrator/infographics.png"
       },
      { label: "Logo & Identity",
        image: "Asset/icons/illustrator/logo-identity.png"
       }
    ]
  },

  {
    name: "Python",
    icon: "Py",
    color: "#ffd43b",
    skills: [
      { label: "Flask",
        image: "Asset/icons/python/flask.png"
       },
      { label: "Django",
        image: "Asset/icons/python/django.png"
       },
      { label: "REST APIs", 
        image: "Asset/icons/python/rest api.png"
       }
    ]
  },

  {
    name: "Machine Learning",
    icon: "ML",
    color: "#48ff8f",
    skills: [
      { label: "Computer Vision",
        image: "Asset/icons/ML/computer vision.png"
       },
      { label: "TensorFlow",
        image: "Asset/icons/ML/tenserflow.png"
       },
      { label: "PyTorch",
        image: "Asset/icons/ML/pytorch.png"
       },
      { label: "YOLO",
        image: "Asset/icons/ML/yolo.png"
      },
      { label: "OpenCV",
        image: "Asset/icons/ML/opencv.png"
       }
    ]
  },

  {
    name: "Frontend",
    icon: "JS",
    color: "#f7df1e",
    skills: [
      { label: "React",
        image: "Asset/icons/javascript/react.png"
      },
      { label: "HTML", 
        image: "Asset/icons/javascript/html.png"
      },
      { label: "CSS", 
        image: "Asset/icons/javascript/css.png"
      }
    ]
  },

  {
    name: "Databases",
    icon: "DB",
    color: "#00d4ff",
    skills: [
      { label: "MySQL",
        image: "Asset/icons/Database/mysql.png"
       },
      { label: "SQL Server",
        image: "Asset/icons/Database/sql server.png"
      },
      { label: "Schema Design",
        image: "Asset/icons/Database/schema design.png"
       }
    ]
  },

  {
    name: "GitHub",
    icon: "GH",
    color: "#b8b8ff",
    skills: [
      { label: "Git",
        image: "Asset/icons/github/git.png"
      },
      { label: "Version Control",
        image: "Asset/icons/github/version control.png"
       },
      { label: "Collaboration",
        image: "Asset/icons/github/collabration.png"
       }
    ]
  },

  {
    name: "Real-Time Systems",
    icon: "RT",
    color: "#f14cff",
    skills: [
      { label: "Socket.IO",
        image: "Asset/icons/Real time system/socket-io.png"
       },
      { label: "WebSockets",
        image: "Asset/icons/Real time system/websockets.png"
       },
      { label: "RTSP",
        image: "Asset/icons/Real time system/rtsp.png"
       },
      { label: "Streaming",
        image: "Asset/icons/Real time system/streaming.png"
      }
    ]
  },

  {
    name: "Figma",
    icon: "Fg",
    color: "#a259ff",
    skills: [
      { label: "UI / UX", 
        image: "Asset/icons/figma/ui-ux.png"
      },
      { label: "Wireframes",
        image: "Asset/icons/figma/wireframe.png"
      },
      { label: "Prototypes",
        image: "Asset/icons/figma/prototypes.png"
      },
      { label: "Design Systems",
        image: "Asset/icons/figma/design system.png"
      }
    ]
  }
];

const certificates = [
  {
    "title": "Fundamentals of Graphic Design",
    "issuer": "California Institute of the Arts",
    "platform": "Coursera",
    "kind": "Course Certificate",
    "date": "1 March 2023",
    "overview": "An introduction to the core principles of graphic design and visual communication.",
    "image": "Asset/certificates/graphic-design.png"
  },
  {
    "title": "Graphic Design with AI",
    "issuer": "DigiBizz · Science and IT Department, Government of Balochistan",
    "platform": "DigiBizz",
    "kind": "Training Certificate",
    "date": "21 August–15 December 2023",
    "overview": "Four months of hands-on training in graphic design with AI and major freelance platforms at UoB.",
    "image": "Asset/certificates/graphic-design-ai.png"
  },
  {
    "title": "Dynamic Web Development",
    "issuer": "NAVTTC",
    "platform": "NAVTTC",
    "kind": "Course Certificate",
    "date": "27 April 2022",
    "overview": "Web development training at the Faculty Training & Development Centre, UOB, Quetta, completed June–December 2021.",
    "image": "Asset/certificates/web-development.png"
  },
  {
    "title": "Introduction to Mobile Development",
    "issuer": "Meta",
    "platform": "Coursera",
    "kind": "Course Certificate",
    "date": "25 April 2023",
    "overview": "An introductory course exploring mobile application development.",
    "image": "Asset/certificates/mobile-development.png"
  },
  {
    "title": "Supervised Machine Learning: Regression and Classification",
    "issuer": "DeepLearning.AI & Stanford Online",
    "platform": "Coursera",
    "kind": "Course Certificate",
    "date": "25 March 2023",
    "overview": "Foundations of supervised machine learning, with a focus on regression and classification.",
    "image": "Asset/certificates/machine-learning.png"
  },
  {
    "title": "Fake News Detection with Machine Learning",
    "issuer": "Coursera",
    "platform": "Coursera",
    "kind": "Project Certificate",
    "date": "8 April 2023",
    "overview": "A practical project applying machine learning to fake news detection.",
    "image": "Asset/certificates/fake-news-detection.png"
  },
  {
    "title": "Introduction to Cybersecurity Tools & Cyberattacks",
    "issuer": "IBM",
    "platform": "Coursera",
    "kind": "Course Certificate",
    "date": "20 February 2023",
    "overview": "An introduction to cybersecurity tools, cyberattacks, and security fundamentals.",
    "image": "Asset/certificates/cybersecurity.png"
  },
  {
    "title": "Operating Systems: Overview, Administration, and Security",
    "issuer": "IBM",
    "platform": "Coursera",
    "kind": "Course Certificate",
    "date": "28 February 2023",
    "overview": "An overview of operating systems, their administration, and security.",
    "image": "Asset/certificates/operating-systems.png"
  },
  {
    "title": "Live Art Competition & Exhibition",
    "issuer": "Breaking Barriers Women (BBW)",
    "platform": "Gender Parity Project",
    "kind": "Certificate of Appreciation",
    "date": "10 October 2024",
    "overview": "Recognition for participation in the live art competition and exhibition at the Fine Arts Department, UOB, Quetta.",
    "image": "Asset/certificates/art-exhibition.png"
  },
  {
    "title": "Volunteer Service — Provincial Conference",
    "issuer": "Breaking Barriers Women (BBW)",
    "platform": "BBW",
    "kind": "Volunteer Appreciation",
    "date": "21 January 2025",
    "overview": "Recognition for volunteer service at the Provincial Conference for Persons with Disabilities and Women’s Rights in Pakistan, Boys Scout Quetta.",
    "image": "Asset/certificates/volunteer-service.png"
  }
];

const achievements = [
  {
    icon: "🥇",
    title: "Gold Medal — BS Computer Science",
    type: "Academic Achievement",
    organization: "Bachelor of Science in Computer Science",
    date: "",
    description:
      "Awarded a gold medal in BS Computer Science in recognition of academic achievement.",
    image: "Asset/achievements/convo.png"
  },
  {
    icon: "🏆",
    title: "CTF Competition Winner",
    type: "Competition Award",
    organization: "Ignite · Ministry of IT & Telecom",
    date: "8 December 2024 · Quetta",
    description:
      "Won the CTF competition with Team Secret at the Digital Pakistan Cybersecurity Hackathon 2024 in Quetta.",
    image: "Asset/achievements/CTF.png"
  },
  {
    icon: "🛡️",
    title: "Cybersecurity Training Workshop",
    type: "Certificate of Appreciation",
    organization: "Ignite · Ministry of IT & Telecom",
    date: "23–25 August 2024 · Quetta",
    description:
      "Received a certificate of appreciation for the Cybersecurity Training Workshop held in Quetta.",
    image: "Asset/achievements/CSTW.png"
  }
];

const projects = {
  developer: [
    {
      title: "TaskFlow Pro",
      category: "Task Management App",
      tags: ["React", "Node.js"],
      live: "#",
      github: "#"
    },
    {
      title: "DevConnect",
      category: "Developer Social Platform",
      tags: ["Next.js", "MongoDB"],
      live: "#",
      github: "#"
    },
    {
      title: "CodeNote",
      category: "Collaborative Notes App",
      tags: ["React", "Firebase"],
      live: "#",
      github: "#"
    }
  ],

  design: [
    {
      title: "FinDash",
      category: "Finance Dashboard",
      tags: ["UI/UX", "Figma"],
      live: "#"
    },
    {
      title: "HealthCare+",
      category: "Medical Landing Page",
      tags: ["UI/UX", "Figma"],
      live: "#"
    },
    {
      title: "Brandle",
      category: "E-commerce Website",
      tags: ["UI/UX", "Figma"],
      live: "#"
    }
  ]
};

function renderTools() {
  const toolsWrapper = document.getElementById("toolsWrapper");

  if (!toolsWrapper) return;

  toolsWrapper.innerHTML = tools
    .map((tool) => {

      const total = tool.skills.length;

      const skillNodes = tool.skills
        .map((skill, index) => {

          /*
            Spread icons around the center.

            -90 starts from the top.
          */

          const angle =
            (-90 + (360 / total) * index) *
            (Math.PI / 180);

          /*
            Icon-only nodes allow us to use a much
            smaller radial spread than before.
          */

          const radiusX =
            total >= 5 ? 68 : 62;

          const radiusY =
            total >= 5 ? 55 : 50;

          const x =
            Math.cos(angle) * radiusX;

          const y =
            Math.sin(angle) * radiusY;

          return `
            <div
              class="skill-node"
              style="
                --x: ${x}px;
                --y: ${y}px;
                --delay: ${index * 60}ms;
                --tool-color: ${tool.color};
              "
            >

              <span class="skill-node-symbol">
                ${
                  skill.image
                    ? `<img
                        src="${skill.image}"
                        alt="${skill.label}"
                        class="skill-node-image"
                      >`
                    : skill.icon
                }
              </span>

              <span class="skill-node-tooltip">
                ${skill.label}
              </span>

            </div>
          `;
        })
        .join("");


      return `
        <div
          class="tool-card radial-tool"
          tabindex="0"
          role="button"
          aria-expanded="false"
          aria-label="${tool.name}: ${tool.skills
            .map(skill => skill.label)
            .join(", ")}"
          style="--tool-color: ${tool.color};"
        >

          <div class="tool-radial-area">

            <div class="tool-core">

              <div
                class="tool-icon"
                style="
                  color: ${tool.color};
                  border-color: ${tool.color}55;
                "
              >
                ${tool.icon}
              </div>

              <h3>${tool.name}</h3>

            </div>


            <div class="tool-skill-nodes">
              ${skillNodes}
            </div>

          </div>

        </div>
      `;
    })
    .join("");


  /* =========================================
     TAP SUPPORT
     ========================================= */

  const cards =
    toolsWrapper.querySelectorAll(".radial-tool");


  function closeTools(except = null) {

    cards.forEach((card) => {

      if (card === except) return;

      card.classList.remove("is-active");

      card.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  }


  cards.forEach((card) => {

    card.addEventListener(
      "click",
      (event) => {

        event.stopPropagation();

        const opening =
          !card.classList.contains(
            "is-active"
          );

        closeTools(card);

        card.classList.toggle(
          "is-active",
          opening
        );

        card.setAttribute(
          "aria-expanded",
          String(opening)
        );

      }
    );


    card.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key !== "Enter" &&
          event.key !== " "
        ) {
          return;
        }

        event.preventDefault();

        card.click();

      }
    );

  });


  document.addEventListener(
    "click",
    () => {
      closeTools();
    }
  );
}

function renderCertificates() {
  const wrapper = document.getElementById('certificatesWrapper');
  if (!wrapper) return;
    const dialog = document.createElement('dialog');
    dialog.id = 'certificateViewer';
    dialog.className = 'certificate-viewer';
    dialog.setAttribute('aria-labelledby', 'certificateViewerTitle');
    dialog.innerHTML = `<div class="certificate-viewer-header"><h2 id="certificateViewerTitle"></h2><button type="button" class="certificate-viewer-close" aria-label="Close certificate" autofocus>×</button></div><div class="certificate-viewer-body"><p class="certificate-viewer-status" role="status"></p><img class="certificate-viewer-image" alt=""></div>`;
    document.body.append(dialog);
    const title = dialog.querySelector('h2');
    const image = dialog.querySelector('img');
    const status = dialog.querySelector('[role="status"]');
    let trigger;
    let previousOverflow;
    let request = 0;
    const closeButton = dialog.querySelector('button');
    closeButton.addEventListener('click', () => dialog.close());
    let backdropDown = false;
    function outside(event) {
      const r = dialog.getBoundingClientRect();
      return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom;
    }
    dialog.addEventListener('pointerdown', e => { backdropDown = outside(e); });
    dialog.addEventListener('click', e => { if (backdropDown && outside(e)) dialog.close(); backdropDown = false; });
    dialog.addEventListener('close', () => {
      request++;
      document.body.style.overflow = previousOverflow;
      image.removeAttribute('src');
      trigger?.focus({preventScroll: true});
    });
    function open(entry, card) {
      trigger = card;
      title.textContent = entry.title;
      image.alt = `${entry.title} — certificate awarded to Resham Nisar`;
      image.hidden = true;
      status.hidden = false;
      status.textContent = 'Loading certificate…';
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
      const token = ++request;
      const source = new Image();
      source.onload = () => {
        if (token !== request || !dialog.open) return;
        image.src = source.src;
        image.hidden = false;
        status.hidden = true;
      };
      source.onerror = () => {
        if (token !== request || !dialog.open) return;
        status.textContent = 'This certificate image could not be loaded. Please try again later.';
      };
      source.src = entry.image;
    }

  wrapper.replaceChildren();
  certificates.forEach((certificate, index) => {
    const card = document.createElement('article');
    card.className = 'credential-card';
    const preview = document.createElement('div');
    preview.className = 'credential-preview';
    const thumbnail = document.createElement('img');
    thumbnail.src = certificate.image;
    thumbnail.alt = '';
    thumbnail.loading = 'lazy';
    thumbnail.decoding = 'async';
    preview.append(thumbnail);
    card.append(preview);
    const body = document.createElement('div');
    body.className = 'credential-body';
    const kind = document.createElement('p');
    kind.className = 'credential-label';
    kind.textContent = certificate.kind;
    const heading = document.createElement('h3');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'credential-open';
    button.textContent = certificate.title;
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'certificateViewer');
    button.addEventListener('click', () => open(certificate, button));
    heading.append(button);
    const summary = document.createElement('p');
    summary.className = 'credential-overview';
    summary.textContent = certificate.overview;
    const issuer = document.createElement('p');
    issuer.className = 'credential-issuer';
    issuer.textContent = certificate.issuer;
    const meta = document.createElement('p');
    meta.className = 'credential-meta';
    meta.textContent = certificate.date;
    const footer = document.createElement('span');
    footer.className = 'credential-view';
    footer.textContent = 'View certificate ↗';
    footer.setAttribute('aria-hidden', 'true');
    body.append(kind, heading, summary, issuer, meta, footer);
    card.append(body);
    wrapper.append(card);
  });
}

function renderAchievements() {
  const wrapper = document.getElementById("achievementsWrapper");
  if (!wrapper) return;

  // Create an independent achievement popup once.
  let dialog = document.getElementById("achievementPopup");

  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.id = "achievementPopup";
    dialog.className = "achievement-popup";
    dialog.setAttribute("aria-labelledby", "achievementPopupTitle");

    dialog.innerHTML = `
      <div class="achievement-popup-header">
        <h2 id="achievementPopupTitle"></h2>
        <button
          type="button"
          class="achievement-popup-close"
          aria-label="Close certificate"
          autofocus
        >×</button>
      </div>

      <div class="achievement-popup-content">
        <p class="achievement-popup-status" role="status"></p>
        <img class="achievement-popup-image" alt="" hidden>
      </div>
    `;

    document.body.appendChild(dialog);

    dialog.querySelector(".achievement-popup-close")
      .addEventListener("click", () => dialog.close());

    // Close only when the click is outside the popup.
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();

      const outside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

      if (event.target === dialog && outside) dialog.close();
    });

    dialog.addEventListener("close", () => {
      document.body.style.overflow = dialog.previousOverflow;
      dialog.querySelector("img").removeAttribute("src");
      dialog.returnFocus?.focus({ preventScroll: true });
    });
  }

  function openAchievement(achievement, trigger) {
    const image = dialog.querySelector(".achievement-popup-image");
    const status = dialog.querySelector(".achievement-popup-status");

    dialog.querySelector("#achievementPopupTitle").textContent =
      achievement.title;

    dialog.returnFocus = trigger;
    dialog.previousOverflow = document.body.style.overflow;

    image.hidden = true;
    image.alt = `${achievement.title} — Resham Nisar`;
    status.hidden = false;
    status.textContent = "Loading certificate…";

    image.onload = () => {
      image.hidden = false;
      status.hidden = true;
    };

    image.onerror = () => {
      image.hidden = true;
      status.hidden = false;
      status.textContent = "The certificate image could not be loaded.";
    };

    image.src = achievement.image;

    document.body.style.overflow = "hidden";
    dialog.showModal();
  }

  wrapper.replaceChildren();

  achievements.forEach((achievement) => {
    const card = document.createElement("article");
    card.className = "achievement-card achievement-updated";

    const icon = document.createElement("span");
    icon.className = "achievement-emblem";
    icon.textContent = achievement.icon;
    icon.setAttribute("aria-hidden", "true");

    const type = document.createElement("p");
    type.className = "achievement-category";
    type.textContent = achievement.type;

    const heading = document.createElement("h3");

    if (achievement.image) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "achievement-open";
      button.textContent = achievement.title;
      button.setAttribute("aria-haspopup", "dialog");
      button.setAttribute("aria-controls", "achievementPopup");

      button.addEventListener("click", () => {
        openAchievement(achievement, button);
      });

      heading.appendChild(button);
      card.classList.add("achievement-clickable");
    } else {
      heading.textContent = achievement.title;
    }

    const description = document.createElement("p");
    description.className = "achievement-summary";
    description.textContent = achievement.description;

    const organization = document.createElement("p");
    organization.className = "achievement-organization";
    organization.textContent = achievement.organization;

    card.append(icon, type, heading, description, organization);

    if (achievement.date) {
      const date = document.createElement("p");
      date.className = "achievement-date";
      date.textContent = achievement.date;
      card.appendChild(date);
    }

    const footer = document.createElement("span");
    footer.className = "achievement-footer";
    footer.textContent = achievement.image
      ? "View Achievement ↗"
      : "Academic distinction";

    card.appendChild(footer);
    wrapper.appendChild(card);
  });
}

// Render projects
function renderProjects(type = "developer") {
  const projectsWrapper = document.getElementById("projectsWrapper");

  if (!projectsWrapper || !projects[type]) return;

  projectsWrapper.innerHTML = projects[type]
    .map((project) => {
      const tags = project.tags
        .map((tag) => `<span>${tag}</span>`)
        .join("");

      const githubLink = project.github
        ? `<a href="${project.github}">GitHub ↗</a>`
        : "";

      return `
        <article class="project-card">
          <div class="project-image">
            ${project.title} Preview
          </div>

          <h3>${project.title}</h3>
          <p>${project.category}</p>

          <div class="project-tags">
            ${tags}
          </div>

          <div class="project-links">
            <a href="${project.live}">Live ↗</a>
            ${githubLink}
          </div>
        </article>
      `;
    })
    .join("");
}

// Developer/design project switching
function setupWorkTabs() {
  const workTabs = document.querySelectorAll(".work-tab");

  workTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      workTabs.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-pressed", "true");

      renderProjects(tab.dataset.work);
      animateProjectCards();
    });
  });
}

// Mobile navigation
function setupMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-links a");

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open menu");
    });
  });
}

// Highlight the current section in navigation
function setupActiveNav() {
  const navItems = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section[id]");

  if (!navItems.length || !sections.length) return;

  let scheduled = false;

  function update() {
    scheduled = false;

    let current = "home";

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 140) {
        current = section.id;
      }
    });

    navItems.forEach((link) => {
      const active = link.getAttribute("href") === `#${current}`;

      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function schedule() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);

  update();
}

// Dark/light mode
function setupTheme() {
  const toggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    const label = `Switch to ${
      theme === "dark" ? "light" : "dark"
    } mode`;

    toggle.setAttribute("aria-label", label);
    toggle.title = label;
  }

  applyTheme(document.documentElement.dataset.theme || "dark");

  toggle.addEventListener("click", () => {
    const theme =
      document.documentElement.dataset.theme === "dark"
        ? "light"
        : "dark";

    applyTheme(theme);

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (_) {
      // Theme switching still works when storage is unavailable.
    }
  });
}

// Animate projects when switching categories
function animateProjectCards() {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  document.querySelectorAll(".project-card").forEach((card, index) => {
    if (typeof card.animate !== "function") return;

    card.animate(
      [
        {
          opacity: 0,
          transform: "translateY(16px) scale(.98)"
        },
        {
          opacity: 1,
          transform: "translateY(0) scale(1)"
        }
      ],
      {
        duration: 420,
        delay: index * 60,
        easing: "cubic-bezier(.22,1,.36,1)",
        fill: "backwards"
      }
    );
  });
}

// Reveal sections as they enter the viewport
function setupScrollReveal() {
  const motion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (
    motion.matches ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.06
    }
  );

  const revealElements = document.querySelectorAll(
    [
      ".tools-wrapper",
      ".about-card",
      ".section-title",
      ".certificates-wrapper",
      ".achievements-wrapper",
      ".work-switch",
      ".projects-wrapper",
      ".contact-card"
    ].join(", ")
  );

  revealElements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      return;
    }

    element.classList.add("scroll-reveal");
    observer.observe(element);
  });

  motion.addEventListener("change", (event) => {
    if (!event.matches) return;

    observer.disconnect();

    document.querySelectorAll(".scroll-reveal").forEach((element) => {
      element.classList.add("is-visible");
    });
  });
}

// Close the mobile menu with Escape or when leaving navigation
function setupMenuDismissal() {
  const button = document.getElementById("menuBtn");
  const links = document.getElementById("navLinks");

  function closeMenu(returnFocus = false) {
    links.classList.remove("show");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open menu");

    if (returnFocus) {
      button.focus();
    }
  }

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      links.classList.contains("show")
    ) {
      closeMenu(true);
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".navbar")) {
      closeMenu();
    }
  });

  document.addEventListener("focusin", (event) => {
    if (!event.target.closest(".navbar")) {
      closeMenu();
    }
  });

  window
    .matchMedia("(min-width: 1101px)")
    .addEventListener("change", (event) => {
      if (event.matches) {
        closeMenu();
      }
    });
}

// Initialize portfolio
renderTools();
renderCertificates();
renderAchievements();
renderProjects("developer");

setupWorkTabs();
setupMobileMenu();
setupActiveNav();
setupTheme();
setupScrollReveal();
setupMenuDismissal();

document.getElementById("currentYear").textContent =
  new Date().getFullYear();



function setupHeroTyping() {
  const title = document.getElementById("typingTitle");
  const firstLine = document.getElementById("typingFirst");
  const secondLine = document.getElementById("typingSecond");

  if (!title || !firstLine || !secondLine) return;
  if (title.dataset.typingReady === "true") return;

  title.dataset.typingReady = "true";

  // Each message has a white first line and a gradient second line.
  const messages = [
    ["From Wireframes to", "Working Products."],
    ["Thoughtfully Designed.", "Carefully Developed."],
    ["Beautiful Interfaces.", "Seamless Experiences."]
  ];

  const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const typingSpeed = 75;
  const deletingSpeed = 35;
  const completedPause = 2200;
  const nextMessagePause = 400;

  let messageIndex = 0;
  let characterIndex = 0;
  let deleting = false;
  let timer;

  function displayText() {
    const [first, second] = messages[messageIndex];

    firstLine.textContent = first.slice(
      0,
      Math.min(characterIndex, first.length)
    );

    secondLine.textContent = second.slice(
      0,
      Math.max(0, characterIndex - first.length)
    );

    const onFirstLine = characterIndex < first.length;

    title.classList.toggle("is-typing-first", onFirstLine);
    title.classList.toggle("is-typing-second", !onFirstLine);
  }

  function tick() {
    const [first, second] = messages[messageIndex];
    const totalCharacters = first.length + second.length;

    characterIndex += deleting ? -1 : 1;
    displayText();

    let delay = deleting ? deletingSpeed : typingSpeed;

    // Finished typing: hold the full message, then delete it.
    if (!deleting && characterIndex === totalCharacters) {
      deleting = true;
      delay = completedPause;
    }

    // Finished deleting: move to the next message.
    else if (deleting && characterIndex === 0) {
      deleting = false;
      messageIndex = (messageIndex + 1) % messages.length;
      delay = nextMessagePause;
    }

    timer = window.setTimeout(tick, delay);
  }

  function start() {
    window.clearTimeout(timer);

    messageIndex = 0;
    characterIndex = 0;
    deleting = false;

    if (motionPreference.matches) {
      firstLine.textContent = messages[0][0];
      secondLine.textContent = messages[0][1];

      title.classList.remove(
        "is-typing-first",
        "is-typing-second"
      );

      return;
    }

    displayText();
    timer = window.setTimeout(tick, 500);
  }

  motionPreference.addEventListener("change", start);
  start();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupHeroTyping);
} else {
  setupHeroTyping();
}