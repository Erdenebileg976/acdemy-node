import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRestaurants } from "../hooks/useRestaurant";
import { Skeleton } from "@/components/ui/skeleton";

const RestaurantDetailSkeleton = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Skeleton className="h-8 w-24 mb-8" />
      <div className="flex flex-col md:flex-row gap-8">
        <Skeleton className="w-full md:w-64 h-96 rounded-lg flex-shrink-0" />
        <div className="flex-1 space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-5 w-1/3" />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-6 w-16 rounded-full" />
            ))}
          </div>
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-5 w-1/2" />
        </div>
      </div>
    </div>
  </div>
);

const RestaurantDetailView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: restaurant,
    isLoading,
    isError,
  } = useRestaurants({
    id: id ?? "",
  });

  if (isLoading) return <p className="p-4">Loading...</p>;

  if (isLoading) return <RestaurantDetailSkeleton />;
  if (isError || !restaurant) {
    return (
      <div className="p-4 text-center">
        <p>Restaurant not found</p>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  const avgScore =
    restaurant.grades?.length > 0
      ? (
          restaurant.grades.reduce((acc, g) => acc + g.score, 0) /
          restaurant.grades.length
        ).toFixed(1)
      : null;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <Button variant="ghost" onClick={() => navigate(-1)}>
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back
      </Button>

      <h1 className="text-2xl font-bold">{restaurant.name}</h1>

      <p className="text-muted-foreground">{restaurant.cuisine}</p>

      <div className="flex items-center gap-2 text-sm">
        <MapPin className="w-4 h-4" />
        {restaurant.borough}
      </div>

      <p className="text-sm">
        {restaurant.address.building} {restaurant.address.street},{" "}
        {restaurant.address.zipcode}
      </p>

      {avgScore && (
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span>{avgScore} / 10</span>
          <span className="text-muted-foreground text-sm">
            ({restaurant.grades.length} reviews)
          </span>
        </div>
      )}
    </div>
  );
};

export { RestaurantDetailView };
