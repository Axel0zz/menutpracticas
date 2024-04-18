const filas1 = document.getElementById("filas1");
const columnasSlider = document.getElementById("columnas1");
const filasOutput = document.getElementById("filas2");
const columnasOutput = document.getElementById("columnas2");
const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const table = document.getElementById("tabla");

filas1.oninput = function() {
    filasOutput.innerHTML = this.value;
    updateTable();
}

columnasSlider.oninput = function() {
    columnasOutput.innerHTML = this.value;
    updateTable();
}

color1Input.addEventListener("change", function() {
    updateTable();
});

color2Input.addEventListener("change", function() {
    updateTable();
});

function updateTable() {
    let filas = filas1.value;
    let columnas = columnasSlider.value;
    let color1 = color1Input.value;
    let color2 = color2Input.value;
    let html = "";
    for (let i = 0; i < filas; i++) {
        html += "<tr>";
        for (let j = 0; j < columnas; j++) {
            if (i % 2 === 0) {
               html += `<td style="background-color:${color1}"> ${i + 1},${j + 1}</td>`;
                //html += '<td style="background-color:'+color1+">"+(i=1)+(j=1)+"</td";

            } else {
                html += `<td style="background-color:${color2}">${i + 1},${j + 1}</td>`;
                //html += '<td style="background-color:'+color2+">"+(i=1)+(j=1)+"</td";
            }
        }
        html += "</tr>";
    }
    table.innerHTML = html;
}

updateTable();
