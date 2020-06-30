function verificar () {
    var data = new Date()
    var ano = data.getFullYear() //O 'Full' faz com que pegue os 4 números
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value > ano)) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gênero = "Homem"
           if (idade >= 0 && idade < 3) {
                 //Bebê
                 img.setAttribute('src', 'fotobebeh.png')
           } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'fotocriancah.png')
           } else if ( idade < 21){
                 //Jovem
                 img.setAttribute('src', 'fotojovemh.png')
           } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoadulto.png')
           } else {
               //idoso
               img.setAttribute('src', 'idoso.png')
           }
        } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >= 0 && idade < 3) {
            //Bebê
            img.setAttribute('src', 'fotobebem.png')
           } else if (idade < 10) {
            //criança
           img.setAttribute('src', 'fotocriancam.png')
           } else if ( idade < 21){
            //Jovem
            img.setAttribute('src', 'fotojovemm.png')
           } else if (idade < 50) {
           //adulto
           img.setAttribute('src', 'fotoadulta.png')
           } else {
           //idoso
           img.setAttribute('src', 'idosa.png')
      }
        }
        res. textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)      
      }
}