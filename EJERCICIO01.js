
var amigos = [{nombre: 'toni', edad: 33,}, {nombre: 'Emi', edad: 25}];

var suma = 0;

for (let i = 0; i < amigos.length; i++) {

    suma = suma + amigos [i].edad;

}

console.log (suma/amigos.length);

