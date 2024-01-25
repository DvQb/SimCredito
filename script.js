

//declarar una clase constructora para crear los objetos que serian los tipos de interes

//  class tiposInteres{
//     constructor( porcentaje){
//         this.porcentaje = porcentaje;
//     }
//     obtenerInformacion(index){
//         return{
//             porcentaje: this.porcentaje[index],

//         }
//     }
//  }

 //Tipos de interes


//  const tipoA =  new tiposInteres (
//     [12.79 , 12.84 , 12.94 , 13.06 , 13.24 , 13.39 ]
//  )

//  const tipoB = new tiposInteres (
//     [13.79, 13.84, 13.94, 14.09, 14.24, 14.39, 14.69]
//  )

//  const tipoC = new tiposInteres (
//     [13.79, 13.84, 13.94, 14.09, 14.24, 14.39, 14.69, 15.29]
//  )

//  const tipoD = new tiposInteres (
//     [13.79, 13.84, 13.94, 14.09, 14.24, 14.39, 14.69, 15.29, 15.39]
//  )

//  const tipoE = new tiposInteres (
//     [13.79, 13.84, 13.94, 14.09, 14.24, 14.39, 14.69, 15.29, 15.39, 15.59, 15.89]
//  )



    const tipoA = [12.79, 12.84, 12.94, 13.06, 13.24, 13.39, 13.69, 14.29, 14.39, 14.59, 14.89]
    const tipoB = [13.79, 13.84, 13.94, 14.09, 14.24, 14.39, 14.69, 15.29, 15.39, 15.59, 15.89]
    const tipoC = [14.79, 14.84, 14.94, 15.09, 15.24, 15.39, 15.69, 16.29, 16.39, 16.59, 16.89]
    const tipoD = [15.79, 15.84, 15.94, 16.09, 16.24, 16.39, 16.69, 17.29, 17.39, 17.59, 17.89]
    const tipoE = [16.79, 16.84, 16.94, 17.09, 17.24, 17.39, 17.69, 18.29, 18.39, 18.59, 18.89]


    
  
    

    var botonCalcular = document.getElementById("botonCalcular");
    botonCalcular.addEventListener("click", function(){
        

        calcular();

        agregarBoton();

    })

    function refresh(){
        location.reload();
    }

 function agregarBoton() {

    var solicitar = document.createElement("a");
    solicitar.textContent = "Solicitar";
    solicitar.href = "solicitar.html";
    var contenedorBotones = document.getElementById("contenedorBotones");
    contenedorBotones.appendChild(solicitar);

    var eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.onclick = refresh;
    // recarga.addEventListener("click", function(){
    //     location.reload();
    // })
    var contenedorBotones = document.getElementById("contenedorBotones");
    contenedorBotones.appendChild(eliminar);


 }

