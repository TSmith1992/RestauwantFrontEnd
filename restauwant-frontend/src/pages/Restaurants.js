import React, { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { RestaurantCard } from "./RestaurantCard";

export function Restaurants({ user }) {
  //state variable for restaurants
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  //function to render restaurant card
  useEffect(() => {
    fetch(`/api/users/${user.full_name}`)
      .then((r) => r.json())
      .then((r) => {
        setRestaurants(r.restaurants);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (restaurants.length === 0) {
    return <h3>No Restaurants found</h3>;
  }

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
