// Toggle menú principal (móvil)
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Toggle submenú (móvil y teclado)
document.querySelectorAll('.has-submenu').forEach((item) => {
  const btn = item.querySelector('.submenu-toggle');
  const sub = item.querySelector('.submenu');

  btn.addEventListener('click', (e) => {
    const isOpen = sub.classList.toggle('show');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.querySelectorAll('.submenu').forEach(s => { if (s !== sub) s.classList.remove('show'); });
    document.querySelectorAll('.submenu-toggle').forEach(b => { if (b !== btn) b.setAttribute('aria-expanded','false'); });
    e.stopPropagation();
  });

  document.addEventListener('click', (e) => {
    if (!item.contains(e.target) && sub.classList.contains('show')) {
      sub.classList.remove('show');
      btn.setAttribute('aria-expanded','false');
    }
  });

  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
    if (e.key === 'Escape') { sub.classList.remove('show'); btn.setAttribute('aria-expanded','false'); btn.focus(); }
  });
});

