import { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/app/Pages/Home/Home.page.tsx"));

export const HomeRoutes: RouteObject[] = [
  {
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
