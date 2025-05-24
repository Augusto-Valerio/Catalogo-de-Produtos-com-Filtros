const produtos = [
  { nome: "Playstation 5", preco: 4000, categoria: "consoles", disponibilidade: true },
  { nome: "Xbox Series X", preco: 4100, categoria: "consoles", disponibilidade: false },
  { nome: "GTA VI", preco: 9999, categoria: "jogos", disponibilidade: false },
  { nome: "Controle sem fio DualSense", preco: 400, categoria: "acessorios", disponibilidade: true },
  { nome: "FIFA 2029", preco: 9.99, categoria: "jogos", disponibilidade: true },
  { nome: "Nintendo Switch 2", preco: 4500, categoria: "consoles", disponibilidade: false },
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

const botao = document.querySelector("#filtrar");
botao.addEventListener("click", () => {
  const categoria = document.getElementById("categoria").value;
  const somenteDisponiveis = document.getElementById("disponibilidade").checked;
  const ordenacao = document.getElementById("ordenacao").value;

  const produtosFiltrados = produtos.filter((produto) => {
  const verificarCategoria = categoria === "todas" || produto.categoria === categoria;
  const verificarDisponibilidade = !somenteDisponiveis || produto.disponibilidade === somenteDisponiveis;
  return verificarCategoria && verificarDisponibilidade;
  });


  if (ordenacao === "crescente") {
    produtosFiltrados.sort((a, b) => a.preco - b.preco);
  } else if (ordenacao === "decrescente") {
    produtosFiltrados.sort((a, b) => b.preco - a.preco);
  }

  listarProdutos(produtosFiltrados);
});