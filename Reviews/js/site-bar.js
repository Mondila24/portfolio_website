document.addEventListener('DOMContentLoaded',function(){
  var menu=document.querySelector('.site-bar .menu');
  var navbar=document.querySelector('.site-bar .navbar');
  if(!menu||!navbar)return;
  menu.addEventListener('click',function(e){
    e.stopPropagation();
    var open=navbar.classList.toggle('active');
    menu.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';
    menu.setAttribute('aria-expanded',open?'true':'false');
  });
  document.addEventListener('click',function(e){
    if(!navbar.classList.contains('active'))return;
    var bar=document.querySelector('.site-bar');
    if(bar&&!bar.contains(e.target)){
      navbar.classList.remove('active');
      menu.innerHTML='<i class="fa-solid fa-bars"></i>';
      menu.setAttribute('aria-expanded','false');
    }
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&navbar.classList.contains('active')){
      navbar.classList.remove('active');
      menu.innerHTML='<i class="fa-solid fa-bars"></i>';
      menu.setAttribute('aria-expanded','false');
    }
  });
});
