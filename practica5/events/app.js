let obj = {
    nombre: 'Ricardo',
    edad: 19,
    apellido: 'Kamey',
    keypress: function () {
        return 'Se ha presionado una tecla';
    },
    mouseOver: function () {
        return 'El puntero del mouse está arriba';
    }
};

// Imprime el atributo 'nombre' del objeto mediante la notación de punto
// console.log(obj.nombre);
// Imprime el atributo 'nombre' con corchetes, es case sensitive
// Debe corresponder el nombre de la key
// console.log(obj['nombre']);

// Guardamos el valor de la key en una variable
// Debe ser igual a la key del obj
let myKey = 'nombre';
console.log(obj[myKey]);

// Reasignamos el valor de myKey a keypress
// obj[myKey] es una función y con los paréntesis la invocamos
myKey = 'keypress';
console.log(obj[myKey]());
// Lo mismo con mouseOver, obj[myKey] es una función y la invocamos
myKey = 'mouseOver';
console.log(obj[myKey]());

// ==== [ Arrays en JavaScript ] ====
// Podemos tener distintos tipos de datos en un array a diferencia de otros lenguajes
// Porque se guardan en la dirección de la memoria
// Cuando iteramos el array, no es por el tamaño de los datos
// Sino por la dirección de la memoria
let myArray = [];

myArray.push(4);
myArray.push('string');
myArray.push(obj);
myArray.push(function () {
    return 'hola desde el array';
});

console.log(myArray);
// Tenemos valores primitivos, un objeto y una función anónima
// Podemos tener un array lleno de funciones

// Acceder a la posición 2 del array que es el objeto
// Con la notación de punto accedemos a la función mouseOver
// Y la invocamos
console.log(myArray[2].mouseOver());

// Array de funciones
let funcArray = [];
funcArray.push(() => {
    console.log('Function 1');
});
funcArray.push(() => {
    console.log('Function 2');
})
funcArray.push(() => {
    console.log('Function 3');
})

// Como todos los datos del array son funciones, el forEach por cada item
// lo invoca, pero si  tuviera otro tipo de datos truena.
funcArray.forEach((item) => {
    item();
})