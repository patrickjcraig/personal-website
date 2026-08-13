(function () {
  function installStyles() {
    if (document.getElementById('site-nav-styles')) return;
    var style = document.createElement('style');
    style.id = 'site-nav-styles';
    style.textContent = '\n'
      + '.site-nav { position: relative; }\n'
      + '.site-nav-toggle { display: none; border: 1px solid var(--color-divider); background: transparent; color: var(--color-text); font: 600 12px var(--font-heading); letter-spacing: .08em; text-transform: uppercase; padding: 9px 11px; cursor: pointer; }\n'
      + '.site-nav-toggle:hover, .site-nav-toggle:focus-visible { color: var(--color-accent-700); border-color: var(--color-accent); }\n'
      + '@media (max-width: 860px) { .site-nav { gap: 12px !important; } .site-nav .nav-links { display: none !important; } .site-nav .site-nav-toggle { display: inline-flex; align-items: center; justify-content: center; } .site-nav.nav-open .nav-links { display: grid !important; grid-template-columns: 1fr; gap: 0 !important; position: absolute; z-index: 950; top: calc(100% + 1px); left: 0; right: 0; padding: 8px 20px 14px; border: 1px solid var(--color-divider); border-top: 0; background: var(--color-bg); box-shadow: var(--shadow-md); } .site-nav.nav-open .nav-links .navlink { padding: 11px 0; border-bottom: 1px solid var(--color-divider); } .site-nav.nav-open .nav-links .navlink:last-child { border-bottom: 0; } }\n';
    document.head.appendChild(style);
  }

  function close(nav, returnFocus) {
    if (!nav.classList.contains('nav-open')) return;
    nav.classList.remove('nav-open');
    nav._navToggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) nav._navToggle.focus();
  }

  function enhance(nav, index) {
    if (nav.dataset.siteNavReady || !nav.querySelector('.nav-links')) return;
    nav.dataset.siteNavReady = 'true';
    nav.classList.add('site-nav');
    if (!nav.getAttribute('aria-label')) nav.setAttribute('aria-label', 'Primary navigation');

    var links = nav.querySelector('.nav-links');
    var linksId = links.id || 'site-nav-links-' + index;
    links.id = linksId;
    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'site-nav-toggle';
    toggle.setAttribute('aria-controls', linksId);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
    nav.insertBefore(toggle, links);
    nav._navToggle = toggle;

    toggle.addEventListener('click', function () {
      var opening = !nav.classList.contains('nav-open');
      nav.classList.toggle('nav-open', opening);
      toggle.setAttribute('aria-expanded', String(opening));
    });
    links.addEventListener('click', function (event) {
      if (event.target.closest('a')) close(nav, false);
    });
  }

  function init() {
    installStyles();
    document.querySelectorAll('nav').forEach(enhance);
  }

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.site-nav.nav-open').forEach(function (nav) { close(nav, true); });
  });
  document.addEventListener('click', function (event) {
    document.querySelectorAll('.site-nav.nav-open').forEach(function (nav) {
      if (!nav.contains(event.target)) close(nav, false);
    });
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  new MutationObserver(init).observe(document.documentElement, { childList: true, subtree: true });
})();
