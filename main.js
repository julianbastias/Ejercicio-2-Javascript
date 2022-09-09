// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// productos.forEach(numero =>{
//     if(numero.id % 2 != 0)
//     console.log(`Pizzas ${numero.nombre}`);
//      });
//      console.log('---------------')

// // 

// let menoresA = () => {
//     if (productos.every((producto) => producto.precio < 600)) {
//         return '--';
//     } else {
//         return 'No existen tales pizzas';
//     }
// };
// console.log(menoresA ())
// console.log('---------------')

// // 

// let imprimirNombre = () =>
//     productos.forEach((producto) =>
//         console.log(`Pizza ${producto.nombre}`)
//         );

//      imprimirNombre(); 
//      console.log('---------------')


// let imprimirPrecio = () =>
//     productos.forEach((producto) =>
//         console.log(`La Pizza cuesta $${producto.precio}`)
// );

//     imprimirPrecio();
//     console.log('---------------')


// let imprimirNombreYPrecio = () =>
//     productos.forEach((producto) =>
//         console.log(`La Pizza ${producto.nombre} sale $${producto.precio}`)
//     );

//     imprimirNombreYPrecio();
//     console.log('---------------')


// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

const productos = [
    {
        id: 1,
        nombre:'Muzzarella',
        ingredientes: ['Salsa', 'Muzzarella', 'Aceitunas'],
        precio: 700,
    },
    {
        id: 2,
        nombre: 'Calabrese',
        ingredientes: ['Salsa', 'Muzzarella', 'Salamin', 'Aceitunas'],
        precio: 800,
    },
    {
        id: 3,
        nombre: '4 Quesos',
        ingredientes: ['Salsa', 'Muzzarella', 'Brie', 'Gruyere', 'Roquefort', 'Aceitunas'],
        precio: 850,
    },
    {
        id: 4,
        nombre: 'Del Mal',
        ingredientes: ['Salsa', 'Muzzarella', 'Anana', 'Cerezas'],
        precio: 870,
    },
    {
        id: 5,
        nombre: 'Fugazza',
        ingredientes: ['Salsa', 'Muzzarella', 'Cebolla, Mucha Cebolla', 'Aceitunas'],
        precio: 870,
    },
    {
        id: 6,
        nombre: 'Pizzalomo',
        ingredientes: ['Salsa', 'Muzzarella', 'Lomo Veteado', 'Mayo Casera', 'Lechuga', 'Tomate'],
        precio: 1400,
    },
];


const form = document.getElementById('form');
const numberId = document.getElementById('number');
const pizzaContainer = document.getElementById('pizzacontainer');
const pizzaTipo = document.getElementById('pizzatipo');
const precioPizza = document.getElementById('pizzaprecio');


const renderPizzas = (e) => {
	e.preventDefault();
	const numberValue = numberId.value;
	if (!isEmpty(numberValue)) {
		alert('No ha ingresado ningun valor');
		return;
	} else if (pizzaSearch(productos) !== undefined) {
		pizzaTipo.textContent = `La pizza de ${pizzaSearch(productos).nombre} `;
		precioPizza.textContent = `Tiene un precio de: $ ${
			pizzaSearch(productos).precio
		}`;
	} else if (pizzaSearch(productos) == undefined) {
		pizzaTipo.textContent = `No hay pizzas con ese numero`;
		precioPizza.textContent = ``;
		return;
	}
};

const isEmpty = (value) => (value === '' ? false : true);

const pizzaSearch = (p) => {
	const valor = numberId.value;
	const search = p.find((productos) => pizza.id == valor);
	return search;
};



if (!isEmpty(numberValue)) {
	alert('el campo está vacio');
	return;
} else if (pizzaSearch(productos) !== undefined) {
	pizzaTipo.textContent = `La pizza de ${pizzaSearch(productos).nombre} `;
	precioPizza.textContent = `Tiene un precio de: $ ${
		pizzaSearch(productos).precio
	}`;
} else if (pizzaSearch(productos) == undefined) {
	pizzaTipo.textContent = `No hay pizzas con ese numero`;
	precioPizza.textContent = ``;
	return;
}

const init = () => {
	form.addEventListener('submit', renderPizzas);
	form.reset();
};

init();
