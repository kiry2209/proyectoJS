let nombre = prompt("Por favor ingrese su nombre:")

if (nombre != "") {
    alert("Bienvenido: " + nombre + "!")
} else {
    alert("Bienvenido internauta!")
}

let nombreproductoA = "adulto"
let precioproductoA = "20000"
let stockproductoA = "7"

let nombreproductoB = "chicos"
let precioproductoB = "5000"
let stockproductoB = "5"

let cantidadcompras = prompt("Por favor ingrese la cantidad de compras que va a realizar (1 o 2)")
let precioTotal = 0;

function calculoPrecio(precio, cantidad){
    precioTotal += precio * cantidad
    
}

function calculoStock(cantidad, stock, precio){
    if(stock >= cantidad){
        calculoPrecio(precio, cantidad)
        alert("El precio de su compraes: $" + (precio * cantidad))
    }
    else{
        alert("No disponemos de esa cantidad" + stock + "unidades")
    }
}

for(let i = 0; i < cantidadcompras; i++){

    let compra1 = prompt("Ingrese el tipo de bicicletas que desea comprar: \n- adulto\n- chicos")
    let cantidad1 = prompt("Ingrese la cantidad del producto que desea comrpar")

    if(compra1 == "adulto"){
        calculoStock(cantidad1, stockproductoA, precioproductoA)
    }

    else if(compra1 == "chicos"){
        calculoStock(cantidad1, stockproductoB, precioproductoB)
    }

    else {
        alert("No disponemos de ese producto")
    }
}

switch(true){
    
    case precioTotal >= 10000 && precioTotal <= 15000:
        precioTotal = precioTotal * 0.95
        alert("Recibiste un descuento del 5% por tu compra")
        break;
    case precioTotal >= 16000 && precioTotal <= 25000:
        precioTotal = precioTotal * 0.90
        alert("Recibiste un descuento del 10% por tu compra")
        break;
    case precioTotal >= 26000 && precioTotal <= 35000:
        precioTotal = precioTotal * 0.80
        alert("Recibiste un descuento del 20% por tu compra")
        break;
    case precioTotal > 45000:
        alert("Recibiste un descuento del 40% por tu compra")
        precioTotal = precioTotal * 0.60
        break;
    default:
        console.log(precioTotal)
        alert("Para recibir de nuestros descuentos su compra debe superar los $10000");
        break;
}
    
let mensajeColorError = "Error: Debe ingresar un color disponible: verde/rojo/negro/azul";

let color = prompt("Ingrese color que desea verde/rojo/negro/azul")

    if((color == "verde") || (color == "rojo") || (color == "negro") || (color == "azul")) {
        alert("Color en stock")

     } else {
            alert(mensajeColorError)
        };

    console.log()
        alert("Compra realizada con exito!")