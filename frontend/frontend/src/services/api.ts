import type { RestaurantsResponse } from "@/types/restaurants";

export interface GetRestaurantsParams {
  page?: number;
  limit?: number;
  search?: string;
  cuisine?: string;
  borough?: string;
  id?: string;
}

export const getRestaurants = async (
  params: GetRestaurantsParams = {},
): Promise<RestaurantsResponse> => {
  const query = new URLSearchParams();

  if (params.page) query.set("page", String(params.page));
  if (params.limit) query.set("limit", String(params.limit));
  if (params.search) query.set("search", params.search);
  if (params.cuisine) query.set("cuisine", params.cuisine);
  if (params.borough) query.set("borough", params.borough);
  if (params.id) query.set("id", params.id);

  const res = await fetch(`http://localhost:3000/api/restaurants?${query}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch restaurants: ${res.status}`);
  }

  return res.json() as Promise<RestaurantsResponse>;
};
