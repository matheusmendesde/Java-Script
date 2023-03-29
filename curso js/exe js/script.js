function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min} horas`

    if(hora >= 0 && hora <= 12) {
        //BOM DIA
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#cbb884'
    } else if (hora > 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#80483a'
    } else {
        //BOA NOITE
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#232c2e'
    }
}

