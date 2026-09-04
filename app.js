// ============================================================================
// AI APPS PORTFOLIO - CONTROLLER FOR CENTERED WHITELABEL CARDS
// ============================================================================

(function () {
  'use strict';

  let currentCategory = 'all';

  const cardsContainer = document.getElementById('cards-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const btnTopInquiry = document.getElementById('btn-top-inquiry');

  // Modal 1: Deep Dive
  const modalDeepdive = document.getElementById('modal-deepdive');
  const btnCloseMd1 = document.getElementById('btn-close-md1');
  const md1Icon = document.getElementById('md1-icon');
  const md1Title = document.getElementById('md1-title');
  const md1Url = document.getElementById('md1-url');
  const md1DirectLink = document.getElementById('md1-direct-link');
  const md1Tabs = document.querySelectorAll('.modal-tab');
  const md1Panes = document.querySelectorAll('.modal-pane');
  const md1Headline = document.getElementById('md1-headline');
  const md1Story = document.getElementById('md1-story');
  const md1FeaturesGrid = document.getElementById('md1-features-grid');
  const md1BenefitsGrid = document.getElementById('md1-benefits-grid');
  const md1OperatorPitch = document.getElementById('md1-operator-pitch');
  const md1LicensingGrid = document.getElementById('md1-licensing-grid');
  const md1RevenueText = document.getElementById('md1-revenue-text');
  const btnModalInquireTrigger = document.getElementById('btn-modal-inquire-trigger');

  // Modal 2: Tech Stack
  const modalTechstack = document.getElementById('modal-techstack');
  const btnCloseMd2 = document.getElementById('btn-close-md2');
  const md2Title = document.getElementById('md2-title');
  const md2Headline = document.getElementById('md2-headline');
  const md2Summary = document.getElementById('md2-summary');
  const md2ChipsList = document.getElementById('md2-chips-list');
  const md2DurabilityGrid = document.getElementById('md2-durability-grid');
  const md2EvolutionText = document.getElementById('md2-evolution-text');

  // Modal 3: Inquiry
  const modalInquiry = document.getElementById('modal-inquiry');
  const btnCloseInquiry = document.getElementById('btn-close-inquiry');
  const formAppSelect = document.getElementById('form-app-select');
  const inquiryForm = document.getElementById('inquiry-form');

  let activeAppId = null;

  function init() {
    renderCards();
    setupEventListeners();
  }

  // Generates authentic UI mockup preview for each app
  function renderMockupCanvas(app) {
    switch (app.id) {
      case 'hubzzoo':
        return `
          <div class="app-ui-canvas">
            <div class="ui-hubzoo-pipeline">
              <div class="pipeline-col">
                <div class="pipeline-header"><span>📥</span> Inbound Inquiries</div>
                <div class="pipeline-card-snippet">Auto-captured via WhatsApp & Web form</div>
              </div>
              <div class="pipeline-col">
                <div class="pipeline-header"><span>⚡</span> Mobile Quotes</div>
                <div class="pipeline-card-snippet">Created & dispatched on-site in < 60s</div>
              </div>
              <div class="pipeline-col">
                <div class="pipeline-header"><span>🤖</span> Auto Follow-Up</div>
                <div class="pipeline-card-snippet">Context-aware nudge scheduled (48h / 5d)</div>
              </div>
              <div class="pipeline-col">
                <div class="pipeline-header"><span>✓</span> Approved & Invoiced</div>
                <div class="pipeline-card-snippet">Direct 1-click sync to Tripletex & Fiken</div>
              </div>
            </div>
          </div>
        `;

      case 'maxmotion':
        return `
          <div class="app-ui-canvas">
            <div class="ui-maxmotion-studio">
              <div style="font-size: 0.75rem; font-weight: 700; color: #475569;">SELECT VIDEO ENGINE:</div>
              <div class="studio-engine-bar">
                <span class="engine-badge active">🎬 Wan 2.1 (35mm Cinematics)</span>
                <span class="engine-badge">⚡ Kling 1.5 Pro (Anatomy)</span>
                <span class="engine-badge">🎭 Minimax (Micro-Expressions)</span>
                <span class="engine-badge">🚀 Seedance 2.0 (High Action)</span>
              </div>
              <div class="studio-timeline-track">
                <span>TIMELINE SEQUENCER: Track 01 [Wan 2.1 Scene] ➔ Track 02 [Kling Pro Action]</span>
                <span style="color: #38bdf8;">GCS Permanent Mirror Active</span>
              </div>
            </div>
          </div>
        `;

      case 'mediabunny':
        return `
          <div class="app-ui-canvas">
            <div class="ui-mediabunny-suite">
              <div class="suite-tool-card">
                <div style="font-size: 1.2rem;">✂️</div>
                <div class="suite-tool-title">AI Background Cut</div>
                <div class="suite-tool-desc">On-device WebAssembly</div>
              </div>
              <div class="suite-tool-card">
                <div style="font-size: 1.2rem;">🎙️</div>
                <div class="suite-tool-title">EBU R128 Audio</div>
                <div class="suite-tool-desc">Broadcast Normalizer</div>
              </div>
              <div class="suite-tool-card">
                <div style="font-size: 1.2rem;">🗜️</div>
                <div class="suite-tool-title">CRF Video Squeezer</div>
                <div class="suite-tool-desc">Up to 75% size cut</div>
              </div>
              <div class="suite-tool-card">
                <div style="font-size: 1.2rem;">🐰</div>
                <div class="suite-tool-title">BunnyBot Assistant</div>
                <div class="suite-tool-desc">Gemini 3.7 Copilot</div>
              </div>
            </div>
          </div>
        `;

      case 'subsentry':
        return `
          <div class="app-ui-canvas">
            <div class="ui-subsentry-shield">
              <div class="shield-box">
                <h5>🛡️ Deceptive Dark Pattern Shield</h5>
                <p>Identifies manipulative cancellation funnels, forced annual billing, and hidden renewal terms.</p>
              </div>
              <div class="shield-box" style="background: #f0fdf4; border-color: #bbf7d0;">
                <h5 style="color: #166534;">📋 1-Click Cancellation CMS</h5>
                <p style="color: #15803d;">Direct verified settings paths + cheaper affiliate alternatives.</p>
              </div>
            </div>
          </div>
        `;

      case 'appsave':
        return `
          <div class="app-ui-canvas">
            <div class="ui-appsave-checkout">
              <div class="checkout-details">
                <span class="checkout-store">SaaS Checkout Detected: DigitalOcean / Notion / Midjourney</span>
                <span class="checkout-sub">DOM scanner active · Verified coupon verification in progress</span>
              </div>
              <span class="appsave-pill-injected">✨ AppSave: Verified Code Applied!</span>
            </div>
          </div>
        `;

      case 'upworkz':
        return `
          <div class="app-ui-canvas">
            <div class="ui-upworkz-studio">
              <div class="proposal-box">
                <h5>Stage 1: 220-Character Mobile Hook</h5>
                <p>"Bypasses Upwork client inbox truncation — starts directly with diagnosis"</p>
              </div>
              <div class="proposal-box" style="background: #eff6ff; border-color: #bfdbfe;">
                <h5 style="color: #1d4ed8;">Stage 2: Technical Gotcha Audit</h5>
                <p style="color: #1e40af;">"Pre-bid complexity rating & scope creep clauses"</p>
              </div>
            </div>
          </div>
        `;

      case 'manus':
        return `
          <div class="app-ui-canvas">
            <div class="ui-manus-agent">
              <div class="agent-step-item"><span class="step-check">✓</span> 1. Autonomous Web Research & Competitor Synthesis</div>
              <div class="agent-step-item"><span class="step-check">✓</span> 2. Headless Browser Navigation & Table Parsing</div>
              <div class="agent-step-item"><span class="step-check">✓</span> 3. Isolated MicroVM Code Generation & Live Deployment</div>
            </div>
          </div>
        `;

      default:
        return '<div class="app-ui-canvas"></div>';
    }
  }

  function renderCards() {
    cardsContainer.innerHTML = '';

    const apps = currentCategory === 'all'
      ? window.APPS_DATA
      : window.APPS_DATA.filter(app => app.category === currentCategory);

    apps.forEach((app) => {
      const card = document.createElement('article');
      card.className = 'app-card';

      // Clean Browser Window Frame with Authentic UI Preview
      const browserFrameHtml = `
        <div class="card-browser-frame">
          <div class="browser-header-bar">
            <div class="browser-traffic-lights">
              <span class="traffic-light light-red"></span>
              <span class="traffic-light light-yellow"></span>
              <span class="traffic-light light-green"></span>
            </div>
            <div class="browser-url-pill">
              <span>🔒</span>
              <span>https://${app.domain}</span>
            </div>
            <span class="browser-status-tag ${app.statusType === 'preview' ? 'preview' : ''}">
              ${app.statusBadge}
            </span>
          </div>

          ${renderMockupCanvas(app)}
        </div>
      `;

      // 4 Realistic Capability Tags
      const tagsHtml = app.tags.map(t => `
        <div class="tag-item">
          <span class="tag-lbl">${t.label}</span>
          <span class="tag-val">${t.val}</span>
        </div>
      `).join('');

      card.innerHTML = `
        ${browserFrameHtml}
        
        <div class="card-content-body">
          <div class="card-category-meta">${app.categoryLabel}</div>
          
          <div class="card-title-row">
            <h3>${app.name}</h3>
          </div>

          <h4 class="card-tagline">${app.tagline}</h4>

          <p class="card-description">${app.shortDescription}</p>

          <!-- 4 Capability Tags -->
          <div class="card-tags-grid">
            ${tagsHtml}
          </div>

          <!-- THE 3 ACTION LINKS AT THE BOTTOM OF EACH CARD -->
          <footer class="card-actions-footer">
            <!-- Link 1: Learn More (Deep Dive Modal) -->
            <button class="btn-card-action btn-learn-more" data-action="deepdive" data-appid="${app.id}">
              <span>🔍</span>
              <span>Learn More</span>
            </button>

            <!-- Link 2: Tech Stack (Tech Stack & Durability Modal) -->
            <button class="btn-card-action btn-tech-stack" data-action="techstack" data-appid="${app.id}">
              <span>⚡</span>
              <span>Tech Stack</span>
            </button>

            <!-- Link 3: Launch App (New Tab) -->
            <a href="${app.url}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-launch-app">
              <span>Launch App</span>
              <span>↗</span>
            </a>
          </footer>
        </div>
      `;

      cardsContainer.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // MODAL 1: DEEP DIVE
  // --------------------------------------------------------------------------
  function openDeepDiveModal(appId) {
    const app = window.APPS_DATA.find(a => a.id === appId);
    if (!app) return;
    activeAppId = appId;

    md1Icon.textContent = app.name.slice(0, 1);
    md1Title.textContent = `${app.name} — Detailed Overview & Commercial Potential`;
    md1Url.textContent = app.url;
    md1DirectLink.href = app.url;

    md1Headline.textContent = app.deepDive.headline;
    md1Story.innerHTML = app.deepDive.problemSolution;

    md1FeaturesGrid.innerHTML = app.deepDive.coreFunctions.map(f => `
      <div class="detail-card">
        <div class="detail-card-header">
          <span>${f.icon}</span>
          <h4>${f.title}</h4>
        </div>
        <div class="detail-summary">${f.summary}</div>
        <div class="detail-desc">${f.details}</div>
      </div>
    `).join('');

    md1BenefitsGrid.innerHTML = app.deepDive.userBenefits.map(b => `
      <div class="detail-card">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: #0f172a;">${b.title}</h4>
          <span style="font-size: 0.75rem; font-weight: 800; color: #166534; background: #dcfce7; padding: 2px 8px; border-radius: 999px; font-family: var(--font-mono);">${b.metric}</span>
        </div>
        <p class="detail-desc">${b.desc}</p>
      </div>
    `).join('');

    md1OperatorPitch.innerHTML = app.deepDive.whitelabel.operatorPitch;
    md1LicensingGrid.innerHTML = app.deepDive.whitelabel.models.map((m, idx) => `
      <div class="license-tier-box ${idx === 0 ? 'popular' : ''}">
        <div>
          <div class="tier-name">${m.tier}</div>
          <div class="tier-cost">${m.price}</div>
          <ul class="tier-list">
            ${m.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
        <button class="btn-card-action btn-tech-stack" style="width: 100%; font-size: 0.78rem; padding: 0.5rem;" onclick="window.requestTierInquiry('${app.id}', '${m.tier}')">
          Inquire for ${m.tier.split(' ')[0]} ➔
        </button>
      </div>
    `).join('');

    md1RevenueText.textContent = app.deepDive.whitelabel.revenuePotential;

    activateTab('overview');

    modalDeepdive.classList.add('open');
    modalDeepdive.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDeepDiveModal() {
    modalDeepdive.classList.remove('open');
    modalDeepdive.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function activateTab(tabName) {
    md1Tabs.forEach(t => {
      if (t.dataset.tab === tabName) t.classList.add('active');
      else t.classList.remove('active');
    });

    md1Panes.forEach(p => {
      if (p.id === `pane-${tabName}`) p.classList.add('active');
      else p.classList.remove('active');
    });
  }

  // --------------------------------------------------------------------------
  // MODAL 2: TECH STACK & DURABILITY
  // --------------------------------------------------------------------------
  function openTechStackModal(appId) {
    const app = window.APPS_DATA.find(a => a.id === appId);
    if (!app) return;

    md2Title.textContent = `${app.name} — Technical Architecture`;
    md2Headline.textContent = app.techStack.headline;
    md2Summary.textContent = app.techStack.summary;

    md2ChipsList.innerHTML = app.techStack.stackPills.map(p => `
      <span class="tech-chip-badge">${p}</span>
    `).join('');

    md2DurabilityGrid.innerHTML = app.techStack.durabilityPillars.map(d => `
      <div class="durability-box">
        <h5><span>${d.icon}</span> <span>${d.title}</span></h5>
        <p>${d.desc}</p>
      </div>
    `).join('');

    md2EvolutionText.innerHTML = app.techStack.continuousEvolution;

    modalTechstack.classList.add('open');
    modalTechstack.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTechStackModal() {
    modalTechstack.classList.remove('open');
    modalTechstack.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // --------------------------------------------------------------------------
  // MODAL 3: OPERATOR INQUIRY
  // --------------------------------------------------------------------------
  function openInquiryModal(appId) {
    if (appId) {
      formAppSelect.value = appId;
    } else if (activeAppId) {
      formAppSelect.value = activeAppId;
    }
    modalInquiry.classList.add('open');
    modalInquiry.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeInquiryModal() {
    modalInquiry.classList.remove('open');
    modalInquiry.setAttribute('aria-hidden', 'true');
    if (!modalDeepdive.classList.contains('open') && !modalTechstack.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  window.requestTierInquiry = function (appId, tier) {
    openInquiryModal(appId);
  };

  // --------------------------------------------------------------------------
  // EVENT LISTENERS
  // --------------------------------------------------------------------------
  function setupEventListeners() {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.cat;
        renderCards();
      });
    });

    cardsContainer.addEventListener('click', (e) => {
      const actionBtn = e.target.closest('button[data-action]');
      if (!actionBtn) return;
      const action = actionBtn.dataset.action;
      const appId = actionBtn.dataset.appid;

      if (action === 'deepdive') {
        openDeepDiveModal(appId);
      } else if (action === 'techstack') {
        openTechStackModal(appId);
      }
    });

    btnCloseMd1.addEventListener('click', closeDeepDiveModal);
    modalDeepdive.addEventListener('click', (e) => {
      if (e.target === modalDeepdive) closeDeepDiveModal();
    });
    md1Tabs.forEach(tab => {
      tab.addEventListener('click', () => activateTab(tab.dataset.tab));
    });
    btnModalInquireTrigger.addEventListener('click', () => openInquiryModal(activeAppId));

    btnCloseMd2.addEventListener('click', closeTechStackModal);
    modalTechstack.addEventListener('click', (e) => {
      if (e.target === modalTechstack) closeTechStackModal();
    });

    btnTopInquiry.addEventListener('click', () => openInquiryModal());
    btnCloseInquiry.addEventListener('click', closeInquiryModal);
    modalInquiry.addEventListener('click', (e) => {
      if (e.target === modalInquiry) closeInquiryModal();
    });

    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('btn-submit-inquiry');
      
      const appSelect = document.getElementById('form-app-select');
      const tierSelect = document.getElementById('form-tier-select');
      const appName = appSelect.options[appSelect.selectedIndex].text;
      const tierName = tierSelect.options[tierSelect.selectedIndex].text;
      const contactName = document.getElementById('form-name').value.trim();
      const contactEmail = document.getElementById('form-email').value.trim();
      const sourceSelect = document.getElementById('form-source');
      const foundSource = sourceSelect.value || 'Not specified';
      const notes = document.getElementById('form-notes').value.trim();

      const subject = encodeURIComponent(`Whitelabel Licensing Inquiry: ${appName} [${contactName}]`);
      const bodyLines = [
        `Whitelabel Licensing Inquiry`,
        `----------------------------------------`,
        `Target Platform: ${appName}`,
        `Licensing Model: ${tierName}`,
        `Name & Company: ${contactName}`,
        `Work Email: ${contactEmail}`,
        `Where they found us: ${foundSource}`,
        `Audience & Launch Goals:`,
        notes ? notes : '(None provided)',
        `----------------------------------------`,
        `Sent via AI SaaS Whitelabel Showcase Portal`
      ];

      const mailtoUrl = `mailto:paljuritzen@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

      submitBtn.textContent = 'Opening Email Client...';
      
      // Trigger the mail client
      window.location.href = mailtoUrl;

      setTimeout(() => {
        alert(`Thank you, ${contactName}! Your email client has been opened with your inquiry pre-addressed to paljuritzen@gmail.com.`);
        submitBtn.textContent = 'Request Whitelabel Prospectus';
        closeInquiryModal();
      }, 700);
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (modalInquiry.classList.contains('open')) closeInquiryModal();
        else if (modalDeepdive.classList.contains('open')) closeDeepDiveModal();
        else if (modalTechstack.classList.contains('open')) closeTechStackModal();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
