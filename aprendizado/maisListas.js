const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

// quero juntar essas duas listas dentro de uma única

//      array    = [ [umArray] , [outroArray] ]
const infoAlunos = [alunos, medias]
//      array    = [ [alunos = posição 0] , [[media = posição 1] ]
// posso colocar um array dentro de outro array como se ele fosse apenas um dado

//quero acessar informações específicas de cada lsita

//aqui estou acessando o array infoAlunos
// quando indicio [0], estamos acessando o array alunos, que foi armazenado no arrai infoAlunos
//quando indico [1], estamos indicando o valor de índice 1 dentro do array alunos
console.log(`A primeira aluna da lista é: ${infoAlunos[0][1]}`);

// irei fazer o mesmo, contudo, agora quero a nota da Juliana
console.log(`A nota da aluna Juliana é: ${infoAlunos[1][1]}`);

/* resumindo:

Eu falei pro JS -> no array infoAlunos -> acesse o array de índice [0] = alunos
e dentro dele, acesse o elemento específico [1] = Juliana

depois fiz o mesmo para obter a nota da Juliana:
    no array infoAlunos -> acesse o array de índice [1] = media
    e dentro dele, acesse o elemento específico [1] = 8

*/

