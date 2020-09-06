import React from "react";
import _ from "lodash";
import SearchBrand from "./SearchBrand";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import dataDb from "../data/mockDb";
const images = [img1, img2, img3, img4, img5];
class TopBrandsByCountry extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      topTenBrands: null,
      filteredResults: null,
    };
  }

  onSubmit = async (term) => {
    console.log(term);

    
    if (term === "") {
      this.setState({ filteredResults: this.state.topTenBrands });
    }
    let results = this.state.topTenBrands.filter((ramen) => {
      return ramen.Brand.startsWith(term);
    });

    this.setState({ filteredResults: results });
    console.log(term);
  };
  filterTopBrands = () => {
    // const data = JSON.parse(localStorage.getItem("data"));
    // console.log(localStorage.getItem("data"));
    const data = dataDb;
    const topBrands = data.filter((ramen, i, arr) => {
      return ramen.Country === this.props.match.params.cname;
    });
    const topTenBrands = _.sortBy(topBrands, "Top Ten");
    console.log(topTenBrands);
    this.setState({
      topTenBrands,
      filteredResults: topTenBrands,
    });
  };

  renderTopBrands = () => {
    if (this.state.filteredResults.length === 0) {
      return <p>Nothing found here! </p>;
    }
    const ramens = this.state.filteredResults.map((ramen) => {
      return (
        <div className="top-brand-card">
          <img
            alt="top brand"
            src={_.sample(images)}
            className="top-brand-img"
          />
          <h1>{ramen.Country}</h1>
          {ramen["Top Ten"] !== "NaN" ? <p>{ramen["Top Ten"]}</p> : null}
          {ramen.Brand !== null ? <p>{ramen.Brand}</p> : null}
          {ramen.Style !== "NaN" ? <p>{ramen.Style}</p> : null}
          <p>{ramen.Stars}</p>
          <p>{ramen.Variety}</p>
        </div>
      );
    });

    return ramens;
  };

  componentDidMount() {
    this.filterTopBrands();
  }
  render() {
    return (
      <div className="top-brands--container">
        <SearchBrand onSubmit={this.onSubmit} />
        <div className="top-brands">
          {this.state.topTenBrands === null
            ? "Please wait"
            : this.renderTopBrands()}
        </div>
      </div>
    );
  }
}

export default TopBrandsByCountry;
