import { loadUnityGame } from './unity-loader.js';

export async function router() {
  console.log('router.js');
  const root = '/pwa-test/';
  const app = document.getElementById('app');
  const path = window.location.pathname;

  console.log('root');
  console.log(root);
  console.log('path');
  console.log(path);

  if (path === root || path === root + '/index.html') {
    app.innerHTML = '<p>Добро пожаловать в PWA v0.1! Выберите игру в меню.</p>';
  } else if (path === root + 'game1') {
    app.innerHTML = '<canvas id="unity-canvas" width=960 height=600 tabindex="-1" style="width: 960px; height: 600px; background: #231F20"></canvas>';
    await loadUnityGame('unity-canvas', root+'unity-modules/game1');
  } else if (path === root + 'game2') {
    app.innerHTML = '<canvas id="unity-canvas" width=960 height=600 tabindex="-1" style="width: 960px; height: 600px; background: #231F20"></canvas>';
    await loadUnityGame('unity-canvas', root+'unity-modules/game2');
  } else {
    app.innerHTML = '<p>404 — Страница не найдена</p>';
  }
}
