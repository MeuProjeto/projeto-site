function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var obg = window.document.getElementById('obg')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
   //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas ${min} minutos. `

    if ( hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.jpg'
        document.body.style.background = 'red'
        obg.innerHTML = `BOM DIA!`
    }
    else if (hora >=12 && hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.background = 'orange'
        obg.innerHTML = `BOA TARDE!`
    }
    else{
         //BOA NOITE
         img.src = 'noite.jpg'
         document.body.style.background = 'rgb(50, 30, 19)'
         obg.innerHTML = `BOA NOITE!`
    }
   
}