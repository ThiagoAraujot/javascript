function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12 ) {
        //Bom dia 
        img.scr  = 'imagens/manha.png'
        document.body.style.background = '#a08e03'
    } else if (hora <= 18) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#225371'
    } else {
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#3f3152'
    }

}