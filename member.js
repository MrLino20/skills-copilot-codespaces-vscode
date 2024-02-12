function calculaAltura() {
  var altura = 0;
  var altura = document.getElementById("altura").value;
  var altura = parseInt(altura);
  var altura = altura * 100;
  var altura = altura / 100;
  var altura = altura * altura;
  var altura = altura.toFixed(2);
  var altura = parseFloat(altura);
  document.getElementById("altura").value = altura;
}