import React, { Component } from 'react';
import axios from 'axios';

class MyComponent extends Component {
  state = {
    data: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    // Make an API GET request
    axios.get('https://api.example.com/data')
      .then((response) => {
        // Update the state with the fetched data
        this.setState({
          data: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        // Handle errors
        this.setState({
          error: error,
          loading: false,
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        {/* Render your component content using the fetched data */}
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyComponent;
