// Cyberpunk RED — traducción al castellano: registra las traducciones de los compendios en Babele.
const MODULE_ID = "cyberpunk-tr-esp";
Hooks.once("babele.init", (babele) => {
  babele.register({ module: MODULE_ID, lang: "es", dir: "compendium/es" });
});
