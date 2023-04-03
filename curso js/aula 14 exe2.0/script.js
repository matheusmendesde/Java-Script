function clicar () {
    var num = document.getElementById('numtxt').value
    var tab = document.getElementById('tab')

    var n = Number(num)

    if (n.length == 0) {
        window.alert('[ERRO] Digite um numero')
    } else {
        tab.innerHTML = ''
        for (var c = 1; c<=10; c++) {
            var item = document.createElement('option')
            item.innerHTML = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}