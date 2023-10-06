/* 
App Behavior

When the button.hamburger-btn element is clicked on smaller screens, the hamburger menu should open/close. Again, toggling the show-menu class on the .hamburger-menu element should show/hide the menu.
Clicking outside of .hamburger-menu should close the menu if it is open.
Clicking inside of .hamburger-menu should NOT close the menu.
Pressing the Escape key when the menu is open should close the menu and focus button.hamburger-btn.

Under all circumstances, when the menu is open, aria-expanded should be set to true on button.hamburger-btn, and set to false when the menu is closed.

Use aria attributes to tell user that someting is hidden
aria-hidden "true" can tell a screen reader to skip an element that should be hidden, for example.

How to test accessibility: Go to Dev tools and use lighthouse
But best is to test a screenreader on mac comm + f5
*/


let hamburgerBtn = document.getElementsByClassName('hamburger-btn')
let hamburger = document.getElementById("main-menu")

hamburgerBtn.onclick = function(){
   if ul.hamburger-menu.show-menu === "1") {
    nav ul.hamburger-menu.show-menu li = 0
   } else {
    nav ul.hamburger-menu.show-menu li =1
   } 
   }
}