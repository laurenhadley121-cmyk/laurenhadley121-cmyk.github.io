const currentPage = location.pathname.split('/').pop() || 'index.html';
const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.querySelectorAll('[data-page]').forEach((link) => {
  const target = link.getAttribute('href');
  if (target === currentPage || (currentPage === '' && target === 'index.html')) {
    link.classList.add('active');
  }
});
