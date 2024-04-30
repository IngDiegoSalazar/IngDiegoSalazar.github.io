let ataquejugador
let AtaqueEnemigo
let VidasJ = 3
let VidasE = 3

function IniciarCombate() {
    let seccionAtaque = document.getElementById('seleccionar-ataque')
    seccionAtaque.style.display = 'none'

    let seccionReinicio = document.getElementById('reiniciar')
    seccionReinicio.style.display = 'none'


    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonMascotaJugador.addEventListener('touchcancel', seleccionarMascotaJugador)

    let botonFUEGO = document.getElementById('boton-fuego')
    botonFUEGO.addEventListener('click', ataqueFUEGO)
    let botonAGUA = document.getElementById('boton-agua')
    botonAGUA.addEventListener('click', ataqueAGUA)
    let botonTIERRA = document.getElementById('boton-tierra')
    botonTIERRA.addEventListener('click', ataqueTIERRA)

    let botonREINICIAR = document.getElementById('boton-reiniciar')
    botonREINICIAR.addEventListener('click', reiniciarJOGO)

}


function seleccionarMascotaJugador() {
    let seccionMascota = document.getElementById('seleccionar-mascota')
    seccionMascota.style.display = 'none'

    let seccionAtaque = document.getElementById('seleccionar-ataque')
    seccionAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipeo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('selecciona una mascota')
    }

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.disabled = true

    SeleccionarMascotaEnemigo()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function SeleccionarMascotaEnemigo() {
    let MascotaEnemigo = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

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
    let seccionMensaje = document.getElementById('resultado')
    let spanVidasJ = document.getElementById('vidas-jugador')
    let spanVidasE = document.getElementById('vidas-enemigo')
    let AtaquesDelJugador = document.getElementById('ataques-del-jugador')
    let AtaquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaquesDelJugador = document.createElement('p')
    let nuevoAtaquesDelEnemigo = document.createElement('p')

    let ResultP = ''

    if (ataquejugador == AtaqueEnemigo) {
        ResultP = 'EMPATE'
    } else if (ataquejugador == 'FUEGO' && AtaqueEnemigo == 'TIERRA' || ataquejugador == 'TIERRA' && AtaqueEnemigo == 'AGUA' || ataquejugador == 'AGUA' && AtaqueEnemigo == 'FUEGO') {
        ResultP = 'GANASTES'
        VidasE--
        spanVidasE.innerHTML = VidasE
    } else if (AtaqueEnemigo == 'FUEGO' && ataquejugador == 'TIERRA' || AtaqueEnemigo == 'TIERRA' && ataquejugador == 'AGUA' || AtaqueEnemigo == 'AGUA' && ataquejugador == 'FUEGO') {
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
    let mensajeVidas = document.getElementById('reiniciar')
    let parrafoVidas = document.createElement('p')

    if (VidasE == 0) {
        parrafoVidas.innerHTML = 'Tu mascota Gano el combate! - 🎉🎉🎉'
        mensajeVidas.appendChild(parrafoVidas)

        let botonFUEGO = document.getElementById('boton-fuego')
        botonFUEGO.disabled = true
        let botonAGUA = document.getElementById('boton-agua')
        botonAGUA.disabled = true
        let botonTIERRA = document.getElementById('boton-tierra')
        botonTIERRA.disabled = true

        let seccionReinicio = document.getElementById('reiniciar')
        seccionReinicio.style.display = 'flex'
        let seccionresultado = document.getElementById('resultado')
        seccionresultado.style.display = 'none'

    } else if (VidasJ == 0) {
        parrafoVidas.innerHTML = 'Tu mascota Perdio el combate! - 😢😢😢'
        mensajeVidas.appendChild(parrafoVidas)

        let botonFUEGO = document.getElementById('boton-fuego')
        botonFUEGO.disabled = true
        let botonAGUA = document.getElementById('boton-agua')
        botonAGUA.disabled = true
        let botonTIERRA = document.getElementById('boton-tierra')
        botonTIERRA.disabled = true

        let seccionReinicio = document.getElementById('reiniciar')
        seccionReinicio.style.display = 'flex'
        let seccionresultado = document.getElementById('resultado')
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