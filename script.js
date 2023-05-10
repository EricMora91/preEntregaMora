let inicio =prompt(`¿Quién anda ahí? ¿Eres un MAGO o BRUJA?`).toUpperCase()

if(inicio ==`MAGO` || inicio == `BRUJA`){
    alert(`Bienvenido al Callejón de la Bruja Tuerta`)

        console.log(`Eres Mago o Bruja`)
        const edad = Number(prompt(`Ingrese su edad`))

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

            let casa = Number(prompt(`A continuación elige a cuál casa perteneces en Hogwarts,
            \nElige 1 si es Gryffindor
            \nElige 2 si es Hufflepuff
            \nElige 3 si es Ravenclaw
            \nElige 4 si es Slytherin
            \nElige 0 para salir.`))

            while(casa != 0){
                switch(casa){
                    case 1:
                        alert(`Eres Gryffindor`)
                        console.log(`Gryffindor`)
                        break;

                    case 2:
                        alert(`Eres Hufflepuff`)
                        console.log(`Hufflepuff`)
                        break;

                    case 3:
                        alert(`Eres Ravenclaw`)
                        console.log(`Ravenclaw`)
                        break;

                    case 4:
                        alert(`Eres Slytherin`)
                        console.log(`Slytherin`)
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
                    \nElige 1 si es Gryffindor
                    \nElige 2 si es Hufflepuff
                    \nElige 3 si es Ravenclaw
                    \nElige 4 si es Slytherin
                    \nElige 0 para salir.`))
                }
            }   

                for(let i = 1; i<5; i++){
                    if(i == 1){
                        iNueva = "Gryffindor"
                    } else if(i == 2){
                        iNueva = "Hufflepuff"
                    }
                    else if(i == 3){
                        iNueva = "Ravenclaw"
                    } else{
                        iNueva = "Slytherin"
                    }
                    alert("Si elegiste " + i + ` entonces eres ${iNueva}`)
                }

                function perfil (name, apellido, edad, iNueva){
                    alert(`Te llamas ${name} ${apellido} y tienes ${edad} años y estás en la casa de ${iNueva}`)
                    }
    
                    perfil(name, apellido, edad, iNueva)

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