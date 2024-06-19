// Llamada a la función move() después de cargar la página
window.onload = function() {
  move();
};


// TYPE EFFECT HOME
window.addEventListener('load', function() {
  var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "Systems Analyst"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    looped: true,
    contentType: 'html',
    cursorChar: '|',
    onStringTyped: function(pos, self) {
      // Mostrar el cursor después de que se haya escrito el texto
      if (pos === self.strings.length - 1) {
        self.cursor.style.display = 'inline-block';
      }
    },
  });
});

function checkScroll() {
  const sections = document.querySelectorAll('.container');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const offset = window.innerHeight * 0.8; // Ajusta este valor según sea necesario

    if (rect.top < offset) {
      section.classList.add('appear');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll); // Para animar los elementos que ya están en la pantalla al cargar la página

// // ======== BODY BACKGROUND DARK
// document.getElementById('colorSwitch').addEventListener('change', function() {
//   if (this.checked) {
//     // Si el interruptor está activado y la clase light-mode no está presente, la agregamos
//     if (!document.body.classList.contains('light-mode')) {
//       document.body.classList.add('light-mode');
//     }
//   } else {
//     // Si el interruptor está desactivado, eliminamos la clase light-mode si está presente
//     if (document.body.classList.contains('light-mode')) {
//       document.body.classList.remove('light-mode');
//     }
//   }
// });



// --------- SWIPER ----------
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-hero', {
        // Optional parameters
        slidesPerView: "auto",
        breakpoints: {
          // cuando la pantalla tenga 640px o menos
          1295: {
            slidesPerView: 4, // En pantallas pequeñas, se usa 'auto'
          },
        },
        spaceBetween: 30,
        slidesPerGroupAuto: 1,

        direction: "horizontal",
        // loop: true,
        allowTouchMove: true,
        // effect: "coverflow",
        autoplay: {
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          // type: "progressbar"
          clickable: true,
          dynamicBullets: true
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },


        debugger: true, // Activa el modo de depuración
        // And if we need scrollbar
        // scrollbar: {
        //   el: ".swiper-scrollbar",
        //   draggable: true,
        // },
  });    
});

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiperSkills', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroupAuto: 1,

        direction: "horizontal",
        loop: true,
        allowTouchMove: true,
        // effect: "coverflow",
        autoplay: {
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  });    
});




function moveImage() {
  const img = document.getElementById('img-home');
  let offsetX = 0;
  let offsetY = 0;
  let directionX = 1;
  let directionY = 1;

  function animate() {
    // Actualizar la posición horizontal y vertical
    offsetX += directionX * 0.2;;
    offsetY += directionY * 0.2;;

    // Aplicar transformaciones para mover la imagen
    img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    // Cambiar la dirección cuando alcanza ciertos límites
    if (offsetX <= -10 || offsetX >= 10) {
      directionX = -directionX;
    }
    if (offsetY <= -10 || offsetY >= 10) {
      directionY = -directionY;
    }

    // Llamar a la función de animación de nuevo en el siguiente cuadro de animación
    requestAnimationFrame(animate);
  }

  // Iniciar la animación
  animate();
}

// Llamar a la función cuando se cargue el contenido de la página
window.addEventListener('load', moveImage);


// Media query para header
let menuList = document.getElementById("menuList");
let menuIcon = document.querySelector(".menu-icon i");

menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "350px";
    menuIcon.classList.remove('bx-menu');
    menuIcon.classList.add('bx-x');
  } else {
    menuList.style.maxHeight = "0px";
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.add('bx-menu');
  }
}


// Función para cargar el contenido de un archivo HTML en un contenedor específico
function loadSectionIntoContainer(containerId, htmlFilePath) {
  const container = document.getElementById(containerId);
  fetch(htmlFilePath)
      .then(response => response.text())
      .then(html => {
          // Crear un nuevo contenedor div
          const newContainer = document.createElement('div');
          // Establecer el contenido HTML dentro del nuevo contenedor
          container.insertAdjacentHTML('beforeend', html);
          // Agregar el nuevo contenedor al contenedor principal
          container.appendChild(newContainer);
          // Si necesitas inicializar algún script después de cargar el HTML, puedes hacerlo aquí
      })
      .catch(error => console.error('Error loading section:', error));
}

loadSectionIntoContainer('home', 'home.html');
loadSectionIntoContainer('about-container', 'about.html');



// LIGHTBOX2
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true,
  'albumLabel': "Image 1% de 2%"
})

