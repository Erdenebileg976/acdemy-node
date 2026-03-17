import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { type Restaurant } from "@/types/restaurants";

export default function RestaurantDetail() {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/restaurants/${id}`)
      .then((res) => setRestaurant(res.data));
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      <h1>{restaurant.name}</h1>

      <p>Cuisine: {restaurant.cuisine}</p>

      <p>Borough: {restaurant.borough}</p>

      <p>
        Address: {restaurant.address.building} {restaurant.address.street}
      </p>
    </div>
  );
}
