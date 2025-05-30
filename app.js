const produtos = [
  { nome: "Playstation 5", preco: 4000, categoria: "consoles", disponibilidade: true, imagem: "./images/ps5.png"},
  { nome: "Xbox Series X", preco: 4100, categoria: "consoles", disponibilidade: false, imagem: "./images/xboxSeriesX.png"},
  { nome: "Nintendo Switch 2", preco: 4500, categoria: "consoles", disponibilidade: false, imagem: "./images/switch2.png"},
  { nome: "GTA VI", preco: 9999, categoria: "jogos", disponibilidade: false, imagem: "./images/gtaVI.png"},
  { nome: "FIFA 2029", preco: 9.99, categoria: "jogos", disponibilidade: true, imagem: "./images/fifa29.png"},  
  { nome: "Donkey Kong Country™ Returns HD", preco: 349, categoria: "jogos", disponibilidade: false, imagem: "./images/donkeyKong.png"},
  { nome: "Red Dead Redemption 2", preco: 350, categoria: "jogos", disponibilidade: true, imagem: "./images/redDead.png"},
  { nome: "Controle sem fio Xbox", preco: 500, categoria: "acessorios", disponibilidade: true, imagem: "./images/controleSeriesX.png"},
  { nome: "Controle sem fio DualSense", preco: 400, categoria: "acessorios", disponibilidade: true, imagem: "./images/dualsense.png"},
  { nome: "Headset sem fio PULSE Elite", preco: 800, categoria: "acessorios", disponibilidade: false, imagem: "./images/pulseElite.png"},
];

function listarProdutos(lista) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  container.classList.add("containerProdutos");
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(3, 1fr)";
  container.style.margin = "auto";
  container.style.textAlign = "center";
  container.style.padding = "100px";

  lista.forEach((produto) => {
    const div = document.createElement("div");
    div.classList.add("produto");
    div.innerHTML = `
      <img src="${produto.imagem}">
      <h3>${produto.nome}</h3>
      <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
      <p>Categoria: ${produto.categoria}</p>
      <p>${produto.disponibilidade ? "Disponível" : "Indisponível"}</p>`;
    container.append(div);

    div.addEventListener("mouseover", () =>{
      div.style.backgroundColor = "#f0f0f0";
      div.style.border = "2px solid #000"
      div.style.cursor = "pointer";
    });

    div.addEventListener("mouseout", () =>{
      div.style.backgroundColor = "";
      div.style.border = "";
    });
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