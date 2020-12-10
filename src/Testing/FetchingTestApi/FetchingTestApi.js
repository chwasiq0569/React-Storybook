import React, { Component } from "react";
import { fetchUser } from "./util";

class FetchingTestApi extends Component {
  constructor(props) {
    super(props);
  }
  state = { user: null, error: null };

  getDataFromApi = (id) => {
    fetchUser(id)
      .then((data) => {
        this.setState({ ...this.state, user: data });
      })
      .then((error) => this.setState({ ...this.state, error: error }));
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
