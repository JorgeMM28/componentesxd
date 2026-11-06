/**
 * ============================================================================
 * COMPONENTESXD — GENERADOR MAESTRO DE COMPONENTES RADICALMENTE DISTINTOS
 * Y ENCICLOPEDIA COMPLETA DE ANIME.JS v4
 * ============================================================================
 */
import fs from 'node:fs';
import path from 'node:path';
import { modernButtonsCode } from './modern-buttons-code.mjs';
import { segmentedButtonsCode } from './segmented-buttons-code.mjs';
import { stylelessButtonsCode } from './styleless-buttons-code.mjs';
import { mechanicalButtonsCode } from './mechanical-buttons-code.mjs';
import { interactiveButtonsCode } from './interactive-buttons-code.mjs';
import { toastCode } from './toast-code.mjs';
import { formCode } from './form-code.mjs';
import { cardCode } from './card-code.mjs';
import { dataCode } from './data-code.mjs';
import { modalCode } from './modal-code.mjs';
import { navigationCode } from './navigation-code.mjs';
import { accordionCode } from './accordion-code.mjs';
import { tableCode } from './table-code.mjs';
import { carouselCode } from './carousel-code.mjs';
import { specialCode } from './special-code.mjs';
import { dockerCode } from './docker-code.mjs';

const ROOT = process.cwd();

function writeFileEnsured(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf-8');
}

export const INTERFACES = [
  { id: 'geist-dark', code: 'IF-01', name: 'Geist Monochrome Stark', mode: 'Dark', origin: 'Vercel / Industrial', accent: '#ededed', bg: '#000000', desc: 'Bordes estructurales de 1px en gris carbón sobre negro absoluto y tipografía tabular de alto contraste.' },
  { id: 'swiss-editorial', code: 'IF-02', name: 'Swiss International Grid', mode: 'Light', origin: 'Zurich / Editorial', accent: '#ff3b00', bg: '#f5f4f0', desc: 'Retícula ortogonal sin bordes redondeados (0px), papel cálido e International Orange quirúrgico.' },
  { id: 'teenage-industrial', code: 'IF-03', name: 'Field Industrial Hardware', mode: 'Light', origin: 'Stockholm / Tactile', accent: '#ff5000', bg: '#dcdbd6', desc: 'Superficie de aluminio anodizado con biseles mecánicos, tipografía técnica y acentos naranja de seguridad.' },
  { id: 'linear-obsidian', code: 'IF-04', name: 'Linear Precision Obsidian', mode: 'Dark', origin: 'San Francisco / Craft', accent: '#5e6ad2', bg: '#08090a', desc: 'Capas de pizarra profunda con iluminación de borde sutil, diseñada para velocidad y atajos de teclado.' },
  { id: 'carbon-ibm', code: 'IF-05', name: 'Carbon Enterprise System', mode: 'Dark', origin: 'Enterprise / Modular', accent: '#0f62fe', bg: '#161616', desc: 'Geometría exacta de ángulo recto, jerarquía modular de densidad empresarial e ingeniería azul.' },
  { id: 'bauhaus-brutalist', code: 'IF-06', name: 'Bauhaus Neo-Brutalist', mode: 'Dark', origin: 'Weimar / Hard Offset', accent: '#c8ff00', bg: '#0d0d0d', desc: 'Contornos estructurales de 2px con sombras sólidas desplazadas (4px) y lima ácido de alto impacto.' },
  { id: 'tokyo-telemetry', code: 'IF-07', name: 'Tokyo Night Telemetry', mode: 'Dark', origin: 'Terminal / NOC', accent: '#39bae6', bg: '#0b0e14', desc: 'Paleta de centro de operaciones de red con cian fosforescente y verde telemetría para monitoreo.' },
  { id: 'nordic-paper', code: 'IF-08', name: 'Nordic Studio Daylight', mode: 'Light', origin: 'Copenhagen / Minimal', accent: '#1b4332', bg: '#faf9f5', desc: 'Tonos orgánicos de papel piedra, contraste suave de tinta mineral y acentos verde pino.' },
  { id: 'aerospace-hud', code: 'IF-09', name: 'Aerospace Avionics HUD', mode: 'Dark', origin: 'Avionics / Radar', accent: '#ffb000', bg: '#050608', desc: 'Interfaz monocromática ámbar sobre cabina oscura para lectura sin fatiga visual en entornos críticos.' },
  { id: 'fintech-emerald', code: 'IF-10', name: 'Institutional Emerald', mode: 'Dark', origin: 'Fintech / Trading', accent: '#10b981', bg: '#040907', desc: 'Arquitectura financiera de alta densidad para libros de órdenes, tesorería y terminales bancarias.' },
  { id: 'solarized-craft', code: 'IF-11', name: 'Solarized Warm Lab', mode: 'Dark', origin: 'Ethan Schoonover / Lab', accent: '#2aa198', bg: '#00212b', desc: 'Contraste espectral equilibrado científicamente en azul petróleo profundo y crema solar.' },
  { id: 'ceramic-light', code: 'IF-12', name: 'Ceramic Tactile Studio', mode: 'Light', origin: 'Hardware / Soft UI', accent: '#0f172a', bg: '#eef0f4', desc: 'Superficies mate de cerámica clara con luces internas superiores y sombras difusas de precisión.' }
];

