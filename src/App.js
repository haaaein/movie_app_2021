import React from "react";
import axios from "axios";
import Movie from "./Movie";

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
      <div>
        {isLoaing 
        ? "Loading..." 
        : movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image} 
          />
        ))}
      </div>
    );
  }
}

export default App;