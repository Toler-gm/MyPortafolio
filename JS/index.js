let btnmenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
let enlaces = menu.getElementsByTagName('a');

btnmenu.addEventListener('click', function() {
    'use strict';
    menu.classList.toggle('mostrar');
});

document.addEventListener('click', function(event) {
    'use strict';
    const target = event.target;
    const isClickInsideMenu = menu.contains(target) || btnmenu.contains(target);
    
    if (!isClickInsideMenu) {
        menu.classList.remove('mostrar');
    }
});

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', function() {
        menu.classList.remove('mostrar');
    });
}


/*MAQUINA DE ESCRIBIR*/

const typedTextSpan = document.querySelector(".type-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Me llamo Josue Crispin", "Soy un desarrollador web", "Me gusta programar", "Aprendo constantemente"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 3000;

let textArrayIndex = 0;
let charIndex = 0;

let isDeleting = false; // Nuevo flag para controlar el borrado del texto

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    // Establecer el flag de borrado en verdadero
    isDeleting = true;
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (isDeleting && charIndex > 0) {
    if (cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    // Pasar al siguiente índice del array de textos
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    isDeleting = false; // Restablecer el flag de borrado a falso
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// barra scroll

window.addEventListener('scroll', function() {
    var menu = document.getElementById('casa');
  
    if (window.scrollY > 0) {
      menu.classList.add('header-background');
    } else {
      menu.classList.remove('header-background');
    }
  });
  
//   fin barra scroll

// slider automatico
// var slider = document.querySelector('.slider');
// var sliderImages = document.querySelectorAll('.slider img');
// var prevBtn = document.querySelector('.prev-btn');
// var nextBtn = document.querySelector('.next-btn');
// var currentImageIndex = 0;
// var startX;
// var distX = 0;
// var intervalId;

// function showImage(index) {
//   // Oculta todas las imágenes
//   for (var i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].classList.remove('active');
//   }

//   // Muestra la imagen actual
//   sliderImages[index].classList.add('active');
// }

// function nextImage() {
//   currentImageIndex++;
//   if (currentImageIndex === sliderImages.length) {
//     currentImageIndex = 0;
//   }
//   showImage(currentImageIndex);

//   resetSliderInterval(); // Reiniciar el intervalo del slider después de cambiar de imagen
// }

// function prevImage() {
//   currentImageIndex--;
//   if (currentImageIndex < 0) {
//     currentImageIndex = sliderImages.length - 1;
//   }
//   showImage(currentImageIndex);

//   resetSliderInterval(); // Reiniciar el intervalo del slider después de cambiar de imagen
// }

// function startSlider() {
//   intervalId = setInterval(nextImage, 3000); // Cambiar de imagen cada 3 segundos (3000 ms)
// }

// function stopSlider() {
//   clearInterval(intervalId);
// }

// function handleTouchStart(event) {
//   startX = event.touches[0].clientX;
// }

// function handleTouchMove(event) {
//   if (!startX) return;

//   var currentX = event.touches[0].clientX;
//   distX = startX - currentX;
// }

// function handleTouchEnd() {
//   if (distX > 50) {
//     nextImage();
//   } else if (distX < -50) {
//     prevImage();
//   }

//   startX = null;
//   distX = 0;

//   resetSliderInterval(); // Reiniciar el slider automático después de deslizar el mouse
// }

// function resetSliderInterval() {
//   stopSlider();
//   startSlider();
// }

// prevBtn.addEventListener('click', prevImage);
// nextBtn.addEventListener('click', nextImage);
// slider.addEventListener('touchstart', handleTouchStart);
// slider.addEventListener('touchmove', handleTouchMove);
// slider.addEventListener('touchend', handleTouchEnd);

// // Mostrar la primera imagen inicialmente
// showImage(currentImageIndex);

// // Iniciar el slider automático
// startSlider();


// // menu barra

// document.addEventListener('DOMContentLoaded', function() {
//     // Obtener todos los enlaces del menú
//     var menuLinks = document.querySelectorAll('.header_nav ul li a');

//     // Función para actualizar la clase activa en el menú
//     function updateActiveLink() {
//         var sections = document.querySelectorAll('section'); // Obtener todas las secciones
//         var scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Obtener la posición de desplazamiento actual

//         sections.forEach(function(section) {
//             var sectionTop = section.offsetTop;
//             var sectionHeight = section.offsetHeight;
//             var sectionId = section.getAttribute('id');

//             // Obtener el enlace correspondiente a la sección
//             var link = document.querySelector('a[href="#' + sectionId + '"]');

//             // Verificar si la sección está visible en la ventana
//             if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
//                 link.classList.add('active'); // Agregar la clase activa al enlace
//             } else {
//                 link.classList.remove('active'); // Remover la clase activa del enlace
//             }
//         });
//     }

//     // Ejecutar la función al cargar la página y al hacer scroll
//     window.addEventListener('load', updateActiveLink);
//     window.addEventListener('scroll', updateActiveLink);

//     // Asignar evento click a cada enlace para desplazarse suavemente a la sección correspondiente
//     menuLinks.forEach(function(link) {
//         link.addEventListener('click', function(e) {
//             e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

//             var targetId = this.getAttribute('href').substring(1); // Obtener el ID de la sección destino

//             // Obtener la posición de la sección destino
//             var targetSection = document.getElementById(targetId);
//             var targetOffsetTop = targetSection.offsetTop;

//             // Desplazarse suavemente hacia la sección destino
//             window.scrollTo({
//                 top: targetOffsetTop,
//                 behavior: 'smooth'
//             });
//         });
//     });
// });
