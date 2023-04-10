    var din = document.getElementById('din')
    var res = document.getElementById('res')


function calcular() {
    var n = Number(din.value)

    if (n == 0) {
        window.alert('ERRO')
    } else {
        var dolar = 5.06
        var s = n / dolar
        res.innerHTML = `<p>Você tem R$${n} de reais</p>`
        res.innerHTML += `<p>Com R$${n} você pode comprar US$${s.toFixed(2)} dolar</p>`
    }
}