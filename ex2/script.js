//Calculo de multa

const pesoLimite = 50;
const multaPorQuilo = 4;
let pesoDoPeixe = Number(prompt("Digite o peso do peixe em kg:"));

if (pesoDoPeixe > pesoLimite) {
    let excesso = pesoDoPeixe - pesoLimite;
    let multa = excesso * multaPorQuilo;
    console.log(`O peso do peixe excedeu o limite em ${excesso} kg.`);
    console.log(`A multa a ser paga é de R$ ${multa.toFixed(2)}.`);
}else {
    console.log("O peso do peixe está dentro do limite permitido. Sem multa.");
}