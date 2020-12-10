import React, { Component } from "react";

class FetchingTestApi extends Component {
  constructor(props) {
    super(props);
  }
  state = { user: null, error: null };

  getDataFromApi = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  componentDidMount() {
    this.getDataFromApi(this.props.id);
  }

  render() {
    // console.log("user: ", this.state.user);

    return (
      <div>
        {this.state.user === null ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h4 data-test="name">Name: {this.state.user.name}</h4>
            <p data-test="url">URL: {this.state.user.website}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FetchingTestApi;
