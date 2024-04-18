var spinner = document.querySelector("#spinner");
document.querySelector("#btnver").onclick=()=>{
  spinner.innerHTML="<img src='IMG_0125.gif' width=200px>";
  setTimeout(()=>{
    spinner.innerHTML="<h1>Hola!</h1>";
  },2000)
}