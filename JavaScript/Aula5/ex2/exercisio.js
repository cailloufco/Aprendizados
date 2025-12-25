data = new Date();
anoatual = Number(data.getFullYear());
console.log(data, anoatual);
function verificar() {
  let sidade = Number(document.getElementById("Idade").value);
  let resultado = document.getElementById("resul");
  let sexo = document.querySelector('input[name="genero"]:checked');
  //calculo da idade.....
  calculoidade = anoatual - sidade;

  if (sidade >= anoatual) {
    resultado.innerHTML = `Idade invalida!`;
    resultado.style.color = "red";
  } else if (sidade < 1925) {
    resultado.innerHTML = `Idade invalida!`;
    resultado.style.color = "red";
  } else if (isNaN(sidade)) {
    resultado.innerHTML = `Idade invalida!`;
    resultado.style.color = "red";
  } else {
    resultado.innerHTML = `${calculoidade} anos do sexo ${sexo.value}`;
    resultado.style.color = "black";
  }
}
