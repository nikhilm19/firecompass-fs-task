import React from "react";
import "./App.css";
import HomeCountries from "./components/HomeCountries";
import TopBrandsByCountries from "./components/TopBrandsByCountry";
import dataDb from "./data/mockDb";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  async componentDidMount() {
    // displayNotification();
    Notification.requestPermission(function (status) {
      console.log("Notification permission status:", status);
      var notification = new Notification("Hi there!");

      navigator.serviceWorker.getRegistration().then(function (reg) {
        reg.showNotification("Hello world!");
      });
    });
    localStorage.setItem("data", JSON.stringify(dataDb));
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route
            exact
            path="/country/:cname"
            component={TopBrandsByCountries}
          />
          <Route exact path="/" component={HomeCountries} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
