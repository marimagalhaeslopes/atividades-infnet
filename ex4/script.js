let escolhaUsuario = prompt("Digite a fruta escolhida (Maçã, Banana, Laranja):").toLowerCase();

if (escolhaUsuario === "maçã" || escolhaUsuario === "maca") {
    console.log("Se você tirar a casca perderá as vitaminas!");
}else if (escolhaUsuario === "banana") {
    console.log("Já vem naturalmente embalada e pronta para o consumo!");
}else{
    console.log("Não esqueça de descascar!");
}