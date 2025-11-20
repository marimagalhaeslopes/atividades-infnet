let corCamisa = prompt("Digite a cor da camisa (vermelho, amarelo e branco):").toLowerCase();
let corCalca = prompt("Digite a cor da calça (amarelo, preto e jeans):").toLowerCase();

if (corCamisa === "vermelho" && corCalca === "amarelo") {
    alert( "Ketchup e mostarda!" );
} else if (corCamisa === "amarelo" && corCalca === "preto") {
    alert("Agora você é uma abelha!");
}else if (corCamisa === "branco" && corCalca === "jeans") {
    alert("Look clássico! Não tem como errar");
}else{
    alert("Hmm, nada a comentar...!");
}