
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
btnAgregarSemilla.innerText = "Ocultar Todo"
btnAgregarSemilla.className = "btn-fijo"
btnAgregarSemilla.onclick = ()=> ocultarTodo();

btnContainer.appendChild(btnMostrarSemillas)
btnContainer.appendChild(btnMostarCarrito)
btnContainer.appendChild(btnAgregarSemilla)


document.body.appendChild(btnContainer)



const container = document.createElement("div");
container.className = "container"
document.body.appendChild(container)

let carrito;

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
} else{
carrito = []
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
        quitar.onclick = () => quitarDelCarrito(el.id, el.nombre);

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
        alert ('Solo se puede agregar un tipo de semilla por compra muchas gracias.')
    }else{
        carrito.push(sumarCarrito);
        localStorage.setItem("carrito", JSON.stringify("carrito"))
        alert(`${sumarCarrito.nombre} Se sumo al carrito.`)
    }
};

function quitarDelCarrito(id,nombre){
    const carritoNuevo = carrito.filter(el=> el.id !== id);
    carrito = carritoNuevo;
    localStorage.setItem("carrito", JSON.stringify(carritoNuevo))
    mostrarCarrito(2);
    alert(`${nombre} se quito de carrito con exito.`)
};

function ocultarTodo(){
    container.innerHTML = "";    
}
















