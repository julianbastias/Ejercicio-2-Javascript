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