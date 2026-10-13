# Kuro Labs

Maqueta web de una tienda online de figuras 3D con estética oni japonesa futurista: oscura, tecnológica y premium.

## Qué incluye

- `index.html`: portada con el catálogo destacado (18 diseños conceptuales), manifiesto y galería con zoom.
- `catalogo.html`: catálogo con buscador en vivo y filtros de colección/precio.
- `colecciones.html`: página de colecciones.
- `noticias.html`: página de noticias.
- `kuro-labs.html`: la marca, su concepto y formulario con validación.
- `samurai.html`, `oni-maza.html`, `ninja.html` , `senor-guerra.html`, `ronin-templo.html` , `oni-salvaje.html` , `sombra-torii.html`, `titan-hierro.html` y las fichas nuevas (`kitsune.html`, `monje-yokai.html`, `tengu-arquero.html`, `oni-tambor.html`, `geisha-acero.html`, `guardian-dragon.html`, `kappa-mecanico.html`, `cazador-kusarigama.html`, `shinobi-humo.html`, `emperador-oni.html`): fichas individuales con descripción, vistas conceptuales ampliables y diseños relacionados.
- `404.html`: página de error con enlaces para volver al inicio o al catálogo.
- `idiomas.js`: diccionario y selector de idioma ES / EN / EU con preferencia guardada.
- `style.css`: estilos de todo el sitio.
- `app.js`: comportamiento compartido (ver abajo).

Qué hace `app.js`: cambia el aspecto del encabezado al hacer scroll, abre y cierra el menú en móvil, amplía las imágenes en un visor accesible, anima las tarjetas al entrar en pantalla, pone el año en el pie de página, gestiona el carrito de ejemplo con cantidades y total, guarda el tema claro/oscuro, combina buscador/filtros y valida el formulario. Las tarjetas navegan a su ficha mediante enlaces HTML, también sin JavaScript.

## Tecnologías

- HTML
- CSS con variables (colores y estilos definidos una sola vez), diseño adaptable a móvil y escritorio con `@media`
- JavaScript sin librerías

## Cómo verlo

1. Descarga la carpeta completa.
2. Abre `index.html` en el navegador (doble clic).
3. Navega por el menú. Prueba también en móvil o reduciendo la ventana.

Todos los archivos tienen que estar en la misma carpeta para que carguen los estilos y el script.

## Qué aprendí

Lo que más me costó fue el CSS y el JavaScript. Aprendí a organizar una web de varias páginas, a usar variables CSS y diseño adaptable para móvil y escritorio, y a hacer con JavaScript un menú móvil y una ventana de producto. También aprendí a buscar y corregir errores, y a subir el proyecto a GitHub con su README.

## Funciones de demostración

- Carrito con añadir, sumar/restar unidades, quitar diseños, vaciar y total en euros. Se guarda en `localStorage` para conservarlo entre páginas y al recargar, cuando el navegador lo permite. No hay pago ni pedidos reales.
- Buscador sin distinción de mayúsculas ni tildes, combinado con filtros por colección de ejemplo y precio ficticio. Contador de resultados y botón para restablecer los tres controles.
- Interfaz completa en español, inglés y euskera, incluidos avisos, errores y etiquetas accesibles. La preferencia se guarda en `localStorage`; nombres de clases, ids y variables siguen en castellano.
- Zoom en galería y fichas con foco controlado, cierre por Escape, botón o clic en el fondo.
- Animaciones de entrada con `IntersectionObserver`, desactivadas con `prefers-reduced-motion`. Sin JavaScript el contenido permanece visible.
- 404 de estética oni. Se puede abrir `404.html` directamente. Para errores de URL reales, el alojamiento debe servir ese archivo como página 404; GitHub Pages lo reconoce si algún día se activa. Este cambio no activa Pages.
- Modo oscuro por defecto y modo claro que conserva la identidad rojo/oni. Se guarda la preferencia.
- Formulario en Kuro Labs → Contacto: nombre, email y mensaje, con errores junto a cada campo. Solo valida: **no envía ni guarda datos**. Falta conectar un servicio de envío.
- Nombres, clases, ids, variables y comentarios en castellano. Los comentarios explican el por qué de cada paso.

Los ocho diseños son imágenes conceptuales generadas con IA, no productos disponibles ni archivos STL. Los precios (45–100 €) y las agrupaciones Armadura/Sigilo/Cibernética son **datos ficticios para probar la web**, no información comercial.

### Para probarlo

En Catálogo, añade dos diseños y abre Cesta. Cambia las cantidades y recarga: el total se mantiene. Prueba Armadura + Hasta 50 € para ver el estado sin resultados. Activa Claro y navega a otra página. En Contacto, deja campos vacíos o escribe un email incorrecto: aparece un aviso. Con campos correctos, el aviso explica que no se ha enviado nada.

Para persistencia consistente entre páginas, sirve la carpeta desde un servidor local en lugar de abrir cada HTML por separado. Sin servidor ni almacenamiento disponible, las funciones siguen funcionando durante la visita, pero no se garantiza conservar la cesta entre archivos.

## Pendiente

- Productos, precios, disponibilidad e información comercial reales.
- Conectar el formulario a un servicio de envío (y validación en servidor).
- Pagos y pedidos reales, si se decide convertir la maqueta en una tienda.
- Contenido real en colecciones y noticias.

Pruebas de las nuevas funciones: busca "samurai" sin tilde y combina Hasta 50 € para ver cero resultados. Restablece, abre una figura y amplía la imagen. Pulsa Tab, Escape y vuelve al catálogo. Cambia ES/EN/EU y navega: se mantiene el idioma y la cesta. Prueba también el modo claro, un ancho de 320 px y movimiento reducido.

Los dos conceptos nuevos son Ronin del templo (75 € ficticios) y Oni salvaje (80 € ficticios), en versiones futuristas. Sus imágenes WebP conservan las cuatro vistas y no son modelos 3D ni STL.
Sombra del torii se añade en su versión original (55 € ficticios), dentro de Sigilo. Titán de hierro se añade en su versión original (100 € ficticios), dentro de Cibernética.

## Oni tradicional
18 conceptos adicionales sin tecnología. Fichas y colección propias. Identificaciones 19 a 36. Sin precio, venta ni reserva; favoritos y valoraciones locales. Vistas orientativas, no modelos 3D ni STL.
