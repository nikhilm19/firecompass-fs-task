import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import { Link } from "react-router-dom";
import noodleImg from "../images/6.jpg";
class HomeCountries extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCountries = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(localStorage.getItem("data"));
    const uniqueData = _.uniqBy(data, "Country");
    console.log(uniqueData);

    const countries = uniqueData.map((ramen, pos, arr) => {
      return (
        <div className="country-card">
          <Link
            to={`/country/${ramen.Country}`}
            style={{
              textDecorationStyle: "wavy",
              color: "white",
            }}
          >
            <h1>{ramen.Country}</h1>
          </Link>
        </div>
      );
    });
    console.log(countries);
    return countries;
  };

  render() {
    return (
      <div className="home">
        <div className="landing">
          <div className="landing-content">
            <div className="landing-text">
              <h1>
                Yummy yum yum <span className="noodles">Noodles</span>
              </h1>
            </div>
            <img src={noodleImg} className="landing-img App-logo" />
          </div>
          <div className="landing-actions"></div>
        </div>
        <div className="countries">{this.renderCountries()}</div>
      </div>
    );
  }
}

export default HomeCountries;
