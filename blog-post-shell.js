(function () {
  var root = document.querySelector('[data-post-shell]');
  if (!root) return;
  var base = root.dataset.base || '../../';
  var slug = root.dataset.slug || '';
  root.innerHTML = '<div class="page-shell">'
    + '<nav class="page-nav" aria-label="Primary navigation">'
    + '<a class="page-brand" href="' + base + 'index.dc.html">Patrick Craig</a>'
    + '<div class="nav-links"><a class="navlink" href="' + base + 'index.dc.html">Home</a><a class="navlink" href="' + base + 'Research.dc.html">Research</a><a class="navlink" href="' + base + 'Publications.dc.html">Publications</a><a class="navlink" href="' + base + 'Patents.dc.html">Patents</a><a class="navlink" data-current href="' + base + 'Blog.dc.html">Blog</a><a class="navlink" href="' + base + 'Videos.dc.html">Videos</a><a class="navlink" href="' + base + 'About.dc.html">About</a></div>'
    + '<div class="cv-link"><a href="' + base + 'assets/Patrick-Craig-CV.pdf" download class="btn btn-primary blueprint" style="padding: 8px 16px; text-decoration: none;"><i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>Download CV</a></div></nav>'
    + '<main class="post-view" data-blog-post data-slug="' + slug + '"></main>'
    + '<footer class="site-footer"><div><h2>Patrick Craig</h2><p>PhD Candidate, University of Florida SCAN Lab. Multimodal AI for semiconductor failure analysis.</p></div><div><div class="footer-label">Site</div><div class="footer-links"><a class="navlink" href="' + base + 'Research.dc.html">Research</a><a class="navlink" href="' + base + 'Publications.dc.html">Publications</a><a class="navlink" href="' + base + 'Patents.dc.html">Patents</a><a class="navlink" href="' + base + 'Blog.dc.html">Blog</a><a class="navlink" href="' + base + 'Videos.dc.html">Videos</a><a class="navlink" href="' + base + 'About.dc.html">About &amp; CV</a></div></div></footer>'
    + '</div>';
})();
