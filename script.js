/* ===========================================
   MEDICINE DATABASE — 32 diseases
=========================================== */
const medicines = {
  cold:          { cat: 'respiratory', meds: ['Aconite', 'Allium Cepa', 'Arsenicum Album'],           info: 'Common cold with runny nose, sneezing, and chills.' },
  fever:         { cat: 'respiratory', meds: ['Belladonna', 'Gelsemium', 'Ferrum Phos'],               info: 'Elevated body temperature with weakness and sweating.' },
  cough:         { cat: 'respiratory', meds: ['Drosera', 'Spongia', 'Hepar Sulph'],                    info: 'Dry or wet cough, may be persistent or spasmodic.' },
  flu:           { cat: 'respiratory', meds: ['Gelsemium', 'Eupatorium Perfoliatum', 'Rhus Tox'],      info: 'Influenza with body aches, fatigue, and fever.' },
  asthma:        { cat: 'respiratory', meds: ['Arsenicum Album', 'Ipecacuanha', 'Natrum Sulph'],       info: 'Breathing difficulty, wheezing, and chest tightness.' },
  headache:      { cat: 'other',       meds: ['Bryonia', 'Natrum Mur', 'Iris Versicolor'],             info: 'Throbbing or pressure headache of various origins.' },
  migraine:      { cat: 'other',       meds: ['Sanguinaria', 'Iris Versicolor', 'Spigelia'],           info: 'Intense one-sided headache often with nausea and light sensitivity.' },
  acidity:       { cat: 'digestive',   meds: ['Nux Vomica', 'Carbo Veg', 'Robinia'],                   info: 'Burning sensation in stomach, heartburn, and reflux.' },
  indigestion:   { cat: 'digestive',   meds: ['Pulsatilla', 'Lycopodium', 'Carbo Veg'],               info: 'Bloating, discomfort, and impaired digestion after eating.' },
  constipation:  { cat: 'digestive',   meds: ['Alumina', 'Nux Vomica', 'Bryonia'],                    info: 'Infrequent or difficult bowel movements.' },
  diarrhea:      { cat: 'digestive',   meds: ['Arsenicum Album', 'Podophyllum', 'Aloe'],               info: 'Loose stools, cramps, and urgent bowel movements.' },
  liver_disorder:{ cat: 'digestive',   meds: ['Chelidonium', 'Lycopodium', 'Natrum Sulph'],           info: 'Liver function impairment with jaundice or pain.' },
  eczema:        { cat: 'skin',        meds: ['Sulphur', 'Graphites', 'Mezereum'],                     info: 'Itchy, inflamed, and flaking skin patches.' },
  psoriasis:     { cat: 'skin',        meds: ['Arsenicum Iodatum', 'Sepia', 'Petroleum'],             info: 'Scaly red plaques commonly on elbows, knees, and scalp.' },
  skin_infection:{ cat: 'skin',        meds: ['Graphites', 'Sulphur', 'Hepar Sulph'],                 info: 'Bacterial or fungal skin infections with inflammation.' },
  hair_loss:     { cat: 'skin',        meds: ['Fluoric Acid', 'Phosphorus', 'Natrum Mur'],            info: 'Excessive hair fall and thinning of hair.' },
  dandruff:      { cat: 'skin',        meds: ['Kali Sulph', 'Natrum Mur', 'Phosphorus'],              info: 'Flaky scalp with itching and white flakes.' },
  anxiety:       { cat: 'mental',      meds: ['Aconite', 'Argentum Nitricum', 'Gelsemium'],           info: 'Excessive worry, nervousness, and panic attacks.' },
  depression:    { cat: 'mental',      meds: ['Ignatia', 'Aurum Metallicum', 'Sepia'],                info: 'Persistent sadness, hopelessness, and low energy.' },
  insomnia:      { cat: 'mental',      meds: ['Coffea Cruda', 'Passiflora', 'Kali Phos'],             info: 'Difficulty falling or staying asleep.' },
  stress:        { cat: 'mental',      meds: ['Kali Phos', 'Nux Vomica', 'Avena Sativa'],             info: 'Mental exhaustion, irritability, and burnout.' },
  joint_pain:    { cat: 'musculo',     meds: ['Rhus Tox', 'Bryonia', 'Causticum'],                    info: 'Pain and stiffness in joints, worse with movement or rest.' },
  arthritis:     { cat: 'musculo',     meds: ['Calcarea Fluor', 'Rhus Tox', 'Apis Mellifica'],        info: 'Joint inflammation with pain, swelling, and reduced mobility.' },
  back_pain:     { cat: 'musculo',     meds: ['Ruta', 'Arnica', 'Kali Carb'],                         info: 'Lower or upper back pain from muscle strain or nerve issues.' },
  hypertension:  { cat: 'other',       meds: ['Baryta Mur', 'Glonoine', 'Crataegus'],                 info: 'High blood pressure with headache and dizziness.' },
  diabetes:      { cat: 'other',       meds: ['Syzygium Jambolanum', 'Uranium Nitricum', 'Cephalandra'], info: 'Elevated blood sugar with frequent thirst and urination.' },
  allergy:       { cat: 'other',       meds: ['Natrum Mur', 'Histaminum', 'Apis Mellifica'],          info: 'Immune overreaction causing sneezing, rashes, or swelling.' },
  toothache:     { cat: 'other',       meds: ['Chamomilla', 'Coffea Cruda', 'Plantago'],              info: 'Dental pain from decay, infection, or sensitivity.' },
  ear_pain:      { cat: 'other',       meds: ['Belladonna', 'Chamomilla', 'Pulsatilla'],              info: 'Pain in ear canal or middle ear, often with infection.' },
  eye_irritation:{ cat: 'other',       meds: ['Euphrasia', 'Belladonna', 'Ruta'],                     info: 'Redness, itching, and watering of eyes.' },
  obesity:       { cat: 'other',       meds: ['Calcarea Carb', 'Phytolacca', 'Fucus Vesiculosus'],    info: 'Excess body weight affecting health and metabolism.' },
  anemia:        { cat: 'other',       meds: ['Ferrum Phos', 'Calcarea Phos', 'China'],               info: 'Low red blood cell count causing fatigue and pallor.' },
  kidney_stones: { cat: 'other',       meds: ['Berberis Vulgaris', 'Lycopodium', 'Sarsaparilla'],     info: 'Mineral deposits in kidneys causing severe flank pain.' },
};

