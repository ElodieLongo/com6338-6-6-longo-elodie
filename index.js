const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');


hamburgerBtn.addEventListener("click", function(){
   hamburgerMenu.classList.toggle('show-menu');
   hamburgerBtn.classList.toggle('close');
   hamburgerBtn.setAttribute("aria-expanded", hamburgerMenu.classList.contains('show-menu'));
}); 

document.addEventListener("click", function(e){
   if (!hamburgerMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      hamburgerMenu.classList.remove('show-menu');
      hamburgerBtn.classList.remove('close');
      hamburgerBtn.setAttribute("aria-expanded", "false")
}});

document.addEventListener("keydown", function (e) {
   if (e.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
      hamburgerMenu.classList.remove('show-menu');
      hamburgerBtn.classList.remove('close');
      hamburgerBtn.focus();
      hamburgerBtn.setAttribute("aria-expanded", "false")
   }
});

document.addEventListener("keydown", function (e) {
   if (e.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
      hamburgerMenu.classList.remove('show-menu');
      hamburgerBtn.classList.remove('close');
      hamburgerBtn.focus();
      hamburgerBtn.setAttribute("aria-expanded", "false")
   }
});





