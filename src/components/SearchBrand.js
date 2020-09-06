import React from "react";
import SearchIcon from "../images/Icon feather-search.png";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: " ",
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  componentDidMount() {}

  render() {
    return (
      <div className="searchbar--container">
        <form className="searchbar-form" onChange={this.onFormSubmit}>
          <div className="searchbar-form--content">
            <div className="searchbar-form--icon">
              <img alt="search icon" src={SearchIcon} className=""></img>
            </div>
            <span className="searchbar-form--input">
              <input
                id="searchInput"
                type="text"
                onSubmit={this.onFormSubmit}
                onChange={(e) => this.setState({ term: e.target.value })}
                placeholder="Search Top Brands"
              ></input>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
