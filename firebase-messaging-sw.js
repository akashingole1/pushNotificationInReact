export const inicializarFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "your messagingSenderId"
  });

  navigator.serviceWorker.register("/my-sw.js").then(registration => {
    firebase.messaging().useServiceWorker(registration);
  });
};
