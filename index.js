var primeiroMetodo = "flipper";
var corSelecionada = " ";

function trocarMetodo(metodo) {
  primeiroMetodo = metodo
}

function mudarCor() {
  var cor;
  if (primeiroMetodo === "flipper") {
    cor = corFlipper();
  } else {
    cor = corSimpleHex();
  }
  corSelecionada = cor;
  document.body.style.backgroundColor = cor;
  document.getElementById("corSelecionada").textContent = corSelecionada;
}

function corFlipper() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var cor = "rgb(" + red + "," + green + "," + blue + ")";
  return cor;
}

function corSimpleHex() {
  var hex = Math.floor(Math.random() * 16777216).toString(16);
  return "#" + ("000000" + hex).slice(-6);
}
