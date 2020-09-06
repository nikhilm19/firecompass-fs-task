import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
function displayNotification() {
  
}
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register(serviceWorker)
//     .then(function (registration) {
//       // Successful registration
//       console.log(
//         "Hooray. Registration successful, scope is:",
//         registration.scope
//       );
//     })
//     .catch(function (err) {
//       // Failed registration, service worker won’t be installed
//       console.log("Whoops. Service worker registration failed, error:", err);
//     });
// }