function calcular(){


    //esta seccion crea un nuevo link para enviar a la pagina de solicitar

    



    let monto = parseInt(document.getElementById("monto").value) ;

    //tasaNominal TIPO A
    
   if ( monto <= 19999 ) {

        let meses = document.getElementById("meses").value ;
        
        switch (meses){
            
            case "12":
            tasaNominal = tipoA[0]
            break;
            case "18":
            tasaNominal = tipoA[1]
            break;
            case "24":
            tasaNominal = tipoA[2]
            break;
            case "36":
            tasaNominal = tipoA[3]
            break;
            case "48":
            tasaNominal = tipoA[4]
            break;
            case "60":
            tasaNominal = tipoA[5]
            break;
            case "72":
            tasaNominal = tipoA[6]
            break;
            case "84":
            tasaNominal = tipoA[7]
            break;
            case "96":
            tasaNominal = tipoA[8]
            break;
            case "108":
            tasaNominal = tipoA[9]
            break;
            case "120":
            tasaNominal = tipoA[10]
            break;
            
            
        } 
        //tasaNominal TIPO B
    }else if(monto >=20000 && monto <=29999){
        let meses = document.getElementById("meses").value ;
        
        switch (meses){
            
            case "12":
            tasaNominal = tipoB[0]
            break;
            case "18":
            tasaNominal = tipoB[1]
            break;
            case "24":
            tasaNominal = tipoB[2]
            break;
            case "36":
            tasaNominal = tipoB[3]
            break;
            case "48":
            tasaNominal = tipoB[4]
            break;
            case "60":
            tasaNominal = tipoB[5]
            break;
            case "72":
            tasaNominal = tipoB[6]
            break;
            case "84":
            tasaNominal = tipoB[7]
            break;
            case "96":
            tasaNominal = tipoB[8]
            break;
            case "108":
            tasaNominal = tipoB[9]
            break;
            case "120":
            tasaNominal = tipoB[10]
            break;
        }
        //tasaNominal TIPO C
    } else if(monto >=30000 && monto <39999){
        let meses = document.getElementById("meses").value ;
        
        switch (meses){
            
            case "12":
            tasaNominal = tipoC[0]
            break;
            case "18":
            tasaNominal = tipoC[1]
            break;
            case "24":
            tasaNominal = tipoC[2]
            break;
            case "36":
            tasaNominal = tipoC[3]
            break;
            case "48":
            tasaNominal = tipoC[4]
            break;
            case "60":
            tasaNominal = tipoC[5]
            break;
            case "72":
            tasaNominal = tipoC[6]
            break;
            case "84":
            tasaNominal = tipoC[7]
            break;
            case "96":
            tasaNominal = tipoC[8]
            break;
            case "108":
            tasaNominal = tipoC[9]
            break;
            case "120":
            tasaNominal = tipoC[10]
            break;
        }
        //tasaNominal TIPO D
    }  else if(monto >=40000 && monto <=45000){
        let meses = document.getElementById("meses").value ;
        
        switch (meses){
            
            case "12":
            tasaNominal = tipoD[0]
            break;
            case "18":
            tasaNominal = tipoD[1]
            break;
            case "24":
            tasaNominal = tipoD[2]
            break;
            case "36":
            tasaNominal = tipoD[3]
            break;
            case "48":
            tasaNominal = tipoD[4]
            break;
            case "60":
            tasaNominal = tipoD[5]
            break;
            case "72":
            tasaNominal = tipoD[6]
            break;
            case "84":
            tasaNominal = tipoD[7]
            break;
            case "96":
            tasaNominal = tipoD[8]
            break;
            case "108":
            tasaNominal = tipoD[9]
            break;
            case "120":
            tasaNominal = tipoD[10]
            break;
        }
        //tasaNominal TIPO E
    } else if(monto >=45001 && monto <=50000){
        let meses = document.getElementById("meses").value ;
        
        switch (meses){
            
            case "12":
            tasaNominal = tipoE[0]
            break;
            case "18":
            tasaNominal = tipoE[1]
            break;
            case "24":
            tasaNominal = tipoE[2]
            break;
            case "36":
            tasaNominal = tipoE[3]
            break;
            case "48":
            tasaNominal = tipoE[4]
            break;
            case "60":
            tasaNominal = tipoE[5]
            break;
            case "72":
            tasaNominal = tipoE[6]
            break;
            case "84":
            tasaNominal = tipoE[7]
            break;
            case "96":
            tasaNominal = tipoE[8]
            break;
            case "108":
            tasaNominal = tipoE[9]
            break;
            case "120":
            tasaNominal = tipoE[10]
            break;
        }

        
    } 


    
    

 

 let meses = parseFloat(document.getElementById("meses").value) ;


    const calcularPago = (monto ,tasaNominal, meses) => {
        const tasaMensual = tasaNominal/12/100;
        const cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -meses));
        return cuotaMensual;
    };

    const pagoMensual = calcularPago(monto, tasaNominal, meses);


    const calcularCredito = (monto ,tasaNominal, meses) => {
        const tasaMensual = tasaNominal/12/100;
        const cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -meses));
        const montoTotal = cuotaMensual * meses;
        return montoTotal;
    };

    const totalPagar = calcularCredito(monto, tasaNominal, meses);

    // console.log(totalPagar.toFixed(2))

    let total = totalPagar;

    let pago = pagoMensual

    // console.log(pago.toFixed(2));
    
    function procesarValor(a){
        return a - pago;
        }
    let valorInicial = total + pago ;

        var resultados = [];

    for( i = 1; i <= meses; i++){

        valorInicial = procesarValor(valorInicial);
        // console.log(`Saldo pendiente ${i} : ${valorInicial.toFixed(2)}`);
        resultados.push( valorInicial.toFixed(2));

    }

    

    // console.log(`Saldo pendiente ${meses += 1} : Credito pagado`)

    console.log(resultados)

    

    // Esta seccion muestra los resultados del prestamo en HTML

    let mostrarTotal = document.getElementById("showTotal");
    mostrarTotal.innerHTML = `Su total a pagar sera: ${totalPagar.toFixed(2)}`

    let mostrarPago = document.getElementById("showPago");
    mostrarPago.innerHTML = `Su pago sera: ${pago.toFixed(2)}`

    let mostrarInteres = document.getElementById("showInteres");
    mostrarInteres.innerHTML = `Su interes sera de: ${tasaNominal}%`

    // let mostrarSaldos = document.getElementById("showSaldo");
    // mostrarSaldos.innerHTML = saldos
    

    //Esta seccion genera la tabla de saldos

    let saldos = resultados

    var tablaBody = document.getElementById("tablaBody");

    // recorre el array y construye las filas de la tabla
    for(var i = 0; i < saldos.length; i++){

        var fila = document.createElement("tr");

        //crea celdas para el indice y el valor

        var celdaIndice  = document.createElement("td");
        var celdaValor = document.createElement("td");

        // Establece el contenido de las celdas

        celdaIndice.textContent = `Saldo pendiente : ${i+1} `;
        celdaValor.textContent = saldos[i];

        // agrega las celdas a la fila 
        fila.appendChild(celdaIndice);
        fila.appendChild(celdaValor);

        // agrega la fila al cuerpo de la tabla

        tablaBody.appendChild(fila);


    }

}

function capturar() {

    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var cliente = document.getElementById("cliente").value;

    var solicitante = {
        "nombre" : nombre,
        "telefono" : telefono,
        "correo" : correo,
        "cliente": cliente,
    };

    console.log  (solicitante)
}








