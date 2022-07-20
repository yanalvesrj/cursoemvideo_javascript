function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    res.innerHTML = "Contando..."
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando o PASSO 1')
            p = 1
        }
        if (i < f){
            /* Contagem crescente */
             for (var c = i; c <= f; c += p) {
            res.innerHTML += `\u{1F449}${c }  `
        }
        res.innerHTML += `\u{1F3C1}`
        }else{
            /* Contagem regressiva */
            for(var c=i; c>=f; c-=p){
            res.innerHTML += `\u{1F449}${c }`     
            }
            res.innerHTML += `\u{1F3C1}`
        }

       
    }
}
