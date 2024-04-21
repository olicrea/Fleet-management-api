// Aquí está la lógica de la aplicación. Contiene el código de Express.js que configura el servidor y define las rutas y controladores
// Este archivo se compilará: el otro archivo será el resultado compilado de esta lógica en JavaScript, que es lo que realmente ejecuta Node.js. Es una práctica común mantener separados los archivos fuente (TypeScript) y los archivos compilados (JavaScript) en proyectos de TypeScript
import express, { Application, Request, Response } from 'express'; // import. express con interfaces tipados

const app: Application = express(); // define app express

const PORT: number = 3001;
// app.use() es un método utilizado para montar middleware en la aplicación.
app.use('/', (req: Request, res: Response): void => { // en ruta raiz se manejan solicitudes / void: indica que la función no devuelve ningún valor. 
    res.send('Hello world!');
});

app.listen(PORT, (): void => { // se inicia servidor en el puerto y escuchar las conexiones en un puerto
    console.log('SERVER IS UP ON PORT:', PORT);
});





/* { Application, Request, Response } from 'express';: Esta línea importa tres interfaces específicas de Express.js: Application, Request, y Response. Estas interfaces son parte de la API de Express y proporcionan tipos de datos y métodos para trabajar con las solicitudes HTTP entrantes y salientes en una aplicación Express.

Application: Representa la aplicación Express en sí misma. Proporciona métodos para configurar rutas, middleware y otros aspectos de la aplicación.

Request: Representa una solicitud HTTP entrante. Contiene información sobre la solicitud del cliente, como la URL, los parámetros de consulta, las cabeceras y el cuerpo de la solicitud.

Response: Representa la respuesta HTTP que será enviada al cliente. Contiene métodos para enviar datos de vuelta al cliente, como HTML, JSON, archivos estáticos, etc.

Importar estas interfaces te permite escribir código TypeScript o JavaScript más seguro y con mejor autocompletado, ya que proporciona información sobre los tipos de datos que se esperan y los métodos disponibles en las solicitudes y respuestas HTTP.*/
