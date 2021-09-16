import React, { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard"

export function Restaurants({ user }) {
  //state variable for restaurants
  const [restaurants, setRestaurants] = useState([]);

  //function to render restaurant card
  useEffect(() => {
    fetch(`/api/users/${user.full_name}`)
      .then((r) => r.json())
      .then((r) => setRestaurants(r.restaurants));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {restaurants.map((restaurant) => {
        return (
          <div className="col" key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </div>
        );
      })}
    </div>
  );
}
