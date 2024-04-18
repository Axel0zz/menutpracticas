document.querySelector("#btn1").onclick=()=>
Swal.fire("Ejemplo 1");

document.querySelector("#btn2").onclick=()=>
Swal.fire({
    title: "Bienvenido",
    text: "Esta todo en orden?",
    icon: "question"
  });

  document.querySelector("#btn3").onclick=()=>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Parece que algo salio mal amigue!",
    footer: '<a href="https://sweetalert2.github.io/">Visita nuestra pagina de soporte tecnico</a>'
  });

  document.querySelector("#btn4").onclick=()=>
  Swal.fire({
    title: "Quieres guardar los cambios?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: `No guardar`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Guardado!", "", "Exito");
    } else if (result.isDenied) {
      Swal.fire("Los cambios no fueron guardados", "", "info");
    }
  });

  document.querySelector("#btn5").onclick=()=>
  Swal.fire({
    title: "IMAGEN",
    text: "Notificacion con una imagen personalizada",
    imageUrl: "descarga.jpg",
    imageWidth: 400,
    imageHeight: 200,
  });

  document.querySelector("#btn6").onclick=()=>
  Swal.fire({
    title: "alerta con una pequeña animacion y con un fondo personalizado",
    width: 600,
    padding: "3em",
    color: "white",
    background: "#fff url(arboles.jpg)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("cat.gif")
      left top
      no-repeat
    `
  });

  document.querySelector("#btn7").onclick=()=>
  Swal.fire({
    title: "Introduce tu usuario de github",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Buscar",
    showLoaderOnConfirm: true,
    preConfirm: async (login) => {
      try {
        const githubUrl = `
          https://api.github.com/users/${login}
        `;
        const response = await fetch(githubUrl);
        if (!response.ok) {
          return Swal.showValidationMessage(`
            ${JSON.stringify(await response.json())}
          `);
        }
        return response.json();
      } catch (error) {
        Swal.showValidationMessage(`
          Request failed: ${error}
        `);
      }
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `El avatar de: ${result.value.login}`,
        imageUrl: result.value.avatar_url
      });
    }
  });
