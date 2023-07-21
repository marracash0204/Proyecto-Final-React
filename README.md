# Proyecto Orion Cosmetics de React con react-router-dom, useState, useContext, vite y Firebase

Este proyecto de *Orion Cosmetics* es una aplicación web construida con React que utiliza diferentes tecnologías, bibliotecas para crear una experiencia de usuario interactiva y realizar compras en linea. La aplicación utiliza `react-router-dom` para gestionar la navegación entre diferentes páginas, `useState` y `useContext` para gestionar el estado de la aplicación, `vite` como el entorno de desarrollo y construcción rápido, y `Firebase` como backend y base de datos en la nube.

## Características principales

- Navegación entre páginas utilizando `react-router-dom`.
- Gestión de estado mediante el uso de `useState` y `useContext`.
- Integración con Firebase para autenticación y almacenamiento de datos.
- Realizar compra de productos
- Agregar al carrito los productos

## Requisitos previos

- Node.js y npm instalados en su máquina.

## Instalación

1. Clona este repositorio en tu máquina local:

git clone <url-del-repositorio>
cd entrega-final-react


2. Instala las dependencias del proyecto utilizando npm:

npm install


3. Crea una cuenta en Firebase (si aún no tienes una) y configura un proyecto.

4. Copia la configuración de Firebase en un archivo `.env` en la raíz del proyecto:

REACT_APP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_DATABASE_URL=https://your-project.firebaseio.com
REACT_APP_PROJECT_ID=your-project
REACT_APP_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_MESSAGING_SENDER_ID=xxxxxxxxxxxx
REACT_APP_APP_ID=1:xxxxxxxxxxxxxxxxxxxx:web:xxxxxxxxxxxxxxxxxxxxxx


## Uso
Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

npm run dev
Esto iniciará el servidor de desarrollo de vite y podrás ver la aplicación en http://localhost:3000.

Para construir la aplicación para producción, utiliza el siguiente comando:

npm run build
Esto generará los archivos optimizados en la carpeta dist.

Estructura del proyecto
La estructura de carpetas del proyecto se organiza de la siguiente manera:

entrega-final-react/
  ├── public/
  ├── src/
  │   ├── components/
  │   ├── contexts/
  │   ├── services/
  │   ├── App.js
  │   ├── index.js
  │   └── ...
  ├── .gitignore
  ├── package.json
  └── README.md


public/: Contiene archivos públicos como las imagenes
src/: Contiene el código fuente de la aplicación.
components/: Contiene componentes reutilizables de la aplicación.
contexts/: Contiene contextos de React para gestionar el estado global de la aplicación.
App.js: Componente raíz de la aplicación.
index.js: Punto de entrada de la aplicación.
package.json: Archivo de configuración de npm.
Contribución
Las contribuciones son bienvenidas. Si encuentras errores o mejoras en el proyecto, no dudes en hacer una solicitud de pull.

## Licencia
Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo LICENSE.



