# Aero

Mi primer proyecto personal, es una landing page de una escuela de vuelo.

![Escritorio](/aero/assets/aero-desktop.png)

## Tecnologías utilizadas

- HTML
- CSS3(Flexbox y Grid)
- Javascript

## Organización del proyecto

Los archivos principales son el **_index.html_** en el cual se encuentra la vista principal, y luego el archivo **_aero.css_** donde se encuentran el estilos de todos los elementos del sitio web.

Carpeta **_assets_** donde se ecuentran todas las imagenes utilizadas.

Carpeta **_pages_** que contiene los siguientes archivos html que representan cada una de las vistas:

- contacto.html
- cursos.html
- flota.html
- instructor.html
- nosotros.html
- P1C.html
- PCA.html
- PPA.html

Carpeta **_js_** la cual tiene dentro un _index.js_ que de tipo module para exportar las funciones que se encuentran de la carpeta _dom_ desde un único archivo.
Los archivos dentro de la carpeta **dom** son los siguientes:

| Archivo             | Función                                                        |
| ------------------- | -------------------------------------------------------------- |
| animado.js          | Mostrar los aviones cuando haces scroll en la vista flota.html |
| menu-hamburguesa.js | Muestra y oculta el menu de la navbar en pantallas pequeñas    |
| scroll-top-js       | Añadir un botón para que te lleve al encabezado de la página   |

## Más información

Si deseas ver la página puedes encontrala [aquí](https://faustoleal.github.io/Aero/aero).
