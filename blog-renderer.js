(function () {
  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char];
    });
  }

  function formatDate(value) {
    var date = new Date(value + 'T12:00:00');
    return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
  }

  function postUrl(slug, base) {
    return (base || '') + 'blog/' + encodeURIComponent(slug) + '/';
  }

  function renderIndex(target) {
    var posts = (window.siteContent && window.siteContent.posts) || [];
    var base = target.dataset.base || '';
    target.innerHTML = posts.map(function (post, index) {
      return '<article class="content-card blueprint">'
        + '<i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>'
        + '<div class="content-number">' + String(index + 1).padStart(2, '0') + '</div>'
        + '<div class="content-meta">' + escapeHtml(post.category) + ' <span aria-hidden="true">·</span> ' + escapeHtml(formatDate(post.date)) + '</div>'
        + '<h2><a href="' + postUrl(post.slug, base) + '">' + escapeHtml(post.title) + '</a></h2>'
        + '<p>' + escapeHtml(post.excerpt) + '</p>'
        + '<a class="read-link" href="' + postUrl(post.slug, base) + '">Read article <span aria-hidden="true">→</span></a>'
        + '</article>';
    }).join('');
  }

  function renderPost(target) {
    var slug = target.dataset.slug;
    var posts = (window.siteContent && window.siteContent.posts) || [];
    var post = posts.find(function (entry) { return entry.slug === slug; });
    if (!post) {
      target.innerHTML = '<p>That article could not be found. <a href="../../Blog.dc.html">Return to the blog.</a></p>';
      return;
    }
    document.title = post.title + ' | Patrick Craig';
    target.innerHTML = '<a class="back-link" href="../../Blog.dc.html">← Back to Blog</a>'
      + '<div class="post-meta">' + escapeHtml(post.category) + ' <span aria-hidden="true">·</span> ' + escapeHtml(formatDate(post.date)) + '</div>'
      + '<h1>' + escapeHtml(post.title) + '</h1>'
      + '<p class="post-dek">' + escapeHtml(post.excerpt) + '</p>'
      + '<div class="post-content">' + post.body + '</div>';
  }

  function videoFrame(video) {
    var id = String(video.youtubeId || '');
    if (/^[A-Za-z0-9_-]{11}$/.test(id)) {
      return '<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/' + id + '" title="' + escapeHtml(video.title) + '" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';
    }
    return '<div class="video-placeholder" role="img" aria-label="YouTube video placeholder"><span>Video placeholder</span><strong>Add a YouTube ID</strong><small>Update content.js to publish this video</small></div>';
  }

  function renderVideos(target) {
    var videos = (window.siteContent && window.siteContent.videos) || [];
    target.innerHTML = videos.map(function (video, index) {
      return '<article class="video-card blueprint">'
        + '<i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>'
        + videoFrame(video)
        + '<div class="video-copy"><div class="content-meta">' + String(index + 1).padStart(2, '0') + ' <span aria-hidden="true">·</span> ' + escapeHtml(video.topic) + ' <span aria-hidden="true">·</span> ' + escapeHtml(formatDate(video.date)) + '</div>'
        + '<h2>' + escapeHtml(video.title) + '</h2><p>' + escapeHtml(video.description) + '</p></div></article>';
    }).join('');
  }

  function render() {
    document.querySelectorAll('[data-blog-index]').forEach(renderIndex);
    document.querySelectorAll('[data-blog-post]').forEach(renderPost);
    document.querySelectorAll('[data-videos]').forEach(renderVideos);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
