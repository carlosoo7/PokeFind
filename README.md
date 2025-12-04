# 🎮 Link: https://carlosoo7.github.io/PokeFind/

# 🎮🔥 PokeFind — Buscador de Pokémon con Modo Claro/Oscuro

PokeFind es una aplicación web interactiva que permite **buscar Pokémon por nombre o ID**, mostrando datos oficiales de la PokéAPI como imágenes, tipos, estadísticas y descripciones.  
Además, muestra Pokémon aleatorios al cargar la página y cuenta con un elegante **modo claro/oscuro con persistencia en localStorage**.

---

## 🌟 Características Principales

### 🔍 **Búsqueda avanzada**
- Busca Pokémon por **nombre** o **ID**.
- Muestra:
  - Imagen oficial (artwork HD)
  - Descripción en español
  - Estadísticas con barras animadas
  - Tipos del Pokémon con estilos personalizados
  - ID y nombre formateado

---

### 🎨 **Modo Claro/Oscuro**
- Accesible desde un interruptor tipo *toggle switch*.
- Transiciones suaves de color y background.
- Preferencia guardada en `localStorage`.

---

### 🎴 **Tarjetas Dinámicas**
- Tarjeta especial para el Pokémon buscado.
- 4 tarjetas adicionales de Pokémon aleatorios.
- Diseños responsivos que funcionan en:
  - PC
  - Tablets
  - Teléfonos

---

### 🖼️ **Interfaz Estilizada**
- Banner superior con imagen temática.
- Colores configurados con variables CSS (`--color-primario`, `--color-secundario`).
- Sombra, bordes, transiciones y una estética inspirada en el mundo Pokémon.

---

## 🛠️ Tecnologías Usadas

- **HTML5**
- **CSS3** (responsive + variables + animaciones)
- **JavaScript Vanilla**
- **PokéAPI** para obtener datos: https://pokeapi.co/

---

## 🚀 Cómo Usarlo

1. Ingresa un nombre o ID en la barra de búsqueda.  
2. Haz clic en **Buscar**.  
3. Obtendrás:
   - Nombre del Pokémon
   - Descripción en español
   - Imagen HD
   - Tipos
   - Estadísticas con barras animadas

El sistema ocultará las tarjetas aleatorias y mostrará una tarjeta detallada exclusiva del Pokémon buscado.

---

## 🌗 Persistencia del Tema

El modo visual se mantiene incluso si recargas la página, gracias a:

```js
localStorage.getItem("theme")
```

📂 PokeFind
 ├── index.html
 ├── css/
 │    └── estilos.css
 ├── js/
 │    └── script.js
 └── img/
      ├── pokmon.jpg
      ├── fondo3.jpg
      └── imágenes de Pokémon (si aplica)
🔧 Funciones Clave (Resumen)
✨ Cargar Pokémon Aleatorios

Se generan 4 Pokémon aleatorios para llenar las tarjetas iniciales.

✨ Búsqueda por Nombre o ID

Llama a dos endpoints:

/pokemon/{name}

/pokemon-species/{name}

Obtiene descripción en español.

✨ Renderizado de estadísticas

Barreras animadas con porcentaje limitado a 100.

✨ Modo Claro/Oscuro

Modifica variables CSS y se guarda en localStorage.

📱 Responsive Design

Incluye media queries adaptadas para:

+1200px

1024px

768px

480px

360px

El diseño se adapta a cualquier pantalla.

🧑‍🎨 Créditos

Proyecto realizado por Carlos Calderón (2025).
Inspirado en el universo Pokémon y usando datos de la PokéAPI.

⚡ Licencia

Este proyecto es libre para uso educativo y personal.
No tiene relación oficial con Nintendo, Game Freak o The Pokémon Company.
