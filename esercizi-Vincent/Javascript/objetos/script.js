let usuario = {
    name: 'Vincent',
    surname: 'Santana',
    age: 27,
    estudiante: true,
    hobbies: { //objeto dentro de un objeto
        musica: true,
        fotografia: true
    }
};

console.log(usuario);
console.log(usuario.name);

//agregar propiedades
usuario.ciudad = 'Barahona';
console.log(usuario); 

//modificar propiedades
usuario.estudiante = false;
console.log(usuario);

//eliminar propiedades
delete usuario.estudiante;
console.log(usuario);

//comprobar si una propiedad existe
console.log('ciudad' in usuario);

//obtener todas las propiedades de un objeto
console.log(Object.keys(usuario));

//obtener todos los valores de un objeto
console.log(Object.values(usuario));

//obtener todas las propiedades y valores de un objeto
console.log(Object.entries(usuario));

// metodo de corchetes
console.log(usuario['ciudad']);