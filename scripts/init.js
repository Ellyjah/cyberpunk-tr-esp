// Cyberpunk RED — traducción al castellano: registra las traducciones de los compendios en Babele.
const MODULE_ID = "cyberpunk-tr-esp";
Hooks.once("babele.init", (babele) => {
  babele.register({ module: MODULE_ID, lang: "es", dir: "compendium/es" });
});
// Las traducciones que trae RED fijan etiquetas en inglés para estas especialidades y prevalecen sobre las del módulo.
// Solo se renombran estas cuatro; las etiquetas de heridas críticas no se tocan porque RED busca la herida por etiqueta.
const SKILL_LABELS = {"cyberpunk-red-core.core_skills-local-expert": "Habilidades (Experto local)", "cyberpunk-red-core.core_skills-martial-arts": "Habilidades (Artes marciales)", "cyberpunk-red-core.core_skills-play-instrument": "Habilidades (Tocar un instrumento)", "cyberpunk-red-core.core_skills-science": "Habilidades (Ciencia)"};
Hooks.once("babele.ready", () => {
  if (game.i18n.lang !== "es") return;
  for (const [id, label] of Object.entries(SKILL_LABELS)) {
    const pack = game.packs.get(id);
    if (pack) pack.metadata.label = label;
  }
  ui.compendium?.render();
});
