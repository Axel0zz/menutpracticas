const filas1 = document.getElementById("filas1");
    const columnasSlider = document.getElementById("columnas1");
    const filasOutput = document.getElementById("filas2");
    const columnasOutput = document.getElementById("columnas2");
    const table = document.getElementById("tabla");

    filas1.oninput = function() {
        filasOutput.innerHTML = this.value;
        updateTable();
    }

    columnasSlider.oninput = function() {
        columnasOutput.innerHTML = this.value;
        updateTable();
    }

    function updateTable() {
        let filas = filas1.value;
        let columnas = columnasSlider.value;
        let html = "";
        for (let i = 0; i < filas; i++) {
            html += "<tr>";
            for (let j = 0; j < columnas; j++) {
                html += "<td> " + (i + 1) + "," + (j + 1) + "</td>";
            }
            html += "</tr>";
        }
        table.innerHTML = html;
    }

    

    // Mostrar la tabla inicial
    updateTable();