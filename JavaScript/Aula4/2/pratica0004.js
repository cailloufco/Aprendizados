
function media(){
let media1 = Number(document.getElementById("m1").value)
let media2 = Number(document.getElementById("m2").value)
let media3 = Number(document.getElementById("m3").value)

notadoaluno= (media1+media2+media3)/3

let vaziodosite = document.getElementById("resultado")
vaziodosite.innerHTML=(`<strong>${notadoaluno.toFixed(2)}</strong>`)

if (notadoaluno.toFixed(2) >= 7){
    vaziodosite.style.color="green"
} else{
    vaziodosite.style.color="red"
}
}