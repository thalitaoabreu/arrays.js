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