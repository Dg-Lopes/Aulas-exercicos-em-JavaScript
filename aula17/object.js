let amigo = {nome:'Sophia',
sexo: 'F',
peso: 13,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kilos`)

//console.log(typeof amigo)  