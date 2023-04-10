let colorPresionado


let a = document.querySelector("#a")
let b = document.querySelector("#b")
let c = document.querySelector("#c")
let d = document.querySelector("#d")

a.style.width = "200px"
a.style.height = "200px"
a.style.backgroundColor = "red"

b.style.width = "200px"
b.style.height = "200px"
b.style.backgroundColor = "yellow"

c.style.width = "200px"
c.style.height = "200px"
c.style.backgroundColor = "green"

d.style.width = "200px"
d.style.height = "200px"
d.style.backgroundColor = "blue"

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorPresionado = "lightblue"
    // Cambiar a color 1 
    } else if (event.key === 's') {
    // Cambiar a color 2
        colorPresionado = "black"
    } else if (event.key === 'd'){
    // cambiar color 3
        colorPresionado = "purple"
    } else {
    // color para cualquier otra tecla 
        colorPresionado = "white"
    }
    console.log(colorPresionado)
    }
)

function colorChange(id){
    let identifier = document.getElementById(id)
    identifier.style.background = colorPresionado
}
