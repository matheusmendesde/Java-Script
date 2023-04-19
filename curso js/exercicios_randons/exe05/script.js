let btn = document.querySelector('.botao')
let res = document.querySelector('.res')

btn.addEventListener('click', function () {
    var preco = Number(prompt('Qual era o preço anterior do produto?'))
    var precoatual = Number(prompt('Qual é o preço atual?'))

    res.innerHTML = 'Analisando os valores informados <br>'
    res.innerHTML += `O produto custava ${preco} e agora custa ${precoatual} <br>`
    if (preco < precoatual) {
        res.innerHTML += `Hoje o produto esta mais caro <br>`
    } else {
        res.innerHTML += 'Hoje o produto esta mais barato <br>'
    }
    if (preco < precoatual) {
        res.innerHTML += `O preço subiu R$ ${precoatual - preco} <br>`
        res.innerHTML += `Uma variação de ${preco / precoatual * 100}% para cima <br>`
    } else {
        res.innerHTML += `O preço caiu R$ ${precoatual - preco} <br>`
        res.innerHTML += `Uma variação de ${100 * (preco / precoatual) -100}% para baixo <br>`
    }
})