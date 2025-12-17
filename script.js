document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const header = document.getElementById('main-header');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Close menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // Scroll Effect for Header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-zinc-950/90', 'backdrop-blur-md', 'border-b', 'border-zinc-800', 'py-3');
      header.classList.remove('py-6');
    } else {
      header.classList.remove('bg-zinc-950/90', 'backdrop-blur-md', 'border-b', 'border-zinc-800', 'py-3');
      header.classList.add('py-6');
    }
  });

  // Smooth Scroll for Anchors (Polyfill-like behavior for precision)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});