document.addEventListener('DOMContentLoaded', () => {
    const portfolioContainer = document.getElementById("tarjetasPortfolio");
    const radioButtons = document.querySelectorAll('input[name="category"]');

    function crearTarjetasPortfolio(proyectos) {
        portfolioContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir nuevas tarjetas
        proyectos.forEach(proyecto => {
            const nuevoProyecto = document.createElement("div");
            nuevoProyecto.classList = "tarjeta lg:w-3/4 md:w-3/4 p-4 w-full mt-8"; // Asegúrate de que la clase 'tarjeta' se añade aquí
            nuevoProyecto.innerHTML = `
            <div class="flex sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div class="rounded-lg h-48 w-96 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src="${proyecto.imagen}">
                </div>
                <div class="p-4 md:w-3/5 sm:mb-0 mb-6">
                    <h2 class="text-xl font-medium title-font text-gray-200 mt-5">${proyecto.titulo}</h2>
                    <h3 class="text-gray-400 text-xs tracking-widest title-font mb-1">${proyecto.categoria}</h3>
                    <p class="text-base leading-relaxed mt-2">${proyecto.description}</p>
                    <div class="buttons flex flex-wrap">
                        ${proyecto.links ? proyecto.links.map(link => `<a href="${link.href}"><button class="btnPortfolio mr-2"><i class='${link.icon}' style='color:#ffffff'></i></button></a>`).join('') : `<a href="${proyecto.link}"><button class="btnPortfolio mr-2"><i class='${proyecto.icon}' style='color:#ffffff'></i></button></a>`}
                    </div>
                </div>
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