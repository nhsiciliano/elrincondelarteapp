# El Rincón del Arte · Landing Page

Proyecto web construido con [Astro 5](https://astro.build/) para la academia de danza **El Rincón del Arte**, enfocado en presentar su propuesta artística, estilos de enseñanza y vías de contacto con una estética moderna y minimalista. El objetivo es ofrecer una primera experiencia digital fluida, pensada para potenciales alumnos y familias.

## 🧱 Stack tecnológico

- **Astro 5** como framework principal orientado a Static Site Generation con islands de interactividad puntual.
- **TypeScript** integrado de forma nativa para garantizar tipado en componentes y datos.
- **CSS modular** (sin framework) organizado en `src/styles/global.css`, con diseño responsive, animaciones suaves y variables CSS para la paleta pastel.
- **Despliegue en Vercel** mediante `@astrojs/vercel`, optimizando build estático e integración continua.
- Herramientas de desarrollo: PNPM, Astro Check, compatibilidad con Netlify forms.

## ✨ Características principales

- Navegación sticky con logo, anclas internas y enlaces a redes sociales (Instagram y YouTube).
- Hero section con call to action, badges informativos y fotografía destacada.
- Cards alternadas para los estilos de danza (Clásica, Contemporáneo, Urbano, Flex, Trainning) con gradientes personalizados.
- Galería en formato carrusel interactivo y lightbox para explorar imágenes en tamaño completo.
- Sección “Sobre mí” destacando la trayectoria de Leila Palavecino.
- Grilla de horarios 2025 con detalles por día y nivel.
- Formulario de contacto integrable con Netlify para gestión de consultas.
- Footer con branding, llamadas a la acción y enlaces externos.

## 🚀 Scripts disponibles

| Comando         | Descripción                                           |
| --------------- | ----------------------------------------------------- |
| `pnpm install`  | Instala dependencias                                  |
| `pnpm dev`      | Levanta el servidor de desarrollo en `localhost:4321` |
| `pnpm build`    | Genera el build de producción en `./dist/`            |
| `pnpm preview`  | Sirve el build generado para pruebas locales          |
| `pnpm astro check` | Ejecuta análisis estático y validación de tipos   |

## 📁 Estructura relevante

```text
src/
├── components/
│   ├── layout/
│   │   ├── Footer.astro
│   │   └── NavBar.astro
│   ├── sections/
│   │   ├── AboutSection.astro
│   │   ├── ContactSection.astro
│   │   ├── GallerySection.astro
│   │   ├── HeroSection.astro
│   │   ├── ScheduleSection.astro
│   │   └── StylesSection.astro
│   └── Welcome.astro (plantilla heredada sin uso en producción)
├── data/
│   ├── gallery.ts
│   ├── navigation.ts
│   ├── schedule.ts
│   └── styles.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## 💼 Conocimientos aplicados

- Lideré el rediseño integral de la landing page de la academia El Rincón del Arte, transformando la plantilla base de Astro en un sitio responsive con identidad propia.
- Implementé componentes modulares reutilizables (navbar, secciones hero, cards de estilos, carrusel, formulario y footer) consumiendo datos tipados desde archivos de configuración.
- Apliqué principios de UI moderna: gradientes suaves, transiciones, animaciones `fade-up`, y un carrusel accesible con vistas a lightbox.
- Organicé la arquitectura del proyecto priorizando legibilidad y escalabilidad (separación por `components`, `data`, `styles`).
- Preparé la aplicación para despliegue continuo en Vercel con el adaptador oficial y soporte para formularios sin backend.

---

Para consultas o mejoras, iniciá el entorno con `pnpm dev` y abrí `http://localhost:4321`.
