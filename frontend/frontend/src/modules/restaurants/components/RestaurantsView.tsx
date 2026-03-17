import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useRestaurants } from "@/modules/restaurants/hooks/useRestaurant";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Restaurant } from "@/types/restaurants";

const RestaurantsView = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useRestaurants({
    search,
    page,
  });

  const restaurants: Restaurant[] = Array.isArray(data?.restaurants)
    ? data.restaurants
    : [];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Restaurants</h1>
      </div>

      {/* Search */}
      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search restaurant name..."
            className="pl-9"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* Card Container */}
      <div className="border rounded-2xl shadow-sm overflow-hidden bg-background">
        {/* Loading */}
        {isLoading && (
          <div className="p-4 space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-14 w-full rounded-lg" />
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="text-center py-16 text-red-500">
            Failed to load restaurants
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && restaurants.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            No restaurants found
          </div>
        )}

        {/* Table */}
        {!isLoading && !isError && restaurants.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted sticky top-0">
                <tr>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Cuisine</th>
                  <th className="text-left p-4">Borough</th>
                  <th className="text-left p-4">Address</th>
                </tr>
              </thead>

              <tbody>
                {restaurants.map((r) => {
                  const address = `${r.address?.building ?? ""} ${
                    r.address?.street ?? ""
                  }`;

                  return (
                    <tr
                      key={r._id}
                      onClick={() => navigate(`/restaurants/${r._id}`)}
                      className="border-t cursor-pointer transition hover:bg-muted/50"
                    >
                      <td className="p-4 font-medium">{r.name}</td>
                      <td className="p-4">{r.borough}</td>
                      <td className="p-4 text-muted-foreground">{address}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>

        <span className="text-sm text-muted-foreground">Page {page}</span>

        <Button variant="outline" onClick={() => setPage((p) => p + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export { RestaurantsView };