export const COMPONENT_CATEGORIES = [
  {
    slug: 'tables',
    code: 'CAT-01',
    name: 'Tablas de Datos',
    shortDesc: '10 diseños de tablas radicalmente distintos: bordes redondeados, styleless sin bordes, content-fit, filas flotantes, interactiva, acciones CRUD, formulario inline y filtros.',
    icon: 'grid',
    variants: [
      { id: 'modern-rounded', name: 'Variante 01 — Tabla Moderna de Bordes Redondeados', badge: 'MODERN ROUNDED', desc: 'Contenedor con radio amplio de 18px, cabeceras suaves tipo cápsula, avatares circulares y badges pastilla.', previewType: 'table-modern-rounded' },
      { id: 'styleless-minimal', name: 'Variante 02 — Tabla Styleless (Sin Bordes / Editorial)', badge: 'STYLELESS PURE', desc: 'Sin contenedor exterior ni líneas verticales. Puramente tipográfica con alineación generosa y subrayado sutil.', previewType: 'table-styleless' },
      { id: 'content-fit-compact', name: 'Variante 03 — Tabla Content-Fit (Ajustada al Contenido)', badge: 'CONTENT-FIT', desc: 'Ancho automático exacto al texto (width: max-content), celdas ultra-compactas sin espacio desperdiciado.', previewType: 'table-content-fit' },
      { id: 'floating-rows', name: 'Variante 04 — Tabla de Filas Flotantes Separadas', badge: 'FLOATING ROWS', desc: 'Cada fila es una tarjeta independiente con sombra propia, bordes redondeados y elevación al pasar el cursor.', previewType: 'table-floating' },
      { id: 'interactive-sort-select', name: 'Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo)', badge: 'INTERACTIVE SORT', desc: 'Haz clic en las cabeceras para ordenar filas dinámicamente y marca casillas para activar la barra de lote.', previewType: 'table-interactive' },
      { id: 'crud-actions', name: 'Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila)', badge: 'CRUD ACTIONS', desc: 'Botones funcionales en cada fila para cambiar estado, duplicar registro o eliminar con animación Anime.js.', previewType: 'table-actions' },
      { id: 'inline-form-table', name: 'Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo)', badge: 'FORM TABLE', desc: 'Celdas con inputs numéricos, selectores desplegables y switches que recalculan el subtotal de la tabla en vivo.', previewType: 'table-form' },
      { id: 'multi-filter-table', name: 'Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado)', badge: 'MULTI-FILTER', desc: 'Barra superior con buscador instantáneo, selector de departamento y botones de estado combinables.', previewType: 'table-filters' },
      { id: 'expandable-detail', name: 'Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel)', badge: 'EXPANDABLE ROW', desc: 'Haz clic en cualquier fila para desplegar un panel técnico con historial, métricas y especificaciones.', previewType: 'table-expandable' },
      { id: 'brutalist-ledger', name: 'Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria', badge: 'STRIPED LEDGER', desc: 'Alto contraste con filas alternadas (zebra), bordes marcados de 2px y fila tfoot de balance total.', previewType: 'table-ledger-striped' }
    ]
  },
  {
    slug: 'toasts',
    code: 'CAT-02',
    name: 'Toasters y Notificaciones',
    shortDesc: '8 diseños distintos de notificaciones: moderno flotante, Dynamic Island, toast con formulario, toast con acciones, pila 3D interactiva, styleless inline y gestor de carga.',
    icon: 'bell',
    variants: [
      { id: 'modern-floating-toast', name: 'Variante 01 — Toaster Moderno Flotante con Barra de Tiempo', badge: 'MODERN TOAST', desc: 'Bordes redondeados suaves, icono en cápsula, botón de reinicio de barra de progreso y cierre animado.', previewType: 'toast-modern' },
      { id: 'dynamic-island-morph', name: 'Variante 02 — Dynamic Island Interactiva (3 Estados)', badge: 'DYNAMIC ISLAND', desc: 'Cápsula negra brillante que cambia de tamaño con Anime.js entre Compacto, Llamada/Proceso y Expandido.', previewType: 'toast-island' },
      { id: 'action-buttons-toast', name: 'Variante 03 — Toaster con Acciones (Aceptar, Posponer, Deshacer)', badge: 'ACTION TOAST', desc: 'Notificación de invitación/despliegue con botones interactivos que confirman o revierten la operación en vivo.', previewType: 'toast-actions' },
      { id: 'form-reply-toast', name: 'Variante 04 — Toaster con Formulario de Respuesta Rápida', badge: 'FORM TOAST', desc: 'Incluye campo de texto e input de envío directo dentro de la notificación sin abrir otra página.', previewType: 'toast-form' },
      { id: 'stacker-spawner-toast', name: 'Variante 05 — Generador Interactivo de Pila de Toasters', badge: 'LIVE SPAWNER', desc: 'Haz clic en los botones para disparar toasters reales de Éxito, Alerta o Error que se apilan con Anime.js.', previewType: 'toast-spawner' },
      { id: 'styleless-minimal-alert', name: 'Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea)', badge: 'STYLELESS ALERT', desc: 'Sin caja ni sombras: solo una línea vertical de 2px, texto directo y enlace de acción limpio.', previewType: 'toast-styleless' },
      { id: 'content-fit-pill-banner', name: 'Variante 07 — Banner Content-Fit Flotante Tipo Píldora', badge: 'CONTENT-FIT PILL', desc: 'Ajustado exactamente al ancho del mensaje con insignia de novedad y botón de acción compacto.', previewType: 'toast-pill' },
      { id: 'upload-progress-toaster', name: 'Variante 08 — Toaster Interactivo de Subida de Archivos', badge: 'UPLOAD TRACKER', desc: 'Simula la subida de múltiples archivos con porcentaje animado en tiempo real y botón de pausa/reinicio.', previewType: 'toast-upload' }
    ]
  },
  {
    slug: 'buttons',
    code: 'CAT-03',
    name: 'Botones y Controles de Acción',
    shortDesc: '8 arquitecturas de botones claramente diferenciadas: modernos redondeados, styleless, flotantes FAB, magnéticos con Anime.js, hold-to-confirm, split dropdown y grupo segmentado.',
    icon: 'cursor',
    variants: [
      { id: 'modern-rounded-pills', name: 'Variante 01 — Botones Modernos Redondeados (Píldora & Glow)', badge: 'MODERN PILL', desc: 'Bordes completamente redondeados (999px), degradado sutil, sombra difusa y micro-escala al hacer clic.', previewType: 'btn-modern' },
      { id: 'styleless-text-links', name: 'Variante 02 — Botones Styleless (Subrayado Cinético sin Caja)', badge: 'STYLELESS LINK', desc: 'Cero bordes ni fondos: línea inferior que crece de izquierda a derecha y flecha SVG que avanza al pasar el cursor.', previewType: 'btn-styleless' },
      { id: 'floating-fab-radial', name: 'Variante 03 — Botón Flotante (FAB) con Menú Desplegable', badge: 'FLOATING FAB', desc: 'Botón circular flotante que al hacer clic despliega 3 acciones satélite con física elástica.', previewType: 'btn-floating' },
      { id: 'interactive-async-morph', name: 'Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito)', badge: 'ASYNC MORPH', desc: 'Haz clic para ver cómo bloquea la acción, muestra el spinner rotativo y cambia a estado completado.', previewType: 'btn-interactive' },
      { id: 'hold-confirm-safety', name: 'Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado)', badge: 'HOLD SAFETY', desc: 'Mantén presionado el botón para llenar la barra de progreso roja hasta el 100% y ejecutar la acción.', previewType: 'btn-hold' },
      { id: 'split-dropdown-action', name: 'Variante 06 — Botón con Menú de Acciones (Split Dropdown)', badge: 'SPLIT MENU', desc: 'Botón dividido: la izquierda ejecuta la acción seleccionada y la derecha despliega la lista de modos.', previewType: 'btn-split' },
      { id: 'segmented-toolbar-fit', name: 'Variante 07 — Barra de Botones Content-Fit con Indicador Activo', badge: 'SEGMENTED FIT', desc: 'Grupo compacto unido donde la selección activa cambia instantáneamente al hacer clic.', previewType: 'btn-segmented' },
      { id: 'brutalist-3d-push', name: 'Variante 08 — Botón Mecánico 3D de Presión Física', badge: '3D TACTILE', desc: 'Borde grueso y sombra sólida inferior que se hunde físicamente cada vez que lo presionas.', previewType: 'btn-3d' }
    ]
  },
  {
    slug: 'cards',
    code: 'CAT-04',
    name: 'Tarjetas y Contenedores',
    shortDesc: '8 tipos de tarjetas radicalmente distintas: moderna redondeada, styleless editorial, flotante 3D tilt, interactiva con pestañas, con acciones, con formulario, content-fit y expandible.',
    icon: 'layers',
    variants: [
      { id: 'modern-rounded-bento', name: 'Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial', badge: 'MODERN BENTO', desc: 'Radio suave de 20px, iluminación que sigue al cursor, insignia superior y métrica destacada.', previewType: 'card-modern' },
      { id: 'styleless-editorial', name: 'Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout)', badge: 'STYLELESS CARD', desc: 'Diseño tipográfico tipo revista suiza con numeración grande, separador de 1px y lectura limpia.', previewType: 'card-styleless' },
      { id: 'floating-3d-tilt', name: 'Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva', badge: 'FLOATING 3D', desc: 'Mueve el cursor encima para inclinar la tarjeta en 3 ejes (rotateX / rotateY) con sombra profunda.', previewType: 'card-floating' },
      { id: 'interactive-tabbed-card', name: 'Variante 04 — Tarjeta Interactiva con Pestañas Internas', badge: 'TABBED CARD', desc: 'Alterna entre Resumen, Métricas y Configuración dentro de la misma tarjeta sin recargar.', previewType: 'card-interactive' },
      { id: 'action-toolbar-card', name: 'Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar)', badge: 'ACTION CARD', desc: 'Incluye botones inferiores interactivos con contadores que se actualizan en tiempo real.', previewType: 'card-actions' },
      { id: 'form-embedded-card', name: 'Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config', badge: 'FORM CARD', desc: 'Permite ajustar parámetros con inputs y calcular el costo mensual directamente en la tarjeta.', previewType: 'card-form' },
      { id: 'content-fit-kpi-badge', name: 'Variante 07 — Tarjeta Content-Fit Compacta de Telemetría', badge: 'CONTENT-FIT KPI', desc: 'Ocupa únicamente el espacio exacto de su cifra, sparkline SVG y variación porcentual.', previewType: 'card-fit' },
      { id: 'expandable-drawer-card', name: 'Variante 08 — Tarjeta con Despliegue de Detalles Técnicos', badge: 'EXPANDABLE', desc: 'Haz clic en el botón de expansión para revelar u ocultar el bloque completo de logs y nodos.', previewType: 'card-expand' }
    ]
  },
  {
    slug: 'forms',
    code: 'CAT-05',
    name: 'Formularios, Inputs y Filtros',
    shortDesc: '8 variantes de formularios: modernos redondeados, styleless subrayados, barra en línea content-fit, flotante con etiquetas animadas, OTP 6 dígitos, validación en vivo y controles.',
    icon: 'sliders',
    variants: [
      { id: 'modern-rounded-form', name: 'Variante 01 — Formulario Moderno con Bordes Redondeados', badge: 'MODERN FORM', desc: 'Campos con esquinas suaves de 12px, iconos SVG integrados a la izquierda y anillo de enfoque suave.', previewType: 'form-modern' },
      { id: 'styleless-underline-inputs', name: 'Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista)', badge: 'STYLELESS INPUT', desc: 'Sin cajas laterales ni fondo: únicamente una línea inferior que se ilumina al escribir.', previewType: 'form-styleless' },
      { id: 'content-fit-inline-bar', name: 'Variante 03 — Formulario Content-Fit en Una Sola Línea', badge: 'INLINE FIT', desc: 'Combina selector de prefijo, campo de texto y botón de envío en una sola cápsula compacta.', previewType: 'form-fit' },
      { id: 'floating-label-inputs', name: 'Variante 04 — Inputs con Etiqueta Flotante Animada', badge: 'FLOATING LABEL', desc: 'La etiqueta viaja suavemente hacia el borde superior cuando haces clic o escribes contenido.', previewType: 'form-floating' },
      { id: 'interactive-otp-pin', name: 'Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance)', badge: 'OTP MATRIX', desc: 'Escribe números para avanzar automáticamente de casilla o usa el botón de autocompletar código.', previewType: 'form-otp' },
      { id: 'live-validation-meter', name: 'Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo', badge: 'LIVE VALIDATION', desc: 'Escribe una contraseña para ver cómo se calculan en tiempo real los 4 niveles de fortaleza.', previewType: 'form-validation' },
      { id: 'filter-search-facet', name: 'Variante 07 — Panel de Filtros Interactivos (Chips + Rango + Buscador)', badge: 'FILTER PANEL', desc: 'Selecciona etiquetas múltiples y desliza el rango de precio para ver el resumen de filtros activos.', previewType: 'form-filters' },
      { id: 'tactile-switches-sliders', name: 'Variante 08 — Controles Interactivos (Switches, Stepper Numérico y Radios)', badge: 'CONTROLS', desc: 'Interruptores animados, contador con botones +/- y selector de tarjetas de opción.', previewType: 'form-controls' }
    ]
  },
  {
    slug: 'modals',
    code: 'CAT-06',
    name: 'Modales, Diálogos y Command Palettes',
    shortDesc: '6 tipos de ventanas emergentes interactivas: modal moderno, Command Palette Cmd+K, drawer lateral, modal con formulario, confirmación de seguridad y popover flotante.',
    icon: 'terminal',
    variants: [
      { id: 'modern-glass-modal', name: 'Variante 01 — Modal Moderno con Bordes Redondeados y Blur', badge: 'MODERN MODAL', desc: 'Ventana de diálogo con cabecera limpia, cuerpo estructurado y botones que abren/cierran la vista.', previewType: 'modal-modern' },
      { id: 'interactive-cmdk-palette', name: 'Variante 02 — Command Palette Interactiva (Buscador en Vivo)', badge: 'CMD+K PALETTE', desc: 'Escribe en el buscador para filtrar comandos al instante y haz clic en cualquiera para ejecutarlo.', previewType: 'modal-cmdk' },
      { id: 'floating-popover-menu', name: 'Variante 03 — Menú Popover Flotante Content-Fit con Acciones', badge: 'FLOATING POPOVER', desc: 'Menú contextual compacto con opciones rápidas, atajos de teclado e interruptor integrado.', previewType: 'modal-popover' },
      { id: 'form-creation-modal', name: 'Variante 04 — Modal con Formulario de Creación de Proyecto', badge: 'FORM MODAL', desc: 'Diálogo completo con inputs de nombre, selector de región, visibilidad y envío interactivo.', previewType: 'modal-form' },
      { id: 'security-confirm-modal', name: 'Variante 05 — Modal de Confirmación con Validación de Texto', badge: 'SAFETY CONFIRM', desc: 'Escribe "ELIMINAR" en el campo de confirmación para desbloquear el botón destructivo.', previewType: 'modal-confirm' },
      { id: 'slide-drawer-inspector', name: 'Variante 06 — Panel Inspector Lateral (Drawer de Detalles)', badge: 'SIDE INSPECTOR', desc: 'Estructura de panel lateral con pestañas de propiedades, JSON en vivo y botones de acción.', previewType: 'modal-drawer' }
    ]
  },
  {
    slug: 'navigation',
    code: 'CAT-07',
    name: 'Navbars, Menús Cascada y Navegación',
    shortDesc: '10 sistemas de navegación funcionales: navbar flotante redondeada, menú en cascada estilo Microsoft, breadcrumbs interactivos, pestañas animadas, dock y paginación.',
    icon: 'compass',
    variants: [
      { id: 'microsoft-cascade-nav', name: 'Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft)', badge: 'CASCADE MENU', desc: 'Selecciona una categoría principal para desplegar sus sub-categorías y luego sus variantes finales.', previewType: 'nav-cascade' },
      { id: 'floating-pill-navbar', name: 'Variante 02 — Navbar Flotante Redondeada Tipo Cápsula', badge: 'FLOATING PILL', desc: 'Barra superior centrada con bordes completamente redondeados, enlaces activos y botón CTA.', previewType: 'nav-floating' },
      { id: 'styleless-minimal-nav', name: 'Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante', badge: 'STYLELESS TABS', desc: 'Pestañas limpias sin bordes laterales donde la línea activa viaja suavemente al elemento clicado.', previewType: 'nav-styleless' },
      { id: 'interactive-breadcrumbs', name: 'Variante 04 — Breadcrumbs Interactivos con Selector de Rama/Proyecto', badge: 'BREADCRUMBS', desc: 'Ruta de navegación con menús desplegables integrados en cada nivel de jerarquía.', previewType: 'nav-breadcrumbs' },
      { id: 'floating-action-dock', name: 'Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor', badge: 'INTERACTIVE DOCK', desc: 'Barra de iconos de acceso rápido con insignias de estado e indicador de aplicación activa.', previewType: 'nav-dock' },
      { id: 'interactive-pagination', name: 'Variante 06 — Barra de Paginación Interactiva con Salto de Página', badge: 'PAGINATION BAR', desc: 'Haz clic en los números o botones Anterior/Siguiente para actualizar la página activa en vivo.', previewType: 'nav-pagination' },
      {"id": "collapsible-sidebar", "name": "Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster", "badge": "COLLAPSIBLE SIDEBAR", "desc": "Panel de navegación lateral con botón de colapso cinético (240px ↔ 68px), selector de entorno (Prod/Staging), árbol de módulos e indicador de salud.", "previewType": "nav-sidebar"},
      {"id": "desktop-menubar", "name": "Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git)", "badge": "DESKTOP MENUBAR", "desc": "Barra horizontal estilo aplicación de escritorio con menús desplegables en cascada al hacer hover o clic, atajos de teclado e indicador de sync.", "previewType": "nav-menubar"},
      {"id": "compact-navigation-rail", "name": "Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos", "badge": "NAVIGATION RAIL", "desc": "Riel de navegación vertical ultra-delgado de 56px para consolas cloud con iconos vectoriales, tooltips flotantes e indicador de nodo activo.", "previewType": "nav-rail"},
      {"id": "mobile-touch-tabbar", "name": "Variante 10 — Mobile Bottom Tab Bar Táctil con Micro-Interacciones Cinéticas", "badge": "MOBILE TABBAR", "desc": "Barra inferior flotante tipo iOS/Android con 5 destinos táctiles, pastilla indicadora animada con Anime.js v4 y badges de notificaciones.", "previewType": "nav-tabbar"}
    ]
  },
  {
    slug: 'badges-data',
    code: 'CAT-08',
    name: 'Badges, Timelines, Acordeones y Micro-UI',
    shortDesc: '6 componentes de visualización: colección de badges, acordeón interactivo, timeline con filtros, medidores circulares SVG interactivos, lista clave-valor y avatares.',
    icon: 'cpu',
    variants: [
      { id: 'modern-pulse-badges', name: 'Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante', badge: 'BADGE SYSTEM', desc: 'Insignias redondeadas, cuadradas, sin bordes y con botón de cierre eliminable en vivo.', previewType: 'data-badges' },
      { id: 'interactive-accordion', name: 'Variante 02 — Acordeón Interactivo Multi-Sección', badge: 'ACCORDION UI', desc: 'Haz clic en cualquier cabecera para expandir o contraer su contenido suavemente.', previewType: 'data-accordion' },
      { id: 'interactive-svg-gauges', name: 'Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo', badge: 'LIVE SVG GAUGE', desc: 'Mueve el control deslizante para actualizar en tiempo real el porcentaje y los anillos SVG.', previewType: 'data-gauges' },
      { id: 'vertical-event-timeline', name: 'Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos', badge: 'TIMELINE', desc: 'Cronología vertical con nodos conectados, estados de despliegue y botón para agregar nuevo evento.', previewType: 'data-timeline' },
      { id: 'copyable-spec-grid', name: 'Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila', badge: 'KEY-VALUE GRID', desc: 'Haz clic en cualquier valor técnico (API Key, Host, SHA) para copiarlo instantáneamente.', previewType: 'data-kv' },
      { id: 'avatar-stack-interactive', name: 'Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario', badge: 'AVATAR STACK', desc: 'Haz clic en cualquier miembro del equipo para ver su rol, estado y permisos activos.', previewType: 'data-avatars' }
    ]
  },
  {
    slug: 'docker',
    code: 'CAT-09',
    name: 'Dockerfiles y Orquestación de Contenedores',
    shortDesc: '6 arquitecturas Docker listas para copiar con diagrama interactivo de topología de red, puertos y volúmenes.',
    icon: 'box',
    variants: [
      { id: 'astro-node-ssr', name: 'Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR', badge: 'NODE 22 SSR', desc: 'Contenedor de producción de 3 etapas (deps → builder → runner sin root) para Astro, Next o Remix.', previewType: 'docker-node' },
      { id: 'laravel-livewire-fpm', name: 'Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache', badge: 'PHP 8.3 FPM', desc: 'Imagen lista para Laravel y Blade con OPcache JIT, Redis, PostgreSQL y Composer 2.8.', previewType: 'docker-laravel' },
      { id: 'spa-nginx-alpine', name: 'Variante 03 — React / Vue / Svelte / Angular SPA + Nginx', badge: 'NGINX SPA', desc: 'Compilación estática servida por Nginx Alpine con compresión gzip y try_files para rutas SPA.', previewType: 'docker-spa' },
      { id: 'fullstack-compose-stack', name: 'Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4)', badge: 'COMPOSE STACK', desc: 'Orquestación completa con volúmenes persistentes y healthchecks automáticos.', previewType: 'docker-compose' },
      { id: 'bun-microservice', name: 'Variante 05 — Microservicio Ultra-Rápido con Bun Alpine', badge: 'BUN RUNTIME', desc: 'Ejecución directa de TypeScript con arranque en milisegundos y consumo mínimo de RAM.', previewType: 'docker-bun' },
      { id: 'traefik-tls-proxy', name: 'Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático', badge: 'TRAEFIK PROXY', desc: 'Enrutamiento dinámico por etiquetas de contenedor y certificados TLS automáticos.', previewType: 'docker-traefik' }
    ]
  },
  {
    slug: 'carousels',
    code: 'CAT-10',
    name: 'Carruseles, Sliders 3D y Marquesinas Cinéticas',
    shortDesc: '8 carruseles radicalmente distintos: Coverflow 3D con Anime.js, Marquesina Infinita con velocidad variable, Peek Multi-Columna, Reel Vertical, Split-Screen Editorial, Filmstrip con Miniaturas, Stories con Autoplay y Pista Draggable.',
    icon: 'layers',
    variants: [
      { id: 'coverflow-3d', name: 'Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación', badge: '3D COVERFLOW', desc: 'Tarjetas en perspectiva tridimensional donde la diapositiva central avanza al frente y las laterales rotan en eje Y con Anime.js v4.', previewType: 'carousel-coverflow' },
      { id: 'infinite-marquee', name: 'Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección)', badge: 'INFINITE MARQUEE', desc: 'Cinta continua sin costuras para nodos, métricas o marcas con botones para invertir dirección, pausar o acelerar en vivo.', previewType: 'carousel-marquee' },
      { id: 'snap-peek-slider', name: 'Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso', badge: 'MULTI-CARD PEEK', desc: 'Muestra múltiples tarjetas visibles simultáneamente con desplazamiento suave, indicador numérico 01/05 y barra de progreso sincronizada.', previewType: 'carousel-peek' },
      { id: 'vertical-telemetry-reel', name: 'Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y', badge: 'VERTICAL REEL', desc: 'Transición vertical elástica entre paneles de telemetría con selector lateral numerado y controles arriba/abajo.', previewType: 'carousel-vertical' },
      { id: 'split-editorial-showcase', name: 'Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones)', badge: 'SPLIT SHOWCASE', desc: 'Doble panel donde el lienzo visual izquierdo y la ficha técnica derecha se actualizan de forma coordinada con stagger.', previewType: 'carousel-split' },
      { id: 'thumbnail-filmstrip', name: 'Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip)', badge: 'FILMSTRIP GALLERY', desc: 'Escenario principal de gran formato conectado a una banda interactiva de miniaturas con enfoque activo.', previewType: 'carousel-filmstrip' },
      { id: 'autoplay-story-bars', name: 'Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa)', badge: 'STORY TIMELINE', desc: 'Cabecera con segmentos de progreso temporales que avanzan automáticamente y permiten saltar a cualquier historia.', previewType: 'carousel-stories' },
      { id: 'card-deck-throw', name: 'Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck)', badge: 'SWIPE DECK', desc: 'Pila interactiva donde cada acción lanza la tarjeta activa con rotación física y promueve la siguiente del mazo.', previewType: 'carousel-deck' }
    ]
  },
  {
    slug: 'accordions-tabs',
    code: 'CAT-11',
    name: 'Acordeones, Comparadores Before/After, Kanban y Conmutadores',
    shortDesc: '8 componentes interactivos de organización: Acordeón Exclusivo, Acordeón Bento Multi-Apertura, Comparador Before/After con Cortina, Tablero Mini-Kanban, Conmutador de Precios Anual/Mensual y Árbol de Archivos.',
    icon: 'sliders',
    variants: [
      { id: 'accordion-exclusive', name: 'Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura', badge: 'EXCLUSIVE ACCORDION', desc: 'Al expandir una sección técnica se cierran automáticamente las demás manteniendo el foco de lectura.', previewType: 'acc-exclusive' },
      { id: 'accordion-multi-bento', name: 'Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador', badge: 'MULTI-OPEN BENTO', desc: 'Permite mantener varios módulos abiertos al mismo tiempo o expandir/colapsar todos con un solo clic.', previewType: 'acc-multi' },
      { id: 'before-after-split', name: 'Variante 03 — Comparador Visual Before / After con Cortina Deslizable', badge: 'BEFORE / AFTER', desc: 'Arrastra el control divisor horizontal para comparar en tiempo real dos estados o arquitecturas superpuestas.', previewType: 'acc-before-after' },
      { id: 'kanban-mini-board', name: 'Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo)', badge: 'LIVE KANBAN', desc: 'Tarjetas operativas con botones para promover o regresar tareas entre Backlog, En Progreso y Producción.', previewType: 'acc-kanban' },
      { id: 'segmented-pricing-toggle', name: 'Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado', badge: 'BILLING TOGGLE', desc: 'Alterna entre facturación mensual y anual aplicando descuento automático e interpolando las tarifas en vivo.', previewType: 'acc-pricing' },
      { id: 'file-tree-inspector', name: 'Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo', badge: 'FILE TREE IDE', desc: 'Estructura jerárquica de carpetas y archivos clicables que actualiza el visor de contenido derecho.', previewType: 'acc-filetree' },
      { id: 'transfer-dual-list', name: 'Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha)', badge: 'DUAL TRANSFER', desc: 'Selecciona y transfiere módulos entre la columna de Disponibles y la columna de Activos en tiempo real.', previewType: 'acc-transfer' },
      { id: 'calendar-slot-Matrix', name: 'Variante 08 — Calendario y Selector Interactivo de Horarios / Turnos', badge: 'SCHEDULER PICKER', desc: 'Selecciona día de la semana y franja horaria con confirmación instantánea de reserva.', previewType: 'acc-scheduler' }
    ]
  },
  {
    slug: 'special-hybrids',
    code: 'CAT-12',
    name: 'Componentes Especiales Combinados (UI + Anime.js v4 en Vivo)',
    shortDesc: '30 super-componentes híbridos de alta complejidad: flujos, visualizadores, simulaciones y telemetría con Anime.js v4; cada uno exporta adaptadores funcionales para las diez tecnologías.',
    icon: 'sparkles',
    variants: [
      { id: 'stepper-carousel-wizard', name: 'Variante 01 — Step-by-Step Wizard + Carrusel 3D Sincronizado + Timeline', badge: 'STEPPER + CAROUSEL', desc: 'Asistente paso a paso donde avanzar o retroceder sincroniza la barra de progreso superior, desliza el carrusel 3D y anima los sub-elementos con stagger.', previewType: 'hybrid-01' },
      { id: 'table-realtime-stream', name: 'Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js', badge: 'TABLE + LIVE CRUD', desc: 'Agrega nuevos registros desde el formulario integrado con animación spring de entrada, recálculo de suma animada y eliminación con colapso suave.', previewType: 'hybrid-02' },
      { id: 'table-stagger-sorter', name: 'Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas', badge: 'TABLE + STAGGER', desc: 'Ordena por latencia, carga o nombre y observa cómo todas las filas y sus barras internas se reacomodan con una onda escalonada.', previewType: 'hybrid-03' },
      { id: 'carousel-svg-morph-showcase', name: 'Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo)', badge: 'CAROUSEL + SVG MORPH', desc: 'Cada diapositiva del carrusel transforma los vértices del polígono vectorial central e interpola las métricas del sistema.', previewType: 'hybrid-04' },
      { id: 'carousel-spring-physics-deck', name: 'Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro', badge: '3D DECK + SPRING', desc: 'Rota las tarjetas en el eje Z con física real de resorte mientras el contador financiero interpola el valor del nodo activo.', previewType: 'hybrid-05' },
      { id: 'stepper-checkout-calculator', name: 'Variante 06 — Step-by-Step Configurador Cloud + Motor "Calculando..." en Tiempo Real', badge: 'STEPPER + CALCULATOR', desc: 'Avanza por las etapas de hardware, red y réplicas recalculando el costo mensual con animación numérica instantánea.', previewType: 'hybrid-06' },
      { id: 'table-bulk-explosion', name: 'Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada', badge: 'TABLE + BULK ANIME', desc: 'Marca varias filas para desplegar la barra de acción y ejecuta purga en cascada o restauración completa con Anime.js.', previewType: 'hybrid-07' },
      { id: 'toast-timeline-dispatcher', name: 'Variante 08 — Despachador de Toasts Apilados 3D + Cronómetro createTimer()', badge: 'TOAST + TIMER', desc: 'Genera notificaciones en vivo con física elástica y cuenta regresiva precisa en milisegundos.', previewType: 'hybrid-08' },
      { id: 'kanban-spring-pipeline', name: 'Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada', badge: 'KANBAN + SPRING', desc: 'Promueve tarjetas entre etapas disparando rebote físico y actualizando el porcentaje global del sprint.', previewType: 'hybrid-09' },
      { id: 'form-otp-svg-vault', name: 'Variante 10 — Bóveda PIN/OTP + Escudo Vectorial Autodibujable (svg.createDrawable)', badge: 'OTP + SVG DRAWABLE', desc: 'Simula la validación criptográfica trazando el circuito SVG de seguridad y animando las casillas del código.', previewType: 'hybrid-10' },
      { id: 'card-3d-exploded-inspector', name: 'Variante 11 — Tarjeta Inspectora + Descomposición 3D de Capas Estructurales', badge: 'CARD + 3D EXPLODE', desc: 'Alterna entre la tarjeta ensamblada funcional y su vista explotada isométrica de 4 capas en vivo.', previewType: 'hybrid-11' },
      { id: 'skeleton-to-table-hydrator', name: 'Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada', badge: 'SKELETON + TABLE', desc: 'Conmuta entre el estado de carga (Skeleton Shimmer) y la tabla hidratada con entrada escalonada por fila.', previewType: 'hybrid-12' },
      { id: 'carousel-timeline-scrubber', name: 'Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek)', badge: 'CAROUSEL + SCRUBBER', desc: 'Arrastra la barra de tiempo para controlar manualmente la posición, rotación y escala de todo el carrusel.', previewType: 'hybrid-13' },
      { id: 'search-grid-2d-ripple', name: 'Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid)', badge: 'FILTER + 2D RIPPLE', desc: 'Haz clic en cualquier nodo del cluster o filtra por estado para expandir una onda 2D desde ese punto exacto.', previewType: 'hybrid-14' },
      { id: 'modal-command-choreography', name: 'Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada', badge: 'COMMAND + TIMELINE', desc: 'Dispara cualquier comando de la lista para ejecutar una secuencia de terminal animada en tiempo real.', previewType: 'hybrid-15' },
      { id: 'pricing-slider-odometer', name: 'Variante 16 — Calculadora Interactiva con Slider + Odómetro + Barras Comparativas', badge: 'SLIDER + ODOMETER', desc: 'Ajusta el volumen de tráfico para animar simultáneamente las barras de los 3 planes y el costo estimado.', previewType: 'hybrid-16' },
      { id: 'docker-live-deploy-topology', name: 'Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js', badge: 'DOCKER + MOTION', desc: 'Envía paquetes de prueba a través del proxy, aplicación y base de datos animando cada salto y latencia.', previewType: 'hybrid-17' },
      { id: 'accordion-animated-metrics', name: 'Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir', badge: 'ACCORDION + GAUGES', desc: 'Cada vez que abres una sección del acordeón, sus barras y métricas internas se animan dinámicamente.', previewType: 'hybrid-18' },
      { id: 'dual-transfer-stagger-sync', name: 'Variante 19 — Transferencia Dual de Módulos + Sincronización Masiva en Cascada', badge: 'TRANSFER + STAGGER', desc: 'Mueve módulos uno por uno o transfiere todo el bloque con una animación escalonada de Anime.js.', previewType: 'hybrid-19' },
      { id: 'chrono-sla-incident-table', name: 'Variante 20 — Tabla de Incidentes en Vivo + Cronómetro SLA (createTimer) + Resolución', badge: 'TABLE + SLA TIMER', desc: 'Monitorea el tiempo transcurrido en vivo con centésimas de segundo y resuelve incidentes con animación de fila.', previewType: 'hybrid-20' },
      { id: 'anime-hero-clockwork', name: 'Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4)', badge: 'ANIME.JS HERO STAGE', desc: '36 vectores radiales concéntricos, anillos orbitales y matriz sincronizada que ejecutan coreografías de relojería, explosión solar, vórtice espiral y pulso cuántico.', previewType: 'hybrid-21' },
      { id: 'interactive-world-telemetry-map', name: 'Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath)', badge: 'INTERACTIVE WORLD MAP', desc: 'Haz clic en cualquier centro de datos (Tokyo, Frankfurt, New York, São Paulo, Sydney, SF) para redirigir los paquetes luminosos globales y disparar ondas de choque.', previewType: 'hybrid-22' },
      { id: 'pathfinding-dijkstra-visualizer', name: 'Variante 23 — Laberinto Interactivo de Alta Densidad (24×10 = 240 Micro-Celdas) con Algoritmo A* / BFS de Ruta Larga', badge: 'PATHFINDING 240 CELLS', desc: 'Matriz densa de 240 micro-recuadros con generador de laberinto serpenteante de 55+ pasos, creación manual de muros y onda de exploración animada con Anime.js v4.', previewType: 'hybrid-23' },
      { id: 'sorting-algorithm-symphony', name: 'Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort)', badge: 'STEP-BY-STEP SORTING', desc: '28 columnas de datos con comparación e intercambio paso a paso en vivo, resaltado de pivotes activos, contadores en tiempo real y barrido verde de verificación final.', previewType: 'hybrid-24' },
      { id: 'neural-network-graph-propagator', name: 'Variante 25 — Grafo de Red Neuronal Multicapa con Sinapsis SVG y Propagación Softmax', badge: 'NEURAL NETWORK GRAPH', desc: 'Dispara una inferencia para ver los tensores viajar por las 15 sinapsis SVG a través de las capas ocultas hasta calcular la predicción final.', previewType: 'hybrid-25' },
      { id: 'orbital-solar-gravity-sim', name: 'Variante 26 — Sistema Solar Animado Completo (Sol + 8 Planetas + Luna + Cinturón de Asteroides + Saturno)', badge: 'FULL SOLAR SYSTEM', desc: 'Simulación heliocéntrica continua con Mercurio, Venus, Tierra + Luna, Marte, Cinturón de Asteroides, Júpiter, Saturno con anillos, Urano y Neptuno, selector de telemetría planetaria y escala de tiempo Warp.', previewType: 'hybrid-26' },
      { id: 'isometric-3d-city-cluster', name: 'Variante 27 — Ciudadela Isométrica 3D de Servidores con Onda Espacial 4×4', badge: 'ISOMETRIC 3D MATRIX', desc: '16 torres tridimensionales en perspectiva isométrica real que modulan su elevación Z con stagger 2D radial.', previewType: 'hybrid-27' },
      { id: 'audio-synth-spectrum-analyzer', name: 'Variante 28 — Analizador de Espectro de 28 Bandas + Osciloscopio Vectorial en Vivo', badge: 'SPECTRUM ANALYZER', desc: 'Alterna entre perfiles acústicos (Sub-Bass, Cyberpunk Arp, Harmonics) animando las frecuencias y la onda sinusoidal.', previewType: 'hybrid-28' },
      { id: 'git-branch-commit-visualizer', name: 'Variante 29 — Diagrama Interactivo de Grafo Git Multirama (main, develop, feat/anime, Tags & Merge Curves SVG)', badge: 'GIT GRAPH DIAGRAM', desc: 'Diagrama vectorial de gran formato con 3 carriles de ramas, curvas Bezier autodibujables (svg.createDrawable), etiquetas de versión (v4.0 a v4.x), creación de commits, merges e inspector de SHA en vivo.', previewType: 'hybrid-29' },
      { id: 'cyber-radar-threat-sonar', name: 'Variante 30 — Radar Sonar Táctico de 360° con Detección e Intercepción de Objetivos', badge: 'TACTICAL RADAR 360', desc: 'Barrido rotatorio continuo con coordenadas polares, detección de objetivos y lanzamiento de vectores de intercepción.', previewType: 'hybrid-30' },
      { id: 'agenda-reservations', name: 'Variante 31 — Agenda con Reservas y Disponibilidad en Vivo', badge: 'AGENDA + BOOKINGS', desc: 'Selecciona una franja disponible, confirma la reserva y observa su estado actualizado en el calendario.', previewType: 'hybrid-new-agenda' },
      { id: 'flow-editor', name: 'Variante 32 — Editor de Flujo con Pasos Conectables', badge: 'FLOW EDITOR', desc: 'Conecta pasos de automatización y actualiza el progreso del flujo con retroalimentación visual.', previewType: 'hybrid-new-flow' },
      { id: 'query-builder', name: 'Variante 33 — Constructor Visual de Consultas', badge: 'QUERY BUILDER', desc: 'Construye y ejecuta una consulta de ejemplo con una respuesta simulada y trazable.', previewType: 'hybrid-new-query' },
      { id: 'server-monitor', name: 'Variante 34 — Monitor de Servidores y Alertas', badge: 'SERVER MONITOR', desc: 'Refresca métricas de nodos, señaliza incidencias y conserva una alternativa para movimiento reducido.', previewType: 'hybrid-new-server' },
      { id: 'mail-inbox', name: 'Variante 35 — Bandeja de Correo con Archivo Rápido', badge: 'MAIL INBOX', desc: 'Procesa mensajes de una bandeja autónoma mediante archivo y restauración sin depender de servicios externos.', previewType: 'hybrid-new-mail' },
      { id: 'media-player', name: 'Variante 36 — Reproductor Multimedia con Estado de Pista', badge: 'MEDIA PLAYER', desc: 'Controla una pista de demostración, su progreso y los estados de reproducción de forma accesible.', previewType: 'hybrid-new-media' },
      { id: 'inventory-board', name: 'Variante 37 — Tablero de Inventario Reabastecible', badge: 'INVENTORY BOARD', desc: 'Actualiza existencias de ejemplo y muestra el avance de reposición de cada artículo.', previewType: 'hybrid-new-inventory' },
      { id: 'order-tracker', name: 'Variante 38 — Seguimiento de Pedidos por Etapas', badge: 'ORDER TRACKER', desc: 'Avanza un pedido entre preparación, tránsito y entrega con una línea de estado clara.', previewType: 'hybrid-new-orders' },
      { id: 'seat-map', name: 'Variante 39 — Mapa de Asientos Reservables', badge: 'SEAT MAP', desc: 'Elige un asiento disponible, confirma la reserva y restablece el mapa de demostración.', previewType: 'hybrid-new-seats' },
      { id: 'event-calendar', name: 'Variante 40 — Calendario de Eventos con Alta Rápida', badge: 'EVENT CALENDAR', desc: 'Añade un evento de ejemplo al calendario y obtiene una confirmación visible y anunciada.', previewType: 'hybrid-new-events' },
      { id: 'permissions-panel', name: 'Variante 41 — Panel de Permisos por Rol', badge: 'PERMISSIONS', desc: 'Aplica cambios de permisos simulados y conserva el estado inicial mediante reinicio.', previewType: 'hybrid-new-permissions' },
      { id: 'survey-builder', name: 'Variante 42 — Constructor de Encuestas', badge: 'SURVEY BUILDER', desc: 'Añade preguntas a una encuesta de ejemplo y actualiza su progreso de composición.', previewType: 'hybrid-new-survey' },
      { id: 'downloads-center', name: 'Variante 43 — Centro de Descargas con Progreso', badge: 'DOWNLOADS', desc: 'Inicia una descarga simulada, comunica su finalización y permite volver al estado limpio.', previewType: 'hybrid-new-downloads' },
      { id: 'product-comparator', name: 'Variante 44 — Comparador de Productos', badge: 'PRODUCT COMPARE', desc: 'Compara una selección de ejemplo y revela su estado en un panel claro y accesible.', previewType: 'hybrid-new-products' },
      { id: 'expense-monitor', name: 'Variante 45 — Monitor de Gastos y Presupuesto', badge: 'EXPENSE MONITOR', desc: 'Registra gastos de muestra y actualiza el presupuesto disponible con señalización inmediata.', previewType: 'hybrid-new-expenses' },
      { id: 'chart-editor', name: 'Variante 46 — Editor de Gráficos Configurable', badge: 'CHART EDITOR', desc: 'Cambia la visualización de datos de ejemplo y comunica el tipo activo al usuario.', previewType: 'hybrid-new-charts' },
      { id: 'file-explorer', name: 'Variante 47 — Explorador de Archivos con Vista Previa', badge: 'FILE EXPLORER', desc: 'Abre un archivo de ejemplo y actualiza la vista previa sin rutas ni persistencia externas.', previewType: 'hybrid-new-files' },
      { id: 'deploy-console', name: 'Variante 48 — Consola de Despliegues', badge: 'DEPLOY CONSOLE', desc: 'Lanza una versión de demostración y refleja el resultado del flujo de despliegue.', previewType: 'hybrid-new-deploy' },
      { id: 'queue-simulator', name: 'Variante 49 — Simulador de Colas', badge: 'QUEUE SIMULATOR', desc: 'Procesa elementos de una cola y representa su progreso operativo paso a paso.', previewType: 'hybrid-new-queue' },
      { id: 'goals-board', name: 'Variante 50 — Tablero de Objetivos e Hitos', badge: 'GOALS BOARD', desc: 'Completa hitos de demostración y visualiza el avance acumulado hacia un objetivo.', previewType: 'hybrid-new-goals' }
    ].slice(0, 30)
  }
];

