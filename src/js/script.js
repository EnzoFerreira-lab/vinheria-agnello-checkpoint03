
const vinhos = [
    { nome: "Cabernet Sauvignon", tipo: "Tinto", safra: 2018, estoque: 8 },
    { nome: "Chardonnay", tipo: "Branco", safra: 2020, estoque: 3 },
    { nome: "Merlot", tipo: "Tinto", safra: 2019, estoque: 12 },
    { nome: "Rosé Provence", tipo: "Rosé", safra: 2021, estoque: 2 },
    { nome: "Sauvignon Blanc", tipo: "Branco", safra: 2022, estoque: 5 }
];
function adicionarVinho(nome, tipo, safra, estoque) {
    vinhos.push({ nome, tipo, safra, estoque });
    console.log(`✅ Vinho "${nome}" adicionado com sucesso!`);
}
function listarVinhos() {
    console.log("🍷 Lista de vinhos disponíveis:");
    vinhos.forEach(vinho => {
        console.log(`${vinho.nome} - ${vinho.tipo} - Safra ${vinho.safra} - Estoque: ${vinho.estoque}`);
    });
    alert("Lista de vinhos exibida no console!");
}
function estoqueBaixo() {
    const baixoEstoque = vinhos.filter(vinho => vinho.estoque < 5);
    console.log("⚠️ Vinhos com estoque baixo:");
    baixoEstoque.forEach(v => {
        console.log(`${v.nome} - Estoque: ${v.estoque}`);
    });
    alert("Vinhos com estoque baixo exibidos no console!");
}
function calcularEstoqueTotal() {
    const total = vinhos.reduce((soma, vinho) => soma + vinho.estoque, 0);
    console.log(`📦 Estoque total da vinícola: ${total} unidades`);
    alert(`Estoque total: ${total} unidades`);
}
function nomesCaixaAlta() {
    const nomes = vinhos.map(v => v.nome.toUpperCase());
    console.log("🔠 Nomes dos vinhos em caixa alta:");
    console.log(nomes);
    alert("Nomes dos vinhos em caixa alta exibidos no console!");
}

listarVinhos();
estoqueBaixo();
calcularEstoqueTotal();
nomesCaixaAlta();