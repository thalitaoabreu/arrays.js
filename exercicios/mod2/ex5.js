const matriz = [];
let contador = 1;

for (let linha = 0; linha < 3; linha++) {
  const linhaAtual = [];

  for (let coluna = 0; coluna < 3; coluna++) {
    linhaAtual.push(contador);
    contador++;
  }

  // aqui, fora do for de coluna, mas dentro do for de linha:
  matriz.push(linhaAtual);
}
console.log(matriz);

// ex 6:
console.log(matriz[1][2]); // -> acessando o elemento da linha 1 e coluna 2 = elemento 6


// ex 7:
matriz[2][1] = 15;
console.log(matriz);
