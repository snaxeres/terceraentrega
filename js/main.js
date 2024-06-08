
const btnContainer = document.createElement("div")
btnContainer.className = "btn-container"

const btnMostrarSemillas = document.createElement("button")
btnMostrarSemillas.innerText = "Mostrar semillas"
btnMostrarSemillas.className = "btn-fijo"
btnMostrarSemillas.onclick = ()=> mostrarSemillas(semillas);

const btnMostarCarrito = document.createElement("button")
btnMostarCarrito.innerText = "Mostrar carrito"
btnMostarCarrito.className = "btn-fijo"
btnMostarCarrito.onclick = ()=> mostrarCarrito(carrito);

const btnAgregarSemilla = document.createElement("button")
btnAgregarSemilla.innerText = "Finalizar compra"
btnAgregarSemilla.className = "btn-fijo"
btnAgregarSemilla.onclick = () => finalizarCompra(true)
    .then((true));

btnContainer.appendChild(btnMostrarSemillas)
btnContainer.appendChild(btnMostarCarrito)
btnContainer.appendChild(btnAgregarSemilla)


document.body.appendChild(btnContainer)



const container = document.createElement("div");
container.className = "container"
document.body.appendChild(container)

let carrito =  JSON.parse(localStorage.getItem("carrito")) || [];

function alertCompra (){
    Swal.fire({
        title: "Felicidades has sumado un producto al carrito.",
        text: "En la seccion mostrar carrito veras tus objetos hasta el momento.",
        icon: "success"
      });
}

function alertStock (){
    Swal.fire({
        title: "Solo se puede agregar una clase de semilla, por falta de stock, disculpe las molestias ocasionadas",
        text: "Proximamente mejoraremos el servicio. Muchas gracias",
        icon: "info"
      });
}

function alertEliminarProducto (){
    Swal.fire({
        title: "El producto ha sido eliminado del carritoo",
        text: "Por favor continue comprando, muchas gracias",
        icon: "success"
      });

}

function alertFin (){
    Swal.fire({
        title: "Su compra ha sido terminada, Muchas gracias!",
        text: "Para reiniciar su carrito solo debe actualizar la, pagina hasta luego!",
        icon: "success"
      });
    
}


function crearCard(nuevoArray){
    nuevoArray.forEach(el=> {
        const card = document.createElement("div")
        card.className = "card"
        
        const nombre = document.createElement("p")
        nombre.className = "nombre"
        nombre.innerText = el.nombre

        const precio = document.createElement("p")
        precio.className = "nombre"
        precio.innerText = "$" + el.precio
        
        const imagen = document.createElement("img")
        imagen.className = "imagen"
        imagen.src = el.imagen
        
        const agregar = document.createElement("button")
        agregar.className = "btn-fijo"
        agregar.innerText = "Agregar al carrito"
        agregar.onclick = () => agregarCarritoNuevo(el.id);

        const quitar = document.createElement("button")
        quitar.className = "btn-fijo"
        quitar.innerText = "Quitar del Carrito"
        if(carrito.includes(el)){
            quitar.onclick = () => quitarDelCarrito(el.id, el.nombre);
        }

        card.appendChild(nombre)
        card.appendChild(precio)
        card.appendChild(imagen)
        card.appendChild(agregar)
        card.appendChild(quitar)
        container.appendChild(card);
    });
}

function mostrarSemillas(){
    container.innerHTML = "";
        const nuevoArray = semillas.slice(0,9)
        crearCard(nuevoArray);           
}

function mostrarCarrito(){
    container.innerHTML = "";
    const nuevoCarrito = carrito.slice(carrito)
    crearCard(nuevoCarrito);
};

function agregarCarritoNuevo(id){

    const sumarCarrito = semillas.find(el => el.id === id);

    if (carrito.some(el=> el.id === id)){
        alertStock ();
    }else{
        carrito.push(sumarCarrito);
        localStorage.setItem("carrito", JSON.stringify("carrito"))
        alertCompra ();
    }
};

function quitarDelCarrito(id,nombre){
    const carritoNuevo = carrito.filter(el=> el.id !== id);
    carrito = carritoNuevo;
    localStorage.setItem("carrito", JSON.stringify(carritoNuevo))
    mostrarCarrito(2);
    alertEliminarProducto () ;
};

const finalizarCompra = () => {
    alertFin ()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(localStorage.clear(), + (container.innerHTML = ""));
        }, 5000);
    })
}
















