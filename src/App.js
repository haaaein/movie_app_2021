import React from "react";

function  Food({ name, picture }) {
  return (
    <div>
      <h2>I Live {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://gastromanya.com/wp-content/uploads/2018/08/kimchi-3.jpg"
  },
  {
    name: "Pizza",
    image: "https://media.glassdoor.com/l/78/17/b3/69/pizza.jpg"
  },
  {
    name: "Chicken",
    image: "https://cdn0.vox-cdn.com/thumbor/ATtrVAeuVe_snsBkCIdNtQPnToQ=/0x279:720x684/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/53964885/Fried_chicken.0.jpg"
  },
  {
    name: "Bibimbap",
    image: "https://www.curiouscuisiniere.com/wp-content/uploads/2019/11/Korean-Bibimbap-Mixed-Rice.1.jpg"
  }];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
