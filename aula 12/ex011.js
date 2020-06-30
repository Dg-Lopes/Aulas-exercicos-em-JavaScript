var idade = 45
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {                            //primeira condição
    console.log('Não vota')
} else  if (idade < 18 || idade > 65) {                 
        console.log('Voto opcional')
} else {                                     //Segunda condição e se chama condição aninhada
        console.log('Voto obrigatório')
}