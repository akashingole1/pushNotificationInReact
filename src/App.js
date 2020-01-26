import React from "react";
import firebase from "firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
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

  const notify = payload => {
    toast(
      <div
        style={{
          color: "green",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <img src={payload.data.icon} alt="logo"></img>
        <h3>{payload.data.title}</h3>
      </div>
    );
  };

  /**
   * first we request the permission for notification
   * then we get the fcm token,
   * after getting the token we send the token to the fcm api,
   * which sends the data to fcm server and fcm server sends the notification to the device
   */

  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      console.log("Have permission");
      return messaging.getToken();
    })
    .then(function(token) {
      console.log("firebase token", token);
    })
    .catch(err => {
      console.log("firebase error", err);
    });

  // for receiving notification when the app is in foreground
  messaging.onMessage(payload => {
    notify(payload);
    console.log("Notification received!", payload);
  });

  return (
    <div className="App">
      <ToastContainer />
      <h3>Getting started with firebase</h3>
    </div>
  );
}

export default App;
