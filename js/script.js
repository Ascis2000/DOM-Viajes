
function inicio(){

	console.clear(); // limpiamos la consola

	let main = document.querySelector("main");
	let section = document.createElement("section");
	section.className ="central";
	
	// *************************** */
	// *************************** */
	// *************************** */
	// insertamos el banner principal
	let h1 = document.createElement("h1");
	let textoH1 = document.createTextNode("Bienvenidos");
	h1.appendChild(textoH1);

	let imgTop = document.createElement("img");
	imgTop.src = './img/banners/1.jpg';  // URL de la imagen
    imgTop.alt = 'Banner Principal';
	imgTop.className ="imagen-central";

	section.appendChild(h1);
	section.appendChild(imgTop);

    const primerHijo = main.firstChild;

    // Insertar el section antes del primer hijo del main
    main.insertBefore(section, primerHijo);

	// *************************** */
	// *************************** */
	// *************************** */
	let arr_cards = [
		{
			clase:'uno', 
			titulo:'Viaje 1', 
			texto:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
			sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
		},
		{
			clase:'dos', 
			titulo:'Viaje 2', 
			texto:`Duis aute irure dolor in reprehenderit in voluptate velit 
			esse cillum dolore eu fugiat nulla pariatur.`
		},
		{
			clase:'tres', 
			titulo:'Viaje 3', 
			texto:`Sed ut perspiciatis unde omnis iste natus error sit 
			voluptatem accusantium doloremque laudantium, totam rem aperiam.`
		},
	];
	// Insertamos los 3 banners
	section = document.createElement("section");
	section.classList.add('central');

	let articulos = document.createElement("div");
	articulos.classList.add('boxArticulos');
	
	h1 = document.createElement("h1");
	textoH1 = document.createTextNode("Recomendamos");
	h1.appendChild(textoH1);
	section.appendChild(h1);

	// realizamos un for
	for (let i = 0; i < arr_cards.length; i++) {

		let box = document.createElement('div');
		box.classList.add('box');

		// Crear el div de la imagen
		let cardImg = document.createElement('div');
		cardImg.classList.add('card-img', arr_cards[i].clase);
		box.appendChild(cardImg);

		// Crear el div "boxTexto"
		const boxTexto = document.createElement('div');
		boxTexto.classList.add('boxTexto');

		// Crear el div para el título
		let tituloDiv = document.createElement('div');
		let tituloTexto = document.createTextNode(arr_cards[i].titulo);
		tituloDiv.appendChild(tituloTexto);
		boxTexto.appendChild(tituloDiv);

		// Crear el div para el texto
		let labelTexto = document.createElement('label');
		labelTexto.classList.add('texto');
		const contenidoLabel = document.createTextNode(arr_cards[i].texto);
		labelTexto.appendChild(contenidoLabel);
		boxTexto.appendChild(labelTexto);

		// Insertamos todo en la capa articulos
		box.appendChild(boxTexto);
		articulos.appendChild(box);
	}
	section.appendChild(articulos);
	main.appendChild(section);

	// Insertamos un selector
	// *************************** */
	// *************************** */
	// *************************** */
	section = document.createElement("section");
	section.classList.add('central');
	
	h1 = document.createElement("h1");
	textoH1 = document.createTextNode("Destinos");
	h1.appendChild(textoH1);
	section.appendChild(h1);

	let ciudadesEspania = [
        {ciudad:"Madrid", valor:"madrid"},
        {ciudad:"Barcelona", valor:"barcelona"},
        {ciudad:"Valencia", valor:"valencia"},
        {ciudad:"Sevilla", valor:"sevilla"},
        {ciudad:"Málaga", valor:"malaga"},
        {ciudad:"Murcia", valor:"murcia"},
        {ciudad:"Córdova", valor:"cordova"},
        {ciudad:"Las Palmas", valor:"lpalmas"},
        {ciudad:"Bilbao", valor:"bilbao"},
        {ciudad:"Lugo", valor:"lugo"}
    ];
	ciudadesEspania.sort((a, b) => a.ciudad.localeCompare(b.ciudad));

	let selectorCiudades = document.createElement("select");
	selectorCiudades.classList.add('ciudades');

	// Añadir opcion inicial seleccionada
    let opcion0 = document.createElement("option");
    opcion0.text = "Selecciona una ciudad";
    opcion0.value = ""; // Deja el value vacío para que no seleccione ninguna ciudad
    opcion0.selected = "selected"; // Que aparezca seleccionado por defecto
    selectorCiudades.add(opcion0);

	ciudadesEspania.forEach(c => {
        let option = document.createElement("option");
        option.text = c.ciudad;
        option.value = c.valor.toLowerCase();
        selectorCiudades.add(option);
    });
	section.appendChild(selectorCiudades);
	main.appendChild(section);
}

inicio();

