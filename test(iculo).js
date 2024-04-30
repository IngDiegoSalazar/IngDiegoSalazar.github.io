function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function fitgh() {
    let masaje = document.getElementById('chupalo')

    let resul = Math.floor((100 + aleatorio(1, 10)) - (100 * 0.10))

    masaje.innerHTML = resul
}

window.addEventListener('load', fitgh)

function loader() {
    let botac = document.getElementById('rabic')
    botac.addEventListener('click', fitgh)
}

window.addEventListener('load', loader)