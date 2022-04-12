importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyB4LemJewrG16s47wILoAWl2M57xc2I9Q4',
  authDomain: 'itx-notification.firebaseapp.com',
  projectId: 'itx-notification',
  storageBucket: 'itx-notification.appspot.com',
  messagingSenderId: '347224033386',
  appId: '1:347224033386:web:3804c6d4d1c1a7bc6e2213',
  measurementId: 'G-FKZQTL9QTD'
});
const messaging = firebase.messaging();

