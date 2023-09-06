                        /**Aquí empieza el codigo del index**/
let inicio = prompt(`¿Quién anda ahí? ¿Eres mago o bruja?`).toUpperCase()

if(inicio == `MAGO` || inicio ==`BRUJA`){
    alert(`Está usted entrando a La Bruja Tuerta, la tienda oficial en línea de artículos del Colegio Hogwarts de Magia y Hechicería.`), console.log(`Eres mago o bruja`)

    let edad = Number(prompt(`Ingresa tu edad`))
    
    while(isNaN(edad)){
        alert(`Por favor ingrese solo números`)
        edad = Number(prompt(`Ingresa tu edad`))
    }
    
    if (edad >= 18) {
        alert(`Adelante`)
        console.log(`Eres mayor de edad`)
    
            let nombre = prompt(`Por favor ingrese su nombre para validar su carta de Hogwarts`).toUpperCase()
            let apellido = prompt(`Por favor ingrese su apellido para validar su carta de Hogwarts`).toUpperCase()

                function saludo (nombre, apellido) {
                    alert(`COLEGIO HOGWARTS DE MAGIA Y HECHICERÍA
        
                    \nDirector: Albus Percival Wulfric Brian Dumbledore.
                    
                    \nEstimado Señor ${nombre} ${apellido}
                    
                    \nTenemos el placer de informarle de que dispone de una plaza en el colegio Hogwarts de Magia y Hechicería. Por favor, observe la lista del equipo y los libros necesarios. Las clases comienzan el 1 de septiembre. Esperamos su lechuza antes del 31 de julio.
                    
                    \nMuy cordialmente,
                    \nMinerva McGonagall
                    \nSubdirectora `)
                    console.log(`Bienvenido(a) a Hogwarts ${nombre} ${apellido}`)
                }
                saludo(nombre, apellido)

                alert(`Le recomendamos informarse con el Sombrero Seleccionador acerca de las 4 Casas de Hogwarts si es que no sabe cuál casa elegir, de lo contrario elija la casa a la que pertenece.`)
                
                let boton1 = document.getElementById(`boton1`)

                boton1.onclick = () => {
                    alert(`Hola ${nombre}, soy el Sombrero Seleccionador y estoy aquí para orientarte a cuál Casa pertenecer dentro de Hogwarts. Todas son buenas, pero cada casa valora diferentes cosas.
                    \nPuedes pertenecer a Gryffindor, donde habitan los valientes. 
                    \nPuedes pertenecer a Hufflepuff donde son justos y leales. 
                    \nO tal vez a la antigua sabiduría de Ravenclaw, si tienes una mente dispuesta. 
                    \nO tal vez en Slytherin, esa gente astuta utiliza cualquier medio para lograr sus fines.
                    \nTe recomiendo visitar la Sala Común de cada Casa para ver más información y luego vuelvas conmigo para elegir a cuál casa quieres pertenecer.
                    \n¡Buena suerte ${nombre}!`)
                    console.log(`Has consultado al Sombrero Seleccionador`)
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
                        console.log(`Ahora perteneces a ${this.nombre}`)
                    }
                }

                const casasG = new Casas(1,`Gryffindor`,`Valor, Fuerza, Audacia`,`Rojo y Dorado`,`León`);
                const casasR = new Casas(2, `Ravenclaw`,`Creatividad, Erudición, Inteligencia`, `Azul y Bronce`,`Águila`);
                const casasS = new Casas(3, `Slytherin`,`Ambición, Determinación, Astucia`,`Verde y Plateado`,`Serpiente`)
                const casasH = new Casas(4, `Hufflepuff`,`Justicia, Lealtad, Paciencia`,`Amarillo y Negro`,`Tejón`);

                const houses = [casasG, casasR, casasS, casasH]

                console.log(houses)

                let boton2 = document.getElementById(`boton2`)
                boton2.onclick = () =>{
                    alert(`Hola ${nombre}, en la Casa de ${houses[0].nombre}, nosotros valoramos más que nada: ${houses[0].valores}, nuestros colores son el ${houses[0].colores} y nuestro escudo es un ${houses[0].escudo}.`)
                    console.log(`Has visitado la Sala Común de ${houses[0].nombre}`)
                }

                let boton3 = document.getElementById(`boton3`)
                boton3.onclick = () =>{
                    alert(`Hola ${nombre}, en la Casa de ${houses[1].nombre}, nosotros valoramos más que nada: ${houses[1].valores}, nuestros colores son el ${houses[1].colores} y nuestro escudo es un ${houses[1].escudo}.`)
                    console.log(`Has visitado la Sala Común de ${houses[1].nombre}`)
                }

                let boton4 = document.getElementById(`boton4`)
                boton4.onclick = () =>{
                    alert(`Hola ${nombre}, en la Casa de ${houses[2].nombre}, nosotros valoramos más que nada: ${houses[2].valores}, nuestros colores son el ${houses[2].colores} y nuestro escudo es una ${houses[2].escudo}.`)
                    console.log(`Has visitado la Sala Común de ${houses[2].nombre}`)
                }

                let boton5 = document.getElementById(`boton5`)
                boton5.onclick = () =>{
                    alert(`Hola ${nombre}, en la Casa de ${houses[3].nombre}, nosotros valoramos más que nada: ${houses[3].valores}, nuestros colores son el ${houses[3].colores} y nuestro escudo es un ${houses[3].escudo}.`)
                    console.log(`Has visitado la Sala Común de ${houses[3].nombre}`)
                }

                let boton6 = document.getElementById(`boton6`)
                boton6.onclick = () =>{
                    let casa = Number(prompt(`¿Cuál casa eliges? 
                    \nElige 1 para ${houses[0].nombre}
                    \nElige 2 para ${houses[1].nombre}
                    \nElige 3 para ${houses[2].nombre}
                    \nElige 4 para ${houses[3].nombre}
                    \nElige 0 para salir`))

                    const casaFinal = []

                    while(casa != 0){
                        switch(casa){
                            case 1:
                                alert(`Has elegido ser parte de ${casasG.nombre}`)
                                casasG.mostrarCasa()
                                casaFinal.push(`${houses[0].nombre}`)
                                break;

                            case 2:
                                alert(`Has elegido ser parte de ${casasR.nombre}`)
                                casasR.mostrarCasa()
                                casaFinal.push(`${houses[1].nombre}`)
                                break;

                            case 3:
                                alert(`Has elegido ser parte de ${casasS.nombre}`)
                                casasS.mostrarCasa()
                                casaFinal.push(`${houses[2].nombre}`)
                                break;

                            case 4:
                                alert(`Has elegido ser parte de ${casasH.nombre}`)
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

                    function perfil (nombre, apellido, edad){
                        alert(`Te llamas ${nombre} ${apellido} y tienes ${edad} años y estás en la casa de ${casaFinal}`)
                    }

                    perfil(nombre, apellido, edad)

                    const perfilAlumno = {
                        nombre: nombre,
                        apellido: apellido,
                        edad: edad,
                        casa: casaFinal
                    }

                    console.log(perfilAlumno)

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
                        \n·${libros[7].nombre}\n·${libros[8].nombre}\n·${libros[4].nombre}\n·${libros[10].nombre}\n·${libros[9].nombre}\n·${libros[12].nombre}\n·${libros[2].nombre}\n·${libros[6].nombre}
                        \nTe recomendamos ir a nuestra sección de productos para adquirir tu material escolar.`)
            }
    } else {alert(`¡Vuelve cuando crezcas!`), console.log(`Eres menor de edad, acceso denegado.`), location.reload()}

} else{alert(`¡No se permiten Muggles!`), console.log(`Eres Muggle, acceso denegado.`), location.reload()}
