// Main JavaScript for ECONews website

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form validation for contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');

      let isValid = true;

      // Reset previous error states
      [name, email, subject, message].forEach(field => {
        field.classList.remove('error');
      });

      // Validate name
      if (!name.value.trim()) {
        name.classList.add('error');
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.classList.add('error');
        isValid = false;
      }

      // Validate subject
      if (!subject.value) {
        subject.classList.add('error');
        isValid = false;
      }

      // Validate message
      if (!message.value.trim()) {
        message.classList.add('error');
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields correctly.');
      }
    });
  }

  // Add CSS for form errors
  const style = document.createElement('style');
  style.textContent = `
    .error {
      border-color: #dc3545 !important;
      background-color: rgba(220, 53, 69, 0.05) !important;
    }

    .error:focus {
      box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1) !important;
    }
  `;
  document.head.appendChild(style);

  // Mobile menu toggle (for future mobile optimization)
  const createMobileMenuToggle = () => {
    const navColumn = document.querySelector('.nav-column');
    const navMenu = document.querySelector('.nav-menu');

    if (window.innerWidth <= 768 && navColumn && navMenu) {
      // Create toggle button
      const toggleButton = document.createElement('button');
      toggleButton.className = 'mobile-menu-toggle';
      toggleButton.innerHTML = '☰ Menu';
      toggleButton.style.cssText = `
        display: none;
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 1000;
        background: #880112;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-family: 'Manrope', sans-serif;
        font-size: 1rem;
        cursor: pointer;
      `;

      document.body.appendChild(toggleButton);

      // Toggle menu visibility
      toggleButton.addEventListener('click', () => {
        navColumn.classList.toggle('mobile-hidden');
        toggleButton.innerHTML = navColumn.classList.contains('mobile-hidden') ? '☰ Menu' : '✕ Close';
      });

      // Show/hide based on screen size
      const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
          toggleButton.style.display = 'block';
          navColumn.classList.add('mobile-hidden');
        } else {
          toggleButton.style.display = 'none';
          navColumn.classList.remove('mobile-hidden');
        }
      };

      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);

      // Add CSS for mobile hidden state
      const mobileStyle = document.createElement('style');
      mobileStyle.textContent = `
        .mobile-hidden {
          transform: translateX(100%);
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .nav-column {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 300px;
            z-index: 999;
            transform: translateX(0);
            transition: transform 0.3s ease;
          }
        }
      `;
      document.head.appendChild(mobileStyle);
    }
  };

  // Initialize mobile menu
  createMobileMenuToggle();

  // Lazy loading for images (future optimization)
  const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  };

  // Initialize lazy loading
  lazyLoadImages();

  // Add active class to current page in navigation
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath === linkPath ||
        (currentPath.includes('/news/') && linkPath === '/news/') ||
        (currentPath === '/' && linkPath === '/')) {
      link.classList.add('active');
    }
  });

  // Back to top button
  const backToTopButton = document.createElement('button');
  backToTopButton.className = 'back-to-top';
  backToTopButton.innerHTML = '↑';
  backToTopButton.style.cssText = `
    display: none;
    position: fixed;
    bottom: 2rem;
    right: calc(${document.querySelector('.nav-column') ? document.querySelector('.nav-column').offsetWidth + 20 : 20}px);
    z-index: 100;
    background: #880112;
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    transition: opacity 0.3s ease;
  `;

  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Update back to top button position on resize
  window.addEventListener('resize', () => {
    const navWidth = document.querySelector('.nav-column') ? document.querySelector('.nav-column').offsetWidth : 0;
    backToTopButton.style.right = `calc(${navWidth + 20}px)`;
  });
});