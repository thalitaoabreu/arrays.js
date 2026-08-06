const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// começa a contar no indice 0
// enquanto o indice for menor que o tamannho do array
// incremente

/*
   a primeira expressão do for é executada somente uma vez
   indice = 0; indica que estamos começando do inicio

   a segunda expressão é a condição de execução
    o laço irá se repetir enquanto essa condição for TRUE

   a terceira expressão é executada sempre no final do bloco

*/
for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);   
}

// em resumo esse programa faz o seguinte:

/*

O JS entra no FOR -> cria a variável índice e armazena o valor 0 (indica que estou começando do começo do array)

Após isso, ele verifica se tem que executar o array, ele verifica se a condição é TRUE para rodar o programa, sendo TRUE, ele entra no código 

-> após verificado ele executa o console.log e exibe no console a informação -> índice e de notas no índice indicado

    o JS vai entrar no array notas -> procurar o número 0 -> ver que ele é o número 10 e exibir ele no console.

    * quando indice vale 0, notas[indice] é o mesmo que escrever notas[0], que retorna 10. 
    
    Quando indice vale 1, é o mesmo que notas[1], que retorna 8.5. E assim por diante. *

-> depois de rodar o looping, o JS irá executar a tericeira expressão, que é executada somente ao final do bloco, neste caso, ele irá incrementar a variável índice, que ela deixará de ser 0 e passará a valer 1

-> E com isso, ele voltará para a segunda expressão -> que é a condição, ele validará se índice ainda é menor que o tamanho do array, ele sendo, irá rodar o código + uma vez e depois a última expressão e retomar o ciclo.

-> quando ele voltar na segunda expressão e ela retornar negativo, ele irá parar de rodar o código e o programa finaliza.
*/