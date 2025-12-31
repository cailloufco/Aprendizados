function Verify() {
  numEscolhidoSite = Number(document.getElementById("ValorTabuada").value);
  console.log(numEscolhidoSite);
  if (numEscolhidoSite == 0) {
    alert("todo numero multiplicado por 0 será 0!!!");
  }
  contador = 0;
  //
  exibir = document.getElementById("Resultados");

  //limpar o antigo resultado
  exibir.innerText = "";
  //--------

  //dar um jeito de multiplicar
  while (contador < 10) {
    contador++;

    resultado = (numEscolhidoSite * contador).toFixed(2);

    console.log(` ${numEscolhidoSite} x ${contador} = ${resultado}`);

    //aonde o resultado deve aparecer
    exibir.innerText += `${numEscolhidoSite} x ${contador} = ${resultado}\n`;
  }
}
