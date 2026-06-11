document.addEventListener('click', function(e){
  if(e.target.matches('nav a')){
    var nav = document.querySelector('nav');
    if(nav) nav.classList.remove('open');
  }
});