import React from "react";
import PropTypes from "prop-types";

function  Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://gastromanya.com/wp-content/uploads/2018/08/kimchi-3.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Pizza",
    image: "https://media.glassdoor.com/l/78/17/b3/69/pizza.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Chicken",
    image: "https://cdn0.vox-cdn.com/thumbor/ATtrVAeuVe_snsBkCIdNtQPnToQ=/0x279:720x684/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/53964885/Fried_chicken.0.jpg",
    rating: 4.5
  },
  {
    id: 4,
    name: "Bibimbap",
    image: "https://www.curiouscuisiniere.com/wp-content/uploads/2019/11/Korean-Bibimbap-Mixed-Rice.1.jpg",
    rating: 3
  }];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
