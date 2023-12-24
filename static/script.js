document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements for future reference
    const nav = document.getElementById('nav');
    const menuBtn = document.getElementById('menu-button');
    const mainContent = document.querySelector('.main-content');
  
    // Toggle the 'nav-open' class for showing/hiding the menu
    const toggleNav = () => {
      nav.classList.toggle('nav-open');
      menuBtn.classList.toggle('nav-open');
      mainContent.classList.toggle('nav-open');
  
      // Sets ARIA attributes for screen readers
      const isOpen = nav.classList.contains('nav-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      nav.hidden = !isOpen;
    }
  
    // Event listener for the menu button
    menuBtn.addEventListener('click', toggleNav);
  });
