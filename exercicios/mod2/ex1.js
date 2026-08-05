const meuPrimeiroArray = ["Ana", "Livia", "Juliana"]
const meuSegundoArray = [12, 26, 63]

function concatenar (array1, array2) {
   return array1.concat(array2)  
}

const arrayJuntos = concatenar(meuPrimeiroArray, meuSegundoArray)
console.log(arrayJuntos);