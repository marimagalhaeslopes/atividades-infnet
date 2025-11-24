const x = Number(prompt("Digite a opção entre 1, 2 e 3: "));
let a = Number(prompt("Digite o valor de A: "));
let b = Number(prompt("Digite o valor de B: "));
let c = Number(prompt("Digite o valor de C: "));

let numeroOrdenado = [a, b, c];

switch (x) {
    case 1:
        alert(numeroOrdenado.sort((a, b) => a - b));
        break;
    case 2:
        alert(numeroOrdenado.sort((a, b) => b - a));
        break;
    case 3:
        numeroOrdenado.sort((a, b) => a - b);
        let meio = numeroOrdenado[1];
        let maior = numeroOrdenado[2];
        let menor = numeroOrdenado[0];
        alert( meio + ", " + maior + ", " + menor);
        break;
    default:
        alert("Opção inválida! Por favor, escolha entre 1, 2 e 3.");
        break;
}