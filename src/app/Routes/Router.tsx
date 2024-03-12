import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeRoutes } from "@/app/Routes/Home/Home.routes.tsx";

const router = createBrowserRouter([
  {
    children: [...HomeRoutes],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
