"use strict";

/* ============================================================
   KURO LABS - app.js
   Todo el JavaScript de la web esta en este unico archivo.
   Se encarga de 5 cosas (cada una tiene su seccion abajo):

     1. La cabecera cambia de aspecto al bajar por la pagina.
     2. El menu hamburguesa se abre y se cierra en el movil.
     3. Las tarjetas de producto abren una ventana (modal).
     4. Las miniaturas de la galeria se marcan al hacer clic.
     5. El footer muestra siempre el año actual.

   Las clases y los ids estan en castellano y coinciden con
   los del HTML y del CSS (por ejemplo ".cabecera" es la
   cabecera que tambien veras en style.css).
   ============================================================ */

/* "DOMContentLoaded" espera a que el HTML este cargado antes de
   ejecutar nada. Sin esto, el script podria buscar elementos que
   todavia no existen y fallar. */
document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Referencias a los elementos del HTML ----------
     querySelector busca UN elemento (como el buscador del CSS:
     ".clase" para clases, "#id" para ids).
     querySelectorAll busca TODOS los que coincidan y devuelve
     una lista. Guardamos todo al principio para no repetir
     las busquedas cada vez que hacemos algo. */
  const cabecera = document.querySelector(".cabecera");
  const botonMenu = document.querySelector(".boton-menu");
  const navPrincipal = document.querySelector(".nav-principal");
  const enlacesNav = document.querySelectorAll(".nav-principal a");
  const botonesProducto = document.querySelectorAll(".boton-tarjeta");
  const modal = document.querySelector("#modal-producto");
  const tituloModal = document.querySelector("#modal-titulo");
  const etiquetaModal = document.querySelector("#modal-etiqueta");
  const botonesCerrarModal = document.querySelectorAll("[data-cerrar-modal]");
  const miniaturas = document.querySelectorAll(".miniatura");
  const anioActual = document.querySelector("#anio-actual");

  /* ---------- Datos de los productos ----------
     Los productos todavia no tienen nombre ni precio reales.
     Tenerlos aqui en un objeto (y no escritos a mano en el JS
     del modal) permite rellenarlos despues sin tocar el HTML:
     basta cambiar el texto de "name" y "label" de cada numero. */
  const productos = {
    1: { label: "PRODUCT / 01", name: "Nombre pendiente" },
    2: { label: "PRODUCT / 02", name: "Nombre pendiente" },
    3: { label: "PRODUCT / 03", name: "Nombre pendiente" },
    4: { label: "PRODUCT / 04", name: "Nombre pendiente" },
    5: { label: "PRODUCT / 05", name: "Nombre pendiente" },
    6: { label: "PRODUCT / 06", name: "Nombre pendiente" }
  };

  /* ---------- 1. Cabecera al hacer scroll ----------
     Al bajar mas de 20 píxeles añadimos la clase "con-scroll",
     y el CSS (busca ".cabecera.con-scroll" en style.css) le pone
     fondo oscuro y desenfoque. Asi el JS solo decide CUANDO y
     el CSS decide COMO se ve. Es la forma mas sencilla de
     trabajar: el JS cambia clases, no estilos. */
  const actualizarCabecera = () => {
    if (!cabecera) return; // si la pagina no tiene cabecera, no hacemos nada
    if (window.scrollY > 20) {
      cabecera.classList.add("con-scroll");
    } else {
      cabecera.classList.remove("con-scroll");
    }
  };

  actualizarCabecera(); // por si la pagina se carga ya bajada
  /* { passive: true } le dice al navegador que este listener no
     va a cancelar el scroll, y asi el scroll va mas fluido. */
  window.addEventListener("scroll", actualizarCabecera, { passive: true });

  /* ---------- 2. Menu hamburguesa del movil ----------
     El CSS esconde el menu en pantallas pequeñas y solo lo
     muestra cuando el nav tiene la clase "abierto". Aqui solo
     ponemos y quitamos esa clase.
     classList.toggle("abierto") la añade si no esta y la quita
     si esta, y devuelve true/false segun como haya quedado. */
  const cerrarMenu = () => {
    if (!navPrincipal || !botonMenu) return;
    navPrincipal.classList.remove("abierto");
    botonMenu.classList.remove("abierto");
    /* aria-expanded y aria-label informan a los lectores de
       pantalla (accesibilidad) de si el menu esta abierto. */
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");
  };

  if (botonMenu && navPrincipal) {
    botonMenu.addEventListener("click", () => {
      const estaAbierto = navPrincipal.classList.toggle("abierto");

      /* El boton tambien cambia de clase para que el CSS
         convierta las 3 rayas en una X. */
      botonMenu.classList.toggle("abierto", estaAbierto);
      botonMenu.setAttribute("aria-expanded", String(estaAbierto));
      botonMenu.setAttribute(
        "aria-label",
        estaAbierto ? "Cerrar menú" : "Abrir menú"
      );
    });
  }

  /* Al tocar un enlace del menu, cerramos el menu para que no
     tape la pagina a la que acabamos de ir. */
  enlacesNav.forEach((enlace) => {
    enlace.addEventListener("click", cerrarMenu);
  });

  /* ---------- 3. Ventana (modal) de cada producto ----------
     Cada tarjeta del catalogo es un boton con data-producto="1",
     "2"... Ese numero nos dice que producto enseñar en el modal. */
  const abrirModalProducto = (idProducto) => {
    const producto = productos[idProducto];

    /* Si falta el producto o algun elemento del modal, salimos
       sin hacer nada en vez de romper la pagina con un error. */
    if (!producto || !modal || !etiquetaModal || !tituloModal) {
      return;
    }

    etiquetaModal.textContent = producto.label;
    tituloModal.textContent = producto.name;

    /* La clase "abierto" hace visible el modal (mirar ".modal.abierto"
       en el CSS). "modal-abierto" en el body quita el scroll de
       fondo para que solo se mueva la ventana. */
    modal.classList.add("abierto");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-abierto");

    /* Llevamos el foco al boton de cerrar para que quien navega
       con teclado pueda salir de la ventana facilmente. */
    const botonCerrar = modal.querySelector(".modal-cerrar");
    if (botonCerrar) {
      botonCerrar.focus();
    }
  };

  const cerrarModalProducto = () => {
    if (!modal) return;
    modal.classList.remove("abierto");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-abierto");
  };

  /* dataset.producto lee el atributo data-producto del boton
     (el HTML tiene data-producto="1", "2"...). */
  botonesProducto.forEach((boton) => {
    boton.addEventListener("click", () => {
      abrirModalProducto(boton.dataset.producto);
    });
  });

  /* Todo lo que lleva data-cerrar-modal cierra la ventana:
     la X de arriba y el fondo oscuro de detras. */
  botonesCerrarModal.forEach((boton) => {
    boton.addEventListener("click", cerrarModalProducto);
  });

  /* La tecla Escape tambien cierra la ventana, como en
     cualquier programa. */
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && modal && modal.classList.contains("abierto")) {
      cerrarModalProducto();
    }
  });

  /* ---------- 4. Miniaturas de la galeria ----------
     Preparado para cuando el detalle de producto tenga varias
     fotos. De momento solo marca la miniatura elegida con la
     clase "activa" (el CSS le pone el borde rojo). */
  miniaturas.forEach((miniatura) => {
    miniatura.addEventListener("click", () => {
      /* Quitamos la marca a todas antes de marcar la nueva,
         para que nunca haya dos activas a la vez. */
      miniaturas.forEach((elemento) => {
        elemento.classList.remove("activa");
      });
      miniatura.classList.add("activa");
    });
  });

  /* ---------- 5. Año del footer ----------
     Asi el copyright se actualiza solo cada año y no hay que
     acordarse de cambiarlo a mano. */
  if (anioActual) {
    anioActual.textContent = new Date().getFullYear();
  }
});
