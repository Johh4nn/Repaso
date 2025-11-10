# 📱 Repaso - Aplicación Móvil Multifuncional

Una aplicación móvil desarrollada con **Ionic** y **Angular** que ofrece diversas funcionalidades útiles en un solo lugar.

## 🚀 Características

### 🎵 Buscador de Canciones (Lrclib)
- Búsqueda de letras de canciones por título y artista
- Visualización completa de letras
- Integración con la API de Lrclib
- Diseño moderno y responsive

### 😂 Chistes Aleatorios
- Generación de chistes aleatorios con un solo toque
- Interfaz divertida y colorida
- Animaciones atractivas
- Actualización instantánea

### 🎮 Ofertas de Juegos
- Explorador de ofertas de videojuegos
- Búsqueda por título de juego
- Precios en tiempo real
- Enlaces directos a las ofertas
- Tema gaming oscuro con efectos modernos

## 🛠️ Tecnologías Utilizadas

- **Ionic Framework** - Framework móvil híbrido
- **Angular** - Framework de aplicaciones web
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS para estilos
- **APIs Externas**:
  - Lrclib (Letras de canciones)
  - API de Chistes
  - CheapShark (Ofertas de juegos)

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Ionic CLI instalado globalmente

### Pasos de Instalación Detallados

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Johh4nn/Repaso.git
   cd Repaso
Instalar Ionic CLI globalmente (si no lo tienes)

bash
npm install -g @ionic/cli
Instalar dependencias del proyecto

bash
npm install
Ejecutar la aplicación en modo desarrollo

bash
ionic serve
Abrir en el navegador

La aplicación se abrirá automáticamente en http://localhost:8100

Comandos Adicionales
Para compilar para producción:

bash
ionic build
Para ejecutar en un dispositivo móvil:

bash
ionic capacitor add android
ionic capacitor run android
Para iOS:

bash
ionic capacitor add ios
ionic capacitor run ios
Ejecutar pruebas:

bash
npm test
Linter y formateo:

bash
npm run lint
🏗️ Estructura del Proyecto
text
src/
├── app/
│   ├── pages/
│   │   ├── search/              # Buscador de canciones
│   │   │   ├── search.page.html
│   │   │   ├── search.page.scss
│   │   │   └── search.page.ts
│   │   ├── jokes/               # Generador de chistes
│   │   │   ├── jokes.page.html
│   │   │   ├── jokes.page.scss
│   │   │   └── jokes.page.ts
│   │   └── games/               # Ofertas de juegos
│   │       ├── games.page.html
│   │       ├── games.page.scss
│   │       └── games.page.ts
│   ├── services/                # Servicios para APIs
│   │   ├── music.service.ts
│   │   ├── jokes.service.ts
│   │   └── games.service.ts
│   ├── models/                  # Interfaces TypeScript
│   │   ├── song.model.ts
│   │   ├── joke.model.ts
│   │   └── game.model.ts
│   └── theme/                   # Variables globales
│       └── variables.scss
├── assets/                      # Recursos estáticos
├── environments/                # Configuraciones
└── global.scss                  # Estilos globales
🎨 Personalización y Estilos
Variables CSS Globales
El proyecto utiliza un sistema de diseño unificado. Puedes personalizar los colores en src/theme/variables.scss:

scss
:root {
  --primary-color: #3880ff;
  --secondary-color: #3dc2ff;
  --accent-color: #5260ff;
  --background-color: #f8f9fa;
  --card-background: #ffffff;
  --text-primary: #2c2c2c;
  --text-secondary: #6c757d;
  --border-radius: 16px;
  --shadow-light: 0 4px 12px rgba(0, 0, 0, 0.08);
}
Temas Específicos por Página
Buscador de Canciones: Diseño limpio y minimalista

Chistes Aleatorios: Colores vibrantes y animaciones divertidas

Ofertas de Juegos: Tema oscuro con acentos gaming

🔌 Configuración de APIs
Lrclib API (Canciones)
La aplicación se conecta automáticamente a la API pública de Lrclib. No requiere configuración adicional.

Joke API (Chistes)
Utiliza una API pública de chistes. Configuración en src/services/jokes.service.ts:

typescript
private apiUrl = 'https://official-joke-api.appspot.com/random_joke';
CheapShark API (Juegos)
Para ofertas de videojuegos. Configuración en src/services/games.service.ts:

typescript
private apiUrl = 'https://www.cheapshark.com/api/1.0/deals';
📱 Funcionalidades Detalladas
1. Buscador de Canciones
Archivos principales:

search.page.html - Interfaz de usuario

search.page.scss - Estilos personalizados

search.page.ts - Lógica de negocio

Características:

Búsqueda en tiempo real

Resultados con miniaturas de álbumes

Visualizador de letras con scroll

Enlaces externos a fuentes

2. Chistes Aleatorios
Archivos principales:

jokes.page.html - Interfaz divertida

jokes.page.scss - Estilos coloridos

jokes.page.ts - Gestión de estado

Características:

Animaciones de fade in/out

Botón con efectos hover

Spinner de carga personalizado

Diseño responsive

3. Ofertas de Juegos
Archivos principales:

games.page.html - Grid de juegos

games.page.scss - Tema gaming oscuro

games.page.ts - Búsqueda y filtrado

Características:

Búsqueda por nombre de juego

Tarjetas con información detallada

Precios y descuentos

Enlaces a tiendas externas

🚀 Despliegue
Para Web
bash
ionic build --prod
Para Android
bash
ionic capacitor add android
ionic capacitor build android
Para iOS
bash
ionic capacitor add ios
ionic capacitor build ios
Para PWA (Progressive Web App)
bash
ionic build --prod
npx cap copy
🐛 Solución de Problemas Comunes
Error: Module not found

bash
npm install
npm audit fix
Error: Ionic command not found

bash
npm install -g @ionic/cli
Error: Port already in use

bash
ionic serve --port 8101
Problemas con las APIs:

Verificar conexión a internet

Revisar la consola del navegador para errores CORS

Verificar que las URLs de las APIs estén actualizadas

🤝 Guía de Contribución
Hacer fork del proyecto

Crear una rama feature

bash
git checkout -b feature/nueva-funcionalidad
Realizar commits descriptivos

bash
git commit -m "feat: agregar nueva funcionalidad de búsqueda"
Push a la rama

bash
git push origin feature/nueva-funcionalidad
Abrir Pull Request

Convenciones de Código
Usar TypeScript para toda la lógica

Seguir el estilo de código de Angular

Mantener los componentes modulares

Documentar funciones complejas

📝 Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

👨‍💻 Autor
Johh4nn - GitHub

🙏 Agradecimientos
Equipo de Ionic por el excelente framework

Desarrolladores de las APIs públicas utilizadas

Comunidad de Angular por el soporte continuo

Contribuidores y testers
