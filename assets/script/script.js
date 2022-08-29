
const container = document.querySelector(".container")
const incremento = container.querySelector("#incremento")
const decremento = container.querySelector("#decremento")
const zerar = container.querySelector("#zerar")
const cont = container.querySelector("#contador")
const icon = container.querySelector(".icon")
const body = document.querySelector("body")

let contador = 0

incremento.addEventListener("click", () => {
    cont.innerHTML = ++contador
    Colors()
})

decremento.addEventListener("click", () => {
    cont.innerHTML = --contador
    Colors()
})

zerar.addEventListener("click", () => {
    cont.innerHTML = contador = 0
    Colors()
})

function Colors() {
    if(contador > 0) {
        cont.style.color = "green"
    }
    else if(contador < 0) {
        cont.style.color = "red"
    }
    else {
        cont.style.color = "black"
    }
}

// DARK MODE
icon.addEventListener("click", () => {
    body.classList.toggle("active")
})