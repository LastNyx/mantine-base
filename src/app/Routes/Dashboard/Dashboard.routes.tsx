import { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

const DashboardPage = lazy(
  () => import("@/app/Pages/Dashboard/Dashboard.page.tsx")
);

export const DashboardRoutes: RouteObject[] = [
  {
    path: "dashboard",
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardPage />
          </Suspense>
        ),
      },
    ],
  },
];
