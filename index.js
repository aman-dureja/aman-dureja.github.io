document.getElementById('mobile-nav-enable').onclick = function() {
  var navLinksClassList = document.getElementById('mobile-nav-links').classList;
  if (navLinksClassList.contains('visible')) {
    navLinksClassList.remove('visible');
  }
  else {
    navLinksClassList.add('visible');
  }
}