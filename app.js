"use strict";

/* ============================================================
   KURO LABS - app.js
   Todo el JavaScript de la web esta en este unico archivo.
   Se encarga de 9 cosas (cada una tiene su seccion abajo):

     1. La cabecera cambia de aspecto al bajar por la pagina.
     2. El menu hamburguesa se abre y se cierra en el movil.
     3. Las tarjetas de producto abren una ventana (modal).
     4. Las miniaturas de la galeria se marcan al hacer clic.
     5. El footer muestra siempre el año actual.
     6. Tema claro y oscuro con preferencia guardada.
     7. Carrito de ejemplo, cantidades y total.
     8. Filtros combinados del catálogo.
     9. Formulario con validación, sin envío real.

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
     Los diseños tienen nombres descriptivos y precios ficticios.
     Tenerlos aqui en un objeto (y no escritos a mano en el JS
     del modal) permite rellenarlos despues sin tocar el HTML:
     basta cambiar el texto de "nombre" y "etiqueta" de cada numero. */
  // Datos de DEMOSTRACIÓN: no son precios ni colecciones oficiales.
  const productos = {
    1: { etiqueta: "ONI / 01", nombre: "Samurái", descripcion: "Diseño conceptual con dos espadas.", imagen: "1-samurai.webp", precio: 6500, coleccion: "Armadura" },
    2: { etiqueta: "ONI / 02", nombre: "Oni con maza", descripcion: "Diseño conceptual con armadura pesada y maza.", imagen: "2-maza.webp", precio: 8500, coleccion: "Armadura" },
    3: { etiqueta: "ONI / 03", nombre: "Ninja", descripcion: "Diseño conceptual con katana y capa.", imagen: "3-ninja.webp", precio: 4500, coleccion: "Sigilo" },
    4: { etiqueta: "ONI / 04", nombre: "Señor de guerra", descripcion: "Diseño conceptual con arma de asta.", imagen: "4-senor-guerra.webp", precio: 9500, coleccion: "Armadura" }
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
  let ultimoBotonProducto;
  const abrirModalProducto = (idProducto) => {
    const producto = productos[idProducto];

    /* Si falta el producto o algun elemento del modal, salimos
       sin hacer nada en vez de romper la pagina con un error. */
    if (!producto || !modal || !etiquetaModal || !tituloModal) {
      return;
    }

    etiquetaModal.textContent = producto.etiqueta;
    tituloModal.textContent = producto.nombre;
    document.querySelector("#modal-foto").src = producto.imagen;
    document.querySelector("#modal-foto").alt = producto.nombre + ": diseño conceptual en resina gris";
    document.querySelector("#modal-descripcion").textContent = producto.descripcion;
    document.querySelector("#modal-precio").textContent = formatoEuros(producto.precio) + " / precio ficticio";
    document.querySelector("#anadir-modal").dataset.anadir = idProducto;
    ultimoBotonProducto = document.activeElement;

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
    if (ultimoBotonProducto) ultimoBotonProducto.focus();
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

  // El foco no debe escapar a la página de detrás del modal.
  modal?.addEventListener("keydown", (evento) => {
    if (evento.key !== "Tab") return;
    const controles = [...modal.querySelectorAll("button, a[href], input, select, textarea")];
    const primero = controles[0];
    const ultimo = controles[controles.length - 1];
    if (evento.shiftKey && document.activeElement === primero) { evento.preventDefault(); ultimo.focus(); }
    else if (!evento.shiftKey && document.activeElement === ultimo) { evento.preventDefault(); primero.focus(); }
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

  /* ---------- 6. Tema claro y oscuro ----------
     Guardamos solo la preferencia. Si localStorage está bloqueado,
     el cambio sigue funcionando durante esta visita. */
  const botonTema = document.querySelector("#boton-tema");
  const leerGuardado = (clave) => {
    try { return localStorage.getItem(clave); } catch (error) { return null; }
  };
  const guardar = (clave, valor) => {
    try { localStorage.setItem(clave, valor); } catch (error) { /* Sin persistencia, pero la web funciona. */ }
  };
  const actualizarTema = () => {
    const esClaro = document.documentElement.dataset.tema === "claro";
    botonTema.textContent = esClaro ? "Oscuro ◑" : "Claro ◐";
    botonTema.setAttribute("aria-pressed", String(esClaro));
    botonTema.setAttribute("aria-label", esClaro ? "Activar modo oscuro" : "Activar modo claro");
  };
  if (botonTema) {
    actualizarTema();
    botonTema.addEventListener("click", () => {
      const tema = document.documentElement.dataset.tema === "claro" ? "oscuro" : "claro";
      document.documentElement.dataset.tema = tema;
      guardar("kurolabs-tema", tema);
      actualizarTema();
    });
  }

  /* ---------- 7. Carrito de ejemplo ----------
     El carrito solo guarda ids y cantidades. Nombres y precios
     salen de productos: no confiamos en precios del almacenamiento.
     Usamos céntimos enteros para evitar errores de decimales. */
  const ventanaCarrito = document.querySelector("#carrito");
  const lineasCarrito = document.querySelector("#lineas-carrito");
  const contadorCarrito = document.querySelector("#contador-carrito");
  const totalCarrito = document.querySelector("#total-carrito");
  const botonAbrirCarrito = document.querySelector("#abrir-carrito");
  const avisoCarrito = document.querySelector("#aviso-carrito");
  const botonVaciarCarrito = document.querySelector("#vaciar-carrito");
  const formatoEuros = (centimos) => (centimos / 100).toLocaleString("es-ES", { style: "currency", currency: "EUR" });
  let cesta = {};
  let temporizadorAviso;
  const recuperarCesta = () => {
    cesta = {};
    try {
      const guardada = JSON.parse(leerGuardado("kurolabs-cesta") || "{}");
      if (!guardada || typeof guardada !== "object" || Array.isArray(guardada)) return;
      Object.entries(guardada).forEach(([id, cantidad]) => {
        if (productos[id] && Number.isInteger(cantidad) && cantidad > 0) cesta[id] = Math.min(cantidad, 99);
      });
    } catch (error) { /* Un dato dañado no debe romper la página. */ }
  };
  const avisar = (texto) => {
    clearTimeout(temporizadorAviso);
    avisoCarrito.textContent = texto;
    temporizadorAviso = setTimeout(() => { avisoCarrito.textContent = ""; }, 3000);
  };
  const dibujarCesta = () => {
    let unidades = 0;
    let total = 0;
    lineasCarrito.replaceChildren();
    Object.entries(cesta).forEach(([id, cantidad]) => {
      const producto = productos[id];
      unidades += cantidad;
      total += producto.precio * cantidad;
      const linea = document.createElement("article");
      linea.className = "linea-carrito";
      /* Esta plantilla usa SOLO nuestro catálogo fijo, nunca datos
         escritos por un visitante. El formulario usa textContent. */
      linea.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}"><div><h3>${producto.nombre}</h3><p class="datos-linea">${formatoEuros(producto.precio)} / ud. · ${formatoEuros(producto.precio * cantidad)}</p><div class="controles-cantidad"><button class="boton-secundario" type="button" data-cambiar="${id}" data-paso="-1" aria-label="Restar una unidad de ${producto.nombre}">−</button><span aria-label="Cantidad">${cantidad}</span><button class="boton-secundario" type="button" data-cambiar="${id}" data-paso="1" aria-label="Añadir una unidad de ${producto.nombre}" ${cantidad >= 99 ? "disabled" : ""}>+</button><button class="boton-secundario" type="button" data-quitar="${id}" aria-label="Quitar ${producto.nombre} de la cesta">Quitar</button></div></div>`;
      lineasCarrito.append(linea);
    });
    if (!unidades) {
      const vacio = document.createElement("p");
      vacio.className = "nota-demo";
      vacio.textContent = "Tu cesta está vacía. Añade un diseño desde el catálogo.";
      lineasCarrito.append(vacio);
    }
    contadorCarrito.textContent = unidades;
    botonAbrirCarrito.setAttribute("aria-label", `Abrir carrito, ${unidades} artículos`);
    totalCarrito.textContent = formatoEuros(total);
    botonVaciarCarrito.disabled = unidades === 0;
  };
  const guardarCesta = () => {
    guardar("kurolabs-cesta", JSON.stringify(cesta));
    dibujarCesta();
  };
  const anadirProducto = (id) => {
    if (!productos[id]) return;
    if ((cesta[id] || 0) >= 99) { avisar("Máximo de 99 unidades por diseño."); return; }
    cesta[id] = (cesta[id] || 0) + 1;
    guardarCesta();
    avisar(`${productos[id].nombre} añadido a tu cesta`);
  };
  if (ventanaCarrito) {
    recuperarCesta();
    dibujarCesta();
    document.querySelectorAll("[data-anadir]").forEach((boton) => {
      boton.addEventListener("click", () => anadirProducto(boton.dataset.anadir));
    });
    const botonAnadirModal = document.querySelector("#anadir-modal");
    if (botonAnadirModal) botonAnadirModal.addEventListener("click", () => anadirProducto(botonAnadirModal.dataset.anadir));
    botonAbrirCarrito.addEventListener("click", () => {
      cerrarMenu();
      cerrarModalProducto();
      ventanaCarrito.showModal();
      document.body.classList.add("modal-abierto");
    });
    document.querySelector("#cerrar-carrito").addEventListener("click", () => ventanaCarrito.close());
    ventanaCarrito.addEventListener("close", () => {
      document.body.classList.remove("modal-abierto");
      botonAbrirCarrito.focus();
    });
    /* Al pulsar el fondo cerramos; dentro del recuadro no.
       Escape ya lo gestiona dialog de forma nativa. */
    ventanaCarrito.addEventListener("click", (evento) => {
      const limites = ventanaCarrito.getBoundingClientRect();
      if (evento.target === ventanaCarrito && (evento.clientX < limites.left || evento.clientX > limites.right || evento.clientY < limites.top || evento.clientY > limites.bottom)) ventanaCarrito.close();
    });
    lineasCarrito.addEventListener("click", (evento) => {
      const boton = evento.target.closest("button");
      if (!boton) return;
      const id = boton.dataset.cambiar || boton.dataset.quitar;
      if (!productos[id] || !cesta[id]) return;
      if (boton.dataset.quitar) delete cesta[id];
      else {
        cesta[id] = Math.min(99, cesta[id] + Number(boton.dataset.paso));
        if (cesta[id] <= 0) delete cesta[id];
      }
      guardarCesta();
      /* Rehacer la lista destruye el botón pulsado. Devolvemos el
         foco a su sustituto para no perder la posición con teclado. */
      const sustituto = lineasCarrito.querySelector(`[data-cambiar="${id}"][data-paso="${boton.dataset.paso}"]`);
      (sustituto || document.querySelector("#cerrar-carrito")).focus();
    });
    botonVaciarCarrito.addEventListener("click", () => {
      cesta = {};
      guardarCesta();
      document.querySelector("#cerrar-carrito").focus();
    });
    /* Si tienes dos pestañas abiertas, se actualizan entre ellas. */
    window.addEventListener("storage", (evento) => {
      if (evento.key === "kurolabs-cesta") { recuperarCesta(); dibujarCesta(); }
    });
  }

  /* ---------- 8. Filtros combinados ----------
     Ambos deben coincidir (&&). hidden conserva las tarjetas y
     sus botones, así no hay que reconstruirlas al cambiar filtros. */
  const filtroColeccion = document.querySelector("#filtro-coleccion");
  const filtroPrecio = document.querySelector("#filtro-precio");
  if (filtroColeccion && filtroPrecio) {
    const filtrar = () => {
      let visibles = 0;
      document.querySelectorAll("[data-ficha]").forEach((tarjeta) => {
        const producto = productos[tarjeta.dataset.ficha];
        const coincideColeccion = filtroColeccion.value === "todas" || producto.coleccion === filtroColeccion.value;
        const coincidePrecio = filtroPrecio.value === "todos" || producto.precio <= Number(filtroPrecio.value) * 100;
        tarjeta.hidden = !(coincideColeccion && coincidePrecio);
        if (!tarjeta.hidden) visibles++;
      });
      document.querySelector("#resultado-filtros").textContent = `${visibles} de 4 diseños de ejemplo`;
      document.querySelector("#sin-resultados").hidden = visibles !== 0;
    };
    filtroColeccion.addEventListener("change", filtrar);
    filtroPrecio.addEventListener("change", filtrar);
    document.querySelector("#restablecer-filtros").addEventListener("click", () => {
      filtroColeccion.value = "todas";
      filtroPrecio.value = "todos";
      filtrar();
    });
    filtrar();
  }

  /* ---------- 9. Validación del formulario ----------
     preventDefault impide que la página se recargue. Esto NO
     envía correos: haría falta un servidor o servicio de formularios.
     No guardamos datos personales en localStorage. */
  const formularioContacto = document.querySelector("#formulario-contacto");
  if (formularioContacto) {
    const nombreContacto = document.querySelector("#nombre-contacto");
    const correoContacto = document.querySelector("#correo-contacto");
    const mensajeContacto = document.querySelector("#mensaje-contacto");
    const estadoFormulario = document.querySelector("#estado-formulario");
    const campos = [nombreContacto, correoContacto, mensajeContacto];
    const validarCampo = (campo) => {
      const valor = campo.value.trim();
      let error = "";
      if (!valor) error = "Este campo es obligatorio.";
      else if (campo === nombreContacto && valor.length < 2) error = "Escribe al menos 2 caracteres.";
      else if (campo === correoContacto && (!campo.validity.valid || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor))) error = "Escribe un email válido, por ejemplo nombre@dominio.com.";
      else if (campo === mensajeContacto && valor.length < 10) error = "Escribe un mensaje de al menos 10 caracteres.";
      campo.setAttribute("aria-invalid", String(Boolean(error)));
      document.querySelector(`#${campo.getAttribute("aria-describedby").split(" ")[0]}`).textContent = error;
      return !error;
    };
    campos.forEach((campo) => {
      campo.addEventListener("input", () => {
        estadoFormulario.textContent = "";
        if (campo.hasAttribute("aria-invalid")) validarCampo(campo);
      });
    });
    formularioContacto.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const resultados = campos.map(validarCampo);
      const primerError = resultados.indexOf(false);
      if (primerError !== -1) {
        estadoFormulario.textContent = "Revisa los campos marcados antes de continuar.";
        campos[primerError].focus();
      } else {
        estadoFormulario.textContent = "Campos correctos. Esta demo no envía el mensaje: falta conectar un servicio de envío.";
      }
    });
  }

});
