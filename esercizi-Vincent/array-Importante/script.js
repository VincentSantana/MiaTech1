let arreglo = ['html', 'css', 'js', 'php', 'java'];

// se ve todo el array
console.log(arreglo);

// elegir un elemento del array
console.log(arreglo[2]);
console.log(arreglo[0]);
console.log(arreglo[4]);

// reemplazar un elemento al array
arreglo[2] = 'python';
console.log(arreglo);

// agregar un elemento al array
arreglo.push('c#');
console.log(arreglo);

arreglo[6] = 'c++'; //otra forma de agregar un elemento al array
console.log(arreglo);

// eliminar un elemento del array
arreglo.pop();
console.log(arreglo);

arreglo.shift(); // elimina el primer elemento del array
console.log(arreglo);

// agregar un elemento al inicio del array
arreglo.unshift('c++');
console.log(arreglo);

// recorrer un array
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
};

// recorrer un array con forEach
arreglo.forEach((elemento) => {
    console.log(elemento);
});

// longitud de un array
console.log(arreglo.length);

// recorrer un array con map
let nuevoArreglo = arreglo.map((elemento) => {
    return elemento;
});
console.log(nuevoArreglo);

// recorrer un array con filter
let nuevoArreglo2 = arreglo.filter((elemento) => {
    return elemento;
});
console.log(nuevoArreglo2);

//array multidimensionales
let arrayMultidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arrayMultidimensional);
console.log(arrayMultidimensional[0][1]);// seleccionar un elemento de un array multidimensional