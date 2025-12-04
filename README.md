# PORTFOLIO-JAVASCRIPT-ANDRES-MARTINO

Este portfolio trata sobre el curso de JavaScript que se realiza en el curso de la casa del futuro. Consta de mini-proyectos que abarcan desde conceptos básicos hasta programación orientada a objetos avanzada.

## 📋 Descripción General

Este repositorio contiene 19 mini-proyectos de JavaScript diseñados para aprender y practicar diferentes conceptos, desde fundamentos básicos hasta patrones avanzados de desarrollo.

---

## 📚 Contenido del Proyecto

### **Módulo 1: Fundamentos Básicos**

#### 1. **Calculadora Simple en Consola**
- **Archivo:** `calculator.html` / `calculator.js`
- **Conceptos:** Variables, tipos de datos, operadores básicos (+, -, *, /)
- **Descripción:** Realiza operaciones matemáticas básicas en la consola del navegador.

#### 2. **Adivina el Número**
- **Archivo:** `guessNumber.html` / `guessNumber.js`
- **Conceptos:** Condicionales (if/else), bucles, generación de números aleatorios
- **Descripción:** Juego interactivo donde el usuario intenta adivinar un número secreto con pistas.

#### 3. **Generador de Tablas de Multiplicar**
- **Archivo:** `multiplier.html` / `multiplier.js`
- **Conceptos:** Bucles (for), arrays, métodos de array (push), iteración (for...of)
- **Descripción:** Genera tablas de multiplicar y almacena resultados en arrays.
- **Desafío:** Guardar resultados en array y mostrarlos con `for...of`

#### 4. **Conversor de Temperatura**
- **Archivo:** `temperatureConverter.html` / `temperatureConverter.js`
- **Conceptos:** Conversión de unidades, funciones, fórmulas matemáticas
- **Descripción:** Convierte entre Celsius, Fahrenheit y Kelvin.

#### 5. **Lista de Compras con Totales**
- **Archivo:** `shoppingListWithTotals.html` / `shoppingListWithTotals.js`
- **Conceptos:** Objetos, arrays de objetos, `forEach`, `reduce`, `filter`, `find`, `findIndex`, `splice`, `push`
- **Descripción:** Gestiona una lista de compras con cálculo automático de totales.
- **Desafío:** Agregar y eliminar productos dinámicamente con `push()` y `splice()`

#### 6. **Lista de Contactos Básica**
- **Archivo:** `basicContactList.html` / `basicContactList.js`
- **Conceptos:** CRUD básico, manipulación de arrays de objetos
- **Descripción:** Aplicación para gestionar contactos con opciones de agregar, ver y eliminar.

#### 7. **Reloj Digital Dinámico**
- **Archivo:** `digitalClock.html` / `digitalClock.js`
- **Conceptos:** Objetos Date, `setInterval`, actualización en tiempo real
- **Descripción:** Reloj que muestra la hora actual actualizándose cada segundo.

---

### **Módulo 2: Interfaz Gráfica y DOM**

#### 8. **Calculadora Digital con Interfaz Gráfica**
- **Archivo:** `graficCalculator.html` / `graficCalculator.js`
- **Conceptos:** Manipulación del DOM, event listeners, `eval()`, manejo de errores
- **Descripción:** Calculadora con botones que permite realizar operaciones matemáticas visualmente.
- **Características:** Botón limpiar, evaluación de expresiones, manejo de errores

#### 9. **Lista de Tareas (To-Do App)**
- **Archivo:** `todoList.html` / `todoList.js`
- **Conceptos:** DOM manipulation, event listeners, localStorage, persistencia de datos
- **Descripción:** Aplicación para crear, listar y eliminar tareas.
- **Desafío:** Guardar tareas en `localStorage` para que persistan al recargar la página
- **Características:** Almacenamiento persistente en el navegador

#### 10. **Formulario de Registro con Validación**
- **Archivo:** `registerForm.html` / `registerForm.js`
- **Conceptos:** Validación de formularios, expresiones regulares, localStorage, objetos Date
- **Descripción:** Formulario con validación de correo electrónico, contraseña y campos requeridos.
- **Desafío:** Almacenar datos en `localStorage` y mostrar alerta personalizada al registrarse
- **Características:** Validación robusta, almacenamiento de usuarios, bienvenida personalizada

