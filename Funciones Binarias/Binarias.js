function isLessThan(a, b) {
    let resultado = false;

    if (a < b) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

console.log(isLessThan(2, 4));
console.log(isLessThan(5, 4));

function isGtREqual2(a, b) {
    if (a >= b) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

console.log(isGtREqual2(5, 4));
console.log(isGtREqual2(2, 4));

function isSpeeding(speed) {
    let resultado = false;

    if (speed > 120) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

console.log(isSpeeding(180));
console.log(isSpeeding(115));

function isTeenager(age) {
    let resultado = false;

    if (age >= 13 && age <= 18) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

console.log(isTeenager(14));
console.log(isTeenager(19));

function isGoodMusic(artist) {
    const artistasFavoritos = ["Muse", "Opeth", "Blur", "Leprous", "Magma"];

    if (artistasFavoritos.includes(artist)) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

console.log(isGoodMusic("Blur"));
console.log(isGoodMusic("The Beatles"));