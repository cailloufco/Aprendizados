let caixadoresultado = document.getElementById ("resultado")


function gerar_resul(){

let velocidade = Number(document.getElementById("caixa_vel").value)

//condição de multa
if (velocidade > 400){
    caixadoresultado.innerHTML=(`Perai toreto da paraiba, vai pra onde? <strong>${velocidade}</strong>km/h`)
    caixadoresultado.style.color= "blue"
}else if (velocidade > 80){
    caixadoresultado.innerHTML=(`MULTADO , <strong>${velocidade}</strong>km/h`)
    caixadoresultado.style.color="red"
}else if (velocidade == 80){
    caixadoresultado.innerHTML=(`Exatamente na Velocidade permitida <strong>${velocidade}</strong>km/h`)
    caixadoresultado.style.color="yellow"
}else {
    caixadoresultado.innerHTML=(`Dentro da Velocidade permitida  <strong>${velocidade}</strong>km/h`)
    caixadoresultado.style.color= "green"
}
}

