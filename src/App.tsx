import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { RouterProvider } from "react-router";

import { routes } from "@/routes/routes";

import Loading from "./components/Loading/Loading";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routes} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