export const ANIMATION_CATEGORIES = [
  {
    slug: 'targets-properties',
    code: 'DOC-01',
    name: 'Targets, CSS Transforms & Propiedades DOM',
    desc: 'Fundamentos oficiales de Anime.js v4: animate() sobre selectores CSS, transformaciones x/y/rotate/scale, variables CSS, atributos DOM y objetos JS.',
    presets: [
      { id: 'css-transforms-xyz', name: '01. Transformaciones Abreviadas (x, y, rotate, scale, skew)', ease: 'outExpo', duration: 1200, desc: 'Anima simultáneamente traslación, rotación en grados, escala y sesgado sin escribir cadenas transform largas.', stageType: 'transforms-xyz' },
      { id: 'css-variables-reactive', name: '02. Animación Directa de Variables CSS (--radius, --hue, --scale)', ease: 'inOutCubic', duration: 1500, desc: 'Interpola Custom Properties CSS nativas en tiempo real para transformar geometría y color.', stageType: 'css-vars' },
      { id: 'dom-attributes-progress', name: '03. Atributos DOM, Inputs & Barras de Valor', ease: 'outQuart', duration: 1400, desc: 'Muta atributos HTML (value, max, data-progress, aria-valuenow) de forma sincronizada.', stageType: 'dom-attrs' },
      { id: 'color-oklch-hex-morph', name: '04. Interpolación de Color, Sombras y Bordes', ease: 'inOutSine', duration: 1600, desc: 'Transición continua entre paletas cromáticas, box-shadow y border-radius.', stageType: 'color-morph' },
      { id: 'multi-target-array', name: '05. Múltiples Targets Heterogéneos en una Sola Llamada', ease: 'outBack', duration: 1100, desc: 'Coordina nodos DOM distintos dentro de un arreglo como primer argumento de animate().', stageType: 'multi-targets' },
      { id: 'from-to-explicit', name: '06. Sintaxis Explícita { from, to, duration, delay } por Propiedad', ease: 'outExpo', duration: 1300, desc: 'Cada propiedad define su propio rango from/to, curva easing y duración independiente.', stageType: 'from-to-prop' }
    ]
  },
  {
    slug: 'keyframes-stagger',
    code: 'DOC-02',
    name: 'Keyframes, Valores Función & Stagger 1D/2D',
    desc: 'Domina arreglos de keyframes, keyframes basados en porcentaje, valores dinámicos por índice (el, i, total) y distribución espacial con stagger().',
    presets: [
      { id: 'tween-value-keyframes', name: '01. Keyframes de Propiedad (Arreglo de Valores Secuenciales)', ease: 'inOutQuad', duration: 1800, desc: 'Recorre múltiples puntos X e Y ([0, 140, 140, 0]) creando una trayectoria cuadrada cerrada.', stageType: 'keyframes-array' },
      { id: 'percentage-keyframes', name: '02. Keyframes de Animación por Tramos (0% -> 50% -> 100%)', ease: 'outCubic', duration: 1600, desc: 'Define estados completos de transformación y escala en cada fotograma clave.', stageType: 'keyframes-steps' },
      { id: 'function-based-values', name: '03. Valores Basados en Función (el, index, total)', ease: 'outBack', duration: 1200, desc: 'Cada elemento calcula su propio desplazamiento, ángulo y escala según su índice i.', stageType: 'fn-values' },
      { id: 'stagger-from-center', name: '04. Stagger Lineal desde el Centro (from: "center" | "first" | "last")', ease: 'outExpo', duration: 1100, desc: 'Propaga una onda simétrica desde el elemento central hacia los extremos.', stageType: 'stagger-center' },
      { id: 'stagger-range-values', name: '05. Stagger de Rango de Valores (stagger([-45, 45]))', ease: 'inOutSine', duration: 1300, desc: 'Distribuye ángulos y alturas progresivamente entre el mínimo y el máximo del rango.', stageType: 'stagger-range' },
      { id: 'stagger-2d-grid-ripple', name: '06. Stagger Espacial en Cuadrícula 2D (grid: [8, 4], from: "center")', ease: 'inOutQuad', duration: 1250, desc: 'Calcula la distancia euclidiana en una matriz 2D para expandir una onda radial exacta.', stageType: 'stagger-grid-2d' }
    ]
  },
  {
    slug: 'easings-springs',
    code: 'DOC-03',
    name: 'Easings, Física Spring (createSpring) & Steps',
    desc: 'Comparativa interactiva en vivo de curvas cúbicas, física real de resorte (masa, rigidez, amortiguación, velocidad) y cuantización por pasos.',
    presets: [
      { id: 'spring-physics-lab', name: '01. Física Real con createSpring({ mass, stiffness, damping })', ease: 'outBack', duration: 1400, desc: 'Simulación física real de un resorte con rebote natural gobernado por masa y rigidez.', stageType: 'spring-physics' },
      { id: 'easing-race-visualizer', name: '02. Carrera Comparativa de Curvas Easing (linear vs outExpo vs outBack)', ease: 'outExpo', duration: 1500, desc: 'Observa en paralelo cómo aceleran y frenan 4 curvas distintas sobre la misma distancia.', stageType: 'easing-race' },
      { id: 'stepped-quantized-motion', name: '03. Movimiento Discreto por Pasos (steps(6) / Cuantizado)', ease: 'linear', duration: 1600, desc: 'Divide la interpolación en saltos mecánicos exactos estilo relojería o pixel-art.', stageType: 'steps-motion' },
      { id: 'elastic-whip-snap', name: '04. Latigazo Elástico de Alta Velocidad (outElastic / outBack)', ease: 'outBack', duration: 1100, desc: 'Sobrepasa el punto final y oscila antes de estabilizarse en su coordenada.', stageType: 'elastic-snap' },
      { id: 'custom-cubic-bezier', name: '05. Curva Cubic-Bezier de Precisión Arquitectónica', ease: 'inOutCubic', duration: 1300, desc: 'Aceleración inicial suave con frenado largo de alta elegancia para paneles UI.', stageType: 'bezier-curve' },
      { id: 'loop-alternate-direction', name: '06. Bucles, Alternate, Reverse & Control de Velocidad', ease: 'inOutSine', duration: 1200, desc: 'Inversión dinámica del sentido de reproducción y multiplicador de playbackRate.', stageType: 'loop-reverse' }
    ]
  },
  {
    slug: 'timelines-workflows',
    code: 'DOC-04',
    name: 'Timelines (createTimeline) & Step-by-Step',
    desc: 'Orquestación secuencial con createTimeline(), offsets relativos ("-=200", "+=100", "<"), etiquetas y flujos interactivos paso a paso.',
    presets: [
      { id: 'sequential-chain-tl', name: '01. Cadena Secuencial con Solapamiento ("-=250")', ease: 'outQuart', duration: 1600, desc: 'Cuatro etapas encadenadas donde cada nodo inicia 250ms antes de que termine el anterior.', stageType: 'tl-overlap' },
      { id: 'step-by-step-wizard', name: '02. Wizard Step-by-Step Interactivo (Anterior / Siguiente / Auto)', ease: 'outExpo', duration: 700, desc: 'Controla manualmente cada paso del flujo o ejecuta la secuencia completa.', stageType: 'tl-stepper' },
      { id: 'parallel-sync-labels', name: '03. Sincronización Paralela con Etiquetas de Timeline (.label())', ease: 'outBack', duration: 1400, desc: 'Dispara barra superior, tarjetas laterales y contador exactamente en la misma marca temporal.', stageType: 'tl-labels' },
      { id: 'staggered-timeline-add', name: '04. Timeline con Posición Stagger (tl.add(el, params, stagger(80)))', ease: 'outExpo', duration: 1300, desc: 'Inserta múltiples elementos en la línea de tiempo desfasados automáticamente.', stageType: 'tl-stagger' },
      { id: 'ui-choreography-sequence', name: '05. Coreografía de Entrada de Dashboard Completo', ease: 'outQuart', duration: 1500, desc: 'Secuencia ordenada: 1. Chasis -> 2. Cabecera -> 3. Gráficas -> 4. Indicadores.', stageType: 'tl-dashboard' },
      { id: 'scrubbable-timeline-bar', name: '06. Timeline Interactiva Controlada por Slider (seek / progress)', ease: 'linear', duration: 2000, desc: 'Arrastra el control deslizante para avanzar o retroceder cuadro por cuadro la línea de tiempo.', stageType: 'tl-scrub' }
    ]
  },
  {
    slug: 'svg-animations',
    code: 'DOC-05',
    name: 'SVG: createDrawable, morphTo & createMotionPath',
    desc: 'Todas las utilidades vectoriales oficiales de Anime.js v4: dibujo de trazos con svg.createDrawable(), transformación de polígonos con svg.morphTo() y trayectorias con svg.createMotionPath().',
    presets: [
      { id: 'svg-line-drawable', name: '01. Dibujo de Trazos SVG con svg.createDrawable() (draw: "0 1")', ease: 'inOutQuad', duration: 1800, desc: 'Dibuja progresivamente circuitos y firmas vectoriales animando la propiedad draw de 0 a 1.', stageType: 'svg-drawable' },
      { id: 'svg-shape-morphing', name: '02. Transformación Geométrica con svg.morphTo()', ease: 'inOutCubic', duration: 1200, desc: 'Interpola suavemente los vértices de un polígono entre estrella, hexágono y escudo.', stageType: 'svg-morph' },
      { id: 'svg-motion-path-orbit', name: '03. Seguimiento de Trayectoria con svg.createMotionPath()', ease: 'linear', duration: 2600, desc: 'Hace que un nodo recorra exactamente una curva Bézier SVG orientando su ángulo automáticamente.', stageType: 'svg-motionpath' },
      { id: 'svg-circuit-pulse', name: '04. Impulsos de Datos en Red de Circuitos SVG', ease: 'inOutSine', duration: 1500, desc: 'Paquetes luminosos viajando por múltiples pistas vectoriales hacia un procesador central.', stageType: 'svg-circuit' },
      { id: 'svg-checkmark-success', name: '05. Trazado Secuencial de Escudo + Checkmark de Verificación', ease: 'outExpo', duration: 1100, desc: 'Dibuja primero el perímetro circular y enseguida traza la paloma de confirmación.', stageType: 'svg-check' },
      { id: 'svg-radar-polygon', name: '06. Gráfica Radar Poligonal Dinámica en SVG', ease: 'outBack', duration: 1000, desc: 'Recalcula y anima los vértices de una gráfica de rendimiento multidimensional.', stageType: 'svg-radar' }
    ]
  },
  {
    slug: 'timers-calculators',
    code: 'DOC-06',
    name: 'Timers (createTimer), Calculando & Telemetría',
    desc: 'Bucles de tiempo de alta precisión con createTimer(), interpolación de objetos numéricos ("Calculando..."), scramble de texto y relojes SVG.',
    presets: [
      { id: 'chrono-timer-ring', name: '01. Cronómetro de Precisión con createTimer() + Play/Pause/Reset', ease: 'linear', duration: 15000, desc: 'Temporizador real con centésimas de segundo, anillo SVG sincronizado y botones de control.', stageType: 'timer-chrono' },
      { id: 'financial-calculating', name: '02. Motor "Calculando..." de Cifras Financieras y Confianza', ease: 'outExpo', duration: 1600, desc: 'Interpola propiedades de un objeto JS desde $0.00 hasta el balance final con formato de moneda.', stageType: 'calc-finance' },
      { id: 'crypto-hash-scrambler', name: '03. Desencriptador / Scramble de Texto y Hashes', ease: 'linear', duration: 1300, desc: 'Permuta caracteres técnicos a alta velocidad antes de fijar el texto definitivo.', stageType: 'calc-scramble' },
      { id: 'multi-gauge-telemetry', name: '04. Sincronizador de 3 Métricas (CPU, RAM, Red) en Tiempo Real', ease: 'outQuart', duration: 1400, desc: 'Actualiza barras y contadores numéricos simultáneamente con nuevos valores aleatorios.', stageType: 'calc-telemetry' },
      { id: 'interval-heartbeat-timer', name: '05. Pulso de Latido (Heartbeat Tick) con Callbacks onUpdate / onLoop', ease: 'outBack', duration: 1000, desc: 'Contador de ciclos completados disparando ondas visuales en cada iteración del timer.', stageType: 'timer-heartbeat' },
      { id: 'countdown-sla-breach', name: '06. Cuenta Regresiva Rápida con Alerta Visual de Tiempo Límite', ease: 'linear', duration: 5000, desc: 'Cuenta hacia atrás desde 5.00s cambiando de estado al llegar a cero.', stageType: 'timer-countdown' }
    ]
  },
  {
    slug: 'loaders-skeletons',
    code: 'DOC-07',
    name: 'Loaders, Spinners, 3 Puntos & Skeletons Cargando',
    desc: 'Colección completa de estados de carga: barra sencilla, spinner orbital, tres puntos elásticos, ecualizador, skeleton cargando con revelación de contenido y pulso.',
    presets: [
      { id: 'loader-simple-morph', name: '01. Carga Sencilla (Barra Elástica Indeterminada)', ease: 'inOutQuad', duration: 1400, desc: 'Barra minimalista que estira y encoge su longitud mientras recorre el carril.', stageType: 'load-simple' },
      { id: 'loader-orbital-spinner', name: '02. Spinner Orbital de Doble Anillo + Núcleo Pulsante', ease: 'linear', duration: 1600, desc: 'Dos anillos concéntricos girando en sentidos opuestos con trazo dinámico.', stageType: 'load-spinner' },
      { id: 'loader-three-dots-wave', name: '03. Tres Puntos Elásticos con Desfase Stagger', ease: 'inOutCubic', duration: 900, desc: 'Onda armónica vertical y de escala sobre tres nodos indicadores.', stageType: 'load-dots' },
      { id: 'loader-skeleton-reveal', name: '04. Previsualización de Contenido Cargando (Skeleton -> Contenido Real)', ease: 'outExpo', duration: 800, desc: 'Alterna en vivo entre el esqueleto pulsante de carga y la tarjeta hidratada con datos.', stageType: 'load-skeleton' },
      { id: 'loader-segmented-blocks', name: '05. Bloques de Progreso Cuantizados en Cascada', ease: 'outExpo', duration: 1100, desc: 'Ocho módulos de memoria que se encienden progresivamente.', stageType: 'load-blocks' },
      { id: 'loader-equalizer-audio', name: '06. Columnas de Telemetría / Ecualizador de Alta Frecuencia', ease: 'inOutSine', duration: 750, desc: 'Barras verticales modulando su altura continuamente para indicar procesamiento de voz o IA.', stageType: 'load-equalizer' }
    ]
  },
  {
    slug: 'stackers-decomposition',
    code: 'DOC-08',
    name: 'Stackers 3D, Descomposición de Componente & Física',
    desc: 'Animaciones espaciales avanzadas: pilas 3D de tarjetas interactivas, descomposición isométrica de un componente en sus capas estructurales y fragmentación en matriz.',
    presets: [
      { id: 'card-stacker-3d', name: '01. Stacker 3D Interactivo de Tarjetas (Rotar Pila al Frente/Fondo)', ease: 'outBack', duration: 550, desc: 'Haz clic para enviar la tarjeta frontal al fondo mientras las demás avanzan en perspectiva 3D.', stageType: 'space-stacker' },
      { id: 'component-3d-explode', name: '02. Descomposición 3D de Componente en 4 Capas Estructurales', ease: 'outBack', duration: 780, desc: 'Separa en el espacio 3D el Chasis, la Superficie Glass, los Datos y la Capa de Acción.', stageType: 'space-decompose' },
      { id: 'fan-deck-spread', name: '03. Despliegue de Tarjetas en Abanico Radial', ease: 'outExpo', duration: 650, desc: 'Abre y cierra un mazo de tarjetas aplicando rotación y traslación proporcional.', stageType: 'space-fan' },
      { id: 'fragment-shatter-grid', name: '04. Fragmentación y Reensamblado de Componente en Bloques', ease: 'inOutCubic', duration: 1100, desc: 'Descompone un panel en 16 fragmentos dispersos y los vuelve a unir con precisión.', stageType: 'space-shatter' },
      { id: 'flip-card-180', name: '05. Giro 3D de 180 Grados (Frente / Reverso de Tarjeta)', ease: 'outBack', duration: 700, desc: 'Rota la tarjeta sobre su eje Y para alternar entre vista frontal y especificaciones traseras.', stageType: 'space-flip' },
      { id: 'accordion-stack-collapse', name: '06. Colapso y Expansión de Pila de Notificaciones', ease: 'outQuart', duration: 520, desc: 'Agrupa 4 notificaciones en una pila compacta o las despliega en lista completa.', stageType: 'space-collapse' }
    ]
  }
];

