
const container = document.querySelector(".container")
const incremento = container.querySelector("#incremento")
const decremento = container.querySelector("#decremento")
const zerar = container.querySelector("#zerar")
const cont = container.querySelector("#contador")
const icon = container.querySelector(".icon")
const body = document.querySelector("body")

let contador = 0
cont.innerHTML = contador

incremento.addEventListener("click", () => {
    cont.innerHTML = ++contador
})

decremento.addEventListener("click", () => {
    cont.innerHTML = --contador
})

zerar.addEventListener("click", () => {
    cont.innerHTML = contador = 0
})

// FUNÇÃO DARK MODE
icon.addEventListener("click", () => {
    body.classList.toggle("active")
})