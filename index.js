var navLinksClassList = document.getElementById('mobile-nav-links').classList;
var mobileNavLinks = document.getElementsByClassName('nav-link-mobile');

document.getElementById('mobile-nav-enable').onclick = function() {
  if (navLinksClassList.contains('visible')) {
    navLinksClassList.remove('visible');
  }
  else {
    navLinksClassList.add('visible');
  }
}

Array.prototype.forEach.call(mobileNavLinks, function(link) {
  link.onclick = function() {
    navLinksClassList.remove('visible');
  }
});