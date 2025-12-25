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
