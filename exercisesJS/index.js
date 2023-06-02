
console.log("Hola Mundo cruel");

/*
* Construir una función que separe nombres largos de cortos.
*Nombres largos son de 5 caracteres en adelante.

*/

const nombres = [
    "Andres",
    "Andres de Anda",
    "Christian",
    "Damian",
    "Dani",
    "Diego",
    "Dan",
    "Gustavo",
    "Ignacio",
    "Jorge",
    "Karla",
    "Lau",
    "Luis",
    "Mara",
    "Max",
    "Pao",
    "Roberto",
    "Samantha"
  ];

  const longAndShortNames = (names) => {
    const longNames = names.filter(item => item.length >= 5);
    const shortNames = names.filter(item => item.length < 5);

    console.log(`The long names are:\n${longNames}`);
    console.log(`The short names are:\n${shortNames}`);
  };  

  longAndShortNames(nombres);

  /*
  * Obtener un objeto que contenga como propiedad los nombres de los Koders y el valor de la propiedad será la longitud de ese mismo nombre.  
  */

  const nombresEstructurados = nombres.reduce((accumuladorActual, current, idx) => {
    console.log(`Iteracion ${idx}`);
    console.log("Acumulador", accumuladorActual);
    const _accumuladorNuevo = {
      ...accumuladorActual, //Spread Operator
      [current]: current.length // [variable] como propiedad
    }
    return _accumuladorNuevo
  }, {});
  