let nombre = prompt("Por favor ingrese su nombre:")

if (nombre != "") {
    alert("Bienvenido: " + nombre + "!")
} else {
    alert("Bienvenido internauta!")
}

function Producto(nombre, stock, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    
}

const productoA = new Producto("adulto", 20000, 7);
const productoB = new Producto("chicos", 5000, 5);
const productoC = new Producto("triciclo", 1000, 10);
const productoD = new Producto("monopatin", 1500, 12);
const productoE = new Producto("rollers", 2000, 7);

const listaProductos = [productoA, productoB, productoC, productoD, productoE] 

let cantidadcompras = prompt("Por favor ingrese la cantidad de compras que va a realizar:")

let nombresProductos = listaProductos.map((producto) => producto.nombre) /*se agrega esta funcion de orden superior para reemplazar a la anterior*/
    
let precioTotal = 0;

function calculoPrecio(precio, cantidad){
    precioTotal += precio * cantidad
    
}

function calculoStock(cantidad, precio, stock,){
    if(stock >= cantidad){
        calculoPrecio(precio, cantidad)
        alert("El precio de su compraes: $" + (precio * cantidad))
    }
    else{
        alert("No disponemos de esa cantidad" + stock + "unidades")
    }
}

for(let i = 0; i < cantidadcompras; i++){

    let compra1 = prompt("Ingrese el nombre del producto que desea comprar: \n-" + nombresProductos.join("\n-")).toLocaleLowerCase() 
    let cantidad1 = prompt("Ingrese la cantidad del producto que desea comrpar")

    if(compra1 == "adulto"){
        calculoStock(cantidad1, productoA.stock, productoA.precio)
        ColorDeProductos()
    }

    else if(compra1 == "chicos"){
        calculoStock(cantidad1, productoB.stock, productoB.precio)
        ColorDeProductos()
    }

    else if(compra1 == "triciclo"){
        calculoStock(cantidad1, productoC.stock, productoC.precio)
        ColorDeProductos()
    }

    else if(compra1 == "monopatin"){
        calculoStock(cantidad1, productoD.stock, productoD.precio)
        ColorDeProductos()
    }

    else if(compra1 == "rollers"){
        calculoStock(cantidad1, productoE.stock, productoE.precio)
        ColorDeProductos()
    }

    else {
        alert("No disponemos de ese producto")
        compra1 = prompt("Ingrese el nombre del producto que desea comprar: \n-" + TotalDeProductos.join("\n-")).toLocaleLowerCase()
    }
}

switch(true){
    
    case precioTotal >= 10000 && precioTotal <= 15000:
        precioTotal = precioTotal * 0.95
        alert("Recibiste un descuento del 5% por tu compra")
        alert("El precio total de su compra con descuento es: $" + precioTotal)
        console.log()
        alert("Compra realizada con exito!")
        break;
    case precioTotal >= 16000 && precioTotal <= 25000:
        precioTotal = precioTotal * 0.90
        alert("Recibiste un descuento del 10% por tu compra")
        alert("El precio total de su compra con descuento es: $" + precioTotal)
        console.log()
        alert("Compra realizada con exito!")
        break;
    case precioTotal >= 26000 && precioTotal <= 35000:
        precioTotal = precioTotal * 0.80
        alert("Recibiste un descuento del 20% por tu compra")
        alert("El precio total de su compra con descuento es: $" + precioTotal)
        console.log()
        alert("Compra realizada con exito!")
        break;
    case precioTotal > 45000:
        
        precioTotal = precioTotal * 0.60
        alert("Recibiste un descuento del 40% por tu compra")
        alert("El precio total de su compra con descuento es: $" + precioTotal)
        console.log()
        alert("Compra realizada con exito!")
        break;
    default:
        console.log(precioTotal)
        alert("Para recibir de nuestros descuentos su compra debe superar los $10000");
        console.log()
        alert("Compra realizada con exito!")
        break;
}
    
function ColorDeProductos(){
    for(let e = 1; e <= 1; e++)
    color = prompt("Ingrese color que desea verde/rojo/negro/azul")

    if((color == "verde") || (color == "rojo") || (color == "negro") || (color == "azul")) {
        alert("Color en stock")

     } else {
            alert(mensajeColorError)
        };


let mensajeColorError = "Error: Debe ingresar un color disponible: verde/rojo/negro/azul";
}



   