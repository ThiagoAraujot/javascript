let num = [10, 20, 30, 40, 50]
num[5] = 60
num.push(70)
num.length
console.log(`Nosso vetor tem ${num.length} elementos, sendo eles ${num}`)

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

// OUUUU UMA VERSAO MAIS FACIL E SIMPLIFICADA

 for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
 }