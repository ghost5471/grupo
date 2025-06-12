// Lógica do carrinho: adiciona cada jogo como array [nome, preco, imagem] em uma array de arrays

// Array de arrays: cada elemento é [nome, preco, imagem]
let carrinhoJogos = JSON.parse(localStorage.getItem('carrinhoJogos')) || [];

// Função para adicionar um jogo ao carrinho
function adicionarAoCarrinhoPorId(cardDiv) {
  // Busca os elementos pelo id dentro da div do card
  const nome = cardDiv.querySelector('#nome')?.textContent || '';
  const preco = cardDiv.querySelector('#preco')?.textContent || '';
  const imagem = cardDiv.querySelector('#imagem')?.getAttribute('src') || '';

  // Adiciona o jogo como array [nome, preco, imagem]
  carrinhoJogos.push([nome, preco, imagem]);
  localStorage.setItem('carrinhoJogos', JSON.stringify(carrinhoJogos));
}

// Função para atualizar o contador do carrinho em todas as páginas de jogos
function atualizarContadorCarrinhoJogos() {
  const carrinhoJogos = JSON.parse(localStorage.getItem('carrinhoJogos')) || [];
  const contador = document.getElementById('cart-count');
  if (contador) contador.textContent = carrinhoJogos.length;
}

// Função para remover -1 item do carrinhoJogos a cada clique
function removerUmItemCarrinho() {
  let carrinhoJogos = JSON.parse(localStorage.getItem('carrinhoJogos')) || [];
  if (carrinhoJogos.length > 0) {
    carrinhoJogos.pop(); // Remove o último item
    localStorage.setItem('carrinhoJogos', JSON.stringify(carrinhoJogos));
    renderizarCarrinhoJogos();
    // Atualiza contador se existir
    const contador = document.getElementById('cart-count');
    if (contador) contador.textContent = carrinhoJogos.length;
  }
}

// Atualiza o contador ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  atualizarContadorCarrinhoJogos();

  // Seleciona todos os cards de produto
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const btn = card.querySelector('.add-to-cart-btn');
    if (btn) {
      btn.addEventListener('click', function() {
        adicionarAoCarrinhoPorId(card);
      });
    }
  });

  // Adiciona o evento ao botão "Remover ítens" se existir na página
  const btnRemover = document.getElementById('remover');
  if (btnRemover) {
    btnRemover.addEventListener('click', removerUmItemCarrinho);
  }
});