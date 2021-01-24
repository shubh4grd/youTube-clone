import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    //callback from parent
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <div className="search">
            <input
              type="search"
              className="form"
              placeholder="Search"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button className="form">Search</button>
          </div>
        </form>
      </>
    );
  }
}
export default SearchBar;
