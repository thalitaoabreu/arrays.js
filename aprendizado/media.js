const notas = [10, 6.5, 8, 7.5]; 
// todo array é uma lista que se inicia no indice 0, e seus elementos sempre aparecerão na mesma ordem;
// o elemento 10 é o índice [0] -> posições do array;
// o índice do array começa em 0, então a primeira nota é notas[0], a segunda é notas[1] e assim por diante.

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
// divido as notas pelo tamanho do array para obter a média

console.log(`A média das notas é: ${media}`);

