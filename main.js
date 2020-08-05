// toggle nav-burger

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  });

// toggel modal

// document.addEventListener('DOMContentLoaded', () => {
//   const modal = document.getElementById("modal");
//   setTimeout(function() {
//       modal.classList.toggle("is-active");
//   }, 1000);

// })

// const closeBtn = document.getElementById("closeBtn");
// closeBtn.onclick = function() {
//   modal.classList.remove("is-active");
// }

// const closeBG = document.getElementsByClassName("modal-background")[0];
// closeBG.onclick = function() {
//   modal.classList.remove("is-active");
// }

