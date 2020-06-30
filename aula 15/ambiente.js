let num = [1, 2, 3, 4, 5, 6, 7]
num.push(8)
num.sort()
console.log(num)
console.log(`O valor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
   console.log('O valor não foi encontrado')
} else {
   console.log(`O valor 8 esta na posição ${pos}`)
}