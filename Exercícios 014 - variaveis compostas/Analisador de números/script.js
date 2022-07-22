
var num = document.getElementById("txtn")
var tel = document.getElementById("tela")
var mos = document.getElementById('mostrar')
var valores = []

/* Precisamos testar se o valor é ou não um número: */
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
/* Precisamos testar se o número já está na lista ou não  */
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        /* Adicionar um elemento ao VETOR */
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        tel.appendChild(item)
        mos.innerHTML=" "
    } else {
        window.alert('valor inválido ou já encontrado na lista')
    }
    num.value = ' '
    num.focus()
}
function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        var total = valores.length
        var maior = valores[0] 
        var menor = valores[0]
        var soma = 0 
        var media = 0
        for (var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
            
        }
        media = soma/total
        mos.innerHTML=' '
        mos.innerHTML+=`<p>Ao todo, temos ${total} números cadastrados.</p>`
        mos.innerHTML+=`<p>O maior valor informado foi ${maior}.</p>`
        mos.innerHTML+=`<p>O menor valor informado foi ${menor}</p>`
        mos.innerHTML+=`<p>A soma de todos os valores foi ${soma}</p>`
        mos.innerHTML+=`<p>A média dos valores digitados é ${media}</p>`
    }
}