---

### **Módulo 3: Funcionalidades Avanzadas**

#### 11. **Cronómetro en Pantalla**
- **Archivo:** `timer.html` / `timer.js`
- **Conceptos:** `setInterval`, Web Audio API, animaciones CSS, umbrales de alarma
- **Descripción:** Cronómetro funcional con inicio, pausa y reinicio.
- **Desafío:** Agregar sonido y animación cuando alcanza ciertos segundos
- **Características:** Beep con frecuencia variable, animación de pulso, umbrales configurables

#### 12. **App del Clima con API Pública**
- **Archivo:** `clima.html` / `clima.js`
- **Conceptos:** Fetch API, consumo de APIs REST, JSON, promesas
- **Descripción:** Consulta información del clima usando una API pública.
- **Características:** Búsqueda por ciudad, actualización en tiempo real, datos meteorológicos

#### 13. **Buscador de Usuario (API GitHub)**
- **Archivo:** `userSearch.html` / `userSearch.js`
- **Conceptos:** Fetch API, consumo de API GitHub, manejo de errores asincronos
- **Descripción:** Busca usuarios de GitHub y muestra su información (avatar, repositorios, etc.).
- **Características:** Búsqueda interactiva, visualización de perfiles, datos en tiempo real

#### 14. **Guardar Notas en el Navegador**
- **Archivo:** `notasNavegador.html` / `notasNavegador.js`
- **Conceptos:** localStorage, JSON, CRUD completo
- **Descripción:** Aplicación para crear, editar, guardar y eliminar notas persistentes.
- **Características:** Almacenamiento persistente, interfaz de notas

---

### **Módulo 4: Modularización y Buenas Prácticas**

#### 15. **Gestor de Tareas Modularizado (ES Modules)**
- **Directorio:** `gestorTareas_Modularizado/`
- **Archivos:** `index.html`, `main.js`, `tasks.js`, `storage.js`, `ui.js`, `styles.css`
- **Conceptos:** ES6 Modules, `import`/`export`, separación de responsabilidades
- **Descripción:** Gestor de tareas profesional con arquitectura modular.
- **Estructura:**
  - `tasks.js`: Lógica de tareas
  - `storage.js`: Persistencia en localStorage
  - `ui.js`: Manipulación del DOM
  - `main.js`: Orquestación de módulos

