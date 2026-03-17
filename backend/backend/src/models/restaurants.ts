import { Schema, model } from "mongoose";

const restaurantSchema = new Schema(
  {
    address: { type: Object },
    borough: { type: String },
    cuisine: { type: String },
    grades: { type: [Object] },
    name: { type: String },
    restaurant_id: { type: String },
  },
  {
    collection: "restaurants",
  },
);

const Restaurant = model("Restaurant", restaurantSchema);

export default Restaurant;
