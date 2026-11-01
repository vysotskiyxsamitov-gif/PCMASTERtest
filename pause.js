/* PC MASTER — совместимость старого pause.js.
   Единственное меню паузы теперь обслуживает extras.js.
   Важно: здесь намеренно нет обработчиков Escape и pointerlockchange,
   чтобы два независимых меню не перехватывали мышь одновременно. */
var PZ = 0;
var pzWas = false;
function pauseDraw() {}
function pauseOpen() {
  // Пауза открывается единым обработчиком из extras.js.
  if (typeof window.__pcMasterPause === 'function') window.__pcMasterPause();
}
function pauseHide() {}
function pauseClose() {}
function pauseToMenu() {
  if (typeof toMenu === 'function') toMenu();
}
