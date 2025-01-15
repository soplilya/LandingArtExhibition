


// ================= scroll-position ==================
const upArrow = document.querySelector('.up-arrow');

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 600)
    upArrow.classList.add('_active');
  else
    upArrow.classList.remove('_active');

});

// ================= burger-menu ==================
const burger = document.querySelector('.burger');
const menu = document.querySelector('.top-menu_list');

burger.addEventListener('click',()=>{

  menu.classList.toggle('_active');

});

