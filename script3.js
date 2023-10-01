/**Aquí empieza el codigo de la sección de productos**/

let traerPerfil = localStorage.getItem("perfil") /**obtener valores del storage**/
let perfilString = JSON.parse(traerPerfil)
const contenedorCarrito = document.getElementById("carrito")
const precioTotal = document.getElementById("precioTotal")
const inputBusqueda = document.getElementById("busqueda")
let listaCarrito = JSON.parse(localStorage.getItem("carrito")) || [] /**parsear elementos del storage**/
let botonPagar = document.getElementById("botonPagar")

async function mostrarArticulos(){ /**función mostrar artículos**/

    let listaProductosJSON = await fetch("/simulacionAPI.json") /**llamando a la API simulada**/
    let listaProductosJS = await listaProductosJSON.json()
    const contenedorProductos = document.getElementById("productos")


    const productosCasa = listaProductosJS.filter(producto => producto.casa.includes(perfilString[6].casa))
    productosCasa.forEach(({nombre, precio, id, imgUrl, imgUrl2, imgUrl3}) =>{ /**crear lista de productos**/
        let tarjetaProducto = document.createElement("picture")
        tarjetaProducto.className = "productoEstilo"
        tarjetaProducto.innerHTML =`
            <source media="(min-width:1024px)" srcset="${imgUrl3}"></source>
            <source media="(min-width:768px)" srcset="${imgUrl2}"></source>
            <source media="(min-width:480px)" srcset="${imgUrl}"></source>
            <h3 class="productoNombre">${nombre}</h3>
            <h4 class="productoPrecio">$${precio}</h4>
            <img class="grillaEstilo imgEstilo${id} scale" src="${imgUrl}">
            <button class= "productoBoton" id="agregar${id}">Agregar al carrito</button>`
        contenedorProductos.append(tarjetaProducto)

        const boton = document.getElementById(`agregar${id}`)
                        
        boton.onclick = () =>{ /**llamar al evento agregar al carrito**/
            agregarAlCarrito(id)
        }
    })

    function agregarAlCarrito(productoId){
        const existe = listaCarrito.some(producto => producto.id === productoId)
        if(existe){
            const productoExistente = listaCarrito.map(producto => {
                if(producto.id === productoId){
                    producto.cantidad++
                }
            })
        } else {
            Toastify({
                text: "Producto agregado",
                duration: 1000,
                style: {
                    background: "linear-gradient(to right, palevioletred, #f5a9eb)"
                }
                }).showToast();
                listaCarrito.push(listaProductosJS.find(producto => producto.id ===productoId)) /**agregar elementos al carrito**/
                const productoAAgregar = listaCarrito.find(producto => producto.id === productoId)
                const indiceAgregar = listaCarrito.indexOf(productoAAgregar)
                listaCarrito[indiceAgregar].cantidad = 1
            }
    
            actualizarCarrito()
    }

    function disminuirDelProducto(productoId){
        const existe = listaCarrito.some(producto => producto.id === productoId)
        if(existe){
            const productoExistente = listaCarrito.map(producto => {
                if(producto.id === productoId && producto.cantidad > 1){
                    producto.cantidad--
                }
            })
        }
    
        actualizarCarrito()
    }

    function eliminarDelCarrito(productoId){
        if(listaCarrito.length!==1){
            Toastify({
                text: "Producto eliminado",
                duration: 1000,
                style: {
                    background: "linear-gradient(to right, palevioletred, #f5a9eb)"
                }
                }).showToast();
        const productoAEliminar = listaCarrito.find(producto => producto.id === productoId)
        const indice = listaCarrito.indexOf(productoAEliminar
            )
        listaCarrito.splice(indice,1) /**eliminar valores del array**/
        actualizarCarrito()
        } else{
            Toastify({
                text: "Carrito vaciado",
                duration: 1000,
                style: {
                    background: "linear-gradient(to right, palevioletred, #f5a9eb)"
                }
                }).showToast();
            const productoAEliminar = listaCarrito.find(producto => producto.id === productoId)
            const indice = listaCarrito.indexOf(productoAEliminar)
            listaCarrito.splice(indice,1) /**eliminar valores del array**/
            actualizarCarrito()
            localStorage.removeItem("carrito") /**remover del storage**/
        }
    }

    function pagar(){
        if(listaCarrito.length > 0){
        Toastify({
            text: "¡Gracias por su compra!",
            duration: 1000,
            style: {
                background: "linear-gradient(to right, palevioletred, #f5a9eb)"
            }
            }).showToast();
            localStorage.removeItem("carrito") /**remover del storage**/
            listaCarrito = []
            actualizarCarrito()} else{
                Toastify({
                    text: "No cuenta con ningun artículo seleccionado.",
                    duration: 2000,
                    style: {
                        background: "linear-gradient(to right, palevioletred, #f5a9eb)"
                    }
                    }).showToast();
            }
    }

    function actualizarCarrito(){
        contenedorCarrito.innerHTML= ""
            listaCarrito.forEach(({id, nombre, precio, imgUrl, cantidad}) => { /**crear carrito**/
                const div = document.createElement(`div`)
                div.className = (`productoEnCarrito`)
                div.innerHTML = `
                <p class="estiloCarrito carrito">${nombre}</p>
                <img class="imgCarrito" src="${imgUrl}">
                <p class="estiloCarrito ">Precio: $${precio}</p>
                <p class="estiloCarrito ">Cantidad: <button class="botonCantidad" id='disminuir${id}'><i class="fa-solid fa-minus iconoCantidad"></i></button> ${cantidad} <button class="botonCantidad" id='aumentar${id}'><i class="fa-solid fa-plus iconoCantidad"></i></button></p>
                <p class="estiloCarrito ">Subtotal: ${precio*cantidad}</p>
                <button id="botonEliminar${id}" class="boton-eliminar"><i class="fa-solid fa-trash iconoEliminar"></i></button>`
        contenedorCarrito.append(div)
        const botonEliminar = document.getElementById(`botonEliminar${id}`)
        const botonAumentar = document.getElementById(`aumentar${id}`)
        const botonDisminuir = document.getElementById(`disminuir${id}`)
    
        botonAumentar.onclick = () =>{
            agregarAlCarrito(id)
        }
    
        botonDisminuir.onclick = () =>{
            disminuirDelProducto(id)
        }
            
        botonEliminar.onclick = () =>{
            eliminarDelCarrito(id)
        }
        })
        
        precioTotal.innerText = listaCarrito.reduce((acc, productos) => acc + productos.cantidad * productos.precio,0)
        localStorage.setItem("carrito", JSON.stringify(listaCarrito)) /**enviar elementos al storage**/
    }

    function renderizarProductos(productosFiltrados){
        let productosARenderizar = listaProductosJS;
        if(productosFiltrados){    
            productosARenderizar = productosFiltrados
        } else{""};
                
        contenedorProductos.innerHTML = " "
        for(const {nombre, id, precio, imgUrl, imgUrl2, imgUrl3} of productosARenderizar){
            let tarjetaProducto = document.createElement("picture")
            tarjetaProducto.className = "productoEstilo"
            tarjetaProducto.innerHTML =`
                <source media="(min-width:1024px)" srcset="${imgUrl3}"></source>
                <source media="(min-width:768px)" srcset="${imgUrl2}"></source>
                <source media="(min-width:480px)" srcset="${imgUrl}"></source>
                <h3 class="productoNombre">${nombre}</h3>
                <h4 class="productoPrecio">$${precio}</h4>
                <img class="grillaEstilo imgEstilo${id} scale" src="${imgUrl}">
                <button class= "productoBoton" id="agregar${id}">Agregar al carrito</button>`
                                            
                contenedorProductos.append(tarjetaProducto)
                                
                const boton = document.getElementById(`agregar${id}`)
                                            
                boton.onclick = () =>{
                    agregarAlCarrito(id)
                }
        }
    }

    inputBusqueda.oninput = () => {
        const productosFiltrados = listaProductosJS.filter(producto => producto.nombre.includes(inputBusqueda.value.charAt(0).toUpperCase()+inputBusqueda.value.slice(1).toLowerCase()))
        renderizarProductos(productosFiltrados)
    }

    botonPagar.onclick = () =>{
        pagar()
    }

    actualizarCarrito()
}

mostrarArticulos()
