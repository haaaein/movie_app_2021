import React from "react";

class App extends React.Component{
  state = {
    isLoaing: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoaing: false });
    }, 6000);
  }
  render() { 
    const { isLoaing } = this.state;
    return <div>{isLoaing ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;