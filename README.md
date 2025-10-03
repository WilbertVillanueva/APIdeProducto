API PRODUCTOS

Esta API RESTful permite gestionar productos en una base de datos MongoDB. Las operaciones incluyen crear, leer, actualizar y eliminar productos. 
La API está construida con Node.js y Express.js, y utiliza MongoDB Atlas para almacenar los productos en la nube.
________________________________________
Tabla de Contenidos
1.	Introducción
2.	Tecnologías Utilizadas
3.	Configuración del Proyecto
4.	Iniciar el Servidor
5.	Endpoints de la API
6.	Pruebas con Postman
7.	Documentación de la API (Swagger UI)
8.	Errores Comunes
9.	Licencia
________________________________________
Introducción

Esta es una API RESTful diseñada para gestionar productos en una base de datos MongoDB. La API ofrece las siguientes funcionalidades:
•	GET /productos: Obtiene todos los productos almacenados en la base de datos.
•	POST /productos: Crea un nuevo producto en la base de datos.
•	GET /productos/:id: Obtiene un producto específico por su ID.
•	PUT /productos/:id: Actualiza un producto específico por su ID.
•	DELETE /productos/:id: Elimina un producto específico por su ID.
La API fue desarrollada usando Node.js, Express.js para las rutas y Mongoose para la interacción con MongoDB. Los datos se almacenan en una base de datos gestionada por MongoDB Atlas.
________________________________________
Tecnologías Utilizadas

•	Node.js: Plataforma JavaScript en el servidor.
•	Express.js: Framework web para Node.js que facilita la creación de rutas.
•	MongoDB Atlas: Base de datos en la nube de MongoDB.
•	Mongoose: Librería de Node.js que proporciona una solución sencilla para interactuar con MongoDB.
•	Swagger UI: Herramienta para documentar y probar la API de manera interactiva.
________________________________________
Configuración del Proyecto

Requisitos Previos

Antes de empezar, asegúrate de tener lo siguiente instalado en tu sistema:
1.	Node.js y npm:
o	Instalar Node.js.
2.	MongoDB Atlas:
o	Crea una cuenta en MongoDB Atlas.
o	Crea un clúster gratuito.
o	Crea un usuario con acceso a la base de datos y configura la whitelist de IP (para acceso desde tu máquina).
o	Obtén la cadena de conexión de MongoDB Atlas.

Instalación del Proyecto

1.	Clona este repositorio en tu máquina local:
2.	git clone https://github.com/tu-usuario/mi-api-de-productos.git
3.	Navega al directorio del proyecto:
4.	cd mi-api-de-productos
5.	Instala las dependencias:
6.	npm install
7.	Configura tu archivo de conexión a MongoDB Atlas en el código (modifica la URL de conexión si es necesario):
8.	mongoose.connect('mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/productos?retryWrites=true&w=majority')
9.	Asegúrate de que la base de datos productos esté disponible en MongoDB Atlas.
________________________________________
Iniciar el Servidor

Para iniciar el servidor de la API, ejecuta el siguiente comando:
npm start
Esto iniciará el servidor en http://localhost:3000.
Si prefieres que el servidor se reinicie automáticamente cuando realices cambios en el código, puedes usar nodemon. Instálalo globalmente y ejecuta:
npm install -g nodemon
nodemon server.js
El servidor ahora debería estar disponible en http://localhost:3000.
________________________________________
Endpoints de la API

1. GET /productos
Descripción: Obtiene todos los productos de la base de datos.
Respuesta exitosa (200 OK):
[
  {
    "id": "6152e21c30fcd39a0e3f7a02",
    "nombre": "Producto 1",
    "precio": 100.0,
    "descripcion": "Descripción del producto 1"
  },
  {
    "id": "6152e21c30fcd39a0e3f7a03",
    "nombre": "Producto 2",
    "precio": 200.0,
    "descripcion": "Descripción del producto 2"
  }
]
2. POST /productos
Descripción: Crea un nuevo producto en la base de datos.
Cuerpo de la solicitud:
{
  "nombre": "Producto 3",
  "precio": 300.0,
  "descripcion": "Descripción del producto 3"
}
Respuesta exitosa (201 Created):
{
  "id": "6152e21c30fcd39a0e3f7a04",
  "nombre": "Producto 3",
  "precio": 300.0,
  "descripcion": "Descripción del producto 3"
}
3. GET /productos/:id
Descripción: Obtiene un producto específico por su ID.
Respuesta exitosa (200 OK):
{
  "id": "6152e21c30fcd39a0e3f7a02",
  "nombre": "Producto 1",
  "precio": 100.0,
  "descripcion": "Descripción del producto 1"
}
4. PUT /productos/:id
Descripción: Actualiza un producto existente por su ID.
Cuerpo de la solicitud:
{
  "nombre": "Producto 1 Actualizado",
  "precio": 150.0,
  "descripcion": "Descripción actualizada del producto 1"
}
Respuesta exitosa (200 OK):
{
  "id": "6152e21c30fcd39a0e3f7a02",
  "nombre": "Producto 1 Actualizado",
  "precio": 150.0,
  "descripcion": "Descripción actualizada del producto 1"
}
5. DELETE /productos/:id
Descripción: Elimina un producto existente por su ID.
Respuesta exitosa (200 OK):
{
  "message": "Producto eliminado"
}
________________________________________

Pruebas con Postman

Usa Postman para probar los diferentes endpoints de la API:
1.	GET /productos: Obtiene todos los productos.
2.	POST /productos: Crea un nuevo producto.
3.	GET /productos/:id: Obtiene un producto por su ID.
4.	PUT /productos/:id: Actualiza un producto existente.
5.	DELETE /productos/:id: Elimina un producto.
________________________________________
Documentación de la API (Swagger UI)

La documentación interactiva de la API está disponible a través de Swagger UI. Puedes acceder a ella navegando a:
http://localhost:3000/api-docs
________________________________________
Errores Comunes

1.	Error 500 (Internal Server Error):
o	Este error generalmente ocurre cuando hay un problema con la base de datos o la lógica de la API.
o	Revisa los logs del servidor para obtener detalles específicos del error.
2.	Error 400 (Bad Request):
o	Esto puede ocurrir si el cuerpo de la solicitud POST o PUT no tiene los datos necesarios o están mal formateados.
3.	Error 404 (Not Found):
o	Este error ocurre cuando intentas acceder a un producto que no existe en la base de datos usando GET /productos/:id o DELETE /productos/:id.
________________________________________
Licencia

Este proyecto está bajo la licencia MIT. Puedes modificar y distribuir este proyecto libremente.
________________________________________
Conclusión

Este proyecto implementa una API RESTful funcional que permite realizar operaciones CRUD sobre productos almacenados en una base de datos MongoDB Atlas. 
La API está documentada mediante Swagger UI y se puede probar utilizando Postman. ¡Ahora estás listo para gestionar productos a través de la API!
