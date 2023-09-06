/**Aquí empieza el codigo de la sección de productos**/
let productos =[     
    {id: 1, cantidad: 1, nombre: "Disipar las Nieblas del Futuro, Cassandra Vablatsky", categoría: "Libros", subcategoría: "Libro", precio: 350, imgUrl: "../images/materia1.png", imgUrl2: "../images/materia1768.png", imgUrl3: "../images/materia11024.png", casa: "todas"},
    {id: 2, cantidad: 1, nombre: "El Alquimista, Nicolás Flamel", categoría: "Libros", subcategoría: "Libro", precio: 350, imgUrl: "../images/materia2.jpg", imgUrl2: "../images/materia2768.jpg", imgUrl3: "../images/materia21024.jpg", casa: "todas"},
    {id: 3, cantidad: 1, nombre: "Animales Fantásticos, Y Dónde Encontrarlos, Newt Scamander", categoría: "Libros", subcategoría: "Libro", precio: 300, imgUrl: "../images/materia3.jpg", imgUrl2: "../images/materia3768.jpg", imgUrl3: "../images/materia31024.jpg", casa: "todas"},
    {id: 4, cantidad: 1, nombre: "Númerología y Gramática, Leonora Wakefield", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl: "../images/materia4.jpg", imgUrl2: "../images/materia4768.jpg", imgUrl3: "../images/materia41024.jpg", casa: "todas"},
    {id: 5, cantidad: 1, nombre: "Teoría Mágica, Adalbert Waffling", precio: 400, categoría: "Libros", subcategoría: "Libro", imgUrl: "../images/materia5.jpg", imgUrl2: "../images/materia5768.jpg", imgUrl3: "../images/materia51024.jpg", casa: "todas"},
    {id: 6, cantidad: 1, nombre: "El Monstroso Libro de los Monstrous, Edwardus Lima", categoría: "Libros", subcategoría: "Libro", precio: 350, imgUrl: "../images/materia6.jpg", imgUrl2: "../images/materia6768.jpg", imgUrl3: "../images/materia61024.jpg", casa: "todas"},
    {id: 7, cantidad: 1, nombre: "Las Fuerzas Oscuras. Guía para la Autoprotección, Quentim Trimble", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl: "../images/materia7.jpg", imgUrl2: "../images/materia7768.jpg", imgUrl3: "../images/materia71024.jpg", casa: "todas"},
    {id: 8, cantidad: 1, nombre: "El Libro Reglamentario de Hechizos Miranda Goshawk", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl: "../images/materia8.jpg", imgUrl2: "../images/materia8768.jpg", imgUrl3: "../images/materia81024.jpg", casa: "todas"},
    {id: 9, cantidad: 1, nombre: "Una Historia de la Magia, Bathilda Bagshot", categoría: "Libros", subcategoría: "Libro", precio: 400, imgUrl: "../images/materia9.jpg", imgUrl2: "../images/materia9768.jpg", imgUrl3: "../images/materia91024.jpg", casa: "todas"},
    {id: 10, cantidad: 1, nombre: "Mil Hierbas y hongos mágicos, Phyllida Spore", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl: "../images/materia10.jpg", imgUrl2: "../images/materia10768.jpg", imgUrl3: "../images/materia101024.jpg", casa: "todas"},
    {id: 11, cantidad: 1, nombre: "Guía Básica de Transformaciones, Emeric Switch", categoría: "Libros", subcategoría: "Libro", precio: 600, imgUrl: "../images/materia11.jpg", imgUrl2: "../images/materia11768.jpg", imgUrl3: "../images/materia111024.jpg", casa: "todas"},
    {id: 12, cantidad: 1, nombre: "Vida y Hábitos de los Muggles Británicos, Edenna Skanterberg", categoría: "Libros", subcategoría: "Libro", precio: 200, imgUrl: "../images/materia12.jpg", imgUrl2: "../images/materia12768.jpg", imgUrl3: "../images/materia121024.jpg", casa: "todas"},
    {id: 13, cantidad: 1, nombre: "Filtros y Pociones Mágicas, Arsenius Jigger", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl: "../images/materia13.jpg", imgUrl2: "../images/materia13768.jpg", imgUrl3: "../images/materia131024.jpg", casa: "todas"},
    {id: 14, cantidad: 1, nombre: "Diccionario de Runas", categoría: "Libros", subcategoría: "Libro", precio: 500, imgUrl: "../images/materia14.png", imgUrl2: "../images/materia14768.png", imgUrl3: "../images/materia141024.png", casa: "todas"},
    {id: 15, cantidad: 1, nombre: "Los Cuentos de Beedle, El Bardo", precio: 200, categoría: "Libros", subcategoría: "Libro", imgUrl: "../images/materia15.jpg", imgUrl2: "../images/materia15768.jpg", imgUrl3: "../images/materia151024.jpg", casa: "todas"},
    {id: 16, cantidad: 1, nombre: "Quidditch a Través de los Tiempos, Kennilworthy Whisp", categoría: "Libros", subcategoría: "Libro", precio: 200, imgUrl: "../images/materia16.jpg", imgUrl2: "../images/materia16768.jpg", imgUrl3: "../images/materia161024.jpg", casa: "todas"},
    {id: 17, cantidad: 1, nombre: "La Historia de Hogwarts, Bathilda Bagshot", categoría: "Libros", subcategoría: "Libro", precio: 350, imgUrl: "../images/materia17.png", imgUrl2: "../images/materia17768.png", imgUrl3: "../images/materia171024.png", casa: "todas"},
    {id: 18, cantidad: 1, nombre: "Elaboración de Pociones Avanzadas, Libatius Borage", categoría: "Libros", subcategoría: "Libro", precio: 600, imgUrl: "../images/materia18.jpg", imgUrl2: "../images/materia18768.jpg", imgUrl3: "../images/materia181024.jpg", casa: "todas"},
    {id: 19, cantidad: 1, nombre: "Viaje con los Vampiros, Gilderoy Lockhart", categoría: "Libros", subcategoría: "Libro", precio: 300, imgUrl: "../images/materia19.jpg", imgUrl2: "../images/materia19768.jpg", imgUrl3: "../images/materia191024.jpg", casa: "todas"},
    {id: 20, cantidad: 1, nombre: "Mi Yo Mágico, Gilderoy Lockhart", categoría: "Libros", subcategoría: "Libro", precio: 300, imgUrl: "../images/materia20.jpg", imgUrl2: "../images/materia20768.jpg", imgUrl3: "../images/materia201024.jpg", casa: "todas"},
    {id: 21, cantidad: 1, nombre: "Recorrido con los Trolls, Gilderoy Lockhart", categoría: "Libros", subcategoría: "Libro", precio: 300, imgUrl: "../images/materia21.jpg", imgUrl2: "../images/materia21768.jpg",imgUrl3: "../images/materia211024.jpg", casa: "todas"},
    {id: 22, cantidad: 1, nombre: "Recreo con la Banshee, Gilderoy Lockhart", categoría: "Libros", subcategoría: "Libro", precio: 400, imgUrl: "../images/materia22.jpg", imgUrl2: "../images/materia22768.jpg", imgUrl3: "../images/materia221024.jpg", casa: "todas"},
    {id: 23, cantidad: 1, nombre: "Bufanda Gryffindor", categoría: "ropa", subcategoría: "Bufanda", precio: 200, imgUrl: "../images/bufandaG.webp", imgUrl2:  "../images/bufandaG768.webp", imgUrl3: "../images/bufandaG1024.webp", casa: "Gryffindor"},
    {id: 24, cantidad: 1, nombre: "Bufanda Slytherin", categoría: "ropa", subcategoría: "Bufanda", precio: 200, imgUrl: "../images/bufandaS.webp", imgUrl2: "../images/bufandaS768.webp", imgUrl3: "../images/bufandaS1024.webp", casa: "Slytherin"},
    {id: 25, cantidad: 1, nombre: "Bufanda Ravenclaw", categoría: "ropa", subcategoría: "Bufanda", precio: 200, imgUrl: "../images/bufandaR.webp", imgUrl2: "../images/bufandaR768.webp", imgUrl3: "../images/bufandaR1024.webp", casa: "Ravenclaw"},
    {id: 26, cantidad: 1, nombre: "Bufanda Hufflepuff", categoría: "ropa", subcategoría: "Bufanda", precio: 200, imgUrl: "../images/bufandaH.webp", imgUrl2: "../images/bufandaH768.webp", imgUrl3: "../images/bufandaH1024.webp", casa: "Hufflepuff"},
    {id: 27, cantidad: 1, nombre: "Corbata Gryffindor", categoría: "ropa", subcategoría: "Corbata", precio: 150, imgUrl: "../images/corbataG.webp", imgUrl2: "../images/corbataG768.webp", imgUrl3: "../images/corbataG1024.webp", casa: "Gryffindor"},
    {id: 28, cantidad: 1, nombre: "Corbata Slytherin", categoría: "ropa", subcategoría: "Corbata", precio: 150, imgUrl: "../images/corbataS.webp", imgUrl2: "../images/corbataS768.webp", imgUrl3: "../images/corbataS1024.webp",  casa: "Slytherin"},
    {id: 29, cantidad: 1, nombre: "Corbata Ravenclaw", categoría: "ropa", subcategoría: "Corbata", precio: 150, imgUrl: "../images/corbataR.webp", imgUrl2: "../images/corbataR768.webp", imgUrl3: "../images/corbataR1024.webp", casa: "Ravenclaw"},
    {id: 30, cantidad: 1, nombre: "Corbata Hufflepuff", categoría: "ropa", subcategoría: "Corbata", precio: 150, imgUrl: "../images/corbataH.webp", imgUrl2: "../images/corbataH768.webp", imgUrl3: "../images/corbataH1024.webp", casa: "Hufflepuff"},
    {id: 31, cantidad: 1, nombre: "Gorro Gryffindor", categoría: "ropa", subcategoría: "Gorro", precio: 180, imgUrl: "../images/gorroG.webp", imgUrl2: "../images/gorroG768.webp", imgUrl3: "../images/gorroG1024.webp", casa: "Gryffindor"},
    {id: 32, cantidad: 1, nombre: "Gorro Slytherin", categoría: "ropa", subcategoría: "Gorro", precio: 180, imgUrl: "../images/gorroS.webp", imgUrl2: "../images/gorroS768.webp", imgUrl3: "../images/gorroS1024.webp", casa: "Slytherin"},    
    {id: 33, cantidad: 1, nombre: "Gorro Ravenclaw", categoría: "ropa", subcategoría: "Gorro", precio: 180, imgUrl: "../images/gorroR.webp", imgUrl2: "../images/gorroR768.webp", imgUrl3: "../images/gorroR1024.webp", casa: "Ravenclaw"},
    {id: 34, cantidad: 1, nombre: "Gorro Hufflepuff", categoría: "ropa", subcategoría: "Gorro", precio: 180, imgUrl: "../images/gorroH.webp", imgUrl2: "../images/gorroH768.webp", imgUrl3: "../images/gorroH1024.webp", casa: "Hufflepuff"},
    {id: 35, cantidad: 1, nombre: "Guantes Gryffindor", categoría: "ropa", subcategoría: "Guantes", precio: 200, imgUrl: "../images/guantesG.webp", imgUrl2: "../images/guantesG768.webp", imgUrl3: "../images/guantesG1024.webp", casa: "Gryffindor"},
    {id: 36, cantidad: 1, nombre: "Guantes Slytherin", categoría: "ropa", subcategoría: "Guantes", precio: 200, imgUrl: "../images/guantesS.webp", imgUrl2: "../images/guantesS768.webp", imgUrl3: "../images/guantesS1024.webp", casa: "Slytherin"},    
    {id: 37, cantidad: 1, nombre: "Guantes Ravenclaw", categoría: "ropa", subcategoría: "Guantes", precio: 200, imgUrl: "../images/guantesR.webp", imgUrl2: "../images/guantesR768.webp", imgUrl3: "../images/guantesR1024.webp", casa: "Ravenclaw"},
    {id: 38, cantidad: 1, nombre: "Guantes Hufflepuff", categoría: "ropa", subcategoría: "Guantes", precio: 200, imgUrl: "../images/guantesH.webp", imgUrl2: "../images/guantesH768.webp", imgUrl3: "../images/guantesH1024.webp", casa: "Hufflepuff"},
    {id: 39, cantidad: 1, nombre: "Quidditch Gryffindor", categoría: "ropa", subcategoría: "Quidditch", precio: 500, imgUrl: "../images/quidditchG.webp", imgUrl2: "../images/quidditchG768.webp", imgUrl3: "../images/quidditchG1024.webp", casa: "Gryffindor"},
    {id: 40, cantidad: 1, nombre: "Quidditch Slytherin", categoría: "ropa", subcategoría: "Quidditch", precio: 500, imgUrl: "../images/quidditchS.webp", imgUrl2: "../images/quidditchS768.webp", imgUrl3: "../images/quidditchS1024.webp", casa: "Slytherin"},    
    {id: 41, cantidad: 1, nombre: "Quidditch Ravenclaw", categoría: "ropa", subcategoría: "Quidditch", precio: 500, imgUrl: "../images/quidditchR.webp", imgUrl2: "../images/quidditchR768.webp", imgUrl3: "../images/quidditchR1024.webp", casa: "Ravenclaw"},
    {id: 42, cantidad: 1, nombre: "Quidditch Hufflepuff", categoría: "ropa", subcategoría: "Quidditch", precio: 500, imgUrl: "../images/quidditchH.webp", imgUrl2: "../images/quidditchH768.webp", imgUrl3: "../images/quidditchH1024.webp", casa: "Hufflepuff"},
    {id: 43, cantidad: 1, nombre: "Sueter Gryffindor", categoría: "ropa", subcategoría: "Suéter", precio: 400, imgUrl: "../images/sueterG.jpg", imgUrl2: "../images/sueterG768.jpg", imgUrl3: "../images/sueterG1024.jpg", casa: "Gryffindor"},
    {id: 44, cantidad: 1, nombre: "Sueter Slytherin", categoría: "ropa", subcategoría: "Suéter", precio: 400, imgUrl: "../images/sueterS.jpg", imgUrl2: "../images/sueterS768.jpg", imgUrl3: "../images/sueterS1024.jpg", casa: "Slytherin"},
    {id: 45, cantidad: 1, nombre: "Sueter Ravenclaw", categoría: "ropa", subcategoría: "Suéter", precio: 400, imgUrl: "../images/sueterR.jpg", imgUrl2: "../images/sueterR768.jpg", imgUrl3: "../images/sueterR1024.jpg", casa: "Ravenclaw"},
    {id: 46, cantidad: 1, nombre: "Sueter Hufflepuff", categoría: "ropa", subcategoría: "Suéter", precio: 400, imgUrl: "../images/sueterH.jpg", imgUrl2: "../images/sueterH768.jpg", imgUrl3: "../images/sueterH1024.jpg", casa: "Hufflepuff"},
    {id: 47, cantidad: 1, nombre: "Túnica Gryffindor", categoría: "ropa", subcategoría: "Túnica", precio: 500, imgUrl: "../images/tunicaG.webp", imgUrl2: "../images/tunicaG768.webp", imgUrl3: "../images/tunicaG1024.webp", casa: "Gryffindor"},
    {id: 48, cantidad: 1, nombre: "Túnica Slytherin", categoría: "ropa", subcategoría: "Túnica", precio: 500, imgUrl: "../images/tunicaS.webp", imgUrl2: "../images/tunicaS768.webp", imgUrl3: "../images/tunicaS1024.webp", casa: "Slytherin"},
    {id: 49, cantidad: 1, nombre: "Túnica Ravenclaw", categoría: "ropa", subcategoría: "Túnica", precio: 500, imgUrl: "../images/tunicaR.webp", imgUrl2: "../images/tunicaR768.webp", imgUrl3: "../images/tunicaR1024.webp", casa: "Ravenclaw"},
    {id: 50, cantidad: 1, nombre: "Túnica Hufflepuff", categoría: "ropa", subcategoría: "Túnica", precio: 500, imgUrl: "../images/tunicaH.webp", imgUrl2: "../images/tunicaH768.webp", imgUrl3: "../images/tunicaH1024.webp", casa: "Hufflepuff"},
    {id: 51, cantidad: 1, nombre: "Ajedrez Mágico", categoría: "accesorios", subcategoria: "Ajedrez", precio: 200, imgUrl: "../images/ajedrez.jpg", imgUrl2: "../images/ajedrez768.jpg", imgUrl3: "../images/ajedrez1024.jpg", casa: "todas"},
    {id: 52, cantidad: 1, nombre: "Balanza de Latón", categoría: "accesorios", subcategoria: "Balanza", precio: 400, imgUrl: "../images/balanza.jpg", imgUrl2: "../images/balanza768.jpg", imgUrl3: "../images/balanza1024.jpg", casa: "todas"},
    {id: 53, cantidad: 1, nombre: "Esfera de Cristal", categoría: "accesorios", subcategoria: "Esfera", precio: 300, imgUrl: "../images/bola.webp", imgUrl2: "../images/bola768.webp", imgUrl3: "../images/bola1024.webp", casa: "todas"},
    {id: 54, cantidad: 1, nombre: "Caldero de Peltre N.2", categoría: "accesorios", subcategoria: "Caldero", precio: 200, imgUrl: "../images/caldero.jpg", imgUrl2: "../images/caldero768.jpg", imgUrl3: "../images/caldero1024.jpg", casa: "todas"},
    {id: 55, cantidad: 1, nombre: "Giratiempo", categoría: "accesorios", subcategoria: "Giratiempo", precio: 600, imgUrl: "../images/giratiempo.jpg", imgUrl2: "../images/giratiempo768.jpg", imgUrl3: "../images/giratiempo1024.jpg", casa: "todas"},
    {id: 56, cantidad: 1, nombre: "Guantes, Piel de Dragón", categoría: "accesorios", subcategoria: "Guantes", precio: 400, imgUrl: "../images/guantes.webp", imgUrl2: "../images/guantes768.webp", imgUrl3: "../images/guantes1024.webp", casa: "todas"},
    {id: 57, cantidad: 1, nombre: "Recordadora", categoría: "accesorios", subcategoria: "Recordadora", precio: 250, imgUrl: "../images/recordadora.jpg", imgUrl2: "../images/recordadora768.jpg", imgUrl3: "../images/recordadora1024.jpg", casa: "todas"},
    {id: 58, cantidad: 1, nombre: "Frascos de Cristal para Pociones", categoría: "accesorios", subcategoria: "Frascos", precio: 250, imgUrl: "../images/redomas.jpg", imgUrl2: "../images/redomas768.jpg", imgUrl3: "../images/redomas1024.jpg", casa: "todas"},
    {id: 59, cantidad: 1, nombre: "Sombrero", categoría: "accesorios", subcategoria: "Sombrero", precio: 200, imgUrl: "../images/sombreroH.png", imgUrl2: "../images/sombreroH768.png", imgUrl3: "../images/sombreroH1024.png", casa: "todas"},
    {id: 60, cantidad: 1, nombre: "Telescopio", categoría: "accesorios", subcategoria: "Telescopio", precio: 500, imgUrl: "../images/telescopio.jpg", imgUrl2: "../images/telescopio768.jpg", imgUrl3: "../images/telescopio1024.jpg", casa: "todas"},
    ]
                            
        const contenedorProductos = document.getElementById("productos")
        const contenedorCarrito = document.getElementById("carrito")
        const precioTotal = document.getElementById("precioTotal")
        const inputBusqueda = document.getElementById("busqueda")
        let carritoGuardado = []
        console.log(carritoGuardado)
        
            productos.forEach((producto) =>{
                let tarjetaProducto = document.createElement("picture")
                tarjetaProducto.className = "estiloImg"
                tarjetaProducto.innerHTML =`
                    <source media="(min-width:1024px)" srcset="${producto.imgUrl3}"></source>
                    <source media="(min-width:768px)" srcset="${producto.imgUrl2}"></source>
                    <source media="(min-width:480px)" srcset="${producto.imgUrl}"></source>
                    <h3>${producto.nombre}</h3>
                    <h4>$${producto.precio}</h4>
                    <img class="grillaEstilo imgEstilo${producto.id} scale" src="${producto.imgUrl}">
                    <button class= "boton" id="agregar${producto.id}">Agregar al carrito</button>`
                        
                    contenedorProductos.append(tarjetaProducto)
                        
                    const boton = document.getElementById(`agregar${producto.id}`)
                        
                    boton.onclick = () =>{
                        agregarAlCarrito(producto.id)
                    }
            })

                function  agregarAlCarrito(productoId){
                    const existe = carritoGuardado.some(producto => producto.id === productoId)
                    console.log(existe)
                    if(existe){
                        const productoExistente = carritoGuardado.map(producto => {
                            if(producto.id === productoId){
                                producto.cantidad++
                            }
                        })
                    } else {
                            const productoAAgregar = productos.find(producto => producto.id ===productoId)
                            carritoGuardado.push(productoAAgregar)
                            console.log(productoAAgregar)
                            console.log(carritoGuardado)
                            console.log(contenedorCarrito)
                        }

                        actualizarCarrito()
                }

                function disminuirDelProducto(productoId){
                    const existe = carritoGuardado.some(producto => producto.id === productoId)
                    console.log(existe)
                    if(existe){
                        const productoExistente = carritoGuardado.map(producto => {
                            if(producto.id === productoId){
                                producto.cantidad--
                            }
                        })
                    } else {
                            const productoAAgregar = productos.find(producto => producto.id ===productoId)
                            carritoGuardado.push(productoAAgregar)
                            console.log(productoAAgregar)
                            console.log(carritoGuardado)
                            console.log(contenedorCarrito)
                        }

                        actualizarCarrito()
                }

                function eliminarDelCarrito(productoId){
                    const productoAEliminar = carritoGuardado.find(producto => producto.id === productoId)
                    const indice = carritoGuardado.indexOf(productoAEliminar)
                    carritoGuardado.splice(indice,1)
                    actualizarCarrito()
                    console.log(productoAEliminar)
                    console.log(indice)
                    console.log(carritoGuardado)
                }

                function actualizarCarrito(){
                    contenedorCarrito.innerHTML= ""

                    carritoGuardado.forEach((producto) => {
                        const div = document.createElement(`div`)
                        div.className = (`productoEnCarrito`)
                        div.innerHTML = `
                        <img class="imgCarrito" src="${producto.imgUrl}">
                        <p>${producto.nombre}</p>
                        <p>Precio: $${producto.precio}</p>
                        <p>Cantidad: ${producto.cantidad} <button id='aumentar${producto.id}'>⬆️</button><button id='disminuir${producto.id}'>⬇️</button></p>
                        <p>Subtotal: ${producto.precio*producto.cantidad}</p>
                        <button id="botonEliminar${producto.id}" class="boton-eliminar">Eliminar</button>`

                        contenedorCarrito.append(div)
                        console.log(carritoGuardado)

                        const botonEliminar = document.getElementById(`botonEliminar${producto.id}`)
                        const botonAumentar = document.getElementById(`aumentar${producto.id}`)
                        const botonDisminuir = document.getElementById(`disminuir${producto.id}`)

                        botonEliminar.onclick = () =>{
                            eliminarDelCarrito(producto.id)
                        }

                        botonAumentar.onclick = () =>{
                            agregarAlCarrito(producto.id)
                        }

                        botonDisminuir.onclick = () =>{
                            disminuirDelProducto(producto.id)
                        }
                    })

                    precioTotal.innerText = carritoGuardado.reduce((acc, productos) => acc + productos.cantidad * productos.precio,0)
                    console.log(precioTotal)
                }

                inputBusqueda.oninput = () => {
                    const productosFiltrados = productos.filter(producto => producto.nombre.includes(inputBusqueda.value))
                    console.log(productosFiltrados)
                    renderizarProductos(productosFiltrados)
                }

                
                    function renderizarProductos(productosFiltrados){
                        let productosARenderizar = productos;
                        if(productosFiltrados){    
                            productosARenderizar = productosFiltrados
                        } else{""};
            
                        contenedorProductos.innerHTML = " "
                        for(const producto of productosARenderizar){
                                let tarjetaProducto = document.createElement("picture")
                                tarjetaProducto.className = "estiloImg"
                                tarjetaProducto.innerHTML =`
                                    <source media="(min-width:1024px)" srcset="${producto.imgUrl3}"></source>
                                    <source media="(min-width:768px)" srcset="${producto.imgUrl2}"></source>
                                    <source media="(min-width:480px)" srcset="${producto.imgUrl}"></source>
                                    <h3>${producto.nombre}</h3>
                                    <h4>$${producto.precio}</h4>
                                    <img class="grillaEstilo imgEstilo${producto.id} scale" src="${producto.imgUrl}">
                                    <button class= "boton" id="agregar${producto.id}">Agregar al carrito</button>`
                                        
                                        contenedorProductos.append(tarjetaProducto)
                                        
                                        const boton = document.getElementById(`agregar${producto.id}`)
                                        
                                        boton.onclick = () =>{
                                            agregarAlCarrito(producto.id)
                                        }
                        }
                    }
