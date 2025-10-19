document.getElementById('year').textContent = new Date().getFullYear();

const input = document.getElementById('searchInput');
window.addEventListener('keydown', (e) => {
  if (e.key === '/') {
    e.preventDefault();
    input.focus();
  }
});
