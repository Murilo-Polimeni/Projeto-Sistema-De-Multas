function calcular() {
  var txtv = document.querySelector("input#txtvel")
  var res = document.querySelector("div#res")
  var vel = Number(txtv.value)
  let html = `<div class="container-js">`
  html += `<p>Sua velocidade atual é de ${vel}Km/h </p>`
  if (vel > 80) {
    html += `<p>Não está permitido pela Lei, Multado!!</p>`
  } else {
    html += `<p>Permitido pela Lei, Dirija com cuidado!</p>`
  }
  html += `</div>`
  res.innerHTML = html
}
