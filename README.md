# Fleet Management Software API

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Criterios de aceptación del proyecto](#3-criterios-de-aceptación-del-proyecto)
* [4. Stack de tecnologías](#4-stack-de-tecnologías)
* [5. Comprender para implementar](#5-comprender-para-implementar)

***

## 1. Preámbulo

De acuerdo con
[Wikipedia](https://es.wikipedia.org/wiki/Internet_de_las_cosas),
la internet de las cosas (IoT, por sus siglas en inglés)​ es un concepto que
se refiere a una interconexión digital de objetos cotidianos con internet.
Constituye un cambio radical en la calidad de vida de las personas en la
sociedad, ofreciendo nuevas oportunidades en el acceso a
datos, educación, seguridad, asistencia
sanitaria y en el transporte, entre otros campos. Por ejemplo,
en logística y manejo de flotas, se puede hacer seguimiento en
todo momento de la ubicación y las condiciones de vehículos
mediante sensores inalámbricos conectados a internet que envían alertas en
caso de eventualidades (demoras, daños, robos, etc.).

![zach-vessels-utMdPdGDc8M-unsplash](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/fleet-management-api-java%2Fthumb.jpg?alt=media)

La IoT también plantea retos como el almacenamiento, análisis y
visualización de la gran cantidad de información que genera.
Se calcula que para el 2025 los dispositivos IoT generen
[79.4 zettabytes](https://www.statista.com/statistics/1017863/worldwide-iot-connected-devices-data-size/)
(1 zettabyte equivale a 1 trillón de gigabytes).
Como desarrolladoras debemos estar al tanto de estos retos y contribuir para
su solución desde nuestra experiencia, conocimiento y ganas de aprender.

## 2. Resumen del proyecto

En este proyecto se construyó la API REST de un
[Fleet Management Software](https://en.wikipedia.org/wiki/Fleet_management)
para consultar las ubicaciones de los vehículos de una empresa
de taxis en Beijing, China.

Fueron entregadas las ubicaciones de casi 10 mil
taxis. Como desarrolladora exploré alternativas y
técnicas para almacenar y consultar esta
información y garantizar la mejor experiencia de usuari@.


## 3. Criterios de aceptación del proyecto

Nuestra cliente ha instalado dispositivos GPS en sus taxis.
Estos dispositivos utilizan señales satelitales para determinar
con precisión las coordenadas geográficas del taxi.

Nuestra clienta requiere:

1. Cargar la información de archivos SQL a una
base de datos Postgresql.
2. Desarrollar una API REST que permita consultar, mediante
peticiones HTTP, la información almancenada en la base de datos.

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con la clienta
hasta hoy.

***

#### [Historia de usuario 1] Cargar información a base de datos

Yo, como desarrolladora, quiero cargar la información almacenada hasta ahora en
[archivos sql](https://drive.google.com/file/d/1T5m6Vzl9hbD75E9fGnjbOiG2UYINSmLx/view?usp=drive_link)
en una base de datos PostgreSQL, para facilitar su consulta y análisis.

##### Criterios de aceptación

* Se debe tener en cuenta el siguiente diagrama para la implementación de las
relaciones entre las tablas

![mer](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/fleet-management-api-java%2Fsql-diagram.png?alt=media)

* La tabla de _trajectories_ se debe crear con el "id" que se incremente
automáticamente (SERIAL) para poder insertar los valores sin necesidad
de especificar un identificador

##### Definición de terminado

* La base de datos tiene creada la tabla de taxis
* La tabla de taxis tiene cargada la data de taxis
* La base de datos tiene creada la tabla de trayectorias
* La tabla de taxis tiene cargada la data de trayectorias

***

##### [Historia de usuario 2] Endpoint listado de taxis

Yo como clienta de la API REST requiero un _endpoint_ para
listar todos los taxis.

##### Criterios de aceptación

* El _endpoint_ responde para cada taxi: id y placa.
* El _endpoint_ paginamos los resultados para asegurar que las
respuestas sean más fáciles de manejar.

##### Definición de terminado

* Se cuenta con una documentación en [Swagger](https://swagger.io/)
para el _endpoint_ desarrollado especificando
[método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods),
url, parámetros,
[encabezados](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers),
[códigos HTTP de respuesta](https://shorturl.at/bdegB)
y
[cuerpo](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages).
* El código del _endpoint_ debe recibir _code review_ de al
menos una compañera.
* El código _endpoint_ debe estar cargado en un repositorio de Github.
* El código _endpoint_ debe contar con test unitarios y e2e.

***

#### [Historia de usuario 3] Endpoint historial de ubicaciones

Yo como clienta de la API REST requiero un _endpoint_ para
consultar todas las ubicaciones de un taxi dado el id y una fecha.

##### Criterios de aceptación

* El _endpoint_ responde con el id del taxi y una fecha mostrando
  la siguiente información: latitud, longitud y timestamp (fecha y hora).
* El _endpoint_ paginamos los resultados para asegurar que las
  respuestas sean más fáciles de manejar.

##### Definición de terminado

* Se cuenta con una documentación en [Swagger](https://swagger.io/)
para el _endpoint_ desarrollado especificando
[método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods),
url, parámetros,
[encabezados](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers),
[códigos HTTP de respuesta](https://shorturl.at/bdegB)
y
[cuerpo](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages).
* El código del _endpoint_ debe recibir _code review_ de al
menos una compañera.
* El código _endpoint_ debe estar cargado en un repositorio de Github.
* El código _endpoint_ debe contar con test unitarios y e2e.

***

#### [Historia de usuario 4] Endpoint última ubicación

Yo como clienta de la API REST requiero un _endpoint_ para
consultar la última ubicación reportada por cada taxi.

##### Criterios de aceptación

* El _endpoint_ responde para cada taxi la siguiente información:
id, placa, latitud, longitud y timestamp (fecha y hora).
* El _endpoint_ paginamos los resultados para asegurar que las
respuestas sean más fáciles de manejar.

##### Definición de terminado

* Se cuenta con una documentación en [Swagger](https://swagger.io/)
para el _endpoint_ desarrollado especificando
[método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods),
url, parámetros,
[encabezados](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers),
[códigos HTTP de respuesta](https://shorturl.at/bdegB)
y
[cuerpo](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages).
* El código del _endpoint_ debe recibir _code review_ de al
menos una compañera.
* El código _endpoint_ debe estar cargado en un repositorio de Github.
* El código _endpoint_ debe contar con test unitarios y e2e.

***

## 4. Stack de tecnologías

* [NodeJs](./docs/stack-node.md)

## 5. Comprender para implementar

### Construyendo la arquitectura de la API: FLEET MANAGEMENT SOFTWARE

| | **Etapa** | **Resultado** |
|-------|-------|-----------|
| **Para todas las historias** |
| [ x ] | Dispositivos GPS en taxis <br>(coordenadas geográficas) | Archivos SQL |
| [ x ] | Vercel PostgreSQL | Campo para base de datos en la nube |
| [ x ] | PRISMA + PGADMIN | Se crean tablas y se cargan datos: <br> - Tabla de taxis <br> - Tabla de trayectorias |
| [ x ] | Programación base de API REST | - Express <br> - TypeScript <br> |
| **Para cada historia** |
| [ x ] | Programación de Consultas SQL | Prisma: como ORM para consultas a la db con métodos para operaciones CRUD, no comandos SQL directamente <br>(con paginación)|
| [ x ] | Tests | Superagent: como framework de pruebas e2e <br> - ts-jest: para pruebas unitarias |
| [ x ] | Documentación en Swagger | Cada endpoint: <br> - Método HTTP <br> - URL <br> - Parámetros <br> - Encabezados <br> - Códigos HTTP de respuesta <br> - Cuerpo |

### Checklist backlog
| | **Endpoints** | **Requisitos** | 
|-------|-------|-----------|
| [ x ] |Endpoint 1| Id y placa para cada taxi|
| [ x ] |Endpoint 2| Ubicaciones de un taxi por ID y fecha |
| [ x ] |Endpoint 3| Última ubicación reportada por cada taxi |

### Entendimiento de conceptos y requerimientos necesarios

- **IoT**, o Internet de las cosas (en inglés, Internet of Things), se refiere a la interconexión digital de dispositivos y objetos cotidianos a través de Internet. Estos dispositivos pueden ser desde electrodomésticos, vehículos, dispositivos portátiles, hasta sensores y componentes industriales. La idea es que estos dispositivos puedan recopilar y transmitir datos automáticamente, permitiendo la creación de sistemas más inteligentes y automatizados. IoT permite la conexión de objetos físicos al mundo digital, creando oportunidades para la eficiencia, comodidad y nuevas aplicaciones tecnológicas.

- El **Fleet Management Software** (Software de Gestión de Flotas) es una solución tecnológica diseñada para ayudar a las empresas a administrar y supervisar eficientemente sus flotas de vehículos. Este tipo de software proporciona una amplia gama de funciones y características que permiten a los administradores de flotas realizar tareas como seguimiento de vehículos en tiempo real, gestión de mantenimiento, programación de rutas, monitoreo de conductores, gestión de combustible, análisis de datos y generación de informes, entre otras.

- Los **archivos SQL** son archivos de texto que contienen comandos en lenguaje SQL (Structured Query Language). SQL es un lenguaje estándar utilizado para interactuar con bases de datos relacionales. Los archivos SQL pueden contener una variedad de comandos SQL, como instrucciones de creación de tablas, inserción de datos, actualización de datos, eliminación de datos y consultas.

- En un **modelo de base de datos relacional**, los datos se organizan y almacenan en tablas que están relacionadas entre sí mediante claves o campos comunes. Estas relaciones entre las tablas permiten que los datos se consulten y se recuperen de manera eficiente, así como también garantizan la integridad y consistencia de los datos.

- **Prisma** es un ORM (Object-Relational Mapping) que permite interactuar con la base de datos utilizando un modelo de datos de alto nivel en lugar de escribir consultas SQL directamente. En lugar de trabajar con comandos SQL, los desarrolladores pueden definir modelos de datos en código utilizando Prisma, lo que simplifica y abstrae la interacción con la base de datos. Por ejemplo, en lugar de escribir una consulta SQL para seleccionar todos los registros de una tabla, se puede utilizar el método de consulta de Prisma para lograr lo mismo de manera más abstracta y legible en código.
  
- El tipo de **datos "SERIAL" en PostgreSQL** es una forma de definir un campo numérico que se incrementa automáticamente con cada inserción de fila en la tabla. Cuando se inserta una nueva fila en la tabla, el valor del campo "id" se asigna automáticamente y se incrementa en uno respecto al valor de la fila anterior. Esto es útil porque evita la necesidad de que el usuario especifique manualmente el valor del "id" al insertar nuevas filas en la tabla "trajectories". Simplifica el proceso de inserción de datos y garantiza que cada fila tenga un identificador único y consecutivo.

- **La lave foránea en PostgreSQL** es un paso esencial para mantener la integridad referencial entre tablas.

### Recursos esenciales para el proyecto

- [ x ]  [Configurar una aplicación NodeJS con Express y TypeScript.](https://hackernoon.com/how-to-setup-a-nodejs-app-with-express-and-typescript)

- [ x ]  [Configuración para empezar a usar: Vercel Postgres y pgAdmin-lectura.](https://drive.google.com/file/d/1X60AvNWVKUYPd2_e1Wus7Mpldng5AQSU/view)

- [ x ] [Relacionar tablas en pgAdmin](https://www.youtube.com/watch?v=1sVEcZlgr9Q)

- [ x ] [Empezar a usar Prisma-video.](https://youtu.be/N5dkg28jRF0?si=6tof1h-CmhTf9Ey5)

- [ x ] [Empezar a usar Prisma-lectura.](https://blog.logrocket.com/prisma-orm-adoption-guide/)

- [ x ] [Documentación de Prisma sobre models.](https://www.prisma.io/docs/orm/prisma-schema/data-model/models)

- [ x ] [Documentación de prisma sobre paginación.](https://www.prisma.io/docs/orm/prisma-client/queries/pagination#offset-pagination)

- [ x ] [API CRUD REST con Node.js, Express y PostgreSQL.](https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/)

- [ x ] [Documentar API con Swagger & Node js & Express](https://www.youtube.com/watch?v=rIWGcxnVIA8)

- [ x ] [Entendiendo el editor online de swagger-video.](https://www.youtube.com/watch?v=SdsaZ-t1QwA)
