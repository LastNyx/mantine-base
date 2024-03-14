import { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

const UserPage = lazy(() => import("@/app/Pages/User/User.page.tsx"));
const UserDetail = lazy(
  () => import("@/app/Pages/User/{id}/UserDetail.page.tsx")
);

export const UserRoutes: RouteObject[] = [
  {
    path: "users",
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UserPage />
          </Suspense>
        ),
      },
      {
        path: ":id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UserDetail />
          </Suspense>
        ),
      },
    ],
  },
];
