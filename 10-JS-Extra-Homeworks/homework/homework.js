// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  objectToArray = Object.entries(objeto)

  return objectToArray;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const str2 = string;
  const strToArray = []
  const objFinal = {}
  
  let sortStr = ''
  let contador = 0
  let valorCharAt = 0
  

  for(let z=0; z<str2.length; z++){
    strToArray.push(str2[z])
  } 
  strToArray.sort()
  strToArray.forEach(elemento => sortStr = sortStr + elemento)
  
  for(valorCharAt; valorCharAt<sortStr.length; valorCharAt++){
  
    for(let i=0; i<sortStr.length; i++){
      if(sortStr.charAt(valorCharAt) === sortStr[i]){
      contador++
      }
    }
    objFinal[`${sortStr.charAt(valorCharAt)}`] = contador
    valorCharAt = valorCharAt + (contador-1)
    contador = 0
  }

  return objFinal

}


function capToFront(s) {
  let strRecibido = s
  let strUperCase = ''
  let strLowerCase = ''
  let strMayusculas = ''
  let strMinusculas = ''
  let strFinal = ''
  let cpaTemp = ''
  let contador = 0
  

  strUperCase = strRecibido.toUpperCase()

  for(let i=0; i<strRecibido.length; i++){
    if(strRecibido[i].codePointAt() === strUperCase[i].codePointAt()){
      cpaTemp = strRecibido[i]
      contador++
      strMayusculas = strMayusculas + cpaTemp
    }

  }
  
  cpaTemp = ''
  contador = 0
  strLowerCase = strRecibido.toLocaleLowerCase()

  for(let a=0; a<strRecibido.length; a++){
    if(strRecibido[a].codePointAt() === strLowerCase[a].codePointAt()){
      cpaTemp = strRecibido[a]
      contador++
      strMinusculas = strMinusculas + cpaTemp
    }
  }

  strFinal = strMayusculas + strMinusculas
  
  return strFinal
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
const strRecibida = str
let arrayFinal = [];
let arrayFrom = Array.from(strRecibida);
let strReverse = "";
let strTemporal = "";
let contador = 0;
let strFinal = "";

arrayFrom.reverse();
strReverse = arrayFrom.join("");

for (i = contador; i < strReverse.length; i++) {
  if (strReverse[i] !== " ") {
    strTemporal = strTemporal + strReverse[i];
    contador++;
  } else {
    arrayFinal.unshift(strTemporal);
    strTemporal = "";
  }
}

arrayFinal.unshift(strTemporal);
strFinal = arrayFinal.join(" ");

return strFinal

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numRecibido = numero;
  let strNumero = numRecibido.toString();
  let strOriginal = "";
  let strReverse = "";
  const arrayNumOriginal = Array.from(strNumero);
  const arrayNumReverse = [];

  arrayNumOriginal.map((a) => arrayNumReverse.push(a));
  arrayNumReverse.reverse();

  strOriginal = arrayNumOriginal.join("");
  strReverse = arrayNumReverse.join("");

  if (strOriginal === strReverse) {
    return `Es capicua`;
  } else {
    return `No es capicua`;
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  const strUsuario = cadena;
  const arrayStrUsuario = Array.from(strUsuario);
  const arraySliceA = [];
  const arraySliceB = [];
  let abcOff = "";
  let arraySliceC = [];

    for (let i = 0; i < arrayStrUsuario.length; i++) {
      if (arrayStrUsuario[i] !== "a") {
        arraySliceA.push(arrayStrUsuario[i]);
      }
    }

    for (let i = 0; i < arraySliceA.length; i++) {
      if (arraySliceA[i] !== "b") {
        arraySliceB.push(arraySliceA[i]);
      }
    }

    for (let i = 0; i < arraySliceB.length; i++) {
      if (arraySliceB[i] !== "c") {
        arraySliceC.push(arraySliceB[i]);
      }
    }
 
  abcOff = arraySliceC.join("");
  return abcOff;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

const arraySort = arr

arraySort.sort(function(a,b){
 

  if (a.length < b.length) return -1 

})

return arraySort

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const aUno = arreglo1
  const aDos = arreglo2
  const aInterseccion = []
  const aVacio = []
  let aLength = aUno.length
  let bLength = aDos.length
  let a = 0
  let b = 0

  aUno.sort((a,b) =>{
    if (a > b) return 1
  })
  
  
  aDos.sort((a,b) =>{
    if (a > b) return 1
  })
  

  if (aLength >= bLength){
    a = aLength
    b = bLength
  } else {
    a = bLength
    b = aLength
  }

  for (let i=0; i<a; i++){
    for (let y=0; y<b; y++){
      if(aUno[y] === aDos[i]){
      aInterseccion.push(aUno[y])
      }
    }
  }
  

  if (aInterseccion.length >= 0){
    return aInterseccion
  } else {
    return aVacio
  }

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

