# Laboratorio 4 - Consumo de API, DOM y Husky

Proyecto para el Laboratorio 4 del curso de TICS en Kinal. Consiste en una mini app web que consume datos de una API pública, los muestra en pantalla y permite filtrarlos, usando Husky y ESLint para validar la calidad del código antes de hacer commits.

## Descripción

La aplicación realiza una petición a la API de JSONPlaceholder (`https://jsonplaceholder.typicode.com/users`) usando `fetch`. Muestra una lista de usuarios con su información básica en tarjetas y cuenta con una barra de búsqueda para filtrar la lista en tiempo real por nombre.

Para la calidad del código, el proyecto tiene configurado ESLint y un hook de pre-commit con Husky. Si el código tiene errores de sintaxis o problemas detectados por ESLint, Husky bloquea el commit automáticamente hasta que se solucionen.

## Estructura del proyecto

- `index.html`: Estructura base de la aplicación y contenedor de la lista.
- `style.css`: Estilos visuales para las tarjetas de usuario y el buscador.
- `script.js`: Lógica para consumir la API, renderizar los datos y filtrar.
- `.husky/pre-commit`: Hook de Husky configurado para ejecutar `npx eslint .` antes de cada commit.
- `eslint.config.mjs`: Configuración de ESLint.

## Instrucciones de uso

1. Instalar las dependencias del proyecto:
   npm install

2. Verificar el código manualmente con ESLint:
   npx eslint .

3. Para probar el hook de Husky, intenta hacer un commit. Si hay errores en el código, el commit se detendrá.