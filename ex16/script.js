let mensagem = "Faça o seu café\n";
mensagem += "Por favor, escolha o número de cada etapa:";
mensagem += "\nEtapas para preparar o café:\n";
mensagem += "1 - Torrar os grãos de café\n";
mensagem += "2 - Moer os grãos de café\n";
mensagem += "3 - Colocar o filtro\n";
mensagem += "4 - Adicionar o pó de café\n";
mensagem += "5 - Adicionar água\n";
mensagem += "6 - Servir o café";
alert(mensagem);

let escolha = Number(prompt(mensagem));

switch (escolha) {
    case 1:
        alert("Espalhe grãos crus em uma assadeira e asse por cerca de 45 minutos, mexendo a cada 10 minutos, ou use o método da panela, mexendo sem parar.\nO ponto de torra é alcançado quando o café atinge uma cor de caramelo ou marrom chocolate e começa a estalar.");
        break;
    case 2:
        alert("Moedor manual: Ideal para pequenas quantidades, requer girar a manivela por alguns minutos.\nMoedor elétrico simples: Rápido e prático, basta apertar um botão. Se não tiver regulagem, o tempo de moagem é a chave.\nMoedor elétrico profissional: Processa mais grãos rapidamente e permite ajustar a granulometria. ");
        break;
    case 3:
        alert("Coloque o filtro de papel ou pano no coador e despeje um pouco da água quente sobre ele para escaldá-lo. Descarte essa água.");
        break;
    case 4:
        alert("Coloque o pó de café no filtro e espalhe-o uniformemente, sem compactar. Uma proporção comum é de 5 a 6 colheres de sopa para cada litro de água, mas você pode ajustar conforme seu gosto.");   
        break;
    case 5:
        alert("Despeje uma pequena quantidade de água quente sobre o pó, começando pelas bordas e indo para o centro, para umedecê-lo. Espere cerca de 30 segundos para que o café floresça e libere gases.");
        break;
    case 6:
        alert("Continue despejando o restante da água em movimentos circulares, do centro para fora, até atingir a quantidade desejada.\nSirva o café imediatamente para aproveitar ao máximo seu sabor e aroma.");
        break;
    default:
        alert("Opção inválida! Por favor, escolha um número entre 1 e 6.");
        break;
}