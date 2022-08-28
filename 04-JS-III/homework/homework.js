// No cambies los nombres de las funciones.

const { stripLeadingDotSlash } = require("@11ty/eleventy/src/TemplatePath");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return (array[array.length -1]);

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;

}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i=0; i<array.length; i++){
    array[i]=array[i]+1;
  }return array;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
 return palabras.join(' '); // Esto lo tuve que ver en la comunidad de Slack por que no sabia como hacerlo y era un metodo de Array que no conocia.

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 return array.includes(elemento); // Lo busque en Internet para saber como hacerlo

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for(let i=0; i<numeros.length; i++){
    suma += numeros[i];   // Esta instruccion la tenia en mente pero no sabia como aplicarla y busque en internet como hacerlo.
  } return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  let puntajes = resultadosTest.length;
  let promedio = 0;
  for (let i=0; i<resultadosTest.length; i++){
    suma += resultadosTest[i];
    promedio = suma/puntajes;
  } return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = 0;
  let contenedor = 0;
  for (let i=0; i<numeros.length; i++){
    contenedor = numeros[i];
    if(contenedor>mayor){
      mayor = contenedor;
    }
  } return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let multiplicador = 1; // Muy importante que cuando una variable se va usar para multiplicarla despues se debe incializar en 1 por que si no se inicializa o se incializa en 0 siempre te dara como resultado un 0
  
  if (arguments.length < 1 ){
    return 0;
  }
  
  for (i=0; i<arguments.length; i++){
      multiplicador *= arguments[i];
  }
  return multiplicador;

}



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let elemento = 0;
  let comparador = 18;
  let contador = 0;

  for (i=0; i<arreglo.length; i++){
    elemento = arreglo[i];
    if (elemento > comparador){
      contador++;
    }
  } return contador;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  let a = 'Es fin de semana';
  let b = 'Es dia Laboral';

  switch(numeroDeDia){
    case 1: return a;
    case 2: return b;
    case 3: return b;
    case 4: return b;
    case 5: return b;
    case 6: return b;
    case 7: return a;
  }

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  return Number(n.toString()[0]) === 9; // Lo tuve que buscar en el foro de Slack

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  const resultado = arreglo.every(function(valor){
    if (valor === arreglo[0]){
      return true
    };
  }); 
  return resultado; // Esta respuesta la tuve que buscar en MDN y en otra pagina para entenderla un poco pero reafirme el concepto en un video que vi en Youtube 
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const newArray = [];  // declaro nuevo array vaccio para despues retonarlo lleno como lo indica el ejercicio
  let contador = 0      // declaro una variable como contador para que cuando revise si la condicion del if se cumple vaya aumentado el contador                         
  let texto = 'No se encontraron los meses pedidos'  //declaro variable para devolver el texto solicitado

  for (i=0; i<array.length; i++){ // inicializo contador para recorrer todos los meses dados en el array
    if(array[i] === 'Enero' || array[i] === 'Marzo'  || array[i] === 'Noviembre'){ // condicional para ver si en esa posicion del array existe alguno de los meses indicados
      newArray.push(array[i]); // cuando pasa la condicion de la instruccion de arriba con esta instruccion guardo el valor en el nuevo Array
      contador ++; // contador aumenta mas +1
    } 
  }

  if (contador<3){ // Condicion para revisar si el contador tiene por lo menos 3 ciclos ejecutados con la condicional de arriba
    return texto; // si no cumple con 3 ciclos quiere decir que no tiene los meses indicados y se retorna el el texto indicado
  } else{ // de lo contrario
    return newArray; // se retorna el nuevo array
  }
}



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  const nuevoArray = []; // declaro un nuevo array para regresarlo al final

  for (i=0; i<array.length; i++){ // inicio ciclo for para recorrer el array
    if(array[i]>100){ // condicional que comprueba si el valor que esta en esa posicion del array es mayor a 100 como se indica
      nuevoArray.push(array[i]); // si se cumple la condicional ese valor se agrega al nuevo array
    }
  } return nuevoArray // terminado el ciclo for se regresa el nuevo array con los numeros mayores a 100
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  const nuevoArray = []; //inicializo un nuevo Array
  let nuevoNumero = numero; //incializo una variable que tendra el valor incial de numero pero que ira acumulando la suma de +2
  let texto = 'Se interrumpió la ejecución'; //variable string que mostrara el texto indicado en el ejercicio
  
  for (i=0; i<10; i++){ //se inicia el cilco for para inicar el bucle
    nuevoNumero = nuevoNumero +2; //la variable empieza a aumentar su valor en 2
      if (nuevoNumero === i){ //condicional que evalua si el ciclo del bucle es igual al elemento de array +2
      break;   //si la condicion se cumple sale del bucle por medio del break solicitado en el ejercicio
      } else { //si no se cumple la condicion se ejecuta el siguiente bloque
        nuevoArray.push(nuevoNumero); //se empieza a llenar el nuevo array con los nuevos valores que se recibieron +2
      }  //cierre del bloque
  } //cierre del ciclo for
  
  if (i<10){ //condicional que revisa si el bucle fue interrumpido por el break
    return texto; //si se cumple se regresa el mensaje solicitado en el ejercicio
  } else { //sino se cumple la condicional se ejecuta el siguiente bloque
    return nuevoArray; //se regresa el nuevo Array con los nuevos valores
  } //se cierra el bloque
} //se cierra la funcion


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  const nuevoArray = [];
  let nuevoNumero = numero;

  for (i=0; i<10; i++){
    if (i === 5){
       continue;
    } nuevoNumero = nuevoNumero +2;
      nuevoArray.push(nuevoNumero);
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
