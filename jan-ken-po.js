function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function shokan(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra 🥌"
    } else if (jugada == 2) {
        resultado = "Papel 🧻"
    } else if (jugador == 3) {
        resultado = "Tijera ✂"
    } else {
        resultado = "si te salio esto elegiste una opcion invalida webon, si a la PC le salio esto te salio el easter egg y ahora encontraras el amor"

    }
    return resultado
}


//1 es piedra, 2 es papel, 3 es tijeras
let jugador = 0
let pc = aleatorio(1, 3)
let wins = 0
let losses = 0

while (wins < 3 && losses < 3) {
    jugador = prompt("elige: 1 para piedra, 2 para papel y 3 para tijera")

    alert("Tu elegistes : " + shokan(jugador))
    alert("La PC eligio " + shokan(pc))

    if (pc == jugador) {
        alert("EMPATE")
    } else if (jugador == 1 && pc == 3) {
        alert("GANASTES")
        wins = wins + 1
    } else if (jugador == 2 && pc == 1) {
        alert("GANASTES")
        wins = wins + 1
    } else if (jugador == 3 && pc == 2) {
        alert("GANASTES")
        wins = wins + 1
    } else {
        alert("PERDISTE BABOSO")
        losses = losses + 1
    }
}

alert("Ganastes " + wins + " veces y perdistes " + losses + " veces, baboso")