                        /**Aquí empieza el codigo del index**/

    let inicio = document.getElementById("inicio") 
    let edad = document.getElementById("edad")
    let correo = document.getElementById("correo")
    let password = document.getElementById("password")
    let botonPerfil = document.getElementById("botonPerfil")
    const perfil = []
    console.log(perfil)
    
inicio.onchange = () => { /**Evento al cambiar el valor del input de inicio**/
    if(inicio.value == `Mago` || inicio.value ==`Bruja`){
        Toastify({
            text: `Bienvenido(a), está usted entrando a La Bruja Tuerta, la tienda oficial en línea de artículos del Colegio Hogwarts de Magia y Hechicería.`,
            avatar: `/images/muro.jpg`,
            style: {
                background: "linear-gradient(to right, coral, #9c1203)"
            },
            duration: -1,
            close: true
            }).showToast();
        console.log("Es usted mago/bruja.")
        perfil.push({inicio: inicio.value}) /**Agregar valor al arrar perfil**/
        console.log(perfil)
        
        edad.onchange = () => { /**Evento al cambiar el valor del input de edad**/
            if(edad.value>=18){
                Toastify({
                    text: `Adelante, es usted mayor de edad.`,
                    avatar: `/images/muro.jpg`,
                    style: {
                        background: "linear-gradient(to right, coral, #9c1203)"
                    },
                    duration: -1,
                    close: true
                    }).showToast();
                console.log("Es usted mayor de edad.")
                perfil.push({edad: Number(edad.value)}) /**Agregar valor al arrar perfil**/
                console.log(perfil)

                nombre.onchange = () => { /**Evento al cambiar el valor del input de nombre de usuario**/
                    console.log("Nombre registrado.")
                    perfil.push({nombre: nombre.value})
                    console.log(perfil)
                }

                apellido.onchange = () => { /**Evento al cambiar el valor del input de apellido de usuario**/
                    console.log("Apellido registrado.")
                    perfil.push({apellido: apellido.value}) /**Agregar valor al arrar perfil**/
                    console.log(perfil)
                }

                correo.onchange = () => { /**Evento al cambiar el valor del input de correo de usuario**/
                    console.log("Correo registrado.")
                    perfil.push({correo: correo.value}) /**Agregar valor al arrar perfil**/
                    console.log(perfil)
                }

                password.onchange = () => { /**Evento al cambiar el valor del input de contraseña de usuario**/
                    console.log("Contraseña registrada.")
                    perfil.push({password: password.value}) /**Agregar valor al arrar perfil**/
                    console.log(perfil)
                }

                botonPerfil.onclick = () => { /**Evento para mostrar la información dada**/
                    function mostrarPerfil (){ 
                        console.log("Perfil creado.")
                        console.log(perfil)
                        console.log(JSON.stringify(perfil)) 
                        localStorage.setItem("perfil", JSON.stringify(perfil)) /**Enviar datos al storage**/
                        Toastify({
                            text: `Se ha creado su perfil.
                                    \nSu nombre es ${nombre.value.charAt(0).toUpperCase()+nombre.value.slice(1).toLowerCase()} ${apellido.value.charAt(0).toUpperCase()+apellido.value.slice(1).toLowerCase()} , es un(a) ${inicio.value} de ${edad.value} años y su e-mail es ${correo.value}. 
                                    \nA continuación será transportado(a) con "Polvos Flu" a nuestro vestívulo para que elija la Casa de Hogwarts a la que quiere pertenecer para obtener sus útiles escolares.
                                    \nLe recomendamos informarse primero con el "Sombrero Seleccionador"`,
                            duration: -1,
                            close: true,
                            avatar: `/images/muro.jpg`,
                            style: {
                                background: "linear-gradient(to right, coral, #9c1203)"
                            }
                            }).showToast();
                    }
                    mostrarPerfil()
                    setTimeout(() => { /**Agregar asincronía**/
                        location.assign("./sections/vestibulo.html") /**Dirigir a page vestíbulo**/
                    }, 20000);
                }
            } else {
                Toastify({
                    text: `¡Largo, vuelva cuando crezca!`,
                    duration: -1,
                    close: true,
                    avatar: `/images/muro.jpg`,
                    style: {
                        background: "linear-gradient(to right, coral, #9c1203)"
                    }
                    }).showToast();
                setTimeout(() => { /**Agregar asincronía**/
                    location.reload() /**Recargar página**/
                }, 2000)
            }
        } 
    } else {
        Toastify({
            text: `Intente de nuevo. ¡No aceptamos Muggles!`,
            duration: -1,
            close: true,
            avatar: `/images/muro.jpg`,
            style: {
                background: "linear-gradient(to right, coral, #9c1203)"
            }
            }).showToast();
        setTimeout(() => { /**Agregar asincronía**/
            location.reload() /**Recargar página**/
        }, 3000)
    }
}