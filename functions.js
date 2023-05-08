function proximoEnLaFila(arreglo, elemento) {
    arreglo.push(elemento); // Agregar al final del arreglo
    return arreglo.shift(); // Remover el primer elemento 
};

let miArreglo = [1, 2, 3, 4, 5];

console.log('Antes: ' + JSON.stringify(miArreglo)); 
console.log(proximoEnLaFila(miArreglo, 6)); 
console.log('Despues: ' + JSON.stringify(miArreglo)); 

// PRACTICA 1

// Write your function here:
function canIVote(age) {
    if  (age >= 18) {
      return true;
    } else {
      return false;
    }
     }
    
    
    // Uncomment the line below when you're ready to try out your function
    
     console.log(canIVote(19)) // Should print true
    
    // We encourage you to add more function calls of your own to test your code!

    // Write your function here:
const agreeOrDisagree = (first, second) => {
    if (first === second) {
      return 'You agree!'
    } else {
      return 'You disagree!'
    }
  }
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
   console.log(agreeOrDisagree("yep", "yep")) 
  // Should print 'You agree!'
  
  // We encourage you to add more function call of your own to test your code!
    