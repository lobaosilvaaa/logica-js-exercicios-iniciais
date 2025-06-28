const nota1 = 7.5;
const nota2 = 6.8;
const nota3 = 8.0;
const media = (nota1 + nota2 + nota3) / 3;
console.log(`Média: ${media.toFixed(2)}`);
if (media >= 7) {
    console.log('Aprovado!');
} else {
    console.log('Reprovado!');
}