/* Tipos de datos:

- undefined:  Cuando no existe un valor asignado
- null:  Cuando no existe 
- boolean: Verdadero y falso
- string: Es una cadena de caracteres.
- symbol
- number: Es un numero en el codigo
- object: es una estructura que nos permite relaciones propiedades y funciones bajo la estructura del objeto. 
*/


// VARIABLES:  Crea un espacio en la memoria para que se pueda guardar un valor especifico

var miVariable = 'coding';
console.log(miVariable);

miVariable = 16;
console.log(miVariable);

var a = 5;
var b = a; 
console.log(b);
console.log(a);

var a = 5;
var b;

b = a; 


// aqui estamos declarando una variable y le estamos asignando un valor, de esta forma estariamos inicializando la variable 
var x = 9; // INICIALIZAR LA VARIABLE 

// Variables no inicializadas

var a;
var b; 

/* VARIABLES

Podemos definir las variables con:

VAR:  es el metodo mas antiguo, seven en los ejemplos de estas notas pero no deberías de usarlo.
LET: Usaremos let al crear variables que después vayamos a modificar 
CONST: Usaremos const cuando queramos crear una constante,  es una variable pero verdaderamente no podremos modificar su valor (si podremos agregarle valores mas adelante)

TIPOS DE DATOS

- undefined:  Cuando no existe un valor asignado
- null:  Cuando no existe 
- boolean: Verdadero y falso
- string: Es una cadena de caracteres.
- symbol
- number: Es un numero en el codigo
- object: es una estructura que nos permite relaciones propiedades y funciones bajo la estructura del objeto. 

￼// VARIABLES:  Crea un espacio en la memoria para que se pueda guardar un valor especifico

var miVariable = 'coding';
console.log(miVariable);

miVariable = 16;
console.log(miVariable);

La variable almacena el valor que le coloquemos, el nombre de la variable tiene que ser descriptivo y acorde al valor que le damos ya que cuando nos encontremos la variable a lo largo del código es posible que no recordemos ni podamos relacionar la variable con el valor que le entregamos. 

Si logamos a la consola una variable sin valor nos va a devolver undefined

OPERADOR DE ASIGNACION 

(=) es el operador de asignación en javascript  

ASIGNAR EL VALOR DE UNA VARIABLE A OTRA VARIABLE

Podemos crear una variable y asignarle como valor la otra variable: 
￼var a = 5;
var b = a; 
console.log(b);
console.log(a);

La otra opción que tenemos es crear una variable y dejarla sin valor para posteriormente llamar la variable y asignarle el valor deseado
 
￼var a = 5;
var b;

b = a; 

INICIALIZAR UNA VARIABLE

￼// aqui estamos declarando una variable y le estamos asignando un valor, de esta forma estariamos inicializando la variable 
var x = 9; // INICIALIZAR LA VARIABLE 

Las variables con case sensitive, si escribimos: let miVariable y let miVARIABLE son dos variables completamente distintas. 

Usualmente usaremos la sintaxis de camel case, es decir que si escribimos una variable con varias palabras, la letra inicial de cada palabra sera una mayuscula a excepción de la primera letra de la variable ejemplo:  let miPrimeraVariableProgramando; 
*/