document.addEventListener('DOMContentLoaded', () => {
    const portfolioContainer = document.getElementById("tarjetasPortfolio");
    const radioButtons = document.querySelectorAll('input[name="category"]');

    function crearTarjetasPortfolio(proyectos) {
        portfolioContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir nuevas tarjetas
        proyectos.forEach(proyecto => {
            const nuevoProyecto = document.createElement("div");
            nuevoProyecto.classList = "tarjeta lg:w-1/4 md:w-1/2 p-4 w-full"; // Asegúrate de que la clase 'tarjeta' se añade aquí
            nuevoProyecto.innerHTML = `
                <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="${proyecto.imagen}">
                </a>
                <div class="mt-4">
                    <h3 class="text-gray-400 text-xs tracking-widest title-font mb-1">${proyecto.categoria}</h3>
                    <h2 class="text-gray-100 title-font text-lg font-medium">${proyecto.titulo}</h2>
                </div>
                <div class="buttons flex flex-wrap">
                    ${proyecto.links ? proyecto.links.map(link => `<a href="${link.href}"><button class="btnPortfolio mr-2"><i class='${link.icon}' style='color:#ffffff'></i></button></a>`).join('') : `<a href="${proyecto.link}"><button class="btnPortfolio mr-2"><i class='${proyecto.icon}' style='color:#ffffff'></i></button></a>`}
                </div>
            `;
            portfolioContainer.appendChild(nuevoProyecto);
        });
    }

    function filtrarTarjetasPorCategoria(categoria) {
        const tarjetas = document.querySelectorAll('.tarjeta');
        console.log("Categoría seleccionada:", categoria);
        tarjetas.forEach(tarjeta => {
            const categoriaTarjeta = tarjeta.querySelector('.text-gray-400').textContent.trim().toLowerCase();
            if (categoria.toLowerCase() === categoriaTarjeta) {
                tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con la categoría seleccionada
            } else {
                tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con la categoría seleccionada
            }
        });
    }

    // Evento para manejar el cambio de categoría
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            filtrarTarjetasPorCategoria(event.target.value);
        });
    });

    crearTarjetasPortfolio(proyectos);
    filtrarTarjetasPorCategoria('Proyect'); //de comienzo se muestran primero las tarjetas con categoria 'proyect'
});