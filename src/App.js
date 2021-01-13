import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoaing: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoaing: false });
  };
  
  componentDidMount() {
    this.getMovies();
  }
  render() { 
    const { isLoaing, movies } = this.state;
    return (
      <section class="container">
        {isLoaing ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
        ) : (
          movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image} 
          />
        )))}
      </section>
    );
  }
}

export default App;