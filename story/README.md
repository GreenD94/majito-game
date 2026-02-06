# 🌹 Historia: Enemigos, Dragones y una Pésima Idea

Esta es la estructura de la historia dividida en 9 partes más una apertura.

## 📁 Estructura de Carpetas

```
story/
├── shared/
│   └── common.css          # Estilos compartidos
├── opening/                # Apertura (antes de Parte 1)
│   ├── index.html
│   ├── script.js
│   └── style.css
├── part1/                  # Parte 1 - El mundo normal
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── background1.png     # ⚠️ PROPORCIONAR
│   └── animation1.png       # ⚠️ PROPORCIONAR
├── part2/                  # Parte 2 - El conflicto inicial
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── background2.png     # ⚠️ PROPORCIONAR
│   └── animation2.png       # ⚠️ PROPORCIONAR
├── part3/                  # Parte 3 - La misión forzada
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── background3.png     # ⚠️ PROPORCIONAR
│   └── animation3.png       # ⚠️ PROPORCIONAR
├── part4/                  # Parte 4 - La fricción
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── background4.png     # ⚠️ PROPORCIONAR
│   └── animation4.png       # ⚠️ PROPORCIONAR
├── part5/                  # Parte 5 - La grieta emocional
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── background5.png     # ⚠️ PROPORCIONAR
│   └── animation5.png       # ⚠️ PROPORCIONAR
├── part6/                  # Parte 6 - El punto medio
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── background6.png     # ⚠️ PROPORCIONAR
│   └── animation6.png       # ⚠️ PROPORCIONAR
├── part7/                  # Parte 7 - El momento vulnerable
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── background7.png     # ⚠️ PROPORCIONAR
│   └── animation7.png       # ⚠️ PROPORCIONAR
├── part8/                  # Parte 8 - La confesión
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── background8.png     # ⚠️ PROPORCIONAR
│   └── animation8.png       # ⚠️ PROPORCIONAR
└── part9/                  # Parte 9 - El cierre
    ├── index.html
    ├── script.js
    ├── style.css
    ├── background9.png     # ⚠️ PROPORCIONAR
    └── animation9.png       # ⚠️ PROPORCIONAR
```

## 🎬 Assets Asignados

### Videos (en `story/shared/`):
- ✅ `her-wizard-talking.mp4` - Ella hablando vestida de maga (Partes 1-9)
- ✅ `him-knight-talking.mp4` - Él hablando vestido de caballero (Partes 1-9)
- ✅ `him_and_her_dancing.mp4` - Baile final (Parte 9)

**Nota:** La apertura usa los videos de la raíz:
- `he-talks.mp4` (ya existe)
- `she-talk.mp4` (ya existe)

### Imágenes (en `story/shared/`):
- ✅ `main_background.jpg` - Fondo principal (usado en todas las partes)
- ✅ `her_attacking_him.png` - Escena de conflicto (Partes 1-4)
- ✅ `him_and_her_encounter_dragon.png` - Encuentro con dragón (Partes 5-8)

### Distribución de Assets por Capítulo:

| Capítulo | Fondo | Animación Final |
|----------|-------|-----------------|
| Apertura | `bg.png` (raíz) | - |
| Parte 1 | `main_background.jpg` | `her_attacking_him.png` |
| Parte 2 | `main_background.jpg` | `her_attacking_him.png` |
| Parte 3 | `main_background.jpg` | `her_attacking_him.png` |
| Parte 4 | `main_background.jpg` | `her_attacking_him.png` |
| Parte 5 | `main_background.jpg` | `him_and_her_encounter_dragon.png` |
| Parte 6 | `main_background.jpg` | `him_and_her_encounter_dragon.png` |
| Parte 7 | `main_background.jpg` | `him_and_her_encounter_dragon.png` |
| Parte 8 | `main_background.jpg` | `him_and_her_encounter_dragon.png` |
| Parte 9 | `main_background.jpg` | `him_and_her_dancing.mp4` (video) |

## 🌐 Cómo Acceder

Cada parte es una URL independiente:

- **Apertura:** `story/opening/index.html`
- **Parte 1:** `story/part1/index.html`
- **Parte 2:** `story/part2/index.html`
- ... y así sucesivamente

La navegación entre partes es automática: al finalizar cada capítulo, aparece un botón para continuar al siguiente.

## ✨ Características

### Tipos de Texto Soportados

1. **Diálogo normal:** Texto de personajes con video
2. **Narración:** Texto dorado en cursiva (sin video)
3. **Títulos:** Texto grande con efecto de llamas (sin video)

### Rompimiento de la 4ta Pared

Cuando los personajes mencionan al autor o miran al cielo, esto se muestra como texto normal (no se anima). Por ejemplo, en la Parte 8 cuando dicen "El autor se quedó sin finales épicos", esto aparece como diálogo normal.

### Animaciones al Final

Al terminar cada capítulo:
1. Se muestra la animación del capítulo (imagen)
2. Después de 3 segundos, aparece el botón "Continuar →"
3. Al hacer clic, navega al siguiente capítulo

## 📝 Personalización

Para cambiar diálogos, edita el array `dialogues` en el archivo `script.js` de cada parte.

Para cambiar fondos o animaciones, simplemente reemplaza los archivos PNG en cada carpeta.

## 🎯 Flujo de la Historia

1. **Apertura** → Automáticamente va a Parte 1
2. **Parte 1** → Botón lleva a Parte 2
3. **Parte 2** → Botón lleva a Parte 3
4. ... y así hasta Parte 9
5. **Parte 9** → Botón lleva de vuelta al inicio (`../../index.html`)

