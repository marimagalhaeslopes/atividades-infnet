let peso = prompt("Digite seu peso em kg:");
let altura = prompt("Digite sua altura em metros:");
const imc = peso / (altura * altura);

if (imc < 18.5) {
    alert("Seu IMC é " + imc.toFixed(2) + ", você está abaixo do peso.");
}   
else if (imc >= 18.5 && imc < 24.9) {
    alert("Seu IMC é " + imc.toFixed(2) + ", você está com o peso normal.");
}
else if (imc >= 25 && imc < 29.9) {
    alert("Seu IMC é " + imc.toFixed(2) + ", você está com sobrepeso.");
}
else if (imc >= 30 && imc < 34.9) {
    alert("Seu IMC é " + imc.toFixed(2) + ", você está com obesidade grau I.");
}
else if (imc >= 35 && imc < 39.9) {
    alert("Seu IMC é " + imc.toFixed(2) + ", você está com obesidade grau II.");
}
else {
    alert("Seu IMC é " + imc.toFixed(2) + ", você está com obesidade grau III.");
}