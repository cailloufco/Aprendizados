function Verify() {
  numEscolhidoSite = Number(document.getElementById("ValorTabuada").value)
  console.log(numEscolhidoSite)

contador = -1
//dar um jeito d aparecer lá no site as multiplicações
while (contador < 10){
contador ++
resultado = numEscolhidoSite * contador

console.log(` ${numEscolhidoSite} x ${contador} = ${resultado}`)
}
}
