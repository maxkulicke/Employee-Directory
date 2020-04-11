import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    search: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    value = value.substring(0, 30);

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <p>
          Test: {this.state.search}
        </p>
        <form className="form">
          <input
            value={this.state.search}
            name="employee"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Employee"
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