const FRAMEWORKS = [
  { id: 'react', label: 'React / Next.js (TSX)', ext: 'tsx' },
  { id: 'vue', label: 'Vue 3 Composition (SFC)', ext: 'vue' },
  { id: 'svelte', label: 'Svelte 5 Runes', ext: 'svelte' },
  { id: 'angular', label: 'Angular 18+ Signals', ext: 'component.ts' },
  { id: 'astro', label: 'Astro 5 Component', ext: 'astro' },
  { id: 'blade', label: 'Laravel Blade', ext: 'blade.php' },
  { id: 'livewire', label: 'Laravel Livewire 3', ext: 'php' },
  { id: 'php', label: 'PHP 8.3 Renderer', ext: 'php' },
  { id: 'vanilla-js', label: 'Vanilla JS Module', ext: 'js' },
  { id: 'css-scss', label: 'CSS & SCSS Styles', ext: 'css' }
];

function toPascalCase(str) {
  return str
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join('');
}

function generateFrameworkCode(cat, variant, fw) {
  if (cat.slug === 'special-hybrids') { const code = specialCode(variant.id, fw.id); if (code !== undefined) return code; }
  if (cat.slug === 'docker') { const code = dockerCode(variant.id, fw.id); if (code !== undefined) return code; }
  if (cat.slug === 'carousels') { const code = carouselCode(variant.id, fw.id); if (code !== undefined) return code; }
  if (cat.slug === 'tables') { const code = tableCode(variant.id, fw.id); if (code !== undefined) return code; }
  if (cat.slug === 'accordions-tabs') { const code = accordionCode(variant.id, fw.id); if (code !== undefined) return code; }
  if (cat.slug === 'navigation') { const code = navigationCode(variant.id, fw.id); if (code !== undefined) return code; }
  if (cat.slug === 'modals') { const code = modalCode(variant.id, fw.id); if (code !== undefined) return code; }
  if (cat.slug === 'badges-data') { const code = dataCode(variant.id, fw.id); if (code !== undefined) return code; }
  if (cat.slug === 'cards') { const code = cardCode(variant.id, fw.id); if (code !== undefined) return code; }
  if (cat.slug === 'forms') { const code = formCode(variant.id, fw.id); if (code !== undefined) return code; }
  if (cat.slug === 'toasts') { const code = toastCode(variant.id, fw.id); if (code !== undefined) return code; }
  if (cat.slug === 'buttons' && variant.id === 'modern-rounded-pills') return modernButtonsCode(fw.id);
  if (cat.slug === 'buttons' && variant.id === 'segmented-toolbar-fit') return segmentedButtonsCode(fw.id);
  if (cat.slug === 'buttons' && variant.id === 'styleless-text-links') return stylelessButtonsCode(fw.id);
  if (cat.slug === 'buttons' && variant.id === 'brutalist-3d-push') return mechanicalButtonsCode(fw.id);
  if (cat.slug === 'buttons') { const code = interactiveButtonsCode(variant.id, fw.id); if (code !== undefined) return code; }
  const pascal = toPascalCase(variant.id);
  const baseClass = `cxd-${cat.slug}-${variant.id}`;

  switch (fw.id) {
    case 'css-scss':
      return `/**
 * ============================================================================
 * COMPONENTESXD — ${cat.name.toUpperCase()}
 * ${variant.name}
 * Archivo: components/${cat.slug}/variants/${variant.id}/styles.css
 * ============================================================================
 */
.${baseClass} {
  background: var(--cxd-bg-surface);
  color: var(--cxd-text-primary);
  border: var(--cxd-border-width, 1px) solid var(--cxd-border);
  border-radius: var(--cxd-radius-md);
  font-family: var(--cxd-font-sans);
  font-variant-numeric: tabular-nums;
}
`;
    case 'react':
      return `/**
 * ${variant.name} — React / Next.js (TSX)
 * Archivo: components/${cat.slug}/variants/${variant.id}/${pascal}.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ${pascal}: React.FC<{ title?: string }> = ({
  title = '${variant.name}'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="${baseClass}" data-active={active}>
      <h3>{title}</h3>
      <p>${variant.desc}</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
`;
    case 'vue':
      return `<!-- ${variant.name} — Vue 3 SFC (components/${cat.slug}/variants/${variant.id}/${pascal}.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="${baseClass}" :data-active="active">
    <h3>${variant.name}</h3>
    <p>${variant.desc}</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
`;
    case 'svelte':
      return `<!-- ${variant.name} — Svelte 5 Runes (components/${cat.slug}/variants/${variant.id}/${pascal}.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="${baseClass}" data-active={active}>
  <h3>${variant.name}</h3>
  <p>${variant.desc}</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
`;
    case 'angular':
      return `// ${variant.name} — Angular 18+ Signals (components/${cat.slug}/variants/${variant.id}/${variant.id}.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-${variant.id}',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: \`
    <div class="${baseClass}" [attr.data-active]="active()">
      <h3>${variant.name}</h3>
      <p>${variant.desc}</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  \`
})
export class Cxd${pascal}Component {
  active = signal(false);
}
`;
    case 'astro':
      return `---
// ${variant.name} — Astro 5 (components/${cat.slug}/variants/${variant.id}/${pascal}.astro)
import './styles.css';
---
<div class="${baseClass}">
  <h3>${variant.name}</h3>
  <p>${variant.desc}</p>
  <slot />
</div>
`;
    case 'blade':
      return `{{-- ${variant.name} — Laravel Blade (components/${cat.slug}/variants/${variant.id}/${variant.id}.blade.php) --}}
@props(['title' => '${variant.name}'])
<div {{ $attributes->merge(['class' => '${baseClass}']) }}>
    <h3>{{ $title }}</h3>
    <p>${variant.desc}</p>
    {{ $slot }}
</div>
`;
    case 'livewire':
      return `<?php
// ${variant.name} — Laravel Livewire 3 (components/${cat.slug}/variants/${variant.id}/${pascal}Wire.php)
namespace App\\Livewire\\Cxd\\${toPascalCase(cat.slug)};
use Livewire\\Component;

class ${pascal}Wire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="${baseClass}">
            <h3>${variant.name}</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
`;
    case 'php':
      return `<?php
// ${variant.name} — PHP 8.3 Renderer (components/${cat.slug}/variants/${variant.id}/${pascal}Renderer.php)
declare(strict_types=1);
namespace ComponentesXD\\${toPascalCase(cat.slug)};

final class ${pascal}Renderer {
    public static function render(): string {
        return '<div class="${baseClass}"><h3>${variant.name}</h3><p>${variant.desc}</p></div>';
    }
}
`;
    default:
      return `// ${variant.name} — Vanilla JS (components/${cat.slug}/variants/${variant.id}/${variant.id}.js)
export function mount${pascal}(root = document) {
  return root.querySelectorAll('.${baseClass}');
}
`;
  }
}

