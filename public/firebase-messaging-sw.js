importScripts("https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyA9n5LlrSKMMWDs8yEy8Pf1OOJgDM3GNPc",
  authDomain: "react-firebase-push-7d73a.firebaseapp.com",
  databaseURL: "https://react-firebase-push-7d73a.firebaseio.com",
  projectId: "react-firebase-push-7d73a",
  storageBucket: "react-firebase-push-7d73a.appspot.com",
  messagingSenderId: "987816781440",
  appId: "1:987816781440:web:fba9907b1786b04ea62865",
  measurementId: "G-F6YM6BX21D"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// for receiving notification when the app is in background
messaging.setBackgroundMessageHandler(function(payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
    tag: "Hi there !"
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
