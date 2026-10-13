"use strict";

/* ============================================================
   KURO LABS - app.js
   Todo el JavaScript de la web esta en este unico archivo.
   Se encarga de las funciones principales (cada una tiene su seccion abajo):

     1. La cabecera cambia de aspecto al bajar por la pagina.
     2. El menu hamburguesa se abre y se cierra en el movil.
     3. Las tarjetas de producto enlazan a sus propias páginas.
     4. Las miniaturas de la galeria se marcan al hacer clic.
     5. El footer muestra siempre el año actual.
     6. Tema claro y oscuro con preferencia guardada.
     7. Carrito de ejemplo, cantidades y total.
     8. Filtros combinados del catálogo.
     9. Formulario con validación, sin envío real.
    10. Zoom de imágenes accesible.
    11. Aparición de tarjetas al hacer scroll.
    12. Cortina de carga (preloader) que desaparece al cargar.
    13. Favoritos con corazón, página propia y contador.
    14. Valoración con estrellas por figura (demo en localStorage).
    15. (la galería de la ficha es la sección 4).
    16. Cuenta atrás del próximo drop (fecha ficticia).
    Los idiomas se gestionan desde idiomas.js para separar sus textos.

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
  const miniaturas = document.querySelectorAll(".miniatura");
  const anioActual = document.querySelector("#anio-actual");

  /* ---------- Datos de los productos ----------
     Los diseños tienen nombres descriptivos y precios ficticios.
     Tenerlos aqui en un objeto (y no escritos a mano en el JS
     del modal) permite rellenarlos despues sin tocar el HTML:
     basta cambiar el texto de "nombre" y "etiqueta" de cada numero. */
  // Datos de DEMOSTRACIÓN: no son precios ni colecciones oficiales.
  const productos = {
    1: { etiqueta: "ONI / 01", nombre: "Samurái", descripcion: "Diseño conceptual con dos espadas.", imagen: "1-samurai.webp", precio: 6500, coleccion: "Armadura", pagina: "samurai.html" },
    2: { etiqueta: "ONI / 02", nombre: "Oni con maza", descripcion: "Diseño conceptual con armadura pesada y maza.", imagen: "2-maza.webp", precio: 8500, coleccion: "Armadura", pagina: "oni-maza.html" },
    3: { etiqueta: "ONI / 03", nombre: "Ninja", descripcion: "Diseño conceptual con katana y capa.", imagen: "3-ninja.webp", precio: 4500, coleccion: "Sigilo", pagina: "ninja.html" },
    4: { etiqueta: "ONI / 04", nombre: "Señor de guerra", descripcion: "Diseño conceptual con arma de asta.", imagen: "4-senor-guerra.webp", precio: 9500, coleccion: "Armadura", pagina: "senor-guerra.html" },
    // Los ids nuevos no cambian los antiguos: así conservamos las cestas guardadas.
    5: { etiqueta: "ONI / 05", nombre: "Ronin del templo", descripcion: "Diseño conceptual con katana, capa blindada y articulaciones mecánicas.", imagen: "5-ronin-templo.webp", precio: 7500, coleccion: "Cibernética", pagina: "ronin-templo.html" },
    6: { etiqueta: "ONI / 06", nombre: "Oni salvaje", descripcion: "Diseño conceptual con garras, exoesqueleto y guanteletes mecánicos.", imagen: "6-oni-salvaje.webp", precio: 8000, coleccion: "Cibernética", pagina: "oni-salvaje.html" },
    7: { etiqueta: "ONI / 07", nombre: "Sombra del torii", descripcion: "Diseño conceptual con capucha y dos cuchillos cortos.", imagen: "7-sombra-torii.webp", precio: 5500, coleccion: "Sigilo", pagina: "sombra-torii.html" },
    8: { etiqueta: "ONI / 08", nombre: "Titán de hierro", descripcion: "Diseño conceptual con martillo, escudo y armadura mecánica pesada.", imagen: "8-titan-hierro.webp", precio: 10000, coleccion: "Cibernética", pagina: "titan-hierro.html" }
  };

  // Los datos originales permiten cambiar de idioma sin perder los textos españoles.
  const productosOriginales = JSON.parse(JSON.stringify(productos));
  const traducir = (texto) => window.idiomasKuro.traducir(texto);
  const actualizarProductos = () => Object.keys(productos).forEach((id) => {
    productos[id].nombre = traducir(productosOriginales[id].nombre);
    productos[id].descripcion = traducir(productosOriginales[id].descripcion);
  });
  actualizarProductos();
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
    botonMenu.setAttribute("aria-label", traducir("Abrir menú"));
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
        estaAbierto ? traducir("Cerrar menú") : traducir("Abrir menú")
      );
    });
  }

  /* Al tocar un enlace del menu, cerramos el menu para que no
     tape la pagina a la que acabamos de ir. */
  enlacesNav.forEach((enlace) => {
    enlace.addEventListener("click", cerrarMenu);
  });

  /* ---------- 3. Fichas de producto ----------
     Las tarjetas usan enlaces HTML a páginas reales: funcionan con teclado,
     permiten compartir cada figura y siguen navegando aunque JavaScript falle. */

  /* ---------- 4. Galería de vistas de la ficha ----------
     Cada miniatura cambia la foto principal y el botón de ampliar,
     así el zoom siempre abre la vista que estás viendo.
     "data-texto-vista" guarda el nombre de la vista para el alt. */
  const fotoPrincipal = document.querySelector("#foto-principal");
  const botonAmpliar = document.querySelector(".foto-ampliable");
  const galeriaFicha = document.querySelector(".miniaturas-galeria");
  /* Al cambiar de vista hay que actualizar foto, alt y zoom a la vez,
     y dejar marcada solo la miniatura elegida (clase "activa"). */
  const mostrarVista = (miniatura) => {
    if (!fotoPrincipal || !botonAmpliar || !galeriaFicha) return;
    fotoPrincipal.src = miniatura.dataset.vista;
    fotoPrincipal.alt = `${traducir(galeriaFicha.dataset.nombre)} ${traducir(miniatura.dataset.textoVista)}, ${traducir("en resina gris sin pintar")}`;
    botonAmpliar.dataset.ampliar = miniatura.dataset.vista;
    miniaturas.forEach((elemento) => {
      elemento.classList.toggle("activa", elemento === miniatura);
      elemento.setAttribute("aria-pressed", String(elemento === miniatura));
    });
  };
  miniaturas.forEach((miniatura) => {
    miniatura.addEventListener("click", () => mostrarVista(miniatura));
  });
  /* El traductor restaura el alt original al cambiar de idioma: lo
     recomponemos para la vista que esté activa en ese momento. */
  const refrescarAltGaleria = () => {
    const activa = document.querySelector(".miniatura.activa");
    if (activa && fotoPrincipal && galeriaFicha) {
      fotoPrincipal.alt = `${traducir(galeriaFicha.dataset.nombre)} ${traducir(activa.dataset.textoVista)}, ${traducir("en resina gris sin pintar")}`;
    }
  };
  refrescarAltGaleria();

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
    botonTema.textContent = traducir(esClaro ? "Oscuro ◑" : "Claro ◐");
    botonTema.setAttribute("aria-pressed", String(esClaro));
    botonTema.setAttribute("aria-label", traducir(esClaro ? "Activar modo oscuro" : "Activar modo claro"));
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
  const formatoEuros = (centimos) => (centimos / 100).toLocaleString({es: "es-ES", en: "en-IE", eu: "eu-ES"}[window.idiomasKuro.actual()], { style: "currency", currency: "EUR" });
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
      linea.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}"><div><h3>${producto.nombre}</h3><p class="datos-linea">${formatoEuros(producto.precio)} / ${traducir("ud.")} · ${formatoEuros(producto.precio * cantidad)}</p><div class="controles-cantidad"><button class="boton-secundario" type="button" data-cambiar="${id}" data-paso="-1" aria-label="${traducir("Restar una unidad")}: ${producto.nombre}">−</button><span aria-label="${traducir("Cantidad")}">${cantidad}</span><button class="boton-secundario" type="button" data-cambiar="${id}" data-paso="1" aria-label="${traducir("Añadir una unidad")}: ${producto.nombre}" ${cantidad >= 99 ? "disabled" : ""}>+</button><button class="boton-secundario" type="button" data-quitar="${id}" aria-label="${traducir("Quitar")}: ${producto.nombre}">${traducir("Quitar")}</button></div></div>`;
      lineasCarrito.append(linea);
    });
    if (!unidades) {
      const vacio = document.createElement("p");
      vacio.className = "nota-demo";
      vacio.textContent = traducir("Tu cesta está vacía. Añade un diseño desde el catálogo.");
      lineasCarrito.append(vacio);
    }
    contadorCarrito.textContent = unidades;
    botonAbrirCarrito.setAttribute("aria-label", `${traducir("Abrir carrito")}: ${unidades} ${traducir("artículos")}`);
    totalCarrito.textContent = formatoEuros(total);
    botonVaciarCarrito.disabled = unidades === 0;
    window.idiomasKuro.aplicar(lineasCarrito);
  };
  const guardarCesta = () => {
    guardar("kurolabs-cesta", JSON.stringify(cesta));
    dibujarCesta();
  };
  const anadirProducto = (id) => {
    if (!productos[id]) return;
    if ((cesta[id] || 0) >= 99) { avisar(traducir("Máximo de 99 unidades por diseño.")); return; }
    cesta[id] = (cesta[id] || 0) + 1;
    guardarCesta();
    avisar(`${productos[id].nombre}: ${traducir("Añadido a tu cesta")}`);
  };
  if (ventanaCarrito) {
    recuperarCesta();
    dibujarCesta();
    document.querySelectorAll("[data-anadir]").forEach((boton) => {
      boton.addEventListener("click", () => anadirProducto(boton.dataset.anadir));
    });
    botonAbrirCarrito.addEventListener("click", () => {
      cerrarMenu();
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
  const buscadorCatalogo = document.querySelector("#buscador-catalogo");
  const normalizar = (texto) => texto.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let filtrar = () => {};
  if (filtroColeccion && filtroPrecio) {
    filtrar = () => {
      let visibles = 0;
      document.querySelectorAll("[data-ficha]").forEach((tarjeta) => {
        const producto = productos[tarjeta.dataset.ficha];
        const coincideColeccion = filtroColeccion.value === "todas" || producto.coleccion === filtroColeccion.value;
        const coincidePrecio = filtroPrecio.value === "todos" || producto.precio <= Number(filtroPrecio.value) * 100;
        const original = productosOriginales[tarjeta.dataset.ficha];
        const textoBusqueda = [original.nombre, producto.nombre, original.descripcion, traducir(original.descripcion), original.coleccion, traducir(original.coleccion)].join(" ");
        const coincideTexto = normalizar(textoBusqueda).includes(normalizar(buscadorCatalogo.value.trim()));
        tarjeta.hidden = !(coincideColeccion && coincidePrecio && coincideTexto);
        if (!tarjeta.hidden) visibles++;
      });
      document.querySelector("#resultado-filtros").textContent = `${visibles} / ${Object.keys(productos).length} ${traducir("diseños de ejemplo")}`;
      document.querySelector("#sin-resultados").hidden = visibles !== 0;
    };
    buscadorCatalogo.addEventListener("input", filtrar);
    filtroColeccion.addEventListener("change", filtrar);
    filtroPrecio.addEventListener("change", filtrar);
    document.querySelector("#restablecer-filtros").addEventListener("click", () => {
      buscadorCatalogo.value = "";
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
      if (!valor) error = traducir("Este campo es obligatorio.");
      else if (campo === nombreContacto && valor.length < 2) error = traducir("Escribe al menos 2 caracteres.");
      else if (campo === correoContacto && (!campo.validity.valid || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor))) error = traducir("Escribe un email válido, por ejemplo nombre@dominio.com.");
      else if (campo === mensajeContacto && valor.length < 10) error = traducir("Escribe un mensaje de al menos 10 caracteres.");
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
        estadoFormulario.textContent = traducir("Revisa los campos marcados antes de continuar.");
        campos[primerError].focus();
      } else {
        estadoFormulario.textContent = traducir("Campos correctos. Esta demo no envía el mensaje: falta conectar un servicio de envío.");
      }
    });
  }

  /* ---------- 10. Zoom accesible ----------
     Reutilizamos una sola ventana: no duplicamos imágenes ni cambiamos de pestaña.
     showModal deja el fondo inerte y el navegador gestiona Tab y Escape. */
  const visorImagen = document.querySelector("#visor-imagen");
  const imagenVisor = document.querySelector("#imagen-visor");
  let origenVisor;
  document.querySelectorAll("[data-ampliar]").forEach((control) => {
    control.addEventListener("click", (evento) => {
      evento.preventDefault();
      origenVisor = control;
      imagenVisor.src = control.dataset.ampliar;
      imagenVisor.alt = control.querySelector("img").alt;
      visorImagen.showModal();
      document.querySelector("#cerrar-visor").focus();
      document.body.classList.add("modal-abierto");
    });
  });
  document.querySelector("#cerrar-visor").addEventListener("click", () => visorImagen.close());
  visorImagen.addEventListener("click", (evento) => {
    const limites = visorImagen.getBoundingClientRect();
    if (evento.target === visorImagen && (evento.clientX < limites.left || evento.clientX > limites.right || evento.clientY < limites.top || evento.clientY > limites.bottom)) visorImagen.close();
  });
  // Solo hay un control en el visor. Tab permanece en él en ambos sentidos.
  visorImagen.addEventListener("keydown", (evento) => {
    if (evento.key === "Tab") {
      evento.preventDefault();
      document.querySelector("#cerrar-visor").focus();
    }
  });
  visorImagen.addEventListener("close", () => {
    document.body.classList.remove("modal-abierto");
    origenVisor?.focus();
  });

  /* ---------- 11. Aparición al entrar en pantalla ----------
     Sin JS las tarjetas siguen visibles. Solo activamos el efecto si el navegador
     lo permite y la persona no ha pedido reducir movimiento. */
  const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!movimientoReducido.matches && "IntersectionObserver" in window) {
    const observadorTarjetas = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observadorTarjetas.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".tarjeta-producto, .tarjeta-oni, .tarjeta-relacionada").forEach((tarjeta) => {
      tarjeta.classList.add("aparece-scroll");
      observadorTarjetas.observe(tarjeta);
    });
  }

  /* ---------- 12. Cortina de carga (preloader) ----------
     La cortina tapa la página mientras carga. Cuando el navegador
     termina (evento "load") le ponemos la clase "oculta" y el CSS
     la desvanece. El temporizador de seguridad la quita aunque
     algo falle, para que la web nunca se quede bloqueada. */
  const cortinaCarga = document.querySelector("#cortina-carga");
  if (cortinaCarga) {
    let cortinaQuitada = false;
    const ocultarCortina = () => {
      if (cortinaQuitada) return; // evitamos ocultarla dos veces
      cortinaQuitada = true;
      /* Una pequeña pausa deja ver la animación; con "reducir
         movimiento" la quitamos al momento. */
      const espera = movimientoReducido.matches ? 0 : 900;
      setTimeout(() => {
        cortinaCarga.classList.add("oculta");
        /* Cuando acaba la transición la sacamos del HTML; el segundo
           temporizador es la red de seguridad si no salta el evento. */
        cortinaCarga.addEventListener("transitionend", () => cortinaCarga.remove(), { once: true });
        setTimeout(() => cortinaCarga.remove(), 900);
      }, espera);
    };
    if (document.readyState === "complete") ocultarCortina();
    else {
      window.addEventListener("load", ocultarCortina);
      setTimeout(ocultarCortina, 4000); // red de seguridad
    }
  }

  /* ---------- 13. Favoritos ----------
     Guarda solo ids en localStorage (clave "kurolabs-favoritos").
     El corazón de cada tarjeta y de la ficha marca o desmarca, el
     contador de la cabecera se actualiza y la página favoritos.html
     se dibuja entera desde aquí con los datos de "productos". */
  const contadorFavoritos = document.querySelector("#contador-favoritos");
  const enlaceFavoritos = document.querySelector("#enlace-favoritos");
  const rejillaFavoritos = document.querySelector("#rejilla-favoritos");
  let favoritos = [];
  const recuperarFavoritos = () => {
    favoritos = [];
    try {
      const guardados = JSON.parse(leerGuardado("kurolabs-favoritos") || "[]");
      if (!Array.isArray(guardados)) return;
      guardados.forEach((id) => {
        /* Solo ids que existen en el catálogo y sin repetir. */
        if (productos[id] && !favoritos.includes(id)) favoritos.push(id);
      });
    } catch (error) { /* Un dato dañado no debe romper la página. */ }
  };
  /* Página favoritos.html: dibuja una tarjeta por cada id guardado,
     con el mismo aspecto que las del catálogo. */
  const dibujarPaginaFavoritos = () => {
    const vacio = document.querySelector("#favoritos-vacio");
    const total = document.querySelector("#total-favoritos");
    rejillaFavoritos.replaceChildren();
    favoritos.forEach((id) => {
      const producto = productos[id];
      const tarjeta = document.createElement("article");
      tarjeta.className = "tarjeta-producto";
      tarjeta.dataset.ficha = id;
      /* Esta plantilla usa SOLO nuestro catálogo fijo, nunca datos
         escritos por un visitante. */
      tarjeta.innerHTML = `<button class="boton-favorito" type="button" data-favorito="${id}" aria-pressed="false"><span aria-hidden="true">♥</span></button>
  <a class="boton-tarjeta" href="${producto.pagina}">
    <div class="imagen-producto imagen-conceptual"><img src="${producto.imagen}" width="1254" height="1254" loading="lazy" alt="${producto.nombre}"></div>
    <div class="info-producto"><div><span class="etiqueta-producto">${traducir(producto.coleccion).toUpperCase()} / DEMO</span><h3>${producto.nombre}</h3><span class="estrellas-tarjeta" data-estrellas="${id}" role="img"></span></div><span class="flecha-producto" aria-hidden="true">↗</span></div>
  </a>
  <div class="compra-producto"><span><strong>${formatoEuros(producto.precio)}</strong><small>${traducir("Precio ficticio")}</small></span><button class="boton-anadir" type="button" data-anadir="${id}">${traducir("Añadir +")}</button></div>`;
      rejillaFavoritos.append(tarjeta);
    });
    if (vacio) vacio.hidden = favoritos.length !== 0;
    if (total) total.textContent = `${favoritos.length} ${traducir("diseños guardados")}`;
    /* Las tarjetas son nuevas: hay que darles sus botones otra vez. */
    rejillaFavoritos.querySelectorAll("[data-favorito]").forEach((boton) => {
      boton.addEventListener("click", () => cambiarFavorito(boton.dataset.favorito));
    });
    rejillaFavoritos.querySelectorAll("[data-anadir]").forEach((boton) => {
      boton.addEventListener("click", () => anadirProducto(boton.dataset.anadir));
    });
  };
  /* Corazones y contador: la clase "marcado" pinta el corazón rojo
     (sección 18 de style.css). */
  const dibujarFavoritos = () => {
    if (rejillaFavoritos) dibujarPaginaFavoritos();
    document.querySelectorAll("[data-favorito]").forEach((boton) => {
      const marcado = favoritos.includes(boton.dataset.favorito);
      boton.classList.toggle("marcado", marcado);
      boton.setAttribute("aria-pressed", String(marcado));
      const nombre = productos[boton.dataset.favorito]?.nombre || "";
      const texto = marcado ? traducir("Quitar de favoritos") : traducir("Guardar en favoritos");
      boton.setAttribute("aria-label", `${texto}: ${nombre}`);
      const textoVisible = boton.querySelector(".texto-favorito");
      if (textoVisible) textoVisible.textContent = texto;
    });
    if (contadorFavoritos && enlaceFavoritos) {
      contadorFavoritos.textContent = favoritos.length;
      enlaceFavoritos.setAttribute("aria-label", `${traducir("Ver favoritos")}: ${favoritos.length}`);
    }
  };
  const cambiarFavorito = (id) => {
    if (!productos[id]) return;
    let marcado;
    if (favoritos.includes(id)) {
      favoritos = favoritos.filter((favorito) => favorito !== id);
      marcado = false;
    } else {
      favoritos.push(id);
      marcado = true;
    }
    guardar("kurolabs-favoritos", JSON.stringify(favoritos));
    dibujarFavoritos();
    if (avisoCarrito) avisar(`${productos[id].nombre}: ${traducir(marcado ? "Guardado en favoritos" : "Quitado de favoritos")}`);
  };
  /* Los corazones fijos del HTML (catálogo, portada y fichas). Los de
     favoritos.html se conectan al dibujar la página, arriba. */
  document.querySelectorAll("[data-favorito]").forEach((boton) => {
    boton.addEventListener("click", () => cambiarFavorito(boton.dataset.favorito));
  });
  /* Si tienes dos pestañas abiertas, se actualizan entre ellas. */
  window.addEventListener("storage", (evento) => {
    if (evento.key === "kurolabs-favoritos") { recuperarFavoritos(); dibujarFavoritos(); dibujarEstrellas(); }
    if (evento.key === "kurolabs-valoraciones") { recuperarValoraciones(); dibujarEstrellas(); }
  });

  /* ---------- 14. Valoración con estrellas ----------
     Demo sin servidor: solo guardas TU puntuación (de 1 a 5) en
     localStorage ("kurolabs-valoraciones"). Las tarjetas muestran tu
     nota con ★ llenas y ☆ vacías, y en cada ficha puntúas pulsando
     las estrellas. */
  let valoraciones = {};
  const recuperarValoraciones = () => {
    valoraciones = {};
    try {
      const guardadas = JSON.parse(leerGuardado("kurolabs-valoraciones") || "{}");
      if (!guardadas || typeof guardadas !== "object" || Array.isArray(guardadas)) return;
      Object.entries(guardadas).forEach(([id, nota]) => {
        if (productos[id] && Number.isInteger(nota) && nota >= 1 && nota <= 5) valoraciones[id] = nota;
      });
    } catch (error) { /* Un dato dañado no debe romper la página. */ }
  };
  /* Las frases cambian en singular y plural, así que las guardamos
     ya escritas en lugar de componerlas con el número. */
  const textosNota = ["1 estrella de 5", "2 estrellas de 5", "3 estrellas de 5", "4 estrellas de 5", "5 estrellas de 5"];
  const textoNota = (nota) => (nota ? `${traducir("Tu valoración")}: ${traducir(textosNota[nota - 1])}` : traducir("Sin valorar"));
  const dibujarEstrellas = () => {
    document.querySelectorAll(".estrellas-tarjeta").forEach((estrellas) => {
      const nota = valoraciones[estrellas.dataset.estrellas] || 0;
      estrellas.innerHTML = `<span class="estrellas-llenas">${"★".repeat(nota)}</span><span class="estrellas-vacias">${"☆".repeat(5 - nota)}</span>`;
      estrellas.setAttribute("aria-label", textoNota(nota));
    });
    /* En la ficha, las estrellas son botones de un grupo de radio. */
    const grupo = document.querySelector(".estrellas-interactivas");
    if (grupo) {
      const nota = valoraciones[grupo.closest(".valoracion-ficha").dataset.valoracionFicha] || 0;
      grupo.querySelectorAll("[data-estrella]").forEach((boton) => {
        const valor = Number(boton.dataset.estrella);
        boton.textContent = valor <= nota ? "★" : "☆";
        boton.classList.toggle("llena", valor <= nota);
        boton.setAttribute("aria-checked", String(valor === nota));
      });
      const estado = document.querySelector(".valoracion-estado");
      if (estado) estado.textContent = textoNota(nota);
    }
  };
  const grupoEstrellas = document.querySelector(".estrellas-interactivas");
  if (grupoEstrellas) {
    const idFicha = grupoEstrellas.closest(".valoracion-ficha").dataset.valoracionFicha;
    grupoEstrellas.querySelectorAll("[data-estrella]").forEach((boton) => {
      boton.addEventListener("click", () => {
        valoraciones[idFicha] = Number(boton.dataset.estrella);
        guardar("kurolabs-valoraciones", JSON.stringify(valoraciones));
        dibujarEstrellas();
      });
    });
  }
  /* Arranque de favoritos y valoraciones (se hace aquí para que
     todas las funciones de arriba existan ya). */
  recuperarFavoritos();
  recuperarValoraciones();
  dibujarFavoritos();
  dibujarEstrellas();

  /* ---------- 16. Cuenta atrás del próximo drop ----------
     FECHA FICTICIA de demostración: para probar otra, cambia la
     línea "fechaDrop". setInterval repite el cálculo cada 1000 ms
     (1 segundo) y escribe los números en el HTML. */
  const cuentaAtras = document.querySelector("#cuenta-atras");
  if (cuentaAtras) {
    const fechaDrop = new Date("2026-11-13T20:00:00+01:00").getTime(); // fecha ficticia
    const dropDias = document.querySelector("#drop-dias");
    const dropHoras = document.querySelector("#drop-horas");
    const dropMinutos = document.querySelector("#drop-minutos");
    const dropSegundos = document.querySelector("#drop-segundos");
    const dropEstado = document.querySelector("#drop-estado");
    let relojDrop; // se declara antes para poder pararlo desde la función
    /* padStart rellena con un cero a la izquierda: 7 queda "07". */
    const dosCifras = (numero) => String(numero).padStart(2, "0");
    const actualizarCuentaAtras = () => {
      const restante = fechaDrop - Date.now();
      if (restante <= 0) {
        /* Fecha pasada: ceros y mensaje, sin números negativos. */
        [dropDias, dropHoras, dropMinutos, dropSegundos].forEach((unidad) => { unidad.textContent = "00"; });
        if (dropEstado) dropEstado.hidden = false;
        clearInterval(relojDrop);
        return;
      }
      const segundosTotales = Math.floor(restante / 1000);
      dropDias.textContent = dosCifras(Math.floor(segundosTotales / 86400));
      dropHoras.textContent = dosCifras(Math.floor((segundosTotales % 86400) / 3600));
      dropMinutos.textContent = dosCifras(Math.floor((segundosTotales % 3600) / 60));
      dropSegundos.textContent = dosCifras(segundosTotales % 60);
    };
    actualizarCuentaAtras(); // primera pasada sin esperar al segundo 1
    relojDrop = setInterval(actualizarCuentaAtras, 1000);
  }

  // Cambiar idioma no borra la cesta ni los filtros; solo vuelve a dibujar sus textos.
  document.addEventListener("idioma-cambiado", () => {
    actualizarProductos();
    cerrarMenu();
    actualizarTema();
    dibujarCesta();
    filtrar();
    dibujarFavoritos();
    dibujarEstrellas();
    refrescarAltGaleria();
    avisoCarrito.textContent = "";
    if (formularioContacto) {
      document.querySelector("#estado-formulario").textContent = "";
      formularioContacto.querySelectorAll(".error-campo").forEach((campo) => { campo.textContent = ""; });
    }
  });
});
