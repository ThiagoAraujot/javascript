var idade = 22
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('NÃO VOTA')
} else  if (idade < 18 || idade > 65) {
    console.log('VOTO OPCIONAL')
} else if (idade >= 18) {
    console.log('VOTO OBRIGATÓTIO')
}
