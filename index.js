var navList = document.getElementById('collapsed-navbar');

document.getElementById('collapsed-menu-toggle').addEventListener('click', function() {
	if (navList.style.display === 'block')
		{ navList.style.display = 'none'; }
	else
		{ navList.style.display = 'block'; }
});

document.getElementById('collapsed-about').addEventListener('click', function() {
	navList.style.display='none';
});

document.getElementById('collapsed-quals').addEventListener('click', function() {
	navList.style.display='none';
});

document.getElementById('collapsed-experience').addEventListener('click', function() {
	navList.style.display='none';
});

document.getElementById('collapsed-portfolio').addEventListener('click', function() {
	navList.style.display='none';
});

document.getElementById('collapsed-contact').addEventListener('click', function() {
	navList.style.display='none';
});

document.getElementById('collapsed-resume').addEventListener('click', function() {
	navList.style.display='none';
});