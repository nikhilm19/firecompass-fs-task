import React from "react";
import "./App.css";
import HomeCountries from "./components/HomeCountries";
import TopBrandsByCountries from "./components/TopBrandsByCountry";
import dataDb from "./data/mockDb";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  async componentDidMount() {
    if (!localStorage.getItem("data")) {
      // const data = await axios.get("http://starlord.hackerearth.com/TopRamen");

      const data = dataDb;

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
