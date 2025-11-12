(function () {
  const SECTION = document.querySelector('.zmeny-columns');
  console.log('SECTION found:', SECTION);
  if (!SECTION) return;

  const LS_KEY = 'sekcia_zmena_zoom';
  const LIVE = document.getElementById('zoom-live');

  const MIN = 0.7, MAX = 1.6, STEP = 0.15;
  let zoom = readInitialZoom();

  applyZoom(zoom, { announce: false });

  document.querySelectorAll('[data-zoom-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const act = btn.getAttribute('data-zoom-action');
      if (act === 'increase') setZoom(zoom + STEP);
      if (act === 'decrease') setZoom(zoom - STEP);
      if (act === 'reset') setZoom(1);
    });
  });

  const selectEl = document.getElementById('zoom-select');
  if (selectEl) {
    selectEl.addEventListener('change', (e) => {
      const val = parseFloat(e.target.value);
      if (!Number.isNaN(val)) {
        setZoom(val);
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    const ctrl = e.ctrlKey || e.metaKey;
    if (!ctrl) return;
    if (e.key === '+' || e.key === '=') { e.preventDefault(); setZoom(zoom + STEP); }
    if (e.key === '-') { e.preventDefault(); setZoom(zoom - STEP); }
    if (e.key === '0') { e.preventDefault(); setZoom(1); }
  });

  function readInitialZoom() {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const v = clamp(parseFloat(raw));
      if (!Number.isNaN(v)) return v;
    }
    return 1;
  }

  function setZoom(next) {
    zoom = clamp(next);
    applyZoom(zoom);
    localStorage.setItem(LS_KEY, String(zoom));
  }

  function clamp(v) {
    return Math.max(MIN, Math.min(MAX, Math.round(v * 100) / 100));
  }

  function applyZoom(val, { announce = true } = {}) {
    console.log(document.querySelector('.zmeny-columns').style.getPropertyValue('--content-zoom'));
    SECTION.style.setProperty('--content-zoom', val);
    console.log(getComputedStyle(document.querySelector('.zmeny-columns')).fontSize);
    SECTION.setAttribute('data-zoom', String(val));

    const selectEl = document.getElementById('zoom-select');
    if (selectEl) {
      selectEl.value = String(val);
    }

    if (announce && LIVE) {
      LIVE.textContent = `Veľkosť obsahu ${Math.round(val * 100)} %`;
    }
  }
})();
