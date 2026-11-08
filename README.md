# Cyberpunk RED — Traducción al castellano (cyberpunk-tr-esp)

Módulo para Foundry VTT 12 que traduce al castellano los compendios básicos del sistema **Cyberpunk RED – Core** (v0.92.4) mediante Babele, y completa textos de su interfaz que el sistema deja en inglés.

**Uso privado de la mesa.** No publicar ni cambiar la visibilidad del repositorio.

## Qué traduce
- 582 objetos de los compendios básicos con nombre y descripción: armas, armas de marca, munición, armaduras, ropa, ciberequipo, drogas, equipo, programas, mejoras, vehículos, roles y heridas críticas. Los nombres siguen el libro básico en castellano y la biblioteca del Core (`cyberpunk-red-core-esp`).
- Las especialidades de habilidad (Experto local, Artes marciales, Tocar un instrumento y Ciencia), con las etiquetas de sus compendios.
- Las tablas de heridas críticas, cuyos resultados coinciden con los nombres traducidos de las heridas.
- 166 textos de interfaz, entre ellos las descripciones emergentes de características y habilidades, varias aptitudes de rol y la etiqueta CDD, que el `es.json` de RED muestra como «VD».

## Qué no toca, a propósito
- Las habilidades básicas (RED y el motor identifican algunas por su nombre inglés); Idiomas conserva la traducción del propio RED y los campos internos `weaponSkill`, `dvTable` y `consumed`.
- Los nombres de las tablas de VD: los deja en inglés para que RED y el motor `edgerunners-2070` encuentren la tabla de cada arma. Las traducciones que trae RED las renombran sin renombrar el campo de las armas.
- Black Chrome y los DLC, que conservan las traducciones del propio RED.

Instalación en `INSTALL.txt`; historial en `CHANGELOG.md`.
