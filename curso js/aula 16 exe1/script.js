var resfinal = document.getElementById('finalização')

var array = []
var total = 0
var maior = 0
var menor = 0
var soma = 0 
var media = 0


function clicar() {
    var num = document.getElementById('numtxt')
    var res = document.getElementById('numeros')

    var n = Number(num.value)

    var pos = array.indexOf(n)
    resfinal.innerHTML = ''
    if (n < 1 || n > 100 || n.length == 0 || array.includes(n)) { 
        window.alert('Valor inválido ou ja digitado')
        
    } else {
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        res.appendChild(item)
        array.push(n) //Joga o número pra ultimo mas fica guardado na memória
        
        total ++
        soma = soma + n 
        media = soma / total
        if (n > maior) {
            maior = n
        }
        if (menor == 0){
            menor = n // Teste logico se o menor for igual a zero (oq ele é) ele vai receber o numero e vai se atualizando sempre q um numero menor entra!!
        } 
        if (n < menor){
            menor = n
            
            
        }    
    }
        num.value = ''
        num.focus()
}

function calcular () {
    if (resfinal.length == 0) {
        window.alert('ERRO, adicione valores antes')
    } else {
        resfinal.innerHTML = `<p>Ao todo temos ${total} números cadastrados</p>`
        resfinal.innerHTML += `<p>Somando todos os valores, temos ${soma}</P>`
        resfinal.innerHTML += `<P>A média dos valores digitados é ${media}</P>`
        resfinal.innerHTML += `<p>O valor maximo digitado foi ${maior}</p>`
        resfinal.innerHTML += `O valor minimo digitado foi ${menor}`
    }
    
}