/* ===========================================
   DISEASE FINDER
=========================================== */
let currentTab     = 'all';
let selectedDisease = null;

function formatName(key) {
  return key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function renderChips(filter = '', tab = 'all') {
  const grid = document.getElementById('disease-grid');
  grid.innerHTML = '';
  let count = 0;

  Object.entries(medicines).forEach(([key, val]) => {
    const name     = formatName(key);
    const matchTab = tab === 'all' || val.cat === tab;
    const matchSrc = name.toLowerCase().includes(filter.toLowerCase());

    if (matchTab && matchSrc) {
      const chip = document.createElement('div');
      chip.className = 'd-chip' + (selectedDisease === key ? ' selected' : '');
      chip.textContent = name;
      chip.onclick = () => selectDisease(key);
      grid.appendChild(chip);
      count++;
    }
  });

  if (count === 0) {
    grid.innerHTML = '<p style="color:var(--muted);font-size:13px;grid-column:1/-1">No diseases found — try a different search.</p>';
  }
}

function selectDisease(key) {
  selectedDisease = key;
  renderChips(document.getElementById('disease-search').value, currentTab);

  const d     = medicines[key];
  const panel = document.getElementById('result-panel');
  panel.classList.add('has-result');

  panel.innerHTML = `
    <div class="result-content">
      <h4>${formatName(key)}</h4>
      <p class="result-sub">${d.info}</p>
      <div class="med-pills">
        ${d.meds.map((m, i) => `<span class="med-pill" style="animation-delay:${i * 0.08}s">${m}</span>`).join('')}
      </div>
    </div>
  `;
}

function filterTab(el, tab) {
  currentTab = tab;
  document.querySelectorAll('.finder-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderChips(document.getElementById('disease-search').value, tab);
}

function searchDiseases(val) {
  document.getElementById('clear-btn').style.display = val ? 'block' : 'none';
  renderChips(val, currentTab);
}

function clearSearch() {
  document.getElementById('disease-search').value = '';
  document.getElementById('clear-btn').style.display = 'none';
  renderChips('', currentTab);
}

// Init chips on load
renderChips();

/* ===========================================
   NAV SEARCH → jump to finder
=========================================== */
document.getElementById('nav-search').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    document.getElementById('disease-finder').scrollIntoView({ behavior: 'smooth' });
    const query = e.target.value;
    setTimeout(() => {
      document.getElementById('disease-search').value = query;
      searchDiseases(query);
    }, 700);
  }
});

