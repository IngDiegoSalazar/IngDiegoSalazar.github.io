const seccionAtaque = document.getElementById('seleccionar-ataque')
const seccionReinicio = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFUEGO = document.getElementById('boton-fuego')
const botonAGUA = document.getElementById('boton-agua')
const botonTIERRA = document.getElementById('boton-tierra')
const botonREINICIAR = document.getElementById('boton-reiniciar')

const seccionMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const seccionMensaje = document.getElementById('resultado')
const spanVidasJ = document.getElementById('vidas-jugador')
const spanVidasE = document.getElementById('vidas-enemigo')
const AtaquesDelJugador = document.getElementById('ataques-del-jugador')
const AtaquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const nuevoAtaquesDelJugador = document.createElement('p')
const nuevoAtaquesDelEnemigo = document.createElement('p')

let mensajeVidas = document.getElementById('reiniciar')
let parrafoVidas = document.createElement('p')

let seccionresultado = document.getElementById('resultado')

let ataquejugador
let AtaqueEnemigo
let VidasJ = 3
let VidasE = 3

function IniciarCombate() {

    seccionAtaque.style.display = 'none'
    seccionReinicio.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonMascotaJugador.addEventListener('touchcancel', seleccionarMascotaJugador)

    botonFUEGO.addEventListener('click', ataqueFUEGO)
    botonAGUA.addEventListener('click', ataqueAGUA)
    botonTIERRA.addEventListener('click', ataqueTIERRA)

    botonREINICIAR.addEventListener('click', reiniciarJOGO)

}


function seleccionarMascotaJugador() {

    seccionMascota.style.display = 'none'
    seccionAtaque.style.display = 'flex'

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipeo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('selecciona una mascota')
    }

    botonMascotaJugador.disabled = true

    SeleccionarMascotaEnemigo()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function SeleccionarMascotaEnemigo() {
    let MascotaEnemigo = aleatorio(1, 3)

    if (MascotaEnemigo == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (MascotaEnemigo == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (MascotaEnemigo == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else {
        spanMascotaEnemigo.innerHTML = 'Nada'
    }
}

function ataqueAleatorioEnemigo() {
    let AtaqueAleatorio = aleatorio(1, 3)

    if (AtaqueAleatorio == 1) {
        AtaqueEnemigo = 'FUEGO'
    } else if (AtaqueAleatorio == 2) {
        AtaqueEnemigo = 'AGUA'
    } else if (AtaqueAleatorio == 3) {
        AtaqueEnemigo = 'TIERRA'
    } else {
        AtaqueEnemigo = 'Nada'
    }

    crearPelea()
}

function crearPelea() {

    let ResultP = ''

    if (ataquejugador == AtaqueEnemigo) {
        ResultP = 'EMPATE'
    } else if (ataquejugador == 'FUEGO' && AtaqueEnemigo == 'TIERRA' || ataquejugador == 'TIERRA' && AtaqueEnemigo == 'AGUA' || ataquejugador == 'AGUA' && AtaqueEnemigo == 'FUEGO') {
        ResultP = 'GANASTES'
        VidasE--
        spanVidasE.innerHTML = VidasE
    } else {
        ResultP = 'PERDISTE'
        VidasJ--
        spanVidasJ.innerHTML = VidasJ
    }

    seccionMensaje.innerHTML = ResultP
    nuevoAtaquesDelJugador.innerHTML = ataquejugador
    nuevoAtaquesDelEnemigo.innerHTML = AtaqueEnemigo

    AtaquesDelJugador.appendChild(nuevoAtaquesDelJugador)
    AtaquesDelEnemigo.appendChild(nuevoAtaquesDelEnemigo)

    ResultadoFinal()
}

function ResultadoFinal() {

    if (VidasE == 0) {
        parrafoVidas.innerHTML = 'Tu mascota Gano el combate! - 🎉🎉🎉'
        mensajeVidas.appendChild(parrafoVidas)

        botonFUEGO.disabled = true
        botonAGUA.disabled = true
        botonTIERRA.disabled = true

        seccionReinicio.style.display = 'flex'
        seccionresultado.style.display = 'none'

    } else if (VidasJ == 0) {
        parrafoVidas.innerHTML = 'Tu mascota Perdio el combate! - 😢😢😢'
        mensajeVidas.appendChild(parrafoVidas)

        botonFUEGO.disabled = true
        botonAGUA.disabled = true
        botonTIERRA.disabled = true

        seccionReinicio.style.display = 'flex'
        seccionresultado.style.display = 'none'

    }


}

function reiniciarJOGO() {
    location.reload()
}

function ataqueFUEGO() {
    ataquejugador = 'FUEGO'

    ataqueAleatorioEnemigo()
}

function ataqueAGUA() {
    ataquejugador = 'AGUA'

    ataqueAleatorioEnemigo()
}


function ataqueTIERRA() {
    ataquejugador = 'TIERRA'

    ataqueAleatorioEnemigo()
}

window.addEventListener('load', IniciarCombate)
