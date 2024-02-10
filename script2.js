   

        let botonCapturar = document.getElementById("capturar");
        botonCapturar.addEventListener("click", () => {

            capturar();

            segundaCaptura();

        })




     let datosDelCliente = {} ;
    



    function capturar() {



        const nombreInput = document.getElementById("nombre").value.trim();
        const telefonoInput = document.getElementById("telefono").value.trim();
        const correoInput = document.getElementById("correo").value.trim();
        const clienteInput = document.getElementById("cliente").value.trim();




        if (nombreInput !== '' && telefonoInput !== ''  && correoInput !== '' ){
            datosDelCliente.nombre = nombreInput;
            datosDelCliente.telefono = telefonoInput;
            datosDelCliente.correo = correoInput;
            datosDelCliente.cliente = clienteInput

              

            // console.log('Datos guardados:' , datosDelCliente);

            // let respuesta = document.getElementById("respuesta");
            // respuesta.innerHTML = "Un agente se contactara con usted";

            Swal.fire({
                title: "Un asesor se pondra en contacto con usted",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });

        } else {
            // console.error("Por favor, completa todos los campos correctamente.");
            // let alerta = document.getElementById("respuesta");
            // alerta.innerHTML = "Por favor introduzca sus datos completos"
            
            Swal.fire({
                title: "Ingrese sus datos completos porfavor",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        }
        


    var datosJSON = JSON.stringify(datosDelCliente);

    // console.log(datosJSON)

     sessionStorage.setItem('cliente' , datosJSON);






    }

    // console.log(datosDelCliente);

    function segundaCaptura(){

    let exCliente = sessionStorage.getItem('cliente');

    console.log(exCliente);

    
}


let solicitante = document.getElementById("solicitante")

fetch("./data.json")
    .then((response) => response.json())
    .then((response) => console.log(response))
