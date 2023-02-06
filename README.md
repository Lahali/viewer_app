# UNSPLASH VIEWER APP

> App para visualizar una galería de imágenes desde la API de Unsplash con un layout tipo Pinterest (también conocido como Masonry).

## Demo

[Aquí](https://viewer-app.vercel.app/) se puede ver una demo del proyecto.

## Component

La página está pensada para visualizar fotos que provienen del banco de fotos Unsplash de una forma sencilla, atractiva y moderna. El botón tiene la funcionalidad de visualizar nuevas imágenes implementada y las fotos tienen un efecto hover con zoom.

## Installation

Para instalar el proyecto:

```shell
    # Clone repository
    git clone https://github.com/Lahali/viewer_app
```

```shell
    # test o run commands
    npm run install
    npm run dev
```

Para poder acceder a la API es necesario registrarse [aquí](https://unsplash.com/documentation#creating-a-developer-account) para obtener una key única.

## Stack

Para este proyecto he utilizado React y Styled Components. Styled Components nos permite tener un diseño fácilmente reutilizable y gracias a React tenemos una app fácil de ampliar y añadir nuevas funcionalidades.

React está inicializado utilizando Vite por ser más ligero y rápido que Create React App.

La estructura del proyecto está organizado siguiendo una arquitectura basada en diseño atómico. De esta forma los componentes más pequeños (como botones e inputs si los hubiera), son totalmente reutilizables en el resto de la app y obtenemos una app facilmente escalable.

## Code quality

Según [Codefactor](https://www.codefactor.io/), la calidad del código es A+

![code quality A+](/src/assets/codeQuality1.png)

![code quality analisis](/src/assets/codeQuality2.png)

## Contact info

matamua82@gmail.com

## License

[MIT](https://opensource.org/licenses/MIT)
