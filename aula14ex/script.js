function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido!')
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `==>${c} <br>`
            }
        } else {
            //CONTAGEM REGRESSIVA
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `==>${c}<br>`
            }
        }
    }
}