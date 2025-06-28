const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const tentativa = 7;
if (tentativa === numeroSecreto) {
    console.log('Parabéns! Você acertou o número secreto.');
} else {
    console.log(`Errou! O número secreto era ${numeroSecreto}.`);
}