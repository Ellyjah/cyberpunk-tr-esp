# Cyberpunk RED — Traducción al castellano (`cyberpunk-tr-esp`)

Módulo para **Foundry VTT 12** que traduce al castellano los compendios básicos del sistema **Cyberpunk RED – Core** mediante Babele, y completa los textos de interfaz que el sistema deja en inglés.

*Contenido no oficial, no aprobado ni respaldado por R. Talsorian Games.*

## Qué hace

**Traduce**
- **582 objetos** de los compendios básicos, con nombre y descripción: armas, armas de marca, munición, armaduras, ropa, ciberequipo, drogas, equipo, programas, mejoras, vehículos, roles y heridas críticas. Los nombres siguen el libro básico en castellano.
- **Especialidades de habilidad** (Experto local, Artes marciales, Tocar un instrumento y Ciencia), con las etiquetas de sus compendios.
- **Tablas de heridas críticas**, cuyos resultados coinciden con los nombres traducidos de las heridas.
- **166 textos de interfaz**: descripciones emergentes de características y habilidades, varias aptitudes de rol y la etiqueta CDD, que RED muestra como «VD».

**No toca, a propósito**
- Las habilidades básicas: RED y otros módulos identifican algunas por su nombre inglés. Idiomas conserva la traducción del propio RED.
- Los campos internos `weaponSkill`, `dvTable` y `consumed`.
- Los nombres de las tablas de VD, para que RED y el motor `edgerunners-2070` encuentren la tabla de cada arma.
- Black Chrome y los DLC, que conservan las traducciones del propio RED.

## Dependencias

| Tipo | Paquete | Versión |
|---|---|---|
| Plataforma | Foundry VTT | 12 (verificado 12.343) |
| Sistema | Cyberpunk RED – Core (`cyberpunk-red-core`) | verificado v0.92.4 |
| Módulo obligatorio | Babele (`babele`) | 2.6.2 o posterior |

**Se integra con (opcionales):**
- `cyberpunk-red-core-esp`: los nombres traducidos coinciden con los de esa biblioteca del libro básico.
- `edgerunners-2070`: compatible; la traducción no cambia los nombres internos que usa el motor.
- `cyberpunk-generador`: con la traducción activa, los objetos de RED del generador salen en castellano.

**Lo necesitan:** ningún módulo; todos funcionan sin él.

## Instalación

En Foundry, «Instalar módulo» → «URL del manifiesto»:

```
https://github.com/Ellyjah/cyberpunk-tr-esp/releases/latest/download/module.json
```

Activa Babele y este módulo en el mundo, con el idioma de Foundry en español. Detalles en `INSTALL.txt`; historial en `CHANGELOG.md`.
