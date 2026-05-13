// theme-toggle.js — Dark/Light mode switcher with localStorage persistence
(function() {
  // Apply saved theme BEFORE paint to avoid flash
  const saved = localStorage.getItem('sw-theme');
  if (saved === 'light') document.documentElement.classList.add('light');

  document.addEventListener('DOMContentLoaded', function() {
    // Create toggle button
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.innerHTML = document.documentElement.classList.contains('light') ? '🌙' : '☀️';
    document.body.appendChild(btn);

    btn.addEventListener('click', function() {
      document.documentElement.classList.toggle('light');
      const isLight = document.documentElement.classList.contains('light');
      localStorage.setItem('sw-theme', isLight ? 'light' : 'dark');
      btn.innerHTML = isLight ? '🌙' : '☀️';
    });
  });
})();
