function interpretarIMC(indiceDeMasaCorporal) {
    if (indiceDeMasaCorporal < 18.5) {
        console.log('Bajo Peso');
    } else if (indiceDeMasaCorporal <= 24.9) {
        console.log('Normal');
    } else if (indiceDeMasaCorporal <= 29.9) {
        console.log('Sobrepeso');
    } else {
        console.log('Obeso');
    }
}

interpretarIMC(17.8);

function clasificarValor(valor) {
    let respuesta;
    switch (valor) {
        case 1:
            respuesta = 'alpha';
            break;
            
    }
}