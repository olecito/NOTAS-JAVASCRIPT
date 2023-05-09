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

function calcularRaizCuadrada(num) {
    if (num < 0) {
        return undefined; 
    }
    return Math.sqrt(num);
}  

// Write your function here:

const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
      return 'You have entered an invalid grade.';
    } 
    let average = (midterm + final + homework) / 3
    if (average < 60) {
      return 'F';
    } else if (average < 70) {
      return 'D';
    } else if (average < 80) {
      return 'C';
    } else if (average < 90) {
      return 'B';
    } else {
      return 'A';
    }
    }
    
    
    // Uncomment the line below when you're ready to try out your function
     console.log(finalGrade(99, 92, 95)) // Should print 'A'
    
    // We encourage you to add more function calls of your own to test your code!

    // Write your function here:

const reportingForDuty = (rank, lastName) =>
{ return `${rank} ${lastName} reporting for duty!`
}


// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'

// We encourage you to add more function calls of your own to test your code!