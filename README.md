# 🏨 Casa Andina Hotels - Sistema de Reservas

> Proyecto de Diseño y Desarrollo de Experiencia de Usuario (UX)  
> Sistema de reserva de hoteles para la cadena **Casa Andina**

![Casa Andina](https://img.shields.io/badge/Casa%20Andina-Hoteles-gold?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.7-646CFF?style=for-the-badge&logo=vite)
![Styled Components](https://img.shields.io/badge/Styled--Components-6.1.19-DB7093?style=for-the-badge&logo=styled-components)

---

## 📋 Descripción del Proyecto

Aplicación web de reserva de hoteles desarrollada para **Casa Andina**, la cadena hotelera líder en Perú. Este proyecto forma parte del curso de **Diseño y Desarrollo de Experiencia de Usuario (UX)** y demuestra la implementación completa de un sistema de reservas moderno, intuitivo y responsive.

### ✨ Características Principales

- 🔐 **Autenticación**: Sistema de login y registro de usuarios
- 🏠 **Exploración**: Catálogo de 47 hoteles en 34 destinos del Perú
- 📅 **Reservas**: Flujo completo de reserva (fechas → habitación → pago → confirmación)
- 💳 **Pagos**: Múltiples métodos (Apple Pay, Google Pay, Visa, Mastercard, Amex, PayPal)
- 🧾 **Comprobantes**: Generación de vouchers descargables
- 🚖 **Servicios adicionales**: Solicitud de recojo en aeropuerto con tracking en tiempo real
- 👤 **Perfil de usuario**: Gestión de reservas, historial de pagos y datos personales

---

## 🌿 Ramas del Proyecto

Este repositorio contiene **tres ramas** que representan la evolución del proyecto:

### ⚛️ Rama `main` - Aplicación React (PRODUCCIÓN) 🌟

```bash
git checkout main
```

**Contenido**: Versión de producción con React - **Aplicación completa y funcional**.

**Stack Tecnológico**:

- **React 19.2.3** - Framework UI
- **Vite 7.2.7** - Build tool ultrarrápido
- **Styled Components 6.1.19** - CSS-in-JS
- **React Router DOM 7.10.1** - Navegación SPA
- **Bootstrap Icons** - Iconografía

**Características**:

- 🎨 **Design System** completo con tema centralizado
- 🧩 **Atomic Design** para componentes reutilizables
- 📱 **Mobile-first** con breakpoints responsive
- 🎭 **Animaciones** suaves y transiciones fluidas
- 🔄 **Estado global** con React Hooks
- 🚀 **Optimización** de performance
- ✅ **Mejoras UX** profesionales implementadas

---

### 🔧 Rama `feature/react` - Desarrollo React

```bash
git checkout feature/react
```

**Contenido**: Rama de desarrollo con migración completa a React.

**Propósito**: Rama de trabajo para desarrollo de nuevas características antes de integrar a `main`.

---

### 📄 Rama `feature/html-css` - Prototipo HTML

```bash
git checkout feature/html-css
```

**Contenido**: Prototipo inicial desarrollado con HTML5, CSS3 y Bootstrap 5.

**Características**:

- ✅ Diseño responsive mobile-first
- ✅ 11 páginas completamente diseñadas
- ✅ Estilos personalizados con CSS puro
- ✅ Integración de Bootstrap Icons
- ✅ Prototipo navegable estático

**Propósito**: Documentación del diseño inicial y base conceptual del proyecto

---

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js 24.12.0 o superior
- pnpm 10.25.0 (recomendado) o npm

### Clonar el repositorio

````bash
git clone <tu-repo-url>
cd TB2
```Principal (main) - React

```bash
git checkout main
pnpm install
pnpm dev
````

## 📱 Páginas Implementadas

| #   | Página                 | Ruta                  | Descripción                                                      |
| --- | ---------------------- | --------------------- | ---------------------------------------------------------------- |
| 1   | **Login**              | `/login`              | Autenticación de usuarios                                        |
| 2   | **Registro**           | `/register`           | Creación de nueva cuenta                                         |
| 3   | **Home**               | `/home`               | Página principal con hero, estadísticas y tipos de hoteles       |
| 4   | **Destinos**           | `/destinos`           | Catálogo de 6 destinos principales (Lima, Arequipa, Cusco, etc.) |
| 5   | **Lima**               | `/lima`               | Hoteles en Lima con tabs Select/Standard/Premium + carousel      |
| 6   | **Reserva Fechas**     | `/reserva-fechas`     | Calendario dual para selección check-in/check-out                |
| 7   | **Reserva Habitación** | `/reserva-habitacion` | Selector de tipo, piso y número de habitación                    |
| 8   | **Pago**               | `/pago`               | Métodos de pago y confirmación                                   |
| 9   | **Voucher**            | `/voucher`            | Comprobante de pago con opción de imprimir                       |
| 10  | **Recojo**             | `/recojo`             | Solicitud de traslado aeropuerto con 2 vistas (intro + tracking) |
| 11  | **Perfil**             | `/perfil`             | 4 vistas: Main, Editar, Mis Reservas, Historial de Pagos         |

---

## 👨‍🏫 Guía para Docentes

### Recomendación de Revisión

**Rama `main`** (aplicación React - RECOMENDADA):

- Versión de producción completa y funcional
- Demuestra conocimientos de React, arquitectura de componentes y state management
- Incluye mejoras UX profesionales: animaciones, navegación fluida, feedback visual
- Implementación de Atomic Design y Design System

**Rama `feature/html-css`** (prototipo):

- Muestra el diseño inicial y base conceptual
- Útil para comparar la evolución del proyecto
- Documentación del proceso de desarrollo

**Flujo de Trabajo**:

```
feature/html-css (Prototipo HTML)
    ↓
feature/react (Desarrollo React)
    ↓
main (Producción React)
```

### Puntos de Evaluación Sugeridos

1. **Diseño UX/UI**: Flujo de usuario, jerarquía visual, responsive design
2. **Arquitectura**: Atomic Design, separación de responsabilidades
3. **Código**: Limpieza, reutilización de componentes, mejores prácticas
4. **Equipo**: Grupo 6

| Integrante | Rol   | GitHub      |
| ---------- | ----- | ----------- |
| [Nombre 1] | [Rol] | [@usuario1] |
| [Nombre 2] | [Rol] | [@usuario2] |
| [Nombre 3] | [Rol] | [@usuario3] |
| [Nombre 4] | [Rol] | [@usuario4] |
| [Nombre 5] | [Rol] | [@usuario5] |

**Curso**: Diseño y Desarrollo de Experiencia de Usuario (UX)  
**Ciclo**: 2025-2
**Institución**: Universidad Peruana de Ciencias Aplicadas (UPC)  
**Año**: 2025

---

<div align="center">
  <strong>⭐ Si este proyecto te ayudó, dale una estrella ⭐</strong>
</div>