#### 16. **Buenas Prácticas y Refactorización**
- **Directorio:** `goodPractices/`
- **Archivos:** `index.html`, `main.js`
- **Conceptos:** 
  - Regla "function length <= 20 lines"
  - Single Responsibility Principle
  - DRY (Don't Repeat Yourself)
  - Funciones puras
- **Descripción:** Ejemplos de código MAL y BIEN aplicando estándares profesionales.
- **Tema Principal:** Validación de datos con funciones pequeñas y reutilizables

#### 17. **Introducción a Programación Orientada a Objetos**
- **Directorio:** `POO/`
- **Archivos:** `index.html`, `script.js`
- **Conceptos:**
  - Clases
  - Constructores
  - Propiedades y métodos
  - Instanciación de objetos
- **Descripción:** Fundamentos de POO con ejemplos prácticos en JavaScript.

#### 18. **Herencia, Métodos Estáticos y Encapsulación**
- **Directorio:** `inheritance/`
- **Archivos:** `index.html`, `script.js`
- **Conceptos:**
  - Herencia de clases
  - Métodos estáticos
  - Encapsulación
  - Super y extensión
- **Descripción:** Conceptos avanzados de POO en JavaScript.

---

### **Módulo 5: Visualización de Datos**

#### 19. **Gráficos Dinámicos de Ventas (Chart.js + localStorage)**
- **Directorio:** `graficoVentas/`
- **Archivos:** `index.html`, `script.js`, `style.css`
- **Conceptos:**
  - Librería Chart.js
  - Visualización de datos
  - Almacenamiento de datos en localStorage
  - Gráficos dinámicos
- **Descripción:** Crea y visualiza gráficos de ventas con datos persistentes.
- **Características:** Gráficos interactivos, entrada de datos, almacenamiento

---

## 🎯 Objetivos de Aprendizaje

### Conceptos Cubiertos:

✅ **Fundamentos:**
- Variables y tipos de datos
- Operadores y expresiones
- Condicionales (if/else, switch)
- Bucles (for, while, for...of, forEach)

✅ **Estructuras de Datos:**
- Arrays y métodos (push, splice, filter, map, reduce, find, forEach)
- Objetos y objetos anidados
- JSON

✅ **DOM y Eventos:**
- Selección de elementos (getElementById, querySelector, querySelectorAll)
- Manipulación de DOM
- Event listeners
- Actualización dinámica

✅ **APIs y Datos:**
- Fetch API
- Consumo de APIs REST
- Manejo de promesas
- JSON parsing

✅ **Almacenamiento:**
- localStorage
- Persistencia de datos
- Serialización/Deserialización

✅ **Programación Avanzada:**
- Funciones y scope
- Closures
- ES6 Modules (import/export)
- Programación Orientada a Objetos
- Herencia y polimorfismo

✅ **Buenas Prácticas:**
- Funciones pequeñas (<=20 líneas)
- Single Responsibility Principle
- Validación de datos
- Manejo de errores
- Código limpio y legible

---

## 📂 Estructura de Archivos

```
PORTFOLIO-JAVASCRIPT-ANDRES-MARTINO/
├── Proyectos individuales (HTML/JS)
│   ├── calculator.html / calculator.js
│   ├── guessNumber.html / guessNumber.js
│   ├── multiplier.html / multiplier.js
│   ├── temperatureConverter.html / temperatureConverter.js
│   ├── shoppingListWithTotals.html / shoppingListWithTotals.js
│   ├── basicContactList.html / basicContactList.js
│   ├── digitalClock.html / digitalClock.js
│   ├── graficCalculator.html / graficCalculator.js
│   ├── todoList.html / todoList.js
│   ├── registerForm.html / registerForm.js
│   ├── timer.html / timer.js
│   ├── clima.html / clima.js
│   ├── userSearch.html / userSearch.js
│   └── notasNavegador.html / notasNavegador.js
├── gestorTareas_Modularizado/
│   ├── index.html
│   ├── main.js
│   ├── tasks.js
│   ├── storage.js
│   ├── ui.js
│   └── styles.css
├── goodPractices/
│   ├── index.html
│   └── main.js
├── POO/
│   ├── index.html
│   └── script.js
├── inheritance/
│   ├── index.html
│   └── script.js
├── graficoVentas/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── styles.css (estilos globales)
├── ux.js (funcionalidades compartidas)
├── navMenu.html (menú de navegación)
├── index.html (página principal)
└── README.md (este archivo)
```

---

## 🚀 Cómo Usar Este Portfolio

1. **Clonar o descargar** el repositorio
2. **Abrir** `index.html` en tu navegador
3. **Navegar** a través del menú para acceder a cada proyecto
4. **Explorar** el código fuente de cada mini-proyecto
5. **Practicar** modificando y mejorando los proyectos

---

## 💡 Desafíos Completados

✅ Multiplicador: Guardar resultados en array y mostrar con `for...of`
✅ Lista de compras: Agregar/eliminar productos con `push()` y `splice()`
✅ Calculadora: Botón de limpiar pantalla
✅ To-Do List: Persistencia con localStorage
✅ Formulario: Almacenamiento de datos y alertas personalizadas
✅ Cronómetro: Sonido y animación en umbrales específicos
✅ Buenas prácticas: Refactorización con regla de 20 líneas máximo

---

## 📖 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript ES6+** - Lógica principal
- **LocalStorage** - Persistencia de datos
- **Fetch API** - Consumo de APIs
- **Chart.js** - Visualización de gráficos (Módulo 5)
- **Web Audio API** - Sonidos (Cronómetro)

---

## 👤 Autor

**Andrés Martino**  
Estudiante del curso de JavaScript - Casa del Futuro

---

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 🎓 Próximos Pasos

- Implementar frameworks (React, Vue)
- Backend con Node.js
- Bases de datos
- Testing y calidad de código
- Despliegue en producción

---

**¡Espero que disfrutes explorando este portfolio de JavaScript!** 🎉