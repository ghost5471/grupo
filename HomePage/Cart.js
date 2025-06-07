// Inicializa o contador a partir do localStorage, se existir
let cartCount = parseInt(localStorage.getItem("carrinho")) || 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cart-count').textContent = cartCount;
});

function CartCount() {
    cartCount++;
    localStorage.setItem("carrinho", cartCount);
    document.getElementById('cart-count').textContent = cartCount;
}

function Remover() {
    cartCount = 0;
    localStorage.setItem("carrinho", cartCount);
    document.getElementById('cart-count').textContent = cartCount;
}