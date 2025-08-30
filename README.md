# Odona - Blockchain Staking for Education

Una aplicación React que simula un sistema de staking blockchain para financiar proyectos educativos para niñas en comunidades vulnerables.

## Características

- **Landing Page**: Hero section con diseño purple gradient inspirado en la imagen de referencia
- **Explicación del Proyecto**: Sección informativa sobre la misión de Virtua
- **Sección de Proyectos**: Tarjetas con proyectos educativos, metas y botones de apoyo
- **Simulación de Staking**: Interfaz para "invertir" fondos en proyectos específicos
- **Dashboard de Impacto**: Visualización del impacto social generado por las inversiones

## Tecnologías Utilizadas

- React 18
- React Router DOM
- CSS3 con gradientes y animaciones
- Diseño responsivo

## Instalación y Uso

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar la aplicación:
```bash
npm start
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Estructura del Proyecto

```
src/
├── components/
│   ├── Header.js          # Navegación principal
│   ├── Hero.js            # Sección hero con call-to-action
│   ├── ProjectExplanation.js  # Explicación del proyecto
│   ├── ProjectsSection.js     # Grid de proyectos disponibles
│   ├── StakingInterface.js    # Simulador de staking
│   └── Dashboard.js           # Dashboard de métricas de impacto
├── App.js                 # Componente principal con routing
├── App.css               # Estilos principales
├── index.js              # Punto de entrada
└── index.css             # Estilos globales
```

## Funcionalidades

### Landing Page
- Hero section con gradiente purple y animaciones
- Navegación fija con blur effect
- Call-to-action buttons

### Proyectos
- **Educación Digital Rural**: Alfabetización digital para 200 niñas
- **Laboratorio STEM Móvil**: Laboratorio de ciencias móvil
- **Becas Universitarias Tech**: Becas completas para carreras STEM

### Staking Simulation
- Selección de proyecto
- Cálculo de impacto en tiempo real
- Simulación de transacción blockchain
- Feedback visual del proceso

### Dashboard
- Métricas de impacto social
- Visualización de ROI social
- Actividad reciente
- Estadísticas detalladas

## Diseño

El diseño está inspirado en la imagen de referencia proporcionada, utilizando:
- Paleta de colores purple/violet
- Gradientes suaves
- Iconos y emojis para representar conceptos
- Animaciones sutiles
- Diseño card-based
- Tipografía moderna (Inter)

## Próximas Mejoras

- Integración con blockchain real
- Sistema de autenticación
- Notificaciones en tiempo real
- Métricas más detalladas
- Integración con APIs de proyectos reales
