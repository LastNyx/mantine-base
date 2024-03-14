import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeRoutes } from "@/app/Routes/Home/Home.routes.tsx";
import { NotFoundPage } from "@/lib/components/Pages/NotFoundPage/NotFoundPage.tsx";
import SimpleDashboardLayout from "@/app/Components/Layout/SimpleDashboardLayout.tsx";
import { DashboardRoutes } from "@/app/Routes/Dashboard/Dashboard.routes.tsx";
import { SettingsRoute } from "@/app/Routes/Settings/Settings.routes.tsx";
import { UserRoutes } from "@/app/Routes/User/User.routes.tsx";

const router = createBrowserRouter([
  {
    element: <SimpleDashboardLayout />,
    children: [
      ...HomeRoutes,
      ...DashboardRoutes,
      ...SettingsRoute,
      ...UserRoutes,
    ],
  },
  { path: "*", index: true, element: <NotFoundPage /> },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
