// APP STATE
let currentSlideIndex = 0;
let userTier = localStorage.getItem('user_tier') || 'none'; // 'none', 'basic', 'pro'
let selectedCheckoutTier = 'basic';

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  updateAccessUI();
  renderSidebar();
  renderSlide(0);
});

// NAVIGATION & VIEW SWITCHING
function switchView(viewName) {
  const landing = document.getElementById('view-landing');
  const viewer = document.getElementById('view-viewer');
  
  if (viewName === 'viewer') {
    landing.classList.add('hidden');
    viewer.classList.remove('hidden');
  } else {
    viewer.classList.add('hidden');
    landing.classList.remove('hidden');
  }
}

function scrollToPricing() {
  document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' });
}

// UPDATE UI BASED ON USER ACCESS TIER
function updateAccessUI() {
  const badge = document.getElementById('tier-badge');

  if (userTier === 'pro') {
    badge.innerText = "FULL MEDICAL";
    badge.className = "px-2 py-0.5 rounded text-[10px] font-mono bg-brand-500/20 text-brand-300 border border-brand-500/40 font-bold";
  } else if (userTier === 'basic') {
    badge.innerText = "BASIC TIER";
    badge.className = "px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700";
  } else {
    badge.innerText = "DEMO MODE";
    badge.className = "px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20";
  }
}

// RENDER SIDEBAR MODULES
function renderSidebar() {
  const container = document.getElementById('modules-list');
  container.innerHTML = '';

  slidesData.forEach((slide, idx) => {
    const item = document.createElement('div');
    const isActive = idx === currentSlideIndex;

    item.className = `p-2.5 rounded-lg border cursor-pointer transition flex items-center justify-between ${
      isActive 
        ? 'bg-brand-500/10 border-brand-500/40 text-brand-300 font-medium' 
        : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:bg-slate-800/60'
    }`;

    item.onclick = () => goToSlide(idx);

    item.innerHTML = `
      <div class="flex items-center gap-2 overflow-hidden pr-2">
        <span class="font-mono text-[10px] text-slate-500">${idx + 1}.</span>
        <span class="truncate">${slide.title}</span>
      </div>
      <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-600 shrink-0"></i>
    `;
    container.appendChild(item);
  });
  lucide.createIcons();
}

// RENDER SLIDE CONTENT
function renderSlide(index) {
  currentSlideIndex = index;
  const slide = slidesData[index];
  const container = document.getElementById('slide-content-container');
  
  // Update Headers
  document.getElementById('slide-module-title').innerHTML = `<i data-lucide="folder" class="w-4 h-4"></i> ${slide.module}`;
  document.getElementById('slide-counter').innerText = `Slide ${index + 1} / ${slidesData.length}`;

  // Navigation button states
  document.getElementById('btn-prev').disabled = index === 0;
  document.getElementById('btn-next').disabled = index === slidesData.length - 1;

  const isProUnlocked = userTier === 'pro';

  container.innerHTML = `
    <div class="space-y-3">
      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
        Slide ${index + 1} Protocol
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${slide.title}</h2>
    </div>

    <!-- Main Text -->
    <div class="glass-card p-6 rounded-2xl border-slate-800 text-slate-300 text-sm leading-relaxed space-y-4">
      <p class="text-justify sm:text-left">${slide.text}</p>
    </div>

    <!-- Practical Application (Visible in both Basic & Pro) -->
    ${slide.practical ? `
      <div class="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
        <div class="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <i data-lucide="check-circle" class="w-4 h-4"></i>
          Practical Action Step (Basic Protocol)
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${slide.practical}</p>
      </div>
    ` : ''}

    <!-- Medical Breakdown (Unlocked in Pro / Locked in Basic) -->
    ${slide.medicalInfo ? (
      isProUnlocked ? `
        <div class="p-5 rounded-2xl bg-brand-500/10 border border-brand-500/30 space-y-2">
          <div class="flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-wider">
            <i data-lucide="microscope" class="w-4 h-4"></i>
            Medical &amp; Biochemical Analysis (Medical Edition)
          </div>
          <p class="text-xs text-slate-200 leading-relaxed font-mono">${slide.medicalInfo}</p>
        </div>
      ` : `
        <div class="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <i data-lucide="lock" class="w-4 h-4"></i>
              Medical &amp; Biochemical Deep-Dive Analysis
            </div>
            <span class="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">Medical Edition</span>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">
            The deep anatomical, endocrinological, and molecular breakdown for this slide is reserved for the <strong>Medical &amp; Advanced Edition ($39.99)</strong>.
          </p>
          <button onclick="switchView('landing'); scrollToPricing();" class="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1">
            <span>Upgrade to Full Medical</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      `
    ) : ''}
  `;

  renderSidebar();
  lucide.createIcons();
}

// SLIDE NAVIGATION CONTROLS
function nextSlide() {
  if (currentSlideIndex < slidesData.length - 1) {
    renderSlide(currentSlideIndex + 1);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    renderSlide(currentSlideIndex - 1);
  }
}

function goToSlide(index) {
  renderSlide(index);
}

// CHECKOUT SIMULATION
function openCheckout(tier, price) {
  selectedCheckoutTier = tier;
  document.getElementById('checkout-package-name').innerText = tier === 'pro' ? 'Full Medical Edition' : 'Basic Edition';
  document.getElementById('checkout-package-price').innerText = price;
  document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckout() {
  document.getElementById('checkout-modal').classList.add('hidden');
}

function processSimulatedPayment() {
  userTier = selectedCheckoutTier;
  localStorage.setItem('user_tier', userTier);
  
  closeCheckout();
  updateAccessUI();
  switchView('viewer');
  renderSlide(currentSlideIndex);
  
  alert(`Thank you! Your access to the ${selectedCheckoutTier === 'pro' ? 'Full Medical Edition ($39.99)' : 'Basic Edition ($19.99)'} has been unlocked.`);
}

// KEYBOARD NAVIGATION
document.addEventListener('keydown', (e) => {
  const viewer = document.getElementById('view-viewer');
  if (!viewer.classList.contains('hidden')) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  }
});