/* ===========================================
   SCROLL EFFECTS
=========================================== */
window.addEventListener('scroll', () => {
  // Sticky nav background
  document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 60);

  // Show / hide scroll-to-top button
  document.getElementById('scroll-top').classList.toggle('show', window.scrollY > 400);

  // Active nav link highlight
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      const sec = document.querySelector(href);
      if (sec) {
        const rect = sec.getBoundingClientRect();
        a.classList.toggle('active', rect.top <= 80 && rect.bottom > 80);
      }
    }
  });
});

/* ===========================================
   COUNTER ANIMATION
=========================================== */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = +el.getAttribute('data-count');
    let current  = 0;
    const step   = target / 60;

    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current >= 1000
        ? Math.round(current).toLocaleString() + '+'
        : Math.round(current) + (target >= 10 ? '+' : '');
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

setTimeout(animateCounters, 800);

/* ===========================================
   APPOINTMENT FORM
=========================================== */
function submitForm() {
  const msg = document.getElementById('success-msg');
  msg.style.display = 'block';
  setTimeout(() => { msg.style.display = 'none'; }, 5000);
}

/* ===========================================
   MOBILE MENU
=========================================== */
function toggleMob() {
  document.getElementById('mob-menu').classList.toggle('open');
}

function closeMob() {
  document.getElementById('mob-menu').classList.remove('open');
}

/* ===========================================
   THREE.JS PARTICLE BACKGROUND
=========================================== */
(function initThree() {
  const canvas   = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 80;

  // Build particle geometry
  const N         = 1400;
  const positions = new Float32Array(N * 3);
  const colors    = new Float32Array(N * 3);
  const sizes     = new Float32Array(N);

  for (let i = 0; i < N; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 220;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 220;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

    // Teal (~60%) or gold (~40%)
    if (Math.random() < 0.6) {
      colors[i * 3] = 0;   colors[i * 3 + 1] = 0.83; colors[i * 3 + 2] = 0.66;
    } else {
      colors[i * 3] = 0.9; colors[i * 3 + 1] = 0.75; colors[i * 3 + 2] = 0.15;
    }

    sizes[i] = Math.random() * 2 + 0.5;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    size: 0.8,
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Mouse tracking for parallax
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Render loop
  (function animate(timestamp = 0) {
    requestAnimationFrame(animate);
    particles.rotation.y = timestamp * 0.00012 + mouseX * 0.04;
    particles.rotation.x = timestamp * 0.00006 + mouseY * 0.04;
    renderer.render(scene, camera);
  })();
})();

/* ===========================================
   GSAP SCROLL ANIMATIONS
=========================================== */
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  // Hero
  gsap.from('.hero-badge',    { y: 30, opacity: 0, duration: 0.8, delay: 0.2 });
  gsap.from('.hero-left h1',  { y: 50, opacity: 0, duration: 1.0, delay: 0.4 });
  gsap.from('.hero-sub',      { y: 30, opacity: 0, duration: 0.8, delay: 0.7 });
  gsap.from('.hero-ctas',     { y: 20, opacity: 0, duration: 0.8, delay: 0.9 });
  gsap.from('.hero-stats .stat', { y: 20, opacity: 0, stagger: 0.15, duration: 0.7, delay: 1.1 });
  gsap.from('.doctor-card',   { scale: 0.8, opacity: 0, duration: 1.0, delay: 0.5, ease: 'back.out(1.7)' });

  // Service cards
  gsap.utils.toArray('.service-card').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 40, opacity: 0, duration: 0.6, delay: i * 0.08,
    });
  });

  // Testimonials
  gsap.utils.toArray('.testi-card').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 30, opacity: 0, duration: 0.6, delay: i * 0.1,
    });
  });

  // About section
  gsap.from('.about-img-wrap', {
    scrollTrigger: { trigger: '#about', start: 'top 80%' },
    x: -60, opacity: 0, duration: 0.9,
  });
  gsap.from('.about-right', {
    scrollTrigger: { trigger: '#about', start: 'top 80%' },
    x: 60, opacity: 0, duration: 0.9, delay: 0.2,
  });

  // Finder & Appointment
  gsap.from('.finder-ui', {
    scrollTrigger: { trigger: '#disease-finder', start: 'top 75%' },
    y: 40, opacity: 0, duration: 0.8,
  });
  gsap.from('.appt-wrap', {
    scrollTrigger: { trigger: '#appointment', start: 'top 75%' },
    y: 40, opacity: 0, duration: 0.8,
  });
}