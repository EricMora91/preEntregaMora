let inicio = prompt(`¿Quién anda ahí? ¿Eres un MAGO o BRUJA?`).toUpperCase()

if(inicio ==`MAGO` || inicio == `BRUJA`){
    alert(`Bienvenido al Callejón de la Bruja Tuerta`)

        console.log(`Eres Mago o Bruja`)
        let edad = Number(prompt(`Ingrese su edad`))

        while(isNaN(edad)){
            alert(`Por favor ingrese un número`)
            edad = Number(prompt(`Ingrese su edad`))
        }

        if(edad >= 18){
            alert(`Adelante, estás en el Callejón de la Bruja Tuerta, la tienda oficial online de útiles para todo estudiante de Hogwarts.`)
            console.log(`Eres mayor de edad`)

            let name = prompt(`Por favor ingrese su nombre para validar su carta de Hogwarts`).toUpperCase()
            let apellido = prompt(`Por favor ingrese su apellido para validar carta de Hogwarts`).toUpperCase()

            if( inicio == `MAGO` && edad >= 18){
                function saludo (name, apellido){
                    alert(`COLEGIO HOGWARTS DE MAGIA Y HECHICERÍA
                    \nDirector: Albus Percival Wulfric Brian Dumbledore.
                    
                    \nEstimado Señor ${name} ${apellido}
                    
                    \nTenemos el placer de informarle de que dispone de una plaza en el Colegio Hogwarts de Magia y Hechicería. Por favor, observe la lista del equipo y los libros necesarios. Las clases comienzan el 1 de septiembre. Esperamos su lechuza antes del 31 de julio.
                    
                    \nMuy cordialmente,
                    \nMinerva McGonagall
                    \nSubdirectora.`)
                    console.log(`Bienvenido a Hogwarts ${name} ${apellido}`)
                }
                saludo(name, apellido)
            } else{
                function saludo (name, apellido){
                    alert(`COLEGIO HOGWARTS DE MAGIA Y HECHICERÍA
                    \nDirector: Albus Percival Wulfric Brian Dumbledore.
                    
                    \nEstimada Señorita ${name} ${apellido}
                    
                    \nTenemos el placer de informarle de que dispone de una plaza en el Colegio Hogwarts de Magia y Hechicería. Por favor, observe la lista del equipo y los libros necesarios. Las clases comienzan el 1 de septiembre. Esperamos su lechuza antes del 31 de julio.
                    
                    \nMuy cordialmente,
                    \nMinerva McGonagall
                    \nSubdirectora.`)
                    console.log(`Bienvenida a Hogwarts ${name} ${apellido}`)
                }
                saludo(name, apellido)
            }

            class Casas{
                constructor(id, nombre, valores, colores, escudo){
                    this.id = id
                    this.nombre = nombre
                    this.valores = valores
                    this.colores = colores
                    this.escudo = escudo
                }

                mostrarCasa(){
                    console.log(`Eres ${this.nombre}`)
                }
            }

            const casasG = new Casas(1,`Gryffindor`,`Valor, Fuerza, Audacia`,`Rojo y Dorado`,`León`);
            const casasR = new Casas(2, `Ravenclaw`,`Creatividad, Erudición, Inteligencia`, `Azul y Bronce`,`Águila`);
            const casasS = new Casas(3, `Slytherin`,`Ambición, Determinación, Astucia`,`Verde y Plateado`,`Serpiente`)
            const casasH = new Casas(4, `Hufflepuff`,`Justicia, Lealtad, Paciencia`,`Amarillo y Negro`,`Tejón`);

            const houses = [casasG, casasR, casasS, casasH]

            console.log(houses)


            let casa = Number(prompt(`A continuación elige a cuál casa perteneces en Hogwarts,
            \nElige 1 si es ${casasG.nombre}
            \nElige 2 si es ${casasR.nombre}
            \nElige 3 si es ${casasS.nombre}
            \nElige 4 si es ${casasH.nombre}
            \nElige 0 para salir.`))

            const casaFinal = []

            while(casa != 0){
                switch(casa){
                    case 1:
                        alert(`Eres ${casasG.nombre}`)
                        casasG.mostrarCasa()
                        casaFinal.push(`${houses[0].nombre}`)
                        break;

                    case 2:
                        alert(`Eres ${casasR.nombre}`)
                        casasR.mostrarCasa()
                        casaFinal.push(`${houses[1].nombre}`)
                        break;

                    case 3:
                        alert(`Eres ${casasS.nombre}`)
                        casasS.mostrarCasa()
                        casaFinal.push(`${houses[2].nombre}`)
                        break;

                    case 4:
                        alert(`Eres ${casasH.nombre}`)
                        casasH.mostrarCasa()
                        casaFinal.push(`${houses[3].nombre}`)
                        break;

                    default:
                        alert(`Dato inexistente, prueba otra vez`)
                        console.log(`Dato inexistente`)
                        break;
                }
                if(casa == 1 || casa == 2 || casa == 3 || casa == 4){
                    break
                } else{
                    casa = Number(prompt(`A continuación elige a cuál casa perteneces en Hogwarts,
                    \nElige 1 si es ${casasG.nombre}
                    \nElige 2 si es ${casasR.nombre}
                    \nElige 3 si es ${casasS.nombre}
                    \nElige 4 si es ${casasH.nombre}
                    \nElige 0 para salir.`))
                }
            }   

                for(let i = 1; i<5; i++){
                    if(i == 1){
                        iNueva = `${casasG.nombre}`
                    } else if(i == 2){
                        iNueva = `${casasR.nombre}`
                    }
                    else if(i == 3){
                        iNueva = `${casasS.nombre}`
                    } else{
                        iNueva = `${casasH.nombre}`
                    }
                    alert(`Si elegiste ${i} entonces eres ${iNueva}`)
                }

                function perfil (name, apellido, edad){
                    alert(`Te llamas ${name} ${apellido} y tienes ${edad} años y estás en la casa de ${casaFinal}`)
                    }
    
                    perfil(name, apellido, edad)

                    const libros = [     
                        {id:1, nombre: "Disipar las Nieblas del Futuro, Cassandra Vablatsky", categoría: "Libros", subcategoría: "optativa", precio: 350},
                        {id:2, nombre: "El Alquimista, Nicolás Flamel", categoría: "Libros", subcategoría: "optativa", precio: 350},
                        {id:3, nombre: "Animales Fantásticos, Y Dónde Encontrarlos, Newt Scamander", categoría: "Libros", subcategoría: "obligatoria", precio: 300},
                        {id:4, nombre: "Númerología y Gramática, Leonora Wakefield", categoría: "Libros", subcategoría: "optativa", precio: 500},
                        {id:5, nombre: "Teoría Mágica, Adalbert Waffling", categoría: "Libros", subcategoría: "obligatoria", precio: 400},
                        {id:6, nombre: "El Monstroso Libro de los Monstrous, Edwardus Lima", categoría: "Libros", subcategoría: "optativa", precio: 350},
                        {id:7, nombre: "Las Fuerzas Oscuras. Guía para la Autoprotección, Quentim Trimble", categoría: "Libros", subcategoría: "obligatoria", precio: 500},
                        {id:8, nombre: "El Libro Reglamentario de Hechizos Miranda Goshawk", categoría: "Libros", subcategoría: "obligatoria", precio: 500},
                        {id:9, nombre: "Una Historia de la Magia, Bathilda Bagshot", categoría: "Libros", subcategoría: "obligatoria", precio: 400},
                        {id:10, nombre: "Mil Hierbas y hongos mágicos, Phyllida Spore", categoría: "Libros", subcategoría: "obligatoria", precio: 500},
                        {id:11, nombre: "Guía Básica de Transformaciones, Emeric Switch", categoría: "Libros", subcategoría: "obligatoria", precio: 600},
                        {id:12, nombre: "Vida y Hábitos de los Muggles Británicos, Edenna Skanterberg", categoría: "Libros", subcategoría: "optativa", precio: 200},
                        {id:13, nombre: "Filtros y Pociones Mágicas, Arsenius Jigger", categoría: "Libros", subcategoría: "obligatoria", precio: 500},
                        {id:14, nombre: "Diccionario de Runas", categoría: "Libros", subcategoría: "optativa", precio: 500},
                        {id:15, nombre: "Los Cuentos de Beedle, El Bardo", categoría: "Libros", subcategoría: "optativa", precio: 200},
                        {id:16, nombre: "Quidditch a Través de los Tiempos, Kennilworthy Whisp", categoría: "Libros", subcategoría: "optativa", precio: 200},
                        {id:17, nombre: "La Historia de Hogwarts, Bathilda Bagshot", categoría: "Libros", subcategoría: "optativa", precio: 350},
                        {id:18, nombre: "Elaboración de Pociones Avanzadas, Libatius Borage", categoría: "Libros", subcategoría: "optativa", precio: 600},
                        {id:19, nombre: "Viaje con los Vampiros, Gilderoy Lockhart", categoría: "Libros", subcategoría: "optativa", precio: 300},
                        {id:20, nombre: "Mi Yo Mágico, Gilderoy Lockhart", categoría: "Libros", subcategoría: "optativa", precio: 300},
                        {id:21, nombre: "Recorrido con los Trolls, Gilderoy Lockhart", categoría: "Libros", subcategoría: "optativa", precio: 300},
                        {id:22, nombre: "Recreo con la Banshee, Gilderoy Lockhart", categoría: "Libros", subcategoría: "optativa", precio: 400},
                        ]

                    alert(`Uniforme
                    \nLos alumnos este año necesitarán:
                    \n·Tres Túnicas sencillas de trabajo.\n·Un sombrero negro puntiagudo para uso diario.\n·Un par de guantes protectores.\n·Una capa de invierno.
                    \nLibros
                    \nTodos los alumnos deben tener un ejemplar de los siguientes libros:
                    \n·${libros[7].nombre}\n·${libros[8].nombre}\n·${libros[4].nombre}\n·${libros[10].nombre}\n·${libros[9].nombre}\n·${libros[12].nombre}\n·${libros[2].nombre}\n·${libros[6].nombre}`)

                    alert(`Del siguiente listado de libros, usa la palabra "Obligatoria" para filtrar los libros necesarios para tu curso.
                    \n·${libros[0].nombre}\n·${libros[1].nombre}\n·${libros[2].nombre}\n·${libros[3].nombre}\n·${libros[4].nombre}\n·${libros[5].nombre}\n·${libros[6].nombre}\n·${libros[7].nombre}\n·${libros[8].nombre}\n·${libros[9].nombre}\n·${libros[10].nombre}\n·${libros[11].nombre}\n·${libros[12].nombre}\n·${libros[13].nombre}\n·${libros[14].nombre}\n·${libros[15].nombre}\n·${libros[16].nombre}\n·${libros[17].nombre}\n·${libros[18].nombre}\n·${libros[19].nombre}\n·${libros[20].nombre}\n·${libros[21].nombre}`)
                    
                    let filtrar = ""

                    while (filtrar != "obligatoria"){
                        filtrar = prompt(`Seleccione la subcategoría de la búsqueda`).toLowerCase()
                    }

                    let filtrados = libros.filter(el => el.subcategoría == filtrar)
                    console.log(filtrados)
                    alert(`Has filtrado los libros siguientes libros: 
                    \n·${filtrados[0].nombre}\n·${filtrados[1].nombre}\n·${filtrados[2].nombre}\n·${filtrados[3].nombre}\n·${filtrados[4].nombre}\n·${filtrados[5].nombre}\n·${filtrados[6].nombre}\n·${filtrados[7].nombre}`)

                    let libroEliminado = Number(prompt(`Del listado anterior seleccione un libro a eliminar ya que solo cuenta crédito suficiente para 7 libros:
                    \nElige 1 para eliminar ${filtrados[0].nombre}
                    \nElige 2 para eliminar ${filtrados[1].nombre}
                    \nElige 3 para eliminar ${filtrados[2].nombre}
                    \nElige 4 para eliminar ${filtrados[3].nombre}
                    \nElige 5 para eliminar ${filtrados[4].nombre}
                    \nElige 6 para eliminar ${filtrados[5].nombre}
                    \nElige 7 para eliminar ${filtrados[6].nombre}
                    \nElige 8 para eliminar ${filtrados[7].nombre}
                    \nElige 0 para salir`))
                    
            while(libroEliminado != 0){
                switch(libroEliminado){
                    case 1:
                        alert(`Has eliminado ${filtrados[0].nombre}`)
                        console.log(`Has eliminado ${filtrados[0].nombre}`)
                        filtrados.splice(0,1)
                        break;

                    case 2:
                        alert(`Has eliminado ${filtrados[1].nombre}`)
                        console.log(`Has eliminado ${filtrados[1].nombre}`)
                        filtrados.splice(1,1)
                        break;

                    case 3:
                        alert(`Has eliminado ${filtrados[2].nombre}`)
                        console.log(`Has eliminado ${filtrados[2].nombre}`)
                        filtrados.splice(2,1)
                        break;

                    case 4:
                        alert(`Has eliminado ${filtrados[3].nombre}`)
                        console.log(`Has eliminado ${filtrados[3].nombre}`)
                        filtrados.splice(3,1)
                        break;

                    case 5:
                        alert(`Has eliminado ${filtrados[4].nombre}`)
                        console.log(`Has eliminado ${filtrados[4].nombre}`)
                        filtrados.splice(4,1)
                        break;
                    
                    case 6:
                        alert(`Has eliminado ${filtrados[5].nombre}`)
                        console.log(`Has eliminado ${filtrados[5].nombre}`)
                        filtrados.splice(5,1)
                        break;

                    case 7:
                        alert(`Has eliminado ${filtrados[6].nombre}`)
                        console.log(`Has eliminado ${filtrados[6].nombre}`)
                        filtrados.splice(6,1)
                        break;
                    
                    case 8:
                        alert(`Has eliminado ${filtrados[7].nombre}`)
                        console.log(`Has eliminado ${filtrados[7].nombre}`)
                        filtrados.splice(7,1)
                        break;

                    default:
                        alert(`Dato inexistente, prueba otra vez`)
                        console.log(`Dato inexistente`)
                        break;
                }
                if(libroEliminado == 1 || libroEliminado == 2 || libroEliminado == 3 || libroEliminado == 4 || libroEliminado == 5 || libroEliminado == 6 || libroEliminado == 7 || libroEliminado == 8){
                    break
                } else{
                    libroEliminado = Number(prompt(`Del listado anterior seleccione un libro a eliminar ya que solo cuenta crédito suficiente para 7 libros:
                    \nElige 1 para eliminar
                    \nElige 2 para eliminar ${filtrados[1].nombre}
                    \nElige 3 para eliminar ${filtrados[2].nombre}
                    \nElige 4 para eliminar ${filtrados[3].nombre}
                    \nElige 5 para eliminar ${filtrados[4].nombre}
                    \nElige 6 para eliminar ${filtrados[5].nombre}
                    \nElige 7 para eliminar ${filtrados[6].nombre}
                    \nElige 8 para eliminar ${filtrados[7].nombre}
                    \nElige 0 para salir`))
                }
            }   

            let total = filtrados.reduce((acum,item) => acum= acum + item.precio,0)
            console.log(total)
            for (const filtrado of filtrados){
                console.log(`Elegiste ${filtrado.nombre} con valor de $${filtrado.precio}`)
                alert(`El listado final de libros es el siguiente:
            \n·${filtrado.nombre} con valor de $${filtrado.precio}`)
            }
            alert(`\nDando un total de ${filtrados.length} libros por un total de $${total}`)
            console.log(filtrados)

            const precio = filtrados.map(elemento => (elemento.precio))

            console.log(precio)
            console.log(Math.max(...precio))
            console.log(`El libro más caro vale $${Math.max(...precio)}`)

            let paquete = Number(prompt(`¿Cuántos paquetes de libros necesitas?`))

            let paqueteFinal = filtrados.map(elemento => elemento.precio * paquete)
            console.log(paqueteFinal)
        } else{
            alert(`¡Vuelve cuando crezcas!`)
            console.log(`Eres menor de edad, acceso denegado`)
            location.reload()
        }
}else {
    alert(`¡No se permiten Muggles!`)
    console.log(`Eres Muggle, acceso denegado`)
    location.reload()
}