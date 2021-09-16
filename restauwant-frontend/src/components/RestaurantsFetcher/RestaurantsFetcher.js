import React, { useEffect, useState } from "react";

const FETCH_OPTIONS = {
  method: "GET",
};

export function RestaurantsFetcher({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/restaurants", FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        setRestaurants(res);
        setLoading(false);
      });
  }, []);

  return <React.Fragment>{children({ restaurants, loading })}</React.Fragment>;
}
