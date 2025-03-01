import { updateUI } from './js/app';
import './styles/styles.scss';

document.getElementById('generate').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    updateUI(location, startDate, endDate);
});


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('ServiceWorker registration successful');
      }).catch((err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
