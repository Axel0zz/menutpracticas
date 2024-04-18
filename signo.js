let dia = document.querySelector("#dia");
let dia1 = document.querySelector("#dia1");
let mes = document.querySelector("#mes");
let res = document.querySelector("#res");
let img = document.querySelector("#img");
let spinner = document.querySelector("#spinner");

dia.oninput = () => {
    dia1.innerHTML = dia.value;
    let mes2 = parseInt(mes.value);
    let dia2 = parseInt(dia.value);

    

    
    
        let nombreMes = obtenerNombreMes(mes2);

        if ((mes2 === 3 && dia2 >= 21) || (mes2 === 4 && dia2 <= 19)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " + dia.value;
            img.innerHTML = "<img src='aries.jpg' width=300px height=300px>";
        } else if ((mes2 === 4 && dia2 >= 20) || (mes2 === 5 && dia2 <= 20)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " + dia.value;
            img.innerHTML = "<img src='tauro.jpg' width=300px height=300px>";
        } else if ((mes2 === 5 && dia2 >= 21) || (mes2 === 6 && dia2 <= 20)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " + dia.value;
            img.innerHTML = "<img src='geminis.jpg' width=300px height=300px>";
        }else if ((mes2 === 6 && dia2 >= 21) || (mes2 === 7 && dia2 <= 22)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='cancer.jpg' width=300px height=300px>";
        } else if ((mes2 === 7 && dia2 >= 23) || (mes2 === 8 && dia2 <= 22)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='leo.jpg' width=300px height=300px>";
        } else if ((mes2 === 8 && dia2 >= 23) || (mes2 === 9 && dia2 <= 22)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='virgo.jpg' width=300px height=300px>";
        } else if ((mes2 === 9 && dia2 >= 23) || (mes2 === 10 && dia2 <= 22)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='libra.jpg' width=300px height=300px>";
        } else if ((mes2 === 10 && dia2 >= 23) || (mes2 === 11 && dia2 <= 21)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='escorpio.jpg' width=300px height=300px>";
        } else if ((mes2 === 11 && dia2 >= 22) || (mes2 === 12 && dia2 <= 21)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='ssagitario.jpg' width=300px height=300px>";
        } else if ((mes2 === 12 && dia2 >= 22) || (mes2 === 1 && dia2 <= 19)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='capricornio.jpg' width=300px height=300px>";
        } else if ((mes2 === 1 && dia2 >= 20) || (mes2 === 2 && dia2 <= 18)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='acuario.jpg' width=300px height=300px>";
        } else if ((mes2 === 2 && dia2 >= 19) || (mes2 === 3 && dia2 <= 20)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='piscis.jpg' width=300px height=300px>";
        } else {
            res.innerHTML = "La fecha es invalida" ;
            img.innerHTML = "<img src='sele.png' width=200px height=200px>";
        }

    img.style.transform="rotateY(-180deg)";
    img.style.transition="all 0.5s linear";
    img.style.transitionStyle="preserve-3d";
    img.style.backfaceVisibility="hidden";
    
    setTimeout(() => {
      img.style.transform="rotate(0deg)"
    img.style.transform="all 0.5s linear";
    }, 200);
};



function obtenerNombreMes(numeroMes) {
    switch (numeroMes) {
        case 1:
            return "Enero";
        case 2:
            return "Febrero";
        case 3:
            return "Marzo";
        case 4:
            return "Abril";
        case 5:
            return "Mayo";
        case 6:
            return "Junio";
        case 7:
            return "Julio";
        case 8:
            return "Agosto";
        case 9:
            return "Septiembre";
        case 10:
            return "Octubre";
        case 11:
            return "Noviembre";
        case 12:
            return "Diciembre";
        default:
            return "Mes inválido";
    }
};

mes.onchange = () => {
    dia1.innerHTML = dia.value;
    let mes2 = parseInt(mes.value);
    let dia2 = parseInt(dia.value);

 
    
        let nombreMes = obtenerNombreMes(mes2);

        if ((mes2 === 3 && dia2 >= 21) || (mes2 === 4 && dia2 <= 19)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " + dia.value;
            img.innerHTML = "<img src='aries.jpg' width=300px height=300px>";
        } else if ((mes2 === 4 && dia2 >= 20) || (mes2 === 5 && dia2 <= 20)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " + dia.value;
            img.innerHTML = "<img src='tauro.jpg' width=300px height=300px>";
        } else if ((mes2 === 5 && dia2 >= 21) || (mes2 === 6 && dia2 <= 20)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " + dia.value;
            img.innerHTML = "<img src='geminis.jpg' width=300px height=300px>";
        }else if ((mes2 === 6 && dia2 >= 21) || (mes2 === 7 && dia2 <= 22)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='cancer.jpg' width=300px height=300px>";
        } else if ((mes2 === 7 && dia2 >= 23) || (mes2 === 8 && dia2 <= 22)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='leo.jpg' width=300px height=300px>";
        } else if ((mes2 === 8 && dia2 >= 23) || (mes2 === 9 && dia2 <= 22)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='virgo.jpg' width=300px height=300px>";
        } else if ((mes2 === 9 && dia2 >= 23) || (mes2 === 10 && dia2 <= 22)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='libra.jpg' width=300px height=300px>";
        } else if ((mes2 === 10 && dia2 >= 23) || (mes2 === 11 && dia2 <= 21)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='escorpio.jpg' width=300px height=300px>";
        } else if ((mes2 === 11 && dia2 >= 22) || (mes2 === 12 && dia2 <= 21)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='ssagitario.jpg' width=300px height=300px>";
        } else if ((mes2 === 12 && dia2 >= 22) || (mes2 === 1 && dia2 <= 19)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='capricornio.jpg' width=300px height=300px>";
        } else if ((mes2 === 1 && dia2 >= 20) || (mes2 === 2 && dia2 <= 18)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='acuario.jpg' width=300px height=300px>";
        } else if ((mes2 === 2 && dia2 >= 19) || (mes2 === 3 && dia2 <= 20)) {
            res.innerHTML = "La fecha es " + nombreMes + " y tu día es " +dia.value ;
            img.innerHTML = "<img src='piscis.jpg' width=300px height=300px>";
        } else {
            res.innerHTML = "La fecha es invalida" ;
            img.innerHTML = "<img src='sele.png' width=200px height=200px>";
        }

        img.style.transform="rotateY(-180deg)";
        img.style.transition="all 0.5s linear";
        img.style.transitionStyle="preserve-3d";
        img.style.backfaceVisibility="hidden";
        
        setTimeout(() => {
          img.style.transform="rotate(0deg)"
        img.style.transform="all 0.5s linear";
        }, 200);
};



function obtenerNombreMes(numeroMes) {
    switch (numeroMes) {
        case 1:
            return "Enero";
        case 2:
            return "Febrero";
        case 3:
            return "Marzo";
        case 4:
            return "Abril";
        case 5:
            return "Mayo";
        case 6:
            return "Junio";
        case 7:
            return "Julio";
        case 8:
            return "Agosto";
        case 9:
            return "Septiembre";
        case 10:
            return "Octubre";
        case 11:
            return "Noviembre";
        case 12:
            return "Diciembre";
        default:
            return "Mes inválido";
    }
}

  

