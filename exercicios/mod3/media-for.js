const notas = [10, 6.5, 8, 7.5];

//para saber a média, primeiro preciso somar todas as notas, por isso criei a variável somaNotas
let somaNotas = 0; 

//para não chamar cada nota separada, vamos usar o for para percorrer o array de notas e armazena-las na variável somaNotas, para conseguirmos calcular a média 
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
    /*
        1º ex -> roda uma vez, variável é criada e tem valor 0

        2å ex-> temos a condição

        3å ex-> temos o incremento

        1º LOOP -> o JS acessa a variável somaNotas, armazena a nota referente ao índice da vez e o incrementa, no caso, para que o segundo LOOP seja com índice 1
            -> com isso, a variável somaNotas possuí seu primeiro valor armazenado -> índice[0] = 10 

    */ 
}

// após ter todas as notas, vamos calcular a média
//pegamos nossas notas e dividimos pelo tamanho do array

const media = somaNotas/notas.length

//exibimos no console
console.log(`A média das notas é: ${media}`);
