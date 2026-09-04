// ============================================================================
// EXPERT AI WHITELABEL ADVISOR ENGINE
// Persona: Always positive, encouraging, deeply knowledgeable on all 7 apps,
// market opportunities, monetization math, and BizBox whitelabel tiers.
// Pricing Policy: Always explains that exact pricing depends on the chosen tier 
// and whether any custom work is required, so it needs to be discussed.
// ============================================================================

(function () {
  const KNOWLEDGE = {
    apps: {
      hubzzoo: {
        name: "Hubzzoo",
        tagline: "Autonomous Sales Partner & CRM for SMBs",
        url: "https://hubzzoo.ai.studio",
        market: "Contractors, plumbers, electricians, marketing consultants, and SMB service providers who lose 60%+ of sales simply because they are too busy on-site to reply to leads immediately.",
        whitelabelPotential: "Enormous recurring B2B retention! Agencies charge $49-$149/mo per client. At just 40 tradesmen clients, that generates ~$3,500/mo in pure recurring revenue with virtually zero churn because it directly wins them jobs.",
        keyFeatures: "60-second mobile quote creator, multi-channel auto follow-ups across WhatsApp/SMS/Email, and direct accounting sync with Tripletex and Fiken.",
        encouragement: "Hubzzoo is one of the highest-converting SaaS offerings you can launch because it directly puts money into business owners' pockets from day one!"
      },
      maxmotion: {
        name: "MaxMotion AI",
        tagline: "Multi-Model Generative Video Production Studio",
        url: "https://maxmotion.ai.studio",
        market: "E-commerce brands, creative ad agencies, TikTok/Reels marketing shops, and content creators needing high-volume commercial video without studio costs.",
        whitelabelPotential: "Video is the fastest-growing digital asset class in 2025/2026. Whitelabel operators can bundle this as a proprietary video generation portal charging $99-$299/mo per seat or offering high-margin credits.",
        keyFeatures: "Unified prompt orchestration across Wan 2.1, Kling 1.5 Pro, Minimax, and Seedance 2.0 with prompt enhancement and shot sequencing.",
        encouragement: "You are stepping into a multi-billion dollar generative video market. Having an all-in-one studio with all 4 top models gives you an incredible competitive moat over single-model tools!"
      },
      mediabunny: {
        name: "MediaBunny",
        tagline: "AI Media, Audio & Video Processing Suite",
        url: "https://mediabunny.ai.studio",
        market: "Podcasters, video editors, social media agencies, and digital creators needing instant media preparation without cloud lag or expensive desktop suites.",
        whitelabelPotential: "Massive margin advantage! Because background removal and audio normalization execute on-device using WebAssembly, your cloud compute server cost is virtually zero, meaning near 100% gross profit margins for operators.",
        keyFeatures: "Client-side WASM background removal, EBU R128 audio normalization, CRF intelligent video compression, and BunnyBot automation assistant.",
        encouragement: "The cost efficiency of MediaBunny is unmatched. You can offer competitive pricing while keeping almost every single dollar of subscription revenue!"
      },
      subsentry: {
        name: "SubSentry",
        tagline: "Subscription Watchdog & Dark Pattern Shield",
        url: "https://subsentry.ai.studio",
        market: "Freelancers, remote workers, SMB finance teams, and modern consumers struggling with creeping software subscription costs and deceptive cancellation traps.",
        whitelabelPotential: "High viral appeal! Consumer & B2B finance tools have exceptional organic word-of-mouth. Position it as an executive financial perk or agency cost-reduction service.",
        keyFeatures: "Bank webhook transaction monitoring, renewal countdown alerts, 1-click legal cancellation scripts, and dark-pattern friction bypass.",
        encouragement: "People love tools that immediately save them money! Showing an operator or client that SubSentry eliminated $150/mo in zombie software makes this an effortless sell!"
      },
      appsave: {
        name: "AppSave",
        tagline: "'Honey' for SaaS & AI Tooling Discounts",
        url: "https://appsave.ai.studio",
        market: "Bootstrappers, startup founders, AI engineers, and agencies who spend thousands every month on SaaS stacks and want verified active discount codes.",
        whitelabelPotential: "Dual monetization stream: monetize both monthly premium platform access AND lucrative affiliate commission kickbacks from major SaaS directories!",
        keyFeatures: "Chrome Manifest V3 browser extension for checkout auto-fill, verified crowdsourced deal engine, and personalized stack coupon alerts.",
        encouragement: "AppSave has that irresistible viral browser extension flywheel. It delivers instant gratitude every time a user saves $50 at checkout!"
      },
      upworkz: {
        name: "Upworkz",
        tagline: "Autonomous Upwork Proposal Architect & Deal Closer",
        url: "https://upworkz.ai.studio",
        market: "Top-tier freelancers, development agencies, copywriters, and consulting teams fighting to win high-budget freelance contracts on Upwork and freelance marketplaces.",
        whitelabelPotential: "High willingness-to-pay! A freelancer winning just one additional $3,000 project will gladly pay $99/mo for Upworkz all year round.",
        keyFeatures: "Gemini 2.5 proposal analysis, 220-character hook optimization, automatic gotcha question auditing, and portfolio attachment matcher.",
        encouragement: "Winning deals on freelance marketplaces is a numbers and speed game. Upworkz empowers freelancers to bid with elite quality in seconds!"
      },
      manus: {
        name: "Manus AI Studio",
        tagline: "Autonomous Generalist Action Agent & Studio",
        url: "https://manus.ai.studio",
        market: "Venture-backed startups, analysts, software teams, and executive operators seeking autonomous agents that do not just chat, but actually execute multi-step computer tasks.",
        whitelabelPotential: "Premium enterprise pricing power! Autonomous agents command $199-$999/mo enterprise contracts when packaged as an autonomous research or workflow assistant.",
        keyFeatures: "Autonomous web research, headless browser navigation, isolated MicroVM code execution, and persistent memory across sessions.",
        encouragement: "Autonomous computer-use agents represent the cutting frontier of AI. Operating your own branded action agent studio positions you at the very forefront of the industry!"
      }
    }
  };

  const POSITIVE_OPENERS = [
    "That is a brilliant question! ",
    "I love where your head is at! ",
    "What a fantastic strategic angle! ",
    "You are tapping into an incredible opportunity here! ",
    "Awesome insight! Let's break down the tremendous potential: "
  ];

  const ENCOURAGING_CLOSERS = [
    "\n\nYou are in an amazing position to capitalize on this! Would you like me to open the Whitelabel Inquiry form for you so we can tailor a proposal to your exact goals?",
    "\n\nThe timing for this market could not be better. Which licensing model feels like the right match for your goals?",
    "\n\nI have zero doubt that with the right target audience, this can be a powerhouse revenue generator! Want to discuss custom workflows or specific features?",
    "\n\nEvery great SaaS empire starts with a high-leverage product like this. Let me know what questions you have next!"
  ];

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateAdvisorResponse(query) {
    const q = query.toLowerCase();

    // Specific Price & Cost Queries (Explicit Guideline Response)
    if (q.includes("price") || q.includes("pricing") || q.includes("cost") || q.includes("how much") || q.includes("fee") || q.includes("rate") || q.includes("quote") || q.includes("charge") || q.includes("skill") || q.includes("technical") || q.includes("support")) {
      return pickRandom(POSITIVE_OPENERS) + "When it comes to pricing, **it will depend on what tier you choose and if there is any custom work required, so it needs to be discussed together!**\n\n" +
        "Here is the best part — **you need absolutely NO technical ability, coding skills, or experience.** We take care of everything behind the scenes, including all technical support, cloud hosting, databases, and AI model evolution!\n\n" +
        "🎁 **What is ALWAYS Included in Every Whitelabel Package**:\n" +
        "• **100% Whitelabel Branding**: Your logo, branding, and identity.\n" +
        "• **Your Custom Domain**: Fully configured on your chosen domain (e.g. app.yourcompany.com) with SSL.\n" +
        "• **Dedicated Custom Hours**: Extra custom development hours are always included to personalize workflows, copywriting, or settings for your launch.\n" +
        "• **Behind-The-Scenes Tech Management**: Full cloud hosting, 24/7 technical support, security, and edge deployments are 100% handled for you.\n\n" +
        "💡 **Add-Ons at Very Reasonable Prices**:\n" +
        "If you ever want extra custom integrations, special industry connections, or tailored features down the line, add-ons are available at very reasonable and accessible prices!\n\n" +
        "Would you like me to open the **Whitelabel Licensing Request form** so we can discuss the ideal tier and custom hours for your launch?";
    }

    // Specific App Queries
    if (q.includes("hubzzoo") || q.includes("hubzoo") || q.includes("crm") || q.includes("sales") || q.includes("trades")) {
      const a = KNOWLEDGE.apps.hubzzoo;
      return pickRandom(POSITIVE_OPENERS) + "**" + a.name + "** is a total game-changer for service businesses and trades!\n\n" +
        "🎯 **Market Opportunity**: " + a.market + "\n\n" +
        "💰 **Whitelabel Potential**: " + a.whitelabelPotential + "\n\n" +
        "⚡ **Core Highlights**: " + a.keyFeatures + "\n\n" +
        "💡 *Why you'll succeed*: " + a.encouragement +
        pickRandom(ENCOURAGING_CLOSERS);
    }

    if (q.includes("maxmotion") || q.includes("video") || q.includes("wan") || q.includes("kling") || q.includes("minimax") || q.includes("seedance")) {
      const a = KNOWLEDGE.apps.maxmotion;
      return pickRandom(POSITIVE_OPENERS) + "**" + a.name + "** places you right at the crest of the generative video revolution!\n\n" +
        "🎯 **Target Market**: " + a.market + "\n\n" +
        "💰 **Whitelabel Potential**: " + a.whitelabelPotential + "\n\n" +
        "⚡ **Multi-Model Edge**: " + a.keyFeatures + "\n\n" +
        "💡 *Why you'll succeed*: " + a.encouragement +
        pickRandom(ENCOURAGING_CLOSERS);
    }

    if (q.includes("mediabunny") || q.includes("audio") || q.includes("media") || q.includes("wasm") || q.includes("background") || q.includes("bunny")) {
      const a = KNOWLEDGE.apps.mediabunny;
      return pickRandom(POSITIVE_OPENERS) + "**" + a.name + "** is an absolute marvel of modern web engineering!\n\n" +
        "🎯 **Target Audience**: " + a.market + "\n\n" +
        "💰 **Operator Margins**: " + a.whitelabelPotential + "\n\n" +
        "⚡ **Key Tech**: " + a.keyFeatures + "\n\n" +
        "💡 *Why you'll succeed*: " + a.encouragement +
        pickRandom(ENCOURAGING_CLOSERS);
    }

    if (q.includes("subsentry") || q.includes("subscription") || q.includes("cancel") || q.includes("watchdog")) {
      const a = KNOWLEDGE.apps.subsentry;
      return pickRandom(POSITIVE_OPENERS) + "**" + a.name + "** solves one of the most relatable pain points in the modern economy!\n\n" +
        "🎯 **Market Demand**: " + a.market + "\n\n" +
        "💰 **Whitelabel Potential**: " + a.whitelabelPotential + "\n\n" +
        "⚡ **Key Capabilities**: " + a.keyFeatures + "\n\n" +
        "💡 *Why you'll succeed*: " + a.encouragement +
        pickRandom(ENCOURAGING_CLOSERS);
    }

    if (q.includes("appsave") || q.includes("discount") || q.includes("coupon") || q.includes("honey") || q.includes("extension")) {
      const a = KNOWLEDGE.apps.appsave;
      return pickRandom(POSITIVE_OPENERS) + "**" + a.name + "** is engineered for viral, high-velocity adoption!\n\n" +
        "🎯 **Target Audience**: " + a.market + "\n\n" +
        "💰 **Revenue Model**: " + a.whitelabelPotential + "\n\n" +
        "⚡ **Key Features**: " + a.keyFeatures + "\n\n" +
        "💡 *Why you'll succeed*: " + a.encouragement +
        pickRandom(ENCOURAGING_CLOSERS);
    }

    if (q.includes("upwork") || q.includes("proposal") || q.includes("freelanc") || q.includes("closer")) {
      const a = KNOWLEDGE.apps.upworkz;
      return pickRandom(POSITIVE_OPENERS) + "**" + a.name + "** is the ultimate secret weapon for high-ticket deal making!\n\n" +
        "🎯 **Target Market**: " + a.market + "\n\n" +
        "💰 **Whitelabel Potential**: " + a.whitelabelPotential + "\n\n" +
        "⚡ **Winning Edge**: " + a.keyFeatures + "\n\n" +
        "💡 *Why you'll succeed*: " + a.encouragement +
        pickRandom(ENCOURAGING_CLOSERS);
    }

    if (q.includes("manus") || q.includes("agent") || q.includes("autonomous") || q.includes("action")) {
      const a = KNOWLEDGE.apps.manus;
      return pickRandom(POSITIVE_OPENERS) + "**" + a.name + "** puts you at the absolute forefront of enterprise autonomous AI!\n\n" +
        "🎯 **Target Market**: " + a.market + "\n\n" +
        "💰 **Whitelabel Potential**: " + a.whitelabelPotential + "\n\n" +
        "⚡ **Cutting-Edge Tech**: " + a.keyFeatures + "\n\n" +
        "💡 *Why you'll succeed*: " + a.encouragement +
        pickRandom(ENCOURAGING_CLOSERS);
    }

    // Whitelabel Tiers & Models
    if (q.includes("tier") || q.includes("license") || q.includes("model") || q.includes("lease") || q.includes("buyout") || q.includes("turnkey")) {
      return pickRandom(POSITIVE_OPENERS) + "The **BizBox Whitelabel Framework** was specifically designed to give operators maximum flexibility and exceptional return on investment!\n\n" +
        "🌟 **1. Turnkey Whitelabel**:\nLaunch your branded SaaS in 48 hours. Keep 100% of end-user MRR while we handle servers, AI compute, and maintenance!\n\n" +
        "🚀 **2. Lease-to-Own License**:\nBootstrapper-friendly with **70% of every monthly lease credited toward full ownership**! Validate product-market fit while building equity.\n\n" +
        "👑 **3. Master Buyout & Source Code IP**:\nComplete GitHub repository transfer, zero future platform fees, and infinite sub-licensing rights worldwide!\n\n" +
        "Please note that final pricing depends on the tier chosen and any custom work required, so it is best discussed together. Which model aligns best with your growth strategy?";
    }

    // General Market & Earning Potential
    if (q.includes("market") || q.includes("money") || q.includes("revenue") || q.includes("mrr") || q.includes("potential") || q.includes("earn") || q.includes("margin")) {
      return pickRandom(POSITIVE_OPENERS) + "The AI SaaS whitelabel market is experiencing unprecedented demand! Operators who license ready-to-scale platforms skip 6-12 months of risky, expensive development and go straight to cash flow.\n\n" +
        "📊 **Illustrative Market Math**:\n" +
        "• **50 Hubzzoo clients** @ $79/mo = **$3,950 MRR** ($47k ARR)\n" +
        "• **35 MaxMotion video creators** @ $149/mo = **$5,215 MRR** ($62k ARR)\n" +
        "• **100 Upworkz freelancers** @ $49/mo = **$4,900 MRR** ($58k ARR)\n\n" +
        "Because BizBox maintains the tech stack and continuous AI upgrades, your operational overhead stays microscopic. What audience or client base do you currently work with?";
    }

    // Default High-Energy Encouraging Guide
    return pickRandom(POSITIVE_OPENERS) + "I am your dedicated AI Whitelabel Advisor, and I am thrilled to help you build an extraordinary software business!\n\n" +
      "We have 7 battle-tested AI platforms ready for your brand:\n" +
      "• **Hubzzoo** — SMB Sales Agent & 60s Quotes\n" +
      "• **MaxMotion AI** — Multi-Model Generative Video Studio\n" +
      "• **MediaBunny** — Zero-cloud-cost on-device media suite\n" +
      "• **SubSentry** — Subscription watchdog & cancellation shield\n" +
      "• **AppSave** — Honey-style SaaS discount extension\n" +
      "• **Upworkz** — AI proposal closing architect\n" +
      "• **Manus AI Studio** — Autonomous action agent\n\n" +
      "Tell me: are you looking to add a product to an existing agency, launch a new brand, or acquire full source code IP?";
  }

  // Setup UI Widget
  function initAdvisorUI() {
    // 1. Floating Action Button
    const fab = document.createElement('button');
    fab.className = 'advisor-floating-btn';
    fab.id = 'advisor-fab-trigger';
    fab.innerHTML = `
      <span class="advisor-badge-pulse">✨</span>
      <span>AI Whitelabel Advisor</span>
    `;
    document.body.appendChild(fab);

    // 2. Chat Window
    const chatWin = document.createElement('div');
    chatWin.className = 'advisor-chat-window';
    chatWin.id = 'advisor-chat-window';
    chatWin.innerHTML = `
      <div class="advisor-chat-header">
        <div class="advisor-header-info">
          <div class="advisor-avatar">🤖</div>
          <div class="advisor-title-text">
            <h4>Whitelabel Growth Advisor</h4>
            <p>Always Online · Expert AI Guidance</p>
          </div>
        </div>
        <button class="advisor-close-btn" id="advisor-close-btn" title="Minimize Advisor">✕</button>
      </div>

      <div class="advisor-chat-messages" id="advisor-messages-box">
        <div class="advisor-msg agent">
          <div class="advisor-bubble">
            <p><strong>Welcome! I'm thrilled you're exploring our portfolio. 🚀</strong></p>
            <p>I am trained on all 7 of our SaaS platforms, the BizBox licensing models, and monetization strategies for agencies and operators.</p>
            <p>How can I help you discover the perfect software business to launch today?</p>
          </div>
          <span class="advisor-msg-time">Just now</span>
        </div>
      </div>

      <div class="advisor-chips-container">
        <button class="advisor-chip-btn" data-query="Do I need technical skills?">🛠️ Zero Tech Skills Needed</button>
        <button class="advisor-chip-btn" data-query="How does licensing pricing work?">💰 Licensing Pricing</button>
        <button class="advisor-chip-btn" data-query="Tell me about Hubzzoo">⚡ Hubzzoo Opportunity</button>
        <button class="advisor-chip-btn" data-query="Explain the 3 Whitelabel Tiers">📜 Whitelabel Tiers</button>
        <button class="advisor-chip-btn" data-query="How does Lease-to-Own work?">🔑 Lease-to-Own</button>
        <button class="advisor-chip-btn" data-query="How much MRR can I generate?">📈 Revenue Math</button>
      </div>

      <div class="advisor-chat-input-bar">
        <input type="text" id="advisor-user-input" class="advisor-input-field" placeholder="Ask about pricing, custom work, or market potential..." />
        <button id="advisor-send-btn" class="advisor-send-btn" title="Send Message">➤</button>
      </div>
    `;
    document.body.appendChild(chatWin);

    // Wire up events
    const closeBtn = document.getElementById('advisor-close-btn');
    const inputField = document.getElementById('advisor-user-input');
    const sendBtn = document.getElementById('advisor-send-btn');
    const msgBox = document.getElementById('advisor-messages-box');
    const chips = chatWin.querySelectorAll('.advisor-chip-btn');

    function toggleChat(open) {
      if (open !== undefined) {
        if (open) chatWin.classList.add('open');
        else chatWin.classList.remove('open');
      } else {
        chatWin.classList.toggle('open');
      }
      if (chatWin.classList.contains('open')) {
        setTimeout(() => inputField.focus(), 200);
      }
    }

    fab.addEventListener('click', () => toggleChat(true));
    closeBtn.addEventListener('click', () => toggleChat(false));

    function appendMessage(sender, text) {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'advisor-msg ' + sender;
      
      const formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br/>');

      msgDiv.innerHTML = `
        <div class="advisor-bubble">
          <p>${formattedText}</p>
        </div>
        <span class="advisor-msg-time">Just now</span>
      `;
      msgBox.appendChild(msgDiv);
      msgBox.scrollTop = msgBox.scrollHeight;
    }

    function handleSend(userText) {
      const text = userText || inputField.value.trim();
      if (!text) return;

      appendMessage('user', text);
      if (!userText) inputField.value = '';

      // Positive conversational response
      setTimeout(() => {
        const reply = generateAdvisorResponse(text);
        appendMessage('agent', reply);
      }, 350);
    }

    sendBtn.addEventListener('click', () => handleSend());
    inputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        handleSend(chip.dataset.query);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdvisorUI);
  } else {
    initAdvisorUI();
  }
})();