function generateAnimationCode(cat, preset) {
  return `/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — ${cat.name.toUpperCase()}
 * ${preset.name}
 * Archivo: animations/${cat.slug}/${preset.id}.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * ${preset.desc}
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_${preset.id.replace(/-/g, '_')}(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || '${preset.ease}',
    duration: options.duration || ${preset.duration},
    delay: stagger(options.stagger || 80)
  });
}
`;
}

let totalComponentFiles = 0;
let totalAnimationFiles = 0;

for (const cat of COMPONENT_CATEGORIES) {
  for (const variant of cat.variants) {
    variant.files = {};
    for (const fw of FRAMEWORKS) {
      const pascal = toPascalCase(variant.id);
      const fileName =
        fw.id === 'css-scss'
          ? 'styles.css'
          : fw.id === 'angular'
            ? `${variant.id}.component.ts`
            : fw.id === 'blade'
              ? `${variant.id}.blade.php`
              : fw.id === 'livewire'
                ? `${pascal}Wire.php`
                : fw.id === 'php'
                  ? `${pascal}Renderer.php`
                  : fw.id === 'vanilla-js'
                    ? `${variant.id}.js`
                    : `${pascal}.${fw.ext}`;

      const relPath = `components/${cat.slug}/variants/${variant.id}/${fileName}`;
      const code = generateFrameworkCode(cat, variant, fw);
      writeFileEnsured(relPath, code);
      variant.files[fw.id] = {
        frameworkId: fw.id,
        label: fw.label,
        path: relPath,
        code
      };
      totalComponentFiles++;
    }
  }
}

