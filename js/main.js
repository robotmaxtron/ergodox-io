document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle ---
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }


  // --- Sidebar Toggle ---
  const toggles = document.querySelectorAll('.toggle');
  const overview = document.querySelector('.overview');
  
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      overview.classList.toggle('open');
    });
  });

  // --- Navigation & IntersectionObserver ---
  const navLinks = document.querySelectorAll('#nav a');
  const sections = document.querySelectorAll('.content section');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const updateActiveState = (id) => {
    // First, clear all active states
    navLinks.forEach(link => {
      const li = link.parentElement;
      li.classList.remove('current');
      li.classList.remove('parent-active');
    });

    // Then, add active states for the current section and its parents
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) {
        const li = link.parentElement;
        li.classList.add('current');
        
        // Scroll the active item into view in the sidebar
        li.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Mark all parent li elements as parent-active
        let parent = li.parentElement.closest('li');
        while (parent) {
          parent.classList.add('parent-active');
          parent = parent.parentElement.closest('li');
        }
      }
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        updateActiveState(id);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Handle initial state if hash exists
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView();
        updateActiveState(id);
      }, 100);
    }
  } else if (sections.length > 0) {
    // Default to first section if no hash
    updateActiveState(sections[0].getAttribute('id'));
  }

  // --- Smooth Scrolling ---
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          if (overview.classList.contains('open')) {
            overview.classList.remove('open');
          }
          // Update URL hash without jumping
          history.pushState(null, null, href);
        }
      }
    });
  });

  // --- Scroll Progress Bar ---
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height);
      progressBar.style.transform = `scaleX(${scrolled})`;
    });
  }

  // --- External Links ---
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
});
