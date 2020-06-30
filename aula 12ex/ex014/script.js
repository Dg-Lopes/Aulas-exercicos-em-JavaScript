function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    setTimeout('carregar()',500); // Faz hora ficar atualizando constantemente.
    msg.innerHTML = `<strong>Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos.</strong>`
    if (hora >=0 && hora < 12) {
        //BOM DIA
        img.src = 'imagemmanha.png' 
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
         //BOA TARDE
         img.src = 'imagemtarde.png'
         document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        img.src = 'imagemnoite.png'
        document.body.style.background = '#415154'
    }
   

    function newFunction() {
        setTimeout('carregar()', 500)
    }
} 

   
