
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
