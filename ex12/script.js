let valorCompra = Number(prompt("Digite o valor total da compra efetuada:"));
let tipoConsumidor = prompt("Digite o código que identifica o comprador:\nGestante (A)\nAposentado (B)\nPensionista (C)").toUpperCase();
let valorDesconto;
let valorFinal;

if (valorCompra >= 80) {
    switch (tipoConsumidor) {
        case 'A':
            valorDesconto = (valorCompra * 20) / 100;
            valorFinal = valorCompra - valorDesconto;
            alert("O valor final da compra com desconto é: R$ " + valorFinal.toFixed(2));
            break;
        case 'B':
            valorDesconto = (valorCompra * 15) / 100;
            valorFinal = valorCompra - valorDesconto;
            alert("O valor final da compra com desconto é: R$ " + valorFinal.toFixed(2));
            break;
        case 'C':
            valorDesconto = (valorCompra * 10) / 100;
            valorFinal = valorCompra - valorDesconto;
            alert("O valor final da compra com desconto é: R$ " + valorFinal.toFixed(2));
            break;
        default:
            alert("Erro: Tipo de consumidor inválido.");
    }
} else if (valorCompra < 80) {
    switch (tipoConsumidor) {
        case 'A':
            valorDesconto = (valorCompra * 15) / 100;
            valorFinal = valorCompra - valorDesconto;
            alert("O valor final da compra com desconto é: R$ " + valorFinal.toFixed(2));
            break;
        case 'B':
            valorDesconto = (valorCompra * 10) / 10;
            valorFinal = valorCompra - valorDesconto;
            alert("O valor final da compra com desconto é: R$ " + valorFinal.toFixed(2));
            break;
        case 'C':
            valorDesconto = (valorCompra * 5) / 100;
            valorFinal = valorCompra - valorDesconto;
            alert("O valor final da compra com desconto é: R$ " + valorFinal.toFixed(2));
            break;
        default:
            alert("Erro: Tipo de consumidor inválido.");
    }
} else {
    alert("Por favor, insira um valor de compra válido.");
    valorFinal = null;
}