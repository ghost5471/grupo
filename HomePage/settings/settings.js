
document.addEventListener('DOMContentLoaded', () => {
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const lightModeBtn = document.getElementById('light-mode-btn');
    const body = document.body;
    const userThemeKey = 'userTheme'; // Chave para o Local Storage

    // Função para aplicar o tema
    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.add('theme-light');
        } else {
            body.classList.remove('theme-light');
        }
        // Salva a preferência no Local Storage
        localStorage.setItem(userThemeKey, theme);
    }

    // Ao carregar a página, verifica se há um tema salvo no Local Storage
    const savedTheme = localStorage.getItem(userThemeKey);
    if (savedTheme) {
        applyTheme(savedTheme); // Aplica o tema salvo
    } else {
        // Se não houver tema salvo, define o tema padrão (claro, como no HTML)
        applyTheme('dark');
    }

    // Event listener para o botão de Modo Escuro
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            applyTheme('dark');
        });
    }

    // Event listener para o botão de Modo Claro
    if (lightModeBtn) {
        lightModeBtn.addEventListener('click', () => {
            applyTheme('light');
        });
    }
});