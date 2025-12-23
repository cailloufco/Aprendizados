var area = document.getElementById("area_de_acao")
area.addEventListener  ('click', clicar)
area.addEventListener  ('mousemove', mousedentro)
area.addEventListener  ('mouseleave', mousefora)

function clicar() {
    area.innerHTML=('<strong>Clicou</strong>')
    area.style.background= 'red'
}
function mousedentro() {
    area.innerHTML=('Mouse dentro da area')
}
function mousefora() {
    area.innerHTML=('Mouse fora da area')
    area.style.background= 'green'
}