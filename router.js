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
    app.innerHTML = '<div id="unityContainer" style="width: 100%; height: 600px;"></div>';
    await loadUnityGame('unityContainer', '/unity-modules/game1');
  } else {
    app.innerHTML = '<p>404 — Страница не найдена</p>';
  }
}
