// Aplica tema e fonte do usuário após o DOM estar pronto
(function() {
  function applyThemeAndFont() {
    const theme = localStorage.getItem('user-theme') || 'light';
    const font = localStorage.getItem('user-font') || 'normal';
    document.body.classList.remove('dark-mode', 'large-font', 'small-font');
    if (theme === 'dark') document.body.classList.add('dark-mode');
    if (font === 'large') document.body.classList.add('large-font');
    else if (font === 'small') document.body.classList.add('small-font');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyThemeAndFont);
  } else {
    applyThemeAndFont();
  }
})();