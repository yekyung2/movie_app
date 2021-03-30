import React from "react";
import Proptypes from "prop-types";

const FoodILike =[
  {
    id:1,
    name: "Fish&Chips",
    image: "https://images.unsplash.com/photo-1524334788144-6dc88da21500?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmlzaCUyNmNoaXBzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    rating: 5
  },
  {
    id:2,
    name: "Barbeque",
    image: "https://images.unsplash.com/photo-1560614382-e25d8adcb4b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YmJxfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    rating: 4.9
  },
  {
    id:3,
    name: "Sushie",
    image: "https://images.unsplash.com/photo-1563612116891-9b03e4bb9318?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHN1c2hpfGVufDB8fDB8&auto=format&fit=crop&w=1400&q=60",
    rating: 3
  },
  {
    id:4,
    name: "spagetti",
    image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYWdldHRpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    rating: 4.3
  },
  {
    id:5,
    name: "Pizza",
    image:"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    rating: 3.8
  }

];

function Food({ name, picture, rating }){
  return (
    <div>
      <h2> I like {name} </h2>
      <h3> Rating {rating}/5 </h3>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.Proptypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating : Proptypes.number.isRequired
}

function App() {
  return (
  <div>
    <h1>YumYumTime</h1>
    {FoodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
    ))}
  </div>
  );
}

export default App;
