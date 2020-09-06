import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import noodleImg from "../images/6.jpg";
import dataDb from "../data/mockDb";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
const images = [img1, img2, img3, img4, img5];
class HomeCountries extends React.Component {
  renderCountries = () => {
    const data = dataDb;
    const uniqueData = _.uniqBy(data, "Country");
    console.log(uniqueData);

    const countries = uniqueData.map((ramen, pos, arr) => {
      return (
        <div className="country-card">
          <img alt="country " src={_.sample(images)} className="country-img" />
          <div className="country-card-content">
            <Link
              to={`/country/${ramen.Country}`}
              style={{
                textDecoration: "none",
                textDecorationStyle: "None",
                color: "black",
              }}
            >
              <div className="top-country">
                <h2>{ramen.Country}</h2>
              </div>

              <div className="top-country-brand">
                <div className="veg-non-veg"></div>
                <h3>Top Brand:{ramen.Brand}</h3>
              </div>
            </Link>
          </div>
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
            <img
              alt="landing "
              src={noodleImg}
              className="landing-img App-logo"
            />
          </div>

          <div className="landing-actions"></div>
        </div>
        <div className="countries">{this.renderCountries()}</div>
      </div>
    );
  }
}

export default HomeCountries;
