// Korean Church at Cornell — main.js

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    navToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Mark current page as active in nav
(function markActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href').endsWith(path)) a.classList.add('active');
  });
})();

// Contact form — basic client-side submission (replace with real backend/Formspree)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const name = this.querySelector('#name').value.trim();
    btn.textContent = '전송 중...';
    btn.disabled = true;

    // Simulate sending (replace with fetch to Formspree or your backend)
    setTimeout(() => {
      btn.textContent = '전송 완료!';
      contactForm.reset();
      const msg = document.createElement('p');
      msg.style.cssText = 'color:green;margin-top:1rem;font-weight:600;';
      msg.textContent = `${name}님, 메시지가 전송되었습니다. 곧 연락드리겠습니다.`;
      contactForm.appendChild(msg);
    }, 1200);
  });
}
