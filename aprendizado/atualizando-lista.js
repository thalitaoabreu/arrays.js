const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

listaEstudantes.splice(1, 2, 'Rodrigo')
// (1,   2, Rodrigo)
// (onde começo a excluior, quantos iremos excluir a aprtir do indice informado no parametro anterior)
// Rodrigo entrará no lugar dos 2 valores excluídos a partir do índice 1

console.log(listaEstudantes);
