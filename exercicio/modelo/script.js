function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src ='fotomanha.png'
        document.body.style.background = '#E18650'

    }
    else if (hora >= 12 && hora < 18){
        img.src ='fototarde.png'
        document.body.style.background = '#FBC398'
    }else{
        img.src ='fotonoite.png'
        document.body.style.background = '#242E34'
    }
}