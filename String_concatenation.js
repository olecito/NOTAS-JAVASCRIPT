
let name = 'Alan+++==='; // cualquier elemento dentro de un string pierde su valor y se convierte en texto


let cadena  = 'Soy una cadena de caracteres "con comillas"'; // Si tuvieramos que usar comiilas dentro de un string esta seria las 1ra opcion
let cadena2 = 'Soy una cadena de caracteres \'con comillas\''; // con dos barras invertidas \\ podemos colocar comillas dentro del string  

// OPERADOR DE SUMA 

let nombreCompleto = 'Alan ' + 'Turing'; // Para que haya un espacio se tiene que dejar un espacio dentro de alguno de los strings.
// Tambien podemo concatenar un string en blanco para dejar espacios

// CONCATENACION CON VARIABLES

let verbo = 'programar';
let mensaje = 'Estoy aprendiendo a ' + verbo; // Concatenamos un string con otra variable



let mensajeCompleto = 'Estoy aprendiendo a programar ';
let parteFinal = 'con codeacademy'

mensajeCompleto += parteFinal; // Concatetenamos dos variables 


// ENCONTRAR LA LONGITUD DE UNA CADENA 

let miString;

miString = 'a';

console.log(miString.length); // Esto va a reflejar en consola la cantidad de caracteres que tiene el valor asociado a la variable 
// Los espacios en blanco y los caracteres especiales contabilizan como caracteres dentro del String



