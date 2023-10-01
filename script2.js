/**Aquí empieza el codigo de la página vestíbulo**/

let traerPerfil = localStorage.getItem("perfil") /**Obtener datos desde el storage**/
let perfilString = JSON.parse(traerPerfil) /**Parsear datos del storage**/
let nombreMayuscula = perfilString[2].nombre.charAt(0).toUpperCase()+perfilString[2].nombre.slice(1).toLowerCase() /**Variable con datos para convertir cualquer nombre iniciando en mayúscula**/
let apellidoMayuscula = perfilString[3].apellido.charAt(0).toUpperCase()+perfilString[3].apellido.slice(1).toLowerCase() /**Variable con datos para convertir cualquer apellido iniciando en mayúscula**/
console.log(perfilString)
let boton1 = document.getElementById(`boton1`)

boton1.onclick = () => { /**Evento consultar al sombrero seleccionador**/
    Toastify({
        text: `Hola ${nombreMayuscula}, soy el Sombrero Seleccionador y estoy aquí para orientarte a cuál Casa pertenecer dentro de Hogwarts. Todas son buenas, pero cada casa valora diferentes cosas.
        \nTe recomiendo visitar la Sala Común de cada Casa para ver más información y luego vuelvas conmigo para elegir a cuál casa quieres pertenecer.
        \n¡Buena suerte!`,
            duration: -1,
            close: true,
            avatar: `/images/sombrero.png`,
            style: {
                background: "linear-gradient(to right, #dab45b, saddlebrown)"
            },
        }).showToast();
    console.log(`Has consultado al Sombrero Seleccionador.`)
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
        console.log(`Ahora perteneces a ${this.nombre}.`)
    }
}

const casasG = new Casas(1,`Gryffindor`,`Valor, Fuerza, Audacia`,`Rojo y Dorado`,`León`);
const casasR = new Casas(2, `Ravenclaw`,`Creatividad, Erudición, Inteligencia`, `Azul y Bronce`,`Águila`);
const casasS = new Casas(3, `Slytherin`,`Ambición, Determinación, Astucia`,`Verde y Plateado`,`Serpiente`)
const casasH = new Casas(4, `Hufflepuff`,`Justicia, Lealtad, Paciencia`,`Amarillo y Negro`,`Tejón`);

const houses = [casasG, casasR, casasS, casasH]

console.log(houses)

let boton2 = document.getElementById(`boton2`) 
boton2.onclick = () =>{ /**Evento consultar al león de gryffindor**/
    Toastify({
        text: `Hola ${nombreMayuscula}, en la Casa de ${houses[0].nombre}, nosotros valoramos más que nada: ${houses[0].valores}, nuestros colores son el ${houses[0].colores} y nuestro escudo es un ${houses[0].escudo}.`,
        duration: -1,
        close: true,
        avatar: `/images/gryffindor.png`,
        style: {
            background: "linear-gradient(to right, #9c1203, goldenrod)"
        }
    }).showToast();
    console.log(`Has visitado la Sala Común de ${houses[0].nombre}.`)
}

let boton3 = document.getElementById(`boton3`)
boton3.onclick = () =>{ /**Evento consultar al cuervo de ravenclaw**/
    Toastify({
        text: `Hola ${nombreMayuscula}, en la Casa de ${houses[1].nombre}, nosotros valoramos más que nada: ${houses[1].valores}, nuestros colores son el ${houses[1].colores} y nuestro escudo es un ${houses[1].escudo}.`,
        duration: -1,
        close: true,
        avatar: `/images/ravenclaw.png`,
        style: {
            background: "linear-gradient(to right, #00165e, coral)"
        }
    }).showToast();
    console.log(`Has visitado la Sala Común de ${houses[1].nombre}.`)
}

let boton4 = document.getElementById(`boton4`)
boton4.onclick = () =>{ /**Evento consultar a la serpientede slytherin**/
    Toastify({
        text: `Hola ${nombreMayuscula}, en la Casa de ${houses[2].nombre}, nosotros valoramos más que nada: ${houses[2].valores}, nuestros colores son el ${houses[2].colores} y nuestro escudo es un ${houses[2].escudo}.`,
        duration: -1,
        close: true,
        avatar: `/images/slytherin.png`,
        style: {
            background: "linear-gradient(to right, #033807, silver)"
        }
    }).showToast();
    console.log(`Has visitado la Sala Común de ${houses[2].nombre}.`)
}

