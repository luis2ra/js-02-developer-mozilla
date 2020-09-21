console.log("Prática del método map()");
// en la pagina se usa "var" para el manejo de variables, se reemplazó por let.

let numbers = [1, 5, 10, 15];
let doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]
console.log(doubles);
console.log(numbers);

numbers = [1, 4, 9];
let roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
console.log(roots);
console.log(numbers);

let demo = [1, 3, 5, 7];
// forma artesanal de copiar un arreglo
let demo_map = demo.map(function(item) {
    return item;
});
console.log(demo);
console.log(demo_map);

console.log("El método map() crea un nuevo arreglo con los resultados de la llamada a la función indicada, aplicados a cada uno de sus elementos");