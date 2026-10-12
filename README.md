# Kuro Labs

Maqueta web de una tienda online de figuras 3D con estética oni japonesa futurista: oscura, tecnológica y premium.

## Qué incluye

- `index.html`: portada con el catálogo destacado (4 diseños conceptuales), manifiesto y ficha de producto en ventana modal.
- `catalogo.html`: catálogo con filtros de colección y precio, y ficha de producto.
- `colecciones.html`: página de colecciones.
- `noticias.html`: página de noticias.
- `kuro-labs.html`: la marca, su concepto y formulario con validación.
- `style.css`: estilos de todo el sitio.
- `app.js`: comportamiento compartido (ver abajo).

Qué hace `app.js`: cambia el aspecto del encabezado al hacer scroll, abre y cierra el menú en móvil, abre la ficha de producto al pulsar una tarjeta pone el año en el pie de página, gestiona el carrito de ejemplo con cantidades y total, guarda el tema claro/oscuro, combina filtros y valida el formulario.

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
- Filtros combinados por colección de ejemplo y precio ficticio, contador de resultados y botón para restablecer.
- Modo oscuro por defecto y modo claro que conserva la identidad rojo/oni. Se guarda la preferencia.
- Formulario en Kuro Labs → Contacto: nombre, email y mensaje, con errores junto a cada campo. Solo valida: **no envía ni guarda datos**. Falta conectar un servicio de envío.
- Nombres, clases, ids, variables y comentarios en castellano. Los comentarios explican el por qué de cada paso.

Los cuatro diseños son imágenes conceptuales generadas con IA, no productos disponibles ni archivos STL. Los precios (45–95 €) y las agrupaciones Armadura/Sigilo son **datos ficticios para probar la web**, no información comercial.

### Para probarlo

En Catálogo, añade dos diseños y abre Cesta. Cambia las cantidades y recarga: el total se mantiene. Prueba Armadura + Hasta 50 € para ver el estado sin resultados. Activa Claro y navega a otra página. En Contacto, deja campos vacíos o escribe un email incorrecto: aparece un aviso. Con campos correctos, el aviso explica que no se ha enviado nada.

Para persistencia consistente entre páginas, sirve la carpeta desde un servidor local en lugar de abrir cada HTML por separado. Sin servidor ni almacenamiento disponible, las funciones siguen funcionando durante la visita, pero no se garantiza conservar la cesta entre archivos.

## Pendiente

- Productos, precios, disponibilidad e información comercial reales.
- Conectar el formulario a un servicio de envío (y validación en servidor).
- Pagos y pedidos reales, si se decide convertir la maqueta en una tienda.
- Contenido real en colecciones y noticias.
