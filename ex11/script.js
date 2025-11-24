//horas para segundos
function horasParaSegundos(horas) {
    return horas * 3600;
}

let horasInput = Number(prompt("Digite o número de horas que deseja converter para segundos:"));

if(horasInput > 0 && horasInput <= 24){
let segundos = horasParaSegundos(horasInput);
alert(horasInput + " horas equivalem a " + segundos + " segundos.");
} else {
    alert("Por favor, insira um valor de horas válido entre 1 e 24.");
}