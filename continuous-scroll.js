(function () {
  var ORDER = ['index.dc.html', 'Research.dc.html', 'Publications.dc.html', 'Patents.dc.html', 'Blog.dc.html', 'Videos.dc.html', 'About.dc.html'];
  var THRESHOLD = 260;

  function currentFile() {
    var p = decodeURIComponent(location.pathname).split('/').pop();
    return ORDER.indexOf(p) >= 0 ? p : ORDER[0];
  }

  var next = ORDER[(ORDER.indexOf(currentFile()) + 1) % ORDER.length];
  var acc = 0, navigating = false, decayTimer = null;

  function atBottom() {
    return (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 3);
  }

  function bump(delta) {
    if (navigating) return;
    if (delta <= 0 || !atBottom()) { acc = 0; return; }
    acc += delta;
    clearTimeout(decayTimer);
    decayTimer = setTimeout(function () { acc = 0; }, 800);
    if (acc >= THRESHOLD) {
      navigating = true;
      location.href = next;
    }
  }

  window.addEventListener('wheel', function (e) { bump(e.deltaY); }, { passive: true });

  var lastTouch = null;
  window.addEventListener('touchstart', function (e) { lastTouch = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchmove', function (e) {
    if (lastTouch == null) return;
    var y = e.touches[0].clientY;
    bump(lastTouch - y);
    lastTouch = y;
  }, { passive: true });
  window.addEventListener('touchend', function () { lastTouch = null; }, { passive: true });

  window.addEventListener('scroll', function () { if (!atBottom() && !navigating) acc = 0; }, { passive: true });
})();
