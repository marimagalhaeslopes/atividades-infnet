let corUm = prompt("Digite a primeira cor (Vermelho, azul, amarelo, laranja, roxo, verde ou branco):").toLowerCase();
let corDois = prompt("Digite a segunda cor (Vermelho, azul, amarelo, laranja, roxo, verde ou branco):").toLowerCase();

const vermelho = "vermelho";
const azul = "azul";
const amarelo = "amarelo";
const laranja = "laranja";
const roxo = "roxo";
const verde = "verde";
const branco = "branco";
const preto = "preto";

if((corUm === amarelo && corDois === laranja) || (corUm === laranja && corDois === amarelo)){
    alert("A cor resultante é: Vermelho");
} else if((corUm === vermelho && corDois === amarelo) || (corUm === amarelo && corDois === vermelho)){
    alert("A cor resultante é: Laranja");
}else if((corUm === vermelho && corDois === azul) || (corUm === azul && corDois === vermelho)){
    alert("A cor resultante é: Roxo");
}else if((corUm === azul && corDois === amarelo) || (corUm === amarelo && corDois === azul)){
    alert("A cor resultante é: Verde");
}else if((corUm === amarelo && corDois === verde) || (corUm === verde && corDois === amarelo)){
    alert("A cor resultante é: Azul");
}else if((corUm === branco && corDois === preto) || (corUm === preto && corDois === branco)){
    alert("A cor resultante é: Cinza");
}else if((corUm === branco && corDois === vermelho) || (corUm === vermelho && corDois === branco)){
    alert("A cor resultante é: Rosa");
}else if((corUm === vermelho && corDois === verde) || (corUm === verde && corDois === vermelho)){
    alert("A cor resultante é: Marrom");
}else if((corUm === laranja && corDois === roxo) || (corUm === roxo && corDois === laranja)){
    alert("A cor resultante é: Marrom terra");
}else if((corUm === roxo && corDois === branco) || (corUm === branco && corDois === roxo)){
    alert("A cor resultante é: Lilás");
}else{
    alert("Combinação de cores inválida. Por favor, tente novamente com cores primárias.");
}