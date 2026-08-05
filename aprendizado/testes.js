const arrayVazia1 = [];
 
console.log(arrayVazia1) // [ ]
console.log(arrayVazia1.length) // 0 

// ------------

const arrayVazia2 = [];
console.log(arrayVazia2[0]) // undefined

// ------------

const arrayVazia3 = [,,,]; 

console.log(arrayVazia3.length) // 3
console.log(arrayVazia3[0]) // undefined
console.log(arrayVazia3[1]) // undefined
console.log(arrayVazia3[2]) // undefined44

const arrayVazia4 = [,,,];

console.log(arrayVazia4.length)

arrayVazia4.push(60)
console.log(arrayVazia4)
console.log(arrayVazia4.length)