let votosRoboRatValido = Number(prompt("Digite o número de votos válidos para o RoboRat:"));
let votosSuperKeyboard = Number(prompt("Digite o número de votos válidos para o SuperKeyboard:"));
let votosInvalidos = Number(prompt("Digite o número de votos inválidos:"));

const totalVotos = votosRoboRatValido + votosSuperKeyboard + votosInvalidos;

const porcentagemRoboRat = (votosRoboRatValido / totalVotos) * 100;
const porcentagemSuperKeyboard = (votosSuperKeyboard / totalVotos) * 100;
const porcentagemInvalidos = (votosInvalidos / totalVotos) * 100;

const porcentagemRoboRatValido = (votosRoboRatValido / (votosRoboRatValido + votosSuperKeyboard)) * 100;
const porcentagemSuperKeyboardValido = (votosSuperKeyboard / (votosRoboRatValido + votosSuperKeyboard)) * 100;

alert("Porcentagem de votos:\nRoboRat: " + porcentagemRoboRat.toFixed(2) + "%\nSuperKeyboard: " + porcentagemSuperKeyboard.toFixed(2) + "%\nVotos Inválidos: " + porcentagemInvalidos.toFixed(2) + "%");
alert("Porcentagem de votos válidos:\nRoboRat: " + porcentagemRoboRatValido.toFixed(2) + "%\nSuperKeyboard: " + porcentagemSuperKeyboardValido.toFixed(2) + "%");

if (porcentagemSuperKeyboardValido > 50) {
    alert("O Super Keyboard venceu a eleição com " + porcentagemSuperKeyboardValido.toFixed(2));
} else if (porcentagemRoboRatValido > 50) {
    alert("O RoboRat venceu a eleição com " + porcentagemRoboRatValido.toFixed(2) + "% dos votos válidos.");
} else {
    alert("Haverá um segundo turno entre RoboRat e Super Keyboard.");
}
