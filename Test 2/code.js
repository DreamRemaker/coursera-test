var navbar = document.getElementById('navbar');
var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
  if (prevScrollPos < currentScrollPos) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
  
  prevScrollPos = currentScrollPos;
});
