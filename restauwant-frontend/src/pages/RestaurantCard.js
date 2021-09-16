import React from "react";

export function RestaurantCard({ restaurant }) {
  const mapNameToJobTitle = {
    1: "Chef",
    2: "Manager",
    3: "Bartender",
    4: "Server",
    5: "Busser",
  };
  
  const mapBoroughToLabel = {
    1: "Manhattan",
    2: "Brooklyn",
    3: "Queens",
    4: "Staten Island",
    5: "Bronx",
  };
  
  const mapPriceToLabel = {
    1: "$",
    2: "$$",
    3: "$$$",
    4: "$$$$",
    5: "$$$$$",
  };
   
return (
    <div className="card card-body">
      <h2 className="card-text">{restaurant.name}</h2>
      <img
        src="https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg"
        style={{ height: "200px", width: "225px" }}
        alt="restaurant"
      />
      <br></br>
      <h5 className="card-title">{restaurant.restaurant_type}</h5>
      <p className="card-text"><strong>Borough Location: </strong> {mapBoroughToLabel[restaurant.borough_location]}</p>
      <p className="card-text">{mapPriceToLabel[restaurant.price_range]}</p>
      <p className="card-text">There are {restaurant.jobs.length} open positions for this restaurant</p>
    </div>
  );
}
