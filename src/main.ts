import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import '@/styles/style.scss';

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js').then(function () {
//     console.log('Service Worker Registered')
//   })
// }

createApp(App).use(router).mount('#app');