for (const animCat of ANIMATION_CATEGORIES) {
  for (const preset of animCat.presets) {
    const relPath = `animations/${animCat.slug}/${preset.id}.js`;
    const code = generateAnimationCode(animCat, preset);
    writeFileEnsured(relPath, code);
    preset.filePath = relPath;
    preset.code = code;
    totalAnimationFiles++;
  }
}

const registryPayload = {
  generatedAt: new Date().toISOString(),
  stats: {
    interfacesCount: INTERFACES.length,
    componentCategoriesCount: COMPONENT_CATEGORIES.length,
    componentVariantsCount: COMPONENT_CATEGORIES.reduce((acc, c) => acc + c.variants.length, 0),
    totalComponentFiles,
    animationCategoriesCount: ANIMATION_CATEGORIES.length,
    animationPresetsCount: ANIMATION_CATEGORIES.reduce((acc, c) => acc + c.presets.length, 0),
    totalAnimationFiles,
    frameworksCount: FRAMEWORKS.length
  },
  interfaces: INTERFACES,
  frameworks: FRAMEWORKS,
  componentCategories: COMPONENT_CATEGORIES,
  animationCategories: ANIMATION_CATEGORIES
};

writeFileEnsured('src/data/vaultRegistry.json', JSON.stringify(registryPayload, null, 2));
console.log(
  `Regenerado: ${totalComponentFiles} archivos de componentes (${registryPayload.stats.componentVariantsCount} variantes únicas) + ${totalAnimationFiles} módulos Anime.js v4.`
);
