
function contar(){
let ini = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passo = document.getElementById('txtp')
let res = document.getElementById('res')


if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
   // window.alert('[ERRO] Falta dados!')
    res.innerHTML='impossiviel contar!'

   
} else{
    res.innerHTML = 'contando:'
    let i =Number (ini.value)
    let f =Number(fim.value)
    let p =Number(passo.value)
    if (i < f)
    //contagem crecente
    {for
        (let c = i ; c <= f; c += p){
            res.innerHTML +=`${c} \u{1F449}`
            
           
    
        }
      //contagem regressiva
    }else{
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F64C}`
        }
    
    }
    res.innerHTML += `\u{1F600}`
 }



}

    