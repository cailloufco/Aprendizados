//horario de quem ve o site
data = new Date();
horasatuais = data.getHours();
minutosatuais = data.getMinutes();
segundosatuaois = data.getSeconds();

console.log(horasatuais, minutosatuais, segundosatuaois);
//-----------------------

//pegar as divs com as horas
horaDoSite = document.getElementById("Horas");
minutosDoSite = document.getElementById("Minutos");
segundosDoSite = document.getElementById("Segundos");
//-----------------------

//fazer aparecer

if (horasatuais < 10) {
  horaDoSite.innerHTML = "0" + horasatuais;
} else {
  horaDoSite.innerHTML = horasatuais;
}
if (minutosatuais < 10) {
  minutosDoSite.innerHTML = "0" + minutosatuais;
} else {
  minutosDoSite.innerHTML = minutosatuais;
}
if (segundosatuaois < 10) {
  segundosDoSite.innerHTML = "0" + segundosatuaois;
} else {
  segundosDoSite.innerHTML = segundosatuaois;
}
//==============================

//fazer imagem do site alterar de acordo com a hora
imagemDoSite = document.getElementById("pngDiaTardeNoite");

if (horasatuais <= 6) {
  imagemDoSite.src = "assets/madrugada.jpg";
} else if (horasatuais <= 12) {
  imagemDoSite.src = "assets/dia.jpg";
} else if (horasatuais <= 18) {
  imagemDoSite.src = "assets/tarde.jpg";
} else if(horasatuais <= 24){
  imagemDoSite.src = "assets/noite.jpg";
}
