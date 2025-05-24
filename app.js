const produtos = [
  { nome: "Playstation 5", preco: 4000, categoria: "console", disponibilidade: true },
  { nome: "Xbox Series X", preco: 4100, categoria: "console", disponibilidade: false },
  { nome: "GTA VI", preco: 9999, categoria: "jogos", disponibilidade: false },
  { nome: "Controle sem fio DualSense", preco: 400, categoria: "acessorios", disponibilidade: true },
  { nome: "FIFA 2029", preco: 9.99, categoria: "jogos", disponibilidade: true },
  { nome: "Nintendo Switch 2", preco: 4500, categoria: "console", disponibilidade: false },
  { nome: "Headset sem fio PULSE Elite", preco: 800, categoria: "acessorios", disponibilidade: false },
  { nome: "Donkey Kong Country™ Returns HD", preco: 349, categoria: "jogos", disponibilidade: false },
  { nome: "Controle sem fio Xbox", preco: 500, categoria: "acessorios", disponibilidade: true },
  { nome: "Red Dead Redemptiom 2", preco: 350, categoria: "jogos", disponibilidade: true },
];

function listarProdutos(lista) {
    const container = document.getElementById("container");
    container.innerHTML = "";
  
    lista.forEach((produto) => {
      const div = document.createElement("div");
      div.classList.add("produto");
      div.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <p>Categoria: ${produto.categoria}</p>
        <p>${produto.disponibilidade ? "Disponível" : "Indisponível"}</p>`;
      container.append(div);

      });
    };

const listarTodos = document.querySelector("#listarTodos");
listarTodos.addEventListener("click", () => listarProdutos(produtos));