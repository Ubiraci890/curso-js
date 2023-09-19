function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
   
    if (fano.value.length == 0 || Number(fano.value)> ano)
    {
        alert('[ERRO] Verifique os dados e tente novamente' )
    } 
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        res.innerHTML =` idade calculada: ${idade} idade`
        var img = document.createElement('img')
        img.setAttribute('id','foto')
    }
    

    if (fsex[0].checked){
        genero ='Homem'
        if(idade >= 0 && idade < 12){
            //criança
            img.setAttribute('src','criança.png')
        }
       else if (idade < 21){
        //jovem
          img.setAttribute("src","M.jovem.png")
        }
        else if (idade < 50){
            img.setAttribute("src","H.homem.png")
        }
        else if (idade > 50){ img.setAttribute("src","homem.idoso.png")
    }
        

    }else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade>= 0 && idade < 12){
            img.setAttribute('src','criança.png')
            //criança
        }
       else if (idade < 50){ 
         img.setAttribute('src','M.jovem.png')
        //jovem

        }
        else {
        //idoso
        img.setAttribute('src','idosa.png')
        }
        
    }
    res.style.textAlign ='center'

    res.innerHTML = `detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}