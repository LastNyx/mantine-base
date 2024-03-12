import { RouteObject } from "react-router-dom";
import { Suspense } from "react";
import SimpleDashboardLayout from "@/app/Components/Layout/SimpleDashboardLayout.tsx";
import HomePage from "@/app/Pages/Home/Home.page.tsx";

export const HomeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <SimpleDashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
];
