var n =1;
let peso =document.querySelector("#peso");
let peso1 =document.querySelector("#peso1");


let altura =document.querySelector("#altura");
let altura1 =document.querySelector("#altura1");


let spinner = document.querySelector("#spinner");


let f1 = document.querySelector("#f1");
let f2 = document.querySelector("#f2");
let f3 = document.querySelector("#f3");
let f4 = document.querySelector("#f4");
let f5= document.querySelector("#f5");
let f6 = document.querySelector("#f6");

let res = document.querySelector("#res");
let tabla =document.querySelector("#tabla");

peso1.innerHTML=peso.value+" kg";
altura1.innerHTML=altura.value+" cm";

peso.oninput =()=>{
  peso1.innerHTML=peso.value+" kg";
  spinner.innerHTML = "<img src='imc.gif' width=100px height=100px>";

setTimeout(() => {
  let m = altura.value / 100;
  let p = peso.value;
  let ac = Math.pow(m, 2);
  let imc = p / ac;
  res.innerHTML = imc.toFixed(2) + " kg/m²";
  spinner.innerHTML = "";

  f1.style.transform = "scale(1)";
  f2.style.transform = "scale(1)";
  f3.style.transform = "scale(1)";
  f4.style.transform = "scale(1)";
  f5.style.transform = "scale(1)";
  f6.style.transform = "scale(1)";

  if (imc <= 18.5) {
    f1.style.transform = "scale(1.3)";
  }

  if (imc >= 18.6 && imc <= 24.5) {
    f2.style.transform = "scale(1.3)";
  }

  if (imc >= 25 && imc <= 29.9) {
    f3.style.transform = "scale(1.3)";
  }

  if (imc >= 30 && imc <= 34.9) {
    f4.style.transform = "scale(1.3)";
  }

  if (imc >= 35 && imc <= 39.9) {
    f5.style.transform = "scale(1.3)";
  }
  if (imc >= 40) {
    f6.style.transform = "scale(1.3)";

  }

}, 2000);
res.innerHTML="";
}


altura.oninput = () => {
  altura1.innerHTML = altura.value + " cm";

  spinner.innerHTML = "<img src='imc.gif' width=100px height=100 px>";

  setTimeout(() => {
    let m = altura.value / 100;
    let p = peso.value;
    let ac = Math.pow(m, 2);
    let imc = p / ac;
    res.innerHTML = imc.toFixed(2) + " kg/m²";
    spinner.innerHTML = "";

    f1.style.transform = "scale(1)";
    f2.style.transform = "scale(1)";
    f3.style.transform = "scale(1)";
    f4.style.transform = "scale(1)";
    f5.style.transform = "scale(1)";
    f6.style.transform =  "scale(1)";

    if (imc <= 18.5) {
      f1.style.transform = "scale(1.3)";
    }

    if (imc >= 18.6 && imc <= 24.5) {
      f2.style.transform = "scale(1.3)";
    }

    if (imc >= 25 && imc <= 29.9) {
      f3.style.transform = "scale(1.3)";
    }

    if (imc >= 30 && imc <= 34.9) {
      f4.style.transform = "scale(1.3)";
    }

    if (imc >= 35 && imc <= 39.9) {
      f5.style.transform = "scale(1.3)";
    }
    if (imc>=40) {
      f6.style.transform="scale(1.3)";
      
    }

  }, 2000);
  res.innerHTML="";
}


