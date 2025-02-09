import { updateUI } from './js/app';
import './styles/styles.scss';

document.getElementById('generate').addEventListener('click', updateUI);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('ServiceWorker registration successful');
      }).catch((err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }