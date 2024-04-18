let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let img = document.getElementById("img");

btn1.onclick = () => {
    img.src = 'goku1.jpg';
    img.style.transform="rotateY(-180deg)";
    img.style.transition="all 0.5s linear";
    img.style.transitionStyle="preserve-3d";
    img.style.backfaceVisibility="hidden";
    
    setTimeout(() => {
      img.style.transform="rotate(0deg)"
    img.style.transform="all 0.5s linear";
    }, 200);
};

btn2.onclick = () => {
    img.src = 'goku2.jpg';
    img.style.transform="rotateY(-180deg)";
    img.style.transition="all 0.5s linear";
    img.style.transitionStyle="preserve-3d";
    img.style.backfaceVisibility="hidden";
    
    setTimeout(() => {
      img.style.transform="rotate(0deg)"
    img.style.transform="all 0.5s linear";
    }, 200);
};

btn3.onclick = () => {
    img.src = 'goku3.jpg';
    img.style.transform="rotateY(-180deg)";
    img.style.transition="all 0.5s linear";
    img.style.transitionStyle="preserve-3d";
    img.style.backfaceVisibility="hidden";
    
    setTimeout(() => {
      img.style.transform="rotate(0deg)"
    img.style.transform="all 0.5s linear";
    }, 200);
};

btn4.onclick = () => {
    img.src = 'goku4.jpg';
    img.style.transform="rotateY(-180deg)";
    img.style.transition="all 0.5s linear";
    img.style.transitionStyle="preserve-3d";
    img.style.backfaceVisibility="hidden";
    
    setTimeout(() => {
      img.style.transform="rotate(0deg)"
    img.style.transform="all 0.5s linear";
    }, 200);
};
