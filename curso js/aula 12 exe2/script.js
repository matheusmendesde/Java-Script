function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('anotxt').value
    var res = document.getElementById('res')
    var foto = document.getElementById('foto')
  
    if(nasc == 0 || nasc > ano) {
        window.alert('[ERRO] digite novamente')
    } else {
       var sex = document.getElementsByName('sexo')
       var idade = ano - nasc
       var genero = ''
       
       if (sex[0].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 11) {
            //criança
            foto.src = 'imagens/foto-bebe-f.png'
        } else if (idade < 20) {
            //JOVEM 
            foto.src = 'imagens/foto-jovem-f.png'
        } else if (idade < 43) {
            //Adulto
            foto.src = 'imagens/foto-adulto-f.png'
        } else {
            //IDOSO
            foto.src = 'imagens/foto-idoso-f.png'
        }
        //HOMEM
       } else if (sex[1].checked)   {
        genero = 'Homem'
        if (idade >= 0 && idade < 11) {
            //crança
            foto.src = 'imagens/foto-bebe-m.png'
        } else if (idade < 20) {
            //JOVEM 
            foto.src = 'imagens/foto-jovem-m.png'
        } else if (idade < 43) {
            //Adulto
            foto.src = 'imagens/foto-adulto-m.png'
        } else {
            //IDOSO
            foto.src = 'imagens/foto-idoso-m.png'
        }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade}`
       res.appendChild(foto)
    }
}


