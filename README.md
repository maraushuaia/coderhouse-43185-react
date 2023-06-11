scale=1.0">

# **Proyecto [Nombre del Proyecto]**

Este proyecto es una aplicación web desarrollada con React que utiliza las siguientes librerías:

- React 18.2
- Material UI 5
- Fuente Roboto
- Iconos de Material UI
- react-loader-spinner 5.3.4
- react-material-ui-carousel 3.4.2
- react-responsive-carousel 3.2.23
- react-router-dom 6.12.0
- react-toastify 9.1.3

Además, la aplicación se conecta a una base de datos Firebase y se despliega en Vercel.

## **Instalación**

Para ejecutar esta aplicación en tu entorno local, sigue estos pasos:

1. Clona este repositorio:

git clone https://github.com/tu-usuario/nombre-del-repo.git

2. Ve al directorio del proyecto:

cd nombre-del-repo

3. Instala las dependencias:

npm install

## **Uso**

Para ejecutar la aplicación en tu entorno local, utiliza el siguiente comando:

npm start

Esto iniciará la aplicación y podrás acceder a ella en tu navegador a través de la siguiente URL: http://localhost:3000.

## **Base de datos Firebase**

Esta aplicación utiliza una base de datos Firebase para _almacenar productos y otra información de prueba del proyecto_.

## **Características**

El proyecto cuenta con las siguientes características:

- Tiene como menú principal las siguientes secciones: Categorías, Ofertas, Favoritos, Ayuda
- En la sección de Categorías, se reciben todos los productos desde Firebase y se recorre todo el array en busca de las diversas categorías, las cuales se utilizan para segmentar los productos.
- En la sección de Ofertas, se muestran todos los productos que tienen la propiedad "oferta" establecida como "true". Estos productos se muestran en un grupo especial y se identifican en el ecommerce con un círculo verde que indica "OFERTA".
- En la sección de Favoritos, todos los productos se presentan como tarjetas (cards) y los usuarios pueden presionar el corazón para indicar que les gusta un producto. Los productos marcados como favoritos se almacenan en un estado y se guardan en el LocalStorage. Aún no se ha desarrollado la lógica para almacenar esta información en la base de datos Firebase.
- La sección de Ayuda muestra un ejemplo de preguntas que podrían cargarse en Firebase y luego renderizarse para ser buscadas a través del buscador. La búsqueda se realiza únicamente por título de la pregunta.
- Cuando se muestra el detalle de un producto, también se muestran productos relacionados. Estos productos son todos los demás productos de la misma categoría, excepto el producto que se está visualizando en ese momento.
- En la vista de detalle de un producto, los usuarios pueden agregar productos al carrito de compras y también pueden agregar o quitar productos de la lista de Favoritos. Se mostrará una notificación en pantalla para confirmar estas acciones.
- El formulario de Checkout (finalización de la compra) permite almacenar los datos del comprador en el LocalStorage para futuras compras. Los datos de la tarjeta de crédito se manejan solo en un estado dentro del componente y deberán ser ingresados cada vez que se realice una compra.
- Es posible eliminar productos del carrito antes de finalizar la compra.
- Los datos de la compra, excepto los datos de la tarjeta de crédito, se guardarán en la base de datos Firebase.
- Se informará al cliente el número de pedido mediante una notificación.

### **Otras características adicionales**

- La aplicación cuenta con un menú lateral (drawer) y un menú de accesos rápidos fijado en la parte inferior de la página, especialmente diseñado para dispositivos móviles.

### **DEMO FUNCIONAL**

Puedes ver una demo funcional del proyecto en el siguiente enlace:[](https://coderhouse-43185-react.vercel.app/)

<https://coderhouse-43185-react.vercel.app/>
