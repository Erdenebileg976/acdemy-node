import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "@/services/api";

export const useRestaurant = (id: string) =>
  useQuery({
    queryKey: ["restaurant", id],
    queryFn: () => getRestaurants({ id }),
    enabled: !!id,
  });
