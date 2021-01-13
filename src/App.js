import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoaing: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  };
  
  componentDidMount() {
    this.getMovies();
  }
  render() { 
    const { isLoaing } = this.state;
    return <div>{isLoaing ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;