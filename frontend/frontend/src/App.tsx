import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import RestaurantsDetailPage from "./pages/restaurants/RestaurantsDetailPage";
import RestaurantsPage from "./pages/restaurants/RestaurantsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantsDetailPage />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
