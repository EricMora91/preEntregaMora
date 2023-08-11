let inicio = prompt("¿Quién anda ahí? ¿Eres mago o bruja?").toUpperCase()

if(inicio == "MAGO" || inicio =="BRUJA"){
    alert("Está usted entrando a La Bruja Tuerta, la tienda oficial en línea de artículos del Colegio Hogwarts de Magia y Hechicería"), console.log("Eres mago o bruja")

    let edad = Number(prompt(`Ingresa tu edad`))
    
    while( isNaN(edad)){
        alert(`Por favor ingrese solo números`)
        edad = Number(prompt(`Ingresa tu edad`))
    }
    if (edad >= 18) {
        alert(`Adelante`)
        console.log(`Eres mayor de edad`)
    
            let nombre = prompt(`Por favor ingrese su nombre para validar su carta de Hogwarts`).toUpperCase()
            let apellido = prompt(`Por favor ingrese su apellido para validar su carta de Hogwarts`).toUpperCase()


            if (inicio == `MAGO` && edad >= 18){
                function saludo (nombre, apellido) {
                    alert(`COLEGIO HOGWARTS DE MAGIA Y HECHICERÍA
        
                    \nDirector: Albus Percival Wulfric Brian Dumbledore.
                    
                    \nEstimado señor ` + nombre + ` ` + apellido + `
                    
                    \nTenemos el placer de informarle de que dispone de una plaza en el colegio Hogwarts de Magia y Hechicería. Por favor, observe la lista del equipo y los libros necesarios. Las clases comienzan el 1 de septiembre. Esperamos su lechuza antes del 31 de julio.
                    
                    \nMuy cordialmente,
                    \nMinerva McGonagall
                    \nSubdirectora `)
                    console.log(`Bienvenido a Hogwarts ` + nombre +` ` + apellido)
                }
                saludo(nombre, apellido)
            }   else{
                    function saludo (nombre, apellido) {
                        alert(`]]COLEGIO HOGWARTS DE MAGIA Y HECHICERÍA
    
                        \nDirector: Albus Percival Wulfric Brian Dumbledore.
                
                        \nEstimada señorita ` + nombre + ` ` + apellido + `
                
                        \nTenemos el placer de informarle de que dispone de una plaza en el colegio Hogwarts de Magia y Hechicería. Por favor, observe la lista del equipo y los libros necesarios. Las clases comienzan el 1 de septiembre. Esperamos su lechuza antes del 31 de julio.
                
                        \nMuy cordialmente,
                        \nMinerva McGonagall
                        \nSubdirectora`)
                        console.log(`Bienvenida a Hogwarts ` + nombre +` ` + apellido)
                    }
                    saludo(nombre, apellido)
                }

                    let accionUsuario = Number(prompt(`¿A cuál casa perteneces? 
                        \nElige 1 para Gryffindor
                        \nElige 2 para Hufflepuff
                        \nElige 3 para Ravenclaw
                        \nElige 4 para Slytherin
                        \nElige 99 para salir`))

                        let casaFinal = "" 

                        while(accionUsuario != 99){
                            switch(accionUsuario) {
                                case 1:
                                    alert(`Perteneces a Gryffindor`)
                                    console.log(`Perteneces a Gryffindor`)
                                    casaFinal = "Gryffindor"
                                    break;

                                case 2:
                                    alert(`Perteneces a Hufflepuff`)
                                    console.log(`Perteneces a Hufflepuff`)
                                    casaFinal = "Hufflepuff"
                                    break;

                                case 3:
                                    alert(`Perteneces a Ravenclaw`)
                                    console.log(`Perteneces a Ravenclaw`)
                                    casaFinal = "Ravenclaw"
                                    break;

                                case 4:
                                    alert(`Perteneces a Slytherin`)
                                    console.log(`Perteneces a Slytherin`)
                                    casaFinal = "Slytherin"
                                    break;

                                default: 
                                    console.log(`Dato inexistente`)
                                    alert(`Dato incorrecto, prueba otra vez.`);
                                    break
                            }
                            if(accionUsuario == 1 || accionUsuario ==2 || accionUsuario == 3 || accionUsuario == 4 ){
                                alert(`Te llamas ${nombre} ${apellido} tienes ${edad} años y perteneces a ${casaFinal}`)
                                break
                                
                            }   else{
                                accionUsuario = Number(prompt(`¿A cuál casa perteneces? 
                                \nElige 1 para Gryffindor
                                \nElige 2 para Hufflepuff
                                \nElige 3 para Ravenclaw
                                \nElige 4 para Slytherin
                                \nElige 99 para salir`))
                                } 
                        }

    } else {alert("¡Vuelve cuando crezcas!"), location.reload()}

} else(alert("¡No se permiten Muggles!"), location.reload())
