const suma = () => {
  let n1 = parseFloat(document.querySelector("#num1").value);
  let n2 = parseFloat(document.querySelector("#num2").value);
  let sum = n1 + n2;
  let res = document.querySelector("#res");

  if (isNaN(sum)) {
    res.innerHTML = "<h1>" + 0 + "</h1";
  } else {
    res.innerHTML = "<h1>" + sum + "</h1>";
  }
}

const resta = () => {
  let n1 = parseFloat(document.querySelector("#num1").value);
  let n2 = parseFloat(document.querySelector("#num2").value);
  let rest = n1 - n2;
  let res = document.querySelector("#res");

  if (isNaN(rest)) {
    res.innerHTML = "<h1>" + 0 + "</h1";
  } else {
    res.innerHTML = "<h1>" + rest + "</h1>";
  }
}

const multi = () => {
  let n1 = parseFloat(document.querySelector("#num1").value);
  let n2 = parseFloat(document.querySelector("#num2").value);
  let multiplicacion = n1 * n2;
  let res = document.querySelector("#res");

  if (isNaN(multiplicacion)) {
    res.innerHTML = "<h1>" + 0 + "</h1";
  } else {
    res.innerHTML = "<h1>" + multiplicacion + "</h1>";
  }
}

const division = () => {
  let n1 = parseFloat(document.querySelector("#num1").value);
  let n2 = parseFloat(document.querySelector("#num2").value);
  let division = n1 / n2;
  let res = document.querySelector("#res");

  if (isNaN(division)) {
    res.innerHTML = "<h1>" + 0 + "</h1";
  } else {
    res.innerHTML = "<h1>" + division + "</h1>";
  }
}

const porcentaje = () => {
  let n1 = parseFloat(document.querySelector("#num1").value);
  let n2 = parseFloat(document.querySelector("#num2").value);
  let porcentaje = n1 % n2;
  let res = document.querySelector("#res");

  if (isNaN(porcentaje)) {
    res.innerHTML = "<h1>" + 0 + "</h1";
  } else {
    res.innerHTML = "<h1>" + porcentaje + "</h1>";
  }
}

const potencia = () => {
  let n1 = parseFloat(document.querySelector("#num1").value);
  let n2 = parseFloat(document.querySelector("#num2").value);
  let potencia = Math.pow(n1, n2);
  let res = document.querySelector("#res");

  if (isNaN(potencia)) {
    res.innerHTML = "<h1>" + 0 + "</h1";
  } else {
    res.innerHTML = "<h1>" + potencia + "</h1>";
  }
}

const delet = () => {
  document.querySelector("#num1").value = "";
  document.querySelector("#num2").value = "";
  document.querySelector("#res").innerHTML = "";
}