let boton5 = document.getElementById(`boton5`) /**Evento consultar al tejón de hufflepuff**/
boton5.onclick = () =>{
    Toastify({
        text: `Hola ${nombreMayuscula}, en la Casa de ${houses[3].nombre}, nosotros valoramos más que nada: ${houses[3].valores}, nuestros colores son el ${houses[3].colores} y nuestro escudo es un ${houses[3].escudo}.`,
        duration: -1,
        close: true,
        avatar: `/images/hufflepuff.png`,
        style: {
            background: "linear-gradient(to right, #e3a000, black)"
        }
    }).showToast();
    console.log(`Has visitado la Sala Común de ${houses[3].nombre}.`)
}

let listaCasas = document.getElementById("listaCasas")
listaCasas.onchange = () =>{ /**Evento elegir casa**/
    console.log(listaCasas.value)
            switch(listaCasas.value){
                case "Gryffindor":
                    Toastify({
                        text: `Has elegido ser parte de ${casasG.nombre}.`,
                        duration: 2000,
                        avatar: `/images/sombrero.png`,
                        style: {
                            background: "linear-gradient(to right, #dab45b, saddlebrown)"
                        }
                    }).showToast();
                    casasG.mostrarCasa()
                    perfilString.push({casa: `${houses[0].nombre}`}) /**agregar elementos al array**/
                    break;

                case "Ravenclaw":
                    Toastify({
                        text: `Has elegido ser parte de ${casasR.nombre}.`,
                        duration: 2000,
                        avatar: `/images/sombrero.png`,
                        style: {
                            background: "linear-gradient(to right, #dab45b, saddlebrown)"
                        }
                    }).showToast();
                    casasR.mostrarCasa()
                    perfilString.push({casa: `${houses[1].nombre}`}) /**agregar elementos al array**/
                    break;

                case "Slytherin":
                    Toastify({
                        text: `Has elegido ser parte de ${casasS.nombre}.`,
                        duration: 2000,
                        avatar: `/images/sombrero.png`,
                        style: {
                            background: "linear-gradient(to right, #dab45b, saddlebrown)"
                        }
                    }).showToast();
                    casasS.mostrarCasa()
                    perfilString.push({casa: `${houses[2].nombre}`}) /**agregar elementos al array**/
                    break;

                case "Hufflepuff":
                    Toastify({
                        text: `Has elegido ser parte de ${casasH.nombre}.`,
                        duration: 2000,
                        avatar: `/images/sombrero.png`,
                        style: {
                            background: "linear-gradient(to right, #dab45b, saddlebrown)"
                        }
                    }).showToast();
                    casasH.mostrarCasa()
                    perfilString.push({casa: `${houses[3].nombre}`}) /**agregar elementos al array**/
                    break;
            }

        console.log(perfilString)
        console.log(JSON.stringify(perfilString))
        localStorage.setItem("perfil", JSON.stringify(perfilString)) /**enviar datos al storage**/

        setTimeout(() => { /**asincronía**/
            function perfilUsuario (){
                Toastify({
                    text: `Te llamas ${nombreMayuscula} ${apellidoMayuscula}, tienes ${perfilString[1].edad} años y estás en la casa de ${perfilString[6].casa}.`,
                    duration: 5000,
                    avatar: `/images/sombrero.png`,
                    style: {
                        background: "linear-gradient(to right, #dab45b, saddlebrown)"
                    }
                }).showToast();
            }
            perfilUsuario()
        }, 3000);

        setTimeout(() => { /**asincronia**/
            Toastify({
                text: `Te transportaremos con "Polvos Flu" a nuestra sección de productos para adquirir tu material escolar.`,
                duration: -1,
                close: true,
                avatar: `/images/sombrero.png`,
                style: {
                    background: "linear-gradient(to right, #dab45b, saddlebrown)"
                }
            }).showToast();
        }, 8000);
        setTimeout(() => { /**asincronía**/
            location.assign("../sections/productos.html") /**redirigirse a otra página**/
        }, 15000);
}