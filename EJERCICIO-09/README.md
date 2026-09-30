# EJERCICIO 09 · INTEGRACIÓN (Busca superhéroe)

## Qué he aprendido
* **Construcción de URLs dinámicas en Frontend**: Aprendí a construir rutas HTTP dinámicas interpolando o concatenando variables del estado local (`id`) dentro de la URL enviada mediante `fetch()` (`${API_URL}/heroes/${id}`).
* **Procesamiento de Path Params en NestJS**: Reforcé el uso del decorador `@Param('id')` en el controlador para extraer parámetros pasados a través del path de la URL y delegar su búsqueda al servicio.
* **Integración de formularios simples en React Native**: Utilicé `TextInput` con `keyboardType="numeric"` para capturar la entrada del usuario, vincularla al estado mediante `useState` y disparar búsquedas dinámicas al presionar un botón.
* **Flujo Full Stack de consulta por ID**: Experimenté todo el ciclo completo de datos: `TextInput` (React Native) ➔ `fetch` dinámico ➔ `Controller` (`@Param`) ➔ `Service` (`.find()`) ➔ Respuesta JSON ➔ Renderizado de la ficha del superhéroe.

---

## Respuesta a la pregunta de comprensión

**Sigue el valor `id` desde React Native hasta `@Param('id')`. ¿Por dónde pasa?**
> **Respuesta:** Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir. El valor nace en el estado del componente de React Native (`id` dentro del `TextInput`), se incorpora como parte del path al construir la URL dinámica en la llamada HTTP (`API_URL + '/heroes/' + id`), viaja por la red a través del método `GET` y es finalmente recuperado e interpretado por NestJS en la capa del controlador mediante el decorador `@Param('id')`.

---

## Qué he modificado

1. **`backend/src/heroes/heroes.service.ts`**:
   * Se definieron los datos con el array de héroes (`id`, `nombre`, `poder`, `universo`).
   * Se implementó el método `findOne(id: number)` utilizando `.find()` para retornar el superhéroe que coincide con el ID recibido.

2. **`backend/src/heroes/heroes.controller.ts`**:
   * Se implementó el decorador `@Get(':id')`.
   * Se usó `@Param('id') id: string` enviando la conversión `Number(id)` al método `findOne()` del servicio.

3. **`frontend/App.tsx`**:
   * Se definió el estado `id` con valor inicial y la función `buscarHeroe` para realizar la petición a la URL dinámica.
   * Se agregó el `TextInput` para ingresar el identificador deseado.
   * Se diseñó la ficha del personaje para mostrar su `nombre`, `poder` y `universo` de forma dinámica únicamente si existe respuesta (`heroe && ...`).

---

## Resultado

* **Búsqueda por ID (ejemplo `ID = 2`)**:
  1. El usuario introduce `2` en el campo de texto y pulsa el botón **Buscar**.
  2. React Native realiza un `GET` a `http://TU_IP:3000/heroes/2`.
  3. NestJS procesa la petición con `@Param('id')`, busca en el servicio y devuelve el objeto JSON correspondiente.
  4. La aplicación móvil actualiza su estado y muestra la ficha del héroe:
     ```text
     🦸 Busca superhéroe
     [ Input: 2 ] [ Botón: Buscar ]

     Batman · Poder 85
     Universo DC
     ```