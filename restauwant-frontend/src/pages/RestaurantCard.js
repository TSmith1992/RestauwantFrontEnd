import React from "react";

export function RestaurantCard({ restaurant }) {
   
return (
    <div className="card card-body">
      <h2 className="card-text">{restaurant.name}</h2>
      <img
        src="https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg"
        style={{ height: "200px", width: "225px" }}
        alt="restaurant"
      />
      <h5 className="card-title">{restaurant.restaurant_type}</h5>
      <p className="card-text">{restaurant.borough_location}</p>
      <p className="card-text">{restaurant.price_range}</p>
      <p className="card-text">There are {restaurant.jobs.length} open positions for this restaurant</p>
    </div>
  );
}
