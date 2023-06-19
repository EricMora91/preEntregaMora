let productos =[     
    {id:1, cantidad: 1, nombre: "Disipar las Nieblas del Futuro, Cassandra Vablatsky", categoría: "Libros", subcategoría: "Libro", precio: 350, imgUrl:"../images/materia1.png", imgUrl2:"../images/materia1768.png",imgUrl3:"../images/materia11024.png"},
    {id:2, cantidad: 1, nombre: "El Alquimista, Nicolás Flamel", categoría: "Libros", subcategoría: "Libro", precio: 350, imgUrl:"../images/materia2.jpg", imgUrl2:"../images/materia2768.jpg",imgUrl3:"../images/materia21024.jpg"},
    {id:3, cantidad: 1, nombre: "Animales Fantásticos, Y Dónde Encontrarlos, Newt Scamander", categoría: "Libros", subcategoría: "Libro", precio: 300, imgUrl:"../images/materia3.jpg", imgUrl2:"../images/materia3768.jpg",imgUrl3:"../images/materia31024.jpg"},
    {id:4, cantidad: 1, nombre: "Númerología y Gramática, Leonora Wakefield", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl:"../images/materia4.jpg", imgUrl2:"../images/materia4768.jpg",imgUrl3:"../images/materia41024.jpg"},
    {id:5, cantidad: 1, nombre: "Teoría Mágica, Adalbert Waffling", precio: 400, categoría: "Libros", subcategoría: "Libro", imgUrl:"../images/materia5.jpg", imgUrl2:"../images/materia5768.jpg",imgUrl3:"../images/materia51024.jpg"},
    {id:6, cantidad: 1, nombre: "El Monstroso Libro de los Monstrous, Edwardus Lima", categoría: "Libros", subcategoría: "Libro", precio: 350, imgUrl:"../images/materia6.jpg", imgUrl2:"../images/materia6768.jpg",imgUrl3:"../images/materia61024.jpg"},
    {id:7, cantidad: 1, nombre: "Las Fuerzas Oscuras. Guía para la Autoprotección, Quentim Trimble", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl:"../images/materia7.jpg", imgUrl2:"../images/materia7768.jpg",imgUrl3:"../images/materia71024.jpg"},
    {id:8, cantidad: 1, nombre: "El Libro Reglamentario de Hechizos Miranda Goshawk", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl:"../images/materia8.jpg", imgUrl2:"../images/materia8768.jpg",imgUrl3:"../images/materia81024.jpg"},
    {id:9, cantidad: 1, nombre: "Una Historia de la Magia, Bathilda Bagshot", categoría: "Libros", subcategoría: "Libro", precio: 400, imgUrl:"../images/materia9.jpg", imgUrl2:"../images/materia9768.jpg",imgUrl3:"../images/materia91024.jpg"},
    {id:10, cantidad: 1, nombre: "Mil Hierbas y hongos mágicos, Phyllida Spore", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl:"../images/materia10.jpg", imgUrl2:"../images/materia10768.jpg",imgUrl3:"../images/materia101024.jpg"},
    {id:11, cantidad: 1, nombre: "Guía Básica de Transformaciones, Emeric Switch", categoría: "Libros", subcategoría: "Libro", precio: 600, imgUrl:"../images/materia11.jpg", imgUrl2:"../images/materia11768.jpg",imgUrl3:"../images/materia111024.jpg"},
    {id:12, cantidad: 1, nombre: "Vida y Hábitos de los Muggles Británicos, Edenna Skanterberg", categoría: "Libros", subcategoría: "Libro", precio: 200, imgUrl:"../images/materia12.jpg", imgUrl2:"../images/materia12768.jpg",imgUrl3:"../images/materia121024.jpg"},
    {id:13, cantidad: 1, nombre: "Filtros y Pociones Mágicas, Arsenius Jigger", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl:"../images/materia13.jpg", imgUrl2:"../images/materia13768.jpg",imgUrl3:"../images/materia131024.jpg"},
    {id:14, cantidad: 1, nombre: "Diccionario de Runas", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl:"../images/materia14.png", imgUrl2:"../images/materia14768.png",imgUrl3:"../images/materia141024.png"},
    {id:15, cantidad: 1, nombre: "Los Cuentos de Beedle, El Bardo", precio: 200, categoría: "Libros", subcategoría: "Libro", imgUrl:"../images/materia15.jpg", imgUrl2:"../images/materia15768.jpg",imgUrl3:"../images/materia151024.jpg"},
    {id:16, cantidad: 1, nombre: "Quidditch a Través de los Tiempos, Kennilworthy Whisp", categoría: "Libros", subcategoría: "Libro", precio: 200, imgUrl:"../images/materia16.jpg", imgUrl2:"../images/materia16768.jpg",imgUrl3:"../images/materia161024.jpg"},
    {id:17, cantidad: 1, nombre: "La Historia de Hogwarts, Bathilda Bagshot", categoría: "Libros", subcategoría: "Libro", precio: 350, imgUrl:"../images/materia17.png", imgUrl2:"../images/materia17768.png",imgUrl3:"../images/materia171024.png"},
    {id:18, cantidad: 1, nombre: "Elaboración de Pociones Avanzadas, Libatius Borage", categoría: "Libros", subcategoría: "Libro", precio: 600, imgUrl:"../images/materia18.jpg", imgUrl2:"../images/materia18768.jpg",imgUrl3:"../images/materia181024.jpg"},
    {id:19, cantidad: 1, nombre: "Viaje con los Vampiros, Gilderoy Lockhart", categoría: "Libros", subcategoría: "Libro", precio: 300, imgUrl:"../images/materia19.jpg", imgUrl2:"../images/materia19768.jpg",imgUrl3:"../images/materia191024.jpg"},
    {id:20, cantidad: 1, nombre: "Mi Yo Mágico, Gilderoy Lockhart", categoría: "Libros", subcategoría: "Libro", precio: 300, imgUrl:"../images/materia20.jpg", imgUrl2:"../images/materia20768.jpg",imgUrl3:"../images/materia201024.jpg"},
    {id:21, cantidad: 1, nombre: "Recorrido con los Trolls, Gilderoy Lockhart", categoría: "Libros", subcategoría: "Libro", precio: 300, imgUrl:"../images/materia21.jpg", imgUrl2:"../images/materia21768.jpg",imgUrl3:"../images/materia211024.jpg"},
    {id:22, cantidad: 1, nombre: "Recreo con la Banshee, Gilderoy Lockhart", categoría: "Libros", subcategoría: "Libro", precio: 400, imgUrl:"../images/materia22.jpg", imgUrl2:"../images/materia22768.jpg",imgUrl3:"../images/materia221024.jpg"},
    {id:23, cantidad: 1, nombre: "Bufanda Gryffindor", categoría: "ropa", subcategoría: "Bufanda", precio: 200, imgUrl:"../images/bufandaG.webp", imgUrl2:"../images/bufandaG768.webp", imgUrl3:"../images/bufandaG1024.webp"},
    {id:24, cantidad: 1, nombre: "Bufanda Slytherin", categoría: "ropa", subcategoría: "Bufanda", precio: 200, imgUrl:"../images/bufandaS.webp", imgUrl2:"../images/bufandaS768.webp", imgUrl3:"../images/bufandaS1024.webp"},
    {id:25, cantidad: 1, nombre: "Bufanda Ravenclaw", categoría: "ropa", subcategoría: "Bufanda", precio: 200, imgUrl:"../images/bufandaR.webp", imgUrl2:"../images/bufandaR768.webp", imgUrl3:"../images/bufandaR1024.webp"},
    {id:26, cantidad: 1, nombre: "Bufanda Hufflepuff", categoría: "ropa", subcategoría: "Bufanda", precio: 200, imgUrl:"../images/bufandaH.webp", imgUrl2:"../images/bufandaH768.webp", imgUrl3:"../images/bufandaH1024.webp"},
    {id:27, cantidad: 1, nombre: "Corbata Gryffindor", categoría: "ropa", subcategoría: "Corbata", precio: 150, imgUrl:"../images/corbataG.webp", imgUrl2:"../images/corbataG768.webp", imgUrl3:"../images/corbataG1024.webp"},
    {id:28, cantidad: 1, nombre: "Corbata Slytherin", categoría: "ropa", subcategoría: "Corbata", precio: 150, imgUrl:"../images/corbataS.webp", imgUrl2:"../images/corbataS768.webp", imgUrl3:"../images/corbataS1024.webp"},
    {id:29, cantidad: 1, nombre: "Corbata Ravenclaw", categoría: "ropa", subcategoría: "Corbata", precio: 150, imgUrl:"../images/corbataR.webp", imgUrl2:"../images/corbataR768.webp", imgUrl3:"../images/corbataR1024.webp"},
    {id:30, cantidad: 1, nombre: "Corbata Hufflepuff", categoría: "ropa", subcategoría: "Corbata", precio: 150, imgUrl:"../images/corbataH.webp", imgUrl2:"../images/corbataH768.webp", imgUrl3:"../images/corbataH1024.webp"},
    {id:31, cantidad: 1, nombre: "Sueter Gryffindor", categoría: "ropa", subcategoría: "Suéter", precio: 400, imgUrl:"../images/sueterG.jpg", imgUrl2:"../images/sueterG768.jpg", imgUrl3:"../images/sueterG1024.jpg"},
    {id:32, cantidad: 1, nombre: "Sueter Slytherin", categoría: "ropa", subcategoría: "Suéter", precio: 400, imgUrl:"../images/sueterS.jpg", imgUrl2:"../images/sueterS768.jpg", imgUrl3:"../images/sueterS1024.jpg"},
    {id:33, cantidad: 1, nombre: "Sueter Ravenclaw", categoría: "ropa", subcategoría: "Suéter", precio: 400, imgUrl:"../images/sueterR.jpg", imgUrl2:"../images/sueterR768.jpg", imgUrl3:"../images/sueterR1024.jpg"},
    {id:34, cantidad: 1, nombre: "Sueter Hufflepuff", categoría: "ropa", subcategoría: "Suéter", precio: 400, imgUrl:"../images/sueterH.jpg", imgUrl2:"../images/sueterH768.jpg", imgUrl3:"../images/sueterH1024.jpg"},
    {id:35, cantidad: 1, nombre: "Túnica Gryffindor", categoría: "ropa", subcategoría: "Túnica", precio: 500, imgUrl:"../images/tunicaG.webp", imgUrl2:"../images/tunicaG768.webp", imgUrl3:"../images/tunicaG1024.webp"},
    {id:36, cantidad: 1, nombre: "Túnica Slytherin", categoría: "ropa", subcategoría: "Túnica", precio: 500, imgUrl:"../images/tunicaS.webp", imgUrl2:"../images/tunicaS768.webp", imgUrl3:"../images/tunicaS1024.webp"},
    {id:37, cantidad: 1, nombre: "Túnica Ravenclaw", categoría: "ropa", subcategoría: "Túnica", precio: 500, imgUrl:"../images/tunicaR.webp", imgUrl2:"../images/tunicaR768.webp", imgUrl3:"../images/tunicaR1024.webp"},
    {id:38, cantidad: 1, nombre: "Túnica Hufflepuff", categoría: "ropa", subcategoría: "Túnica", precio: 500, imgUrl:"../images/tunicaH.webp", imgUrl2:"../images/tunicaH768.webp", imgUrl3:"../images/tunicaH1024.webp"},
    {id:39, cantidad: 1, nombre: "Ajedrez Mágico", categoría: "accesorios", subcategoria: "Ajedrez", precio: 200, imgUrl:"../images/ajedrez.jpg", imgUrl2:"../images/ajedrez768.jpg", imgUrl3:"../images/ajedrez1024.jpg"},
    {id:40, cantidad: 1, nombre: "Balanza de Latón", categoría: "accesorios", subcategoria: "Balanza", precio: 400, imgUrl:"../images/balanza.jpg", imgUrl2:"../images/balanza768.jpg", imgUrl3:"../images/balanza1024.jpg"},
    {id:41, cantidad: 1, nombre: "Esfera de Cristal", categoría: "accesorios", subcategoria: "Esfera", precio: 300, imgUrl:"../images/bola.webp", imgUrl2:"../images/bola768.webp", imgUrl3:"../images/bola1024.webp"},
    {id:42, cantidad: 1, nombre: "Caldero de Peltre N.2", categoría: "accesorios", subcategoria: "Caldero", precio: 200, imgUrl:"../images/caldero.jpg", imgUrl2:"../images/caldero768.jpg", imgUrl3:"../images/caldero1024.jpg"},
    {id:43, cantidad: 1, nombre: "Giratiempo", categoría: "accesorios", subcategoria: "Giratiempo", precio: 600, imgUrl:"../images/giratiempo.jpg", imgUrl2:"../images/giratiempo768.jpg", imgUrl3:"../images/giratiempo1024.jpg"},
    {id:44, cantidad: 1, nombre: "Guantes, Piel de Dragón", categoría: "accesorios", subcategoria: "Guantes", precio: 400, imgUrl:"../images/guantes.webp", imgUrl2:"../images/guantes768.webp", imgUrl3:"../images/guantes1024.webp"},
    {id:45, cantidad: 1, nombre: "Recordadora", categoría: "accesorios", subcategoria: "Recordadora", precio: 250, imgUrl:"../images/recordadora.jpg", imgUrl2:"../images/recordadora768.jpg", imgUrl3:"../images/recordadora1024.jpg"},
    {id:46, cantidad: 1, nombre: "Frascos de Cristal para Pociones", categoría: "accesorios", subcategoria: "Frascos", precio: 250, imgUrl:"../images/redomas.jpg", imgUrl2:"../images/redomas768.jpg", imgUrl3:"../images/redomas1024.jpg"},
    {id:47, cantidad: 1, nombre: "Sombrero", categoría: "accesorios", subcategoria: "Sombrero", precio: 200, imgUrl:"../images/sombreroH.png", imgUrl2:"../images/sombreroH768.png", imgUrl3:"../images/sombreroH1024.png"},
    {id:48, cantidad: 1, nombre: "Telescopio", categoría: "accesorios", subcategoria: "Telescopio", precio: 500, imgUrl:"../images/telescopio.jpg", imgUrl2:"../images/telescopio768.jpg", imgUrl3:"../images/telescopio1024.jpg"},
    ]

    const contenedorProductos = document.getElementById("productos")
    const contenedorCarrito = document.getElementById("carrito")
    const precioTotal = document.getElementById("precioTotal")
    const botonBusqueda = document.getElementById("buscar")
    const inputBusqueda = document.getElementById("busqueda")
    let carritoGuardado = []

    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('carrito')){
            carritoGuardado = JSON.parse(localStorage.getItem('carrito'))
            actualizarCarrito()
        }
    })
        
        productos.forEach(({nombre, precio, id, imgUrl, imgUrl2, imgUrl3}) =>{
                let tarjetaProducto = document.createElement("picture")
                tarjetaProducto.className = "estiloImg"
                tarjetaProducto.innerHTML =`
                    <source media="(min-width:1024px)" srcset="${imgUrl3}"></source>
                    <source media="(min-width:768px)" srcset="${imgUrl2}"></source>
                    <source media="(min-width:480px)" srcset="${imgUrl}"></source>
                    <h3>${nombre}</h3>
                    <h4>$${precio}</h4>
                    <img class="grillaEstilo imgEstilo${id} scale" src="${imgUrl}">
                    <button class= "boton" id="agregar${id}">Agregar al carrito</button>`

                    contenedorProductos.append(tarjetaProducto)

                    const boton = document.getElementById(`agregar${id}`)

                    boton.onclick = () =>{
                        agregarAlCarrito(id)
                    }
        })


        const agregarAlCarrito = (productoId) => {
            const existe = carritoGuardado.some(producto => producto.id === productoId)
            console.log(existe)
            if(existe){
                const productoExistente = carritoGuardado.map(producto => {
                    if(producto.id === productoId){
                        producto.cantidad++
                    }
                })
            } else{
                const productoAAgregar = productos.find((producto) => producto.id === productoId)
                carritoGuardado.push(productoAAgregar)
                console.log(productoAAgregar)
                console.log(carritoGuardado)
                console.log(contenedorCarrito)
            }
            actualizarCarrito()
        }

        const eliminarDelCarrito = (productoId) => {
            const productoAEliminar = carritoGuardado.find((producto) => producto.id === productoId)
            const indice = carritoGuardado.indexOf(productoAEliminar)
            carritoGuardado.splice(indice,1)
            actualizarCarrito()
            console.log(productoAEliminar)
            console.log(indice)
            console.log(carritoGuardado)
            localStorage.setItem("carrito", JSON.stringify(carritoGuardado))
        }

        const actualizarCarrito = () => {

            contenedorCarrito.innerHTML = ""
            
            carritoGuardado.forEach(({id, imgUrl, nombre, precio, cantidad}) => {
                const div = document.createElement(`div`)
                div.className = (`productoEnCarrito`)
                div.innerHTML = `
                <img class="imgCarrito" src="${imgUrl}">
                <p>${nombre}</p>
                <p>Precio: $${precio}</p>
                <p>Cantidad: ${cantidad}</p>
                <p>Subtotal: $${precio*cantidad}</p>
                <button id="botonEliminar${id}" class"boton-eliminar">Eliminar</button>
                `

                contenedorCarrito.append(div)
                localStorage.setItem('carrito', JSON.stringify(carritoGuardado))
                console.log(carritoGuardado)

                const botonEliminar = document.getElementById(`botonEliminar${id}`)
                
                botonEliminar.onclick = () =>{
                    eliminarDelCarrito(id)
                }
            })
            precioTotal.innerText = carritoGuardado.reduce((acc, productos) => acc + productos.cantidad * productos.precio,0)
            console.log(precioTotal)
        }

        botonBusqueda.onclick = () => {
            const productosFiltrados = productos.filter(producto => producto.nombre.includes(inputBusqueda.value))
            console.log(productosFiltrados)
            }