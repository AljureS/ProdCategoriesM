# 📦 ProdCategoriesM: Prueba Técnica

Bienvenido al repositorio de ProdCategoriesM. Este proyecto consiste en un sistema dividido en servicios de Front End y Back End para la gestión de productos y categorías.

## 🚀 Comenzando

Antes de iniciar, asegúrate de tener instalado Node.js en tu sistema. Clona este repositorio utilizando:

```bash
git clone https://github.com/AljureS/ProdCategoriesM.git
```

### 🌐 Front End Config

Ubicación: `/frontend/front`

- **Tecnologías:** Vite + React
- **Lenguaje:** JavaScript

Para iniciar el servidor de desarrollo, ejecuta:

```bash
cd frontend/front
npm install
npm run dev
```
Accede a través de: [http://localhost:5173/](http://localhost:5173/)

### ⚙️ Back End - Servicio de Producto

Ubicación: `/backend/product-service`

- **Tecnologías:** NestJS
- **Lenguaje:** TypeScript

Primero, crea un archivo `.development.env` en el directorio para configurar las variables de entorno necesarias para la conexión a la base de datos.

Para iniciar el servicio, ejecuta:

```bash
cd backend/product-service
npm install
npm run start:dev
```

### 📦 Back End - Servicio de Categorías

Ubicación: `/backend/category-service`

- **Tecnologías:** ExpressJS
- **Lenguaje:** JavaScript

Primero, crea un archivo `.env` en el directorio para configurar las variables de entorno necesarias para la conexión a la base de datos.

Para iniciar el servicio, ejecuta:

```bash
cd backend/category-service
npm install
npm run start
```


