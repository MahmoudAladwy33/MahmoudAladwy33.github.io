// Initialize Theme
function initTheme() {
  const saved = localStorage.getItem("portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const target = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", target);
  localStorage.setItem("portfolio-theme", target);
  updateThemeIcon(target);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Project Rendering
let isExpanded = false;
let currentFilter = "all";

function createProjectCardHtml(proj) {
  return `
    <div class="project-card">
      <img src="${proj.coverImage}" alt="${proj.title}" class="project-image" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'200\\' style=\\'background:%23293241\\'></svg>'">
      <div class="project-content">
        <div class="project-badges">
          ${proj.badges.map(b => `<span class="badge">${b}</span>`).join("")}
        </div>
        <h3 class="project-title" style="color: ${proj.themeColor}">${proj.title}</h3>
        <p class="project-tagline">${proj.tagline}</p>
        <div class="project-actions">
          <button class="btn btn-primary" onclick="openProjectModal('${proj.id}')">Deep Dive</button>
          <a href="${proj.githubUrl}" target="_blank" class="btn btn-outline">GitHub</a>
        </div>
      </div>
    </div>
  `;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const toggleBtn = document.getElementById("btnToggleProjects");
  
  if (!grid) return;

  const filtered = window.PROJECTS_DATA.filter(p => currentFilter === "all" || p.category === currentFilter);
  const toDisplay = (currentFilter === "all" && !isExpanded) ? filtered.slice(0, 3) : filtered;

  grid.innerHTML = toDisplay.map(proj => createProjectCardHtml(proj)).join("");

  if (toggleBtn) {
    if (filtered.length <= 3 && currentFilter === "all") {
      toggleBtn.style.display = "none";
    } else {
      toggleBtn.style.display = "inline-block";
      toggleBtn.innerHTML = isExpanded 
        ? `<span>Show Less (Top 3)</span> ↑`
        : `<span>Show All Projects (${filtered.length})</span> ↓`;
    }
  }
}

function toggleProjectsExpansion() {
  isExpanded = !isExpanded;
  renderProjects();
}

function setFilter(category) {
  currentFilter = category;
  isExpanded = true; // Auto expand when filtering
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
  
  renderProjects();
}

// Modal Logic
function openProjectModal(id) {
  const proj = window.PROJECTS_DATA.find(p => p.id === id);
  if (!proj) return;

  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');

  modalBody.innerHTML = `
    <div class="modal-header">
      <h3 style="color: ${proj.themeColor}">${proj.title}</h3>
      <p class="project-tagline">${proj.tagline}</p>
    </div>
    
    <div class="modal-section">
      <h4>Summary</h4>
      <p style="color: var(--text-muted)">${proj.summary}</p>
    </div>

    <div class="modal-section">
      <h4>Key Highlights</h4>
      <ul>
        ${proj.highlights.map(h => `<li>${h}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-section">
      <h4>Architecture & Engineering</h4>
      <p><strong>Pattern:</strong> <span style="color: var(--text-muted)">${proj.architecture.pattern}</span></p>
      <p><strong>Layers:</strong> <span style="color: var(--text-muted)">${proj.architecture.layers}</span></p>
      <p><strong>Key Decisions:</strong> <span style="color: var(--text-muted)">${proj.architecture.keyDecisions}</span></p>
    </div>
    
    <div class="modal-section">
      <h4>Full Tech Stack</h4>
      <div class="project-badges" style="margin-top: 0.5rem">
        ${proj.techStack.map(t => `<span class="badge">${t}</span>`).join("")}
      </div>
    </div>
    
    <div class="modal-section" style="text-align: right;">
       <a href="${proj.githubUrl}" target="_blank" class="btn btn-outline">View Repository</a>
    </div>
  `;

  modal.classList.add('active');
}

function closeProjectModal() {
  document.getElementById('projectModal').classList.remove('active');
}

// Contact Form
async function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const statusMsg = document.getElementById("formStatusMsg");

  statusMsg.className = "form-status-msg";
  statusMsg.textContent = "Sending...";

  try {
    const res = await fetch("https://formsubmit.co/ajax/mahmoudaladwy774@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ name, email, message, _subject: `Portfolio Inquiry from ${name}` })
    });

    if (res.ok) {
      statusMsg.className = "form-status-msg success";
      statusMsg.textContent = "✓ Message sent successfully! Delivered directly to my inbox.";
      document.getElementById("contactForm").reset();
    } else {
      throw new Error("API Error");
    }
  } catch (err) {
    statusMsg.textContent = "Redirecting to your mail client...";
    window.location.href = `mailto:mahmoudaladwy774@gmail.com?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
  }
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  
  if (window.PROJECTS_DATA) {
    renderProjects();
  }
  
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  const contactForm = document.getElementById("contactForm");
  if (contactForm) contactForm.addEventListener("submit", handleContactSubmit);
});
