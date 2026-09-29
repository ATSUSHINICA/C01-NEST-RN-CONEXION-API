1. Qué he aprendido

En este ejercicio he aprendido a configurar e instalar dependencias de Node.js en un proyecto de NestJS (npm install). También he aprendido el funcionamiento básico de los controladores de NestJS, cómo definir prefijos de ruta con @Controller('hola') y cómo responder a peticiones HTTP de tipo GET usando @Get().

2. Respuesta a la pregunta de comprensión

@Controller('hola'): Es el decorador encargado de definir el prefijo o ruta base (/hola) que atenderá este controlador en el servidor.

export class HolaController: Es la clase que agrupa las funciones encargadas de procesar las peticiones y permite exportarla para registrarla en el módulo principal.

@Get(): Es el decorador de método que indica que la función asociada responderá a las peticiones HTTP con método GET en la ruta elegida.

saludar(): Es la función encargada de ejecutar la lógica y devolver la respuesta al cliente. Si no existiera, la ruta no tendría ningún manejador asociado y devolvería un error (404 / error de compilación).

3. Qué he modificado
Modifiqué el método saludar() dentro de src/hola/hola.controller.ts para personalizar el mensaje devuelto y añadir el campo de datos curso: 'DAM', manteniendo la ruta GET /hola.

4. Resultado
Al acceder desde el navegador a http://localhost:3000/hola, el servidor responde correctamente con un objeto JSON formateado como:

JSON
{
  "mensaje": "¡Hola, bienvenido a mi servidor NestJS!",
  "curso": "DAM"
}