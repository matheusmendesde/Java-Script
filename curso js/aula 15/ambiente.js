var num = [2, 5, 6, 7, 4]

console.log(num)
console.log(`O vetor tem ${num.length} posições`)   
var pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor ${num[pos]} esta na posição ${pos}`)
}
