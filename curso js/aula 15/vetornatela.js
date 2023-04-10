var valores = [8, 1, 5, 7, 9, 3]

/* for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
} 
*/

for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}