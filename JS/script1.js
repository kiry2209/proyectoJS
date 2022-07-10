let nombreproductoA = "adulto"
let precioproductoA = "20000"
let stockproductoA = "7"

let nombreproductoB = "chicos"
let precioproductoB = "5000"
let stockproductoB = "5"

let compra1 = prompt("Ingrese tipo de Bicicleta adulto o chicos:")
let cantidad1 = prompt("Ingrese la cantidad de unidades a comprar")
let color = prompt("Ingrese color que desea verde/rojo/negro/azul")


if(compra1 == "adulto"){
    

    if(stockproductoA >= cantidad1){
        alert("El precio de su compraes: $" + (precioproductoA * cantidad1))
    
    } else {
        alert("No disponemos de esa cantidad")

    };

    if((color == "verde") || (color == "rojo") || (color == "negro") || (color == "azul")) {
        alert("Color en stock")

     } else {
            alert("Error: Ingrese stock disponible: verde/rojo/negro/azul")
        };

    console.log("Compra realizada con exito!")
    
    
}else{
    
    if(stockproductoA >= cantidad1){
        alert("El precio de su compraes: $" + (precioproductoB * cantidad1))
    }
    else{
        alert("No disponemos de esa cantidad")
    }

    
    if((color == "verde") || (color == "rojo") || (color == "negro") || (color == "azul")){
        alert("Color en stock")

       } else {
            alert("Error: Ingrese stock disponible: verde/rojo/negro/azul")
        }

    console.log("Compra realizada con exito!")
}


