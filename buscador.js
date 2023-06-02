
/*
Ejercicio:
 * Pasarle un nombre a nuestro proceso node y verificar si ese nombre existe en nuestro arreglo de nombres. 
*Si existe imprimir 'Bienvenido nombre'. Si no existe, imprimir 'Fuera de aquí'. 

 * Esti tiene que estar en una función. 

*/
const nombre = process.argv[2];

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

  const findName = (nombre) => {
    console.log("Estamos en la función findName con el nombre =>", nombre);
    /* const existe = nombres.includes(nombre); //Devuelve true or false */
    const existe = nombres.filter(_nombre => nombre === _nombre);
    if (existe.length > 0) {
        console.log("Bienvenido");
    } else {
        console.log("Fuera de aquí")
    }
    /* console.log("existe", existe); */
  }

  findName(nombre)

