
// Adiciona ao carrinho e atualiza o contador
function atualizarCartCount() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const cartCount = document.getElementById('cart-count');
  if (cartCount) cartCount.textContent = carrinho.length;
}

function adicionarAoCarrinho(event) {
  const btn = event.target;
  const productCard = btn.closest('.product-card');
  if (!productCard) return;
  const img = productCard.querySelector('#imagem');
  const nome = productCard.querySelector('#nome');
  const preco = productCard.querySelector('#preco');
  if (!img || !nome || !preco) return;
  const item = {
    imagem: img.getAttribute('src'),
    nome: nome.textContent,
    preco: preco.textContent
  };
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(item);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCartCount();
}

// Função para exibir os itens do carrinho na página do carrinho
function exibirCarrinhoNaPagina() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  // Limpa o conteúdo, mas mantém o título
  grid.innerHTML = ''; // Limpa o grid antes de adicionar os itens
  if (carrinho.length === 0) {
    grid.innerHTML = '<div class="carrinho-vazio">Carrinho vazio</div>';
    return;
  }
  carrinho.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img id="imagem" src="${item.imagem}" alt="${item.nome}">
      <div class="product-info">
        <h3 id="nome">${item.nome}</h3>
        <p id="preco" class="price">${item.preco}</p>
        <button class="remove-btn" onclick="removerDoCarrinho(${index})">Remover</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Função para remover item do carrinho
function removerDoCarrinho(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  exibirCarrinhoNaPagina();
  atualizarCartCount();
}


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
  atualizarCartCount();
  const grid = document.getElementById('product-grid');
  // Se estiver na página do carrinho, exibe os itens do carrinho
  if (grid && window.location.pathname.includes('Cart.html')) {
    exibirCarrinhoNaPagina();
  } else {
    // Se estiver em uma página de produtos, adiciona evento aos botões
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', adicionarAoCarrinho);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const btnFinalizar = document.querySelector('.finalizar'); // primeiro botão "Finalizar Compra"
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
