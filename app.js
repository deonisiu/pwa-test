import { router } from './router.js';

window.addEventListener('DOMContentLoaded', () => {
  console.log('app.js');
  console.log('DOMContentLoaded');
  router();

  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      history.pushState(null, '', e.target.href);
      router();
    }
  });

  window.addEventListener('popstate', router);
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
