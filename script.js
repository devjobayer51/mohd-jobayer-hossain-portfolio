(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = [...document.querySelectorAll('.nav-link')];

  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });

  navItems.forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
  }));

  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navItems.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => sectionObserver.observe(section));
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  const backToTop = document.querySelector('.back-to-top');
  const updateBackToTop = () => backToTop.classList.toggle('visible', window.scrollY > 500);
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();

  const themeButton = document.querySelector('.theme-toggle');
  themeButton.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark');
    themeButton.querySelector('.theme-icon').textContent = dark ? '☀' : '☾';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  });

  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-button').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });

  const contactForm = document.querySelector('#contact-form');
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(data.get('subject').trim());
    const body = encodeURIComponent(
      `Name: ${data.get('name').trim()}\nEmail: ${data.get('email').trim()}\n\n${data.get('message').trim()}`
    );
    const mailto = `mailto:devjobayer51@gmail.com?subject=${subject}&body=${body}`;
    document.querySelector('#form-note').textContent = 'Opening your email app with the message prepared. Please review it and press Send in your email app.';
    window.location.href = mailto;
  });
})();