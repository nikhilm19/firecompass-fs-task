import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeCountries from "./components/HomeCountries";
import TopBrandsByCountries from "./components/TopBrandsByCountry";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    if (!localStorage.getItem("data")) {
      const data = await axios.get("http://starlord.hackerearth.com/TopRamen");
      localStorage.setItem("data", JSON.stringify(data.data));
    }
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
