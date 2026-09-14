// --- Theme Management ---
function initTheme() {
  const saved = localStorage.getItem("portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("portfolio-theme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
  }
}

document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
initTheme();

// --- Projects Rendering & Filtering ---
let isExpanded = false;
let currentFilter = 'all';

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = PROJECTS_DATA.filter(p => currentFilter === 'all' || p.category === currentFilter);
  const projectsToShow = isExpanded ? filtered : filtered.filter(p => p.featured);

  projectsToShow.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-image-wrapper">
        <span class="project-platform-badge">${project.category === 'ios' ? 'iOS Native' : project.category === 'android' ? 'Android Native' : project.category === 'desktop' ? 'Java Desktop' : 'Flutter'}</span>
        <img src="${project.coverImage}" alt="${project.title}" class="project-image" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'220\\' style=\\'background:%231E293B\\'></svg>'">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-tagline">${project.tagline}</p>
        <div class="project-badges">
          ${project.badges.map(b => `<span class="badge">${b}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${project.githubUrl}" target="_blank" class="link-github">GitHub ↗</a>
          <button class="btn-deepdive" onclick="openProjectModal('${project.id}')">Deep Dive 🔍</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  
  const toggleBtn = document.getElementById("btnToggleProjects");
  if (toggleBtn) {
    if (filtered.length <= 3) {
      toggleBtn.style.display = "none";
    } else {
      toggleBtn.style.display = "inline-flex";
      toggleBtn.innerHTML = isExpanded ? "<span>Show Less</span> ↑" : `<span>Show All Projects (${filtered.length})</span> ↓`;
    }
  }
}

function setFilter(category) {
  currentFilter = category;
  isExpanded = false; // reset expansion on filter change
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
  });
  renderProjects();
}

function toggleProjectsExpansion() {
  isExpanded = !isExpanded;
  renderProjects();
}

// --- Modal Logic ---
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  document.getElementById("modalTitle").innerText = project.title;
  document.getElementById("modalTagline").innerText = project.tagline;

  const highlightsHtml = project.keyHighlights.map(h => `<li>${h}</li>`).join('');
  const techStackHtml = project.techStack.map(t => `<span class="badge">${t}</span>`).join('');
  const videoHtml = project.videoUrl ? `
    <div class="modal-section">
      <video width="100%" controls style="border-radius: 12px; border: 1px solid var(--border-color); background: #000;">
        <source src="${project.videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  ` : '';

  document.getElementById("modalBody").innerHTML = `
    ${videoHtml}
    <div class="modal-section">
      <h4>Overview & Problem Solved</h4>
      <p>${project.overview}</p>
    </div>
    
    <div class="modal-section">
      <h4>Key Engineering Highlights</h4>
      <ul>${highlightsHtml}</ul>
    </div>
    
    <div class="arch-box">
      <h4>System Architecture & Decisions</h4>
      <p><strong>Pattern:</strong> ${project.architecture.pattern}</p>
      <p><strong>Data Flow:</strong> <span class="flow">${project.architecture.dataFlow}</span></p>
      <p><strong>Key Technical Decisions:</strong></p>
      <p style="color: var(--text-secondary); margin-top: 0.5rem;">${project.architecture.keyDecisions}</p>
    </div>
    
    <div class="modal-section">
      <h4>Complete Tech Stack</h4>
      <div class="project-badges" style="margin-top: 0.5rem;">
        ${techStackHtml}
      </div>
    </div>
    
    <div style="margin-top: 1rem;">
      <a href="${project.githubUrl}" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center;">Explore GitHub Repository ↗</a>
    </div>
  `;

  document.getElementById("projectModal").classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

// Initial render
document.addEventListener('DOMContentLoaded', renderProjects);

// Close modal on outside click
document.getElementById('projectModal')?.addEventListener('click', (e) => {
  if(e.target.id === 'projectModal') closeProjectModal();
});
