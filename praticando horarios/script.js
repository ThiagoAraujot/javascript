function Enviar() {
    let txtnum = document.getElementById('num')
    let hora = Number(txtnum.value)
    let msg = document.getElementById('res')
    let img = document.getElementById('imagem')

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora <= 12) {
       img.src = 'imagens/manha.png'
       document.body.style.background = '#a08e03'
    } else if (hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#225371'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#3f3152'
    }
}