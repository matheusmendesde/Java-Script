
function clicar () {
    var ini = document.getElementById('initxt').value
    var fim = document.getElementById('fimtxt').value
    var pas = document.getElementById('pastxt').value
    var res = document.getElementById('res')

    if (ini.length == 0 || fim.length == 0 || pas.length == 0) {
        window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossivel contar'
    }   else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(pas)
        if (p <= 0) {
            window.alert('Passo INVALIDO considerando PASSO 1')
            p = 1
        }
    } if (i < f) {
        for (var c = i; c <= f; c+=p) {
            res.innerHTML += ` \u{1F449} ${c } `
        } 
    } else {
        for (var c = i; c >= f; c-=p) {
            res.innerHTML += `\u{1F449} ${c } `
        }
    } 
          res.innerHTML += '\u{1F3C1}'
}

