function atualizarHoraSite() {
  //horario de quem ve o site
  let data = new Date();
  horasatuais = data.getHours();
  minutosatuais = data.getMinutes();
  segundosatuaois = data.getSeconds();

  console.log(horasatuais, minutosatuais, segundosatuaois);

  //alterar texto diaAnoMes
  let txtdiaMesAno = document.getElementById("diaMesAno");

  let ano = data.getFullYear();
  let mes = data.getMonth() + 1;
  let dia = data.getDate();

  txtdiaMesAno.innerHTML = `${dia} / ${mes} / ${ano}`;

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

  //fazer imagem do site alterar de acordo com a hora /alterar background de acordo com a hora
  imagemDoSite = document.getElementById("pngDiaTardeNoite");
  corDoBackGround = document.getElementById("background");
  if (horasatuais < 6) {
    imagemDoSite.src = "assets/madrugada.jpg";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 1)";
  } else if (horasatuais < 12) {
    imagemDoSite.src = "assets/dia.jpg";
    document.body.style.backgroundColor = "rgba(185, 173, 0, 0.8)";
  } else if (horasatuais < 18) {
    imagemDoSite.src = "assets/tarde.jpg";
    document.body.style.backgroundColor = "rgba(153, 103, 10, 0.88)";
  } else if (horasatuais < 24) {
    imagemDoSite.src = "assets/noite.jpg";
    document.body.style.backgroundColor = "rgba(31, 30, 28, 0.93)";
  }
}
setInterval(atualizarHoraSite, 600);
