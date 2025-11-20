let number = parseInt(prompt("Escreva um número inteiro:"));
let isNumberEven = number % 2 === 0;

if (isNumberEven) {
    console.log(`O número ${number} é par.`);
} else {
    console.log(`O número ${number} é ímpar.`);
}