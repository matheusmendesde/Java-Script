function clicar () {
    var num = document.getElementById('numtxt').value
    var res = document.getElementById('tabtxt')

    var n = Number(num)
    
    if (n.length == 0) {
        window.alert('[ERRO] Digite um numero')
    } else {
        res.innerHTML = ''
        for (var c = 1; c<=10; c++) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            res.appendChild(item)
        } 
    }
}