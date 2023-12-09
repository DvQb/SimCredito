
 

function calcular(){
    let monto = parseInt(document.getElementById("monto").value) ;
    //tasaNominal TIPO A
    
   if ( monto <= 19999 ) {

        let meses = document.getElementById("meses").value ;
        
        switch (meses){
            
            case "12":
            tasaNominal = 12.79
            break;
            case "18":
            tasaNominal = 12.84
            break;
            case "24":
            tasaNominal = 12.94
            break;
            case "36":
            tasaNominal = 13.09
            break;
            case "48":
            tasaNominal = 13.24
            break;
            case "60":
            tasaNominal = 13.39
            break;
            case "72":
            tasaNominal = 13.69
            break;
            case "84":
            tasaNominal = 14.29
            break;
            case "96":
            tasaNominal = 14.39
            break;
            case "108":
            tasaNominal = 14.59
            break;
            case "120":
            tasaNominal = 14.89
            break;
            
            
        } 
        //tasaNominal TIPO B
    }else if(monto >=20000 && monto <=29999){
        let meses = document.getElementById("meses").value ;
        
        switch (meses){
            
            case "12":
            tasaNominal = 13.79
            break;
            case "18":
            tasaNominal = 13.84
            break;
            case "24":
            tasaNominal = 13.94
            break;
            case "36":
            tasaNominal = 14.09
            break;
            case "48":
            tasaNominal = 14.24
            break;
            case "60":
            tasaNominal = 14.39
            break;
            case "72":
            tasaNominal = 14.69
            break;
            case "84":
            tasaNominal = 15.29
            break;
            case "96":
            tasaNominal = 15.39
            break;
            case "108":
            tasaNominal = 15.59
            break;
            case "120":
            tasaNominal = 15.89
            break;
        }
        //tasaNominal TIPO C
    } else if(monto >=30000 && monto <39999){
        let meses = document.getElementById("meses").value ;
        
        switch (meses){
            
            case "12":
            tasaNominal = 14.79
            break;
            case "18":
            tasaNominal = 14.84
            break;
            case "24":
            tasaNominal = 14.94
            break;
            case "36":
            tasaNominal = 15.09
            break;
            case "48":
            tasaNominal = 15.24
            break;
            case "60":
            tasaNominal = 15.39
            break;
            case "72":
            tasaNominal = 15.69
            break;
            case "84":
            tasaNominal = 16.29
            break;
            case "96":
            tasaNominal = 16.39
            break;
            case "108":
            tasaNominal = 16.59
            break;
            case "120":
            tasaNominal = 16.89
            break;
        }
        //tasaNominal TIPO D
    }  else if(monto >=40000 && monto <=45000){
        let meses = document.getElementById("meses").value ;
        
        switch (meses){
            
            case "12":
            tasaNominal = 15.79
            break;
            case "18":
            tasaNominal = 15.84
            break;
            case "24":
            tasaNominal = 15.94
            break;
            case "36":
            tasaNominal = 16.09
            break;
            case "48":
            tasaNominal = 16.24
            break;
            case "60":
            tasaNominal = 16.39
            break;
            case "72":
            tasaNominal = 16.69
            break;
            case "84":
            tasaNominal = 17.29
            break;
            case "96":
            tasaNominal = 17.39
            break;
            case "108":
            tasaNominal = 17.59
            break;
            case "120":
            tasaNominal = 17.89
            break;
        }
        //tasaNominal TIPO E
    } else if(monto >=45001 && monto <=50000){
        let meses = document.getElementById("meses").value ;
        
        switch (meses){
            
            case "12":
            tasaNominal = 18.79
            break;
            case "18":
            tasaNominal = 18.84
            break;
            case "24":
            tasaNominal = 18.94
            break;
            case "36":
            tasaNominal = 19.09
            break;
            case "48":
            tasaNominal = 19.24
            break;
            case "60":
            tasaNominal = 19.39
            break;
            case "72":
            tasaNominal = 19.69
            break;
            case "84":
            tasaNominal = 20.29
            break;
            case "96":
            tasaNominal = 20.39
            break;
            case "108":
            tasaNominal = 20.59
            break;
            case "120":
            tasaNominal = 21
            break;
        }

        
    } 

    

 let tasaReal = tasaNominal/100;
 let meses = parseFloat(document.getElementById("meses").value) ;
 let total = (monto + (monto*tasaReal));
 let pago = (monto + (monto*tasaReal))/meses

 console.log(pago.toFixed(2));
  
 function procesarValor(a){
     return a - pago;
    }
 let valorInicial = total + pago ;
 for( i = 1; i <= meses; i++){

     valorInicial = procesarValor(valorInicial);
     console.log(`Saldo pendiente ${i} : ${valorInicial.toFixed(2)}`);

  }
 
  console.log(`Saldo pendiente ${meses += 1} : Credito pagado`)
}





