// Lógica do carrinho: adiciona cada jogo como array [nome, preco, imagem] em uma array de arrays

// Array de arrays: cada elemento é [nome, preco, imagem]
let carrinhoJogos = JSON.parse(localStorage.getItem('carrinhoJogos')) || [];

// Função para adicionar um jogo ao carrinho
function adicionarAoCarrinhoPorId(cardDiv) {
  const nome = cardDiv.querySelector('#nome')?.textContent || '';
  const preco = cardDiv.querySelector('#preco')?.textContent || '';
  const imagem = cardDiv.querySelector('#imagem')?.getAttribute('src') || '';
  carrinhoJogos.push([nome, preco, imagem]);
  localStorage.setItem('carrinhoJogos', JSON.stringify(carrinhoJogos));
  atualizarContadorCarrinhoJogos();
}
// Exibe os jogos do carrinho na página Cart.html
    function renderizarCarrinhoJogos() {
      const grid = document.getElementById('product-grid');
      if (!grid) return;

      const carrinhoJogos = JSON.parse(localStorage.getItem('carrinhoJogos')) || [];
      grid.innerHTML = "";

      if (carrinhoJogos.length === 0) {
        grid.innerHTML = "<h1>Seu carrinho está vazio!</h1>";
        return;
      }

      carrinhoJogos.forEach(jogo => {
        // jogo = [nome, preco, imagem]
        const div = document.createElement('div');
        div.className = "produto-carrinho";
        div.style.position = "relative";
        div.innerHTML = `
          <div style="position:relative; border:1px solid #ccc; border-radius:10px; margin:10px; padding:10px; display:flex; align-items:center; gap:20px;">
            <img src="${jogo[2]}" width="100" alt="${jogo[0]}">
            <div style="flex:1;">
              <h3 style="margin:0;">${jogo[0]}</h3>
              <p style="margin:5px 0;">Preço: ${jogo[1]}</p>
            </div>
          </div>
        `;
        grid.appendChild(div);
      });
    }

    // Só executa na página do carrinho
    if (window.location.pathname.toLowerCase().includes('cart.html')) {
      document.addEventListener('DOMContentLoaded', renderizarCarrinhoJogos);
    }

    // Para exibir os jogos na página do carrinho, basta ler carrinhoJogos do localStorage
    // e criar as divs dinamicamente conforme necessário.

    // Adiciona o evento ao botão "Remover ítens" se existir na página do carrinho
    const btnRemover = document.getElementById('remover');
    if (btnRemover) {
      btnRemover.addEventListener('click', removerUmItemCarrinho);
    }

    // Renderiza o carrinho automaticamente na página do carrinho
    if (window.location.pathname.toLowerCase().includes('cart.html')) {
      renderizarCarrinhoJogos();
    }


// Função para atualizar o contador do carrinho em todas as páginas de jogos
function atualizarContadorCarrinhoJogos() {
  const carrinhoJogos = JSON.parse(localStorage.getItem('carrinhoJogos')) || [];
  const contador = document.getElementById('cart-count');
  if (contador) contador.textContent = carrinhoJogos.length;
}

// Função para exibir os jogos do carrinho na página Cart.html
function renderizarCarrinhoJogos() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  const carrinhoJogos = JSON.parse(localStorage.getItem('carrinhoJogos')) || [];
  grid.innerHTML = "";
  if (carrinhoJogos.length === 0) {
    grid.innerHTML = "<h1>Seu carrinho está vazio!</h1>";
    return;
  }
  carrinhoJogos.forEach(jogo => {
    const div = document.createElement('div');
    div.className = "produto-carrinho";
    div.style.position = "relative";
    div.innerHTML = `
      <div style="position:relative; border:1px solid #ccc; border-radius:10px; margin:10px; padding:10px; display:flex; align-items:center; gap:20px;">
        <img src="${jogo[2]}" width="100" alt="${jogo[0]}">
        <div style="flex:1;">
          <h3 style="margin:0;">${jogo[0]}</h3>
          <p style="margin:5px 0;">Preço: ${jogo[1]}</p>
        </div>
      </div>
    `;
    grid.appendChild(div);
  });
}

// Função para remover -1 item do carrinhoJogos a cada clique e atualizar a tela
function removerUmItemCarrinho() {
  let carrinhoJogos = JSON.parse(localStorage.getItem('carrinhoJogos')) || [];
  if (carrinhoJogos.length > 0) {
    carrinhoJogos.pop(); // Remove o último item
    localStorage.setItem('carrinhoJogos', JSON.stringify(carrinhoJogos));
    renderizarCarrinhoJogos();
    atualizarContadorCarrinhoJogos();
  }
}

// Inicialização dos eventos
document.addEventListener('DOMContentLoaded', function() {
  atualizarContadorCarrinhoJogos();

  // Adiciona evento aos botões "Comprar" nas páginas de jogos
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const btn = card.querySelector('.add-to-cart-btn');
    if (btn) {
      btn.addEventListener('click', function() {
        adicionarAoCarrinhoPorId(card);
        atualizarContadorCarrinhoJogos();
      });
    }
  });
});

  document.addEventListener('DOMContentLoaded', () => {
    const btnFinalizar = document.querySelector('.btn'); // primeiro botão "Finalizar Compra"

    if (btnFinalizar) {
      btnFinalizar.addEventListener('click', () => {
        const usuarioLogado = localStorage.getItem('users'); // Ex: pode ser um nome, ID ou token

        if (!usuarioLogado) {
          alert("⚠️ Você precisa estar logado para finalizar a compra!");
          return;
        }

        // Se estiver logado:
        alert("✅ Compra finalizada com sucesso! Obrigado pela preferência.");
        localStorage.removeItem('carrinhoJogos');
        renderizarCarrinhoJogos(); // Atualiza a exibição na tela
        atualizarContadorCarrinhoJogos(); // Zera o contador
      });
    }
  });
