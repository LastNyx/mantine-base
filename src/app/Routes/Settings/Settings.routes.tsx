import { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

const SettingsPage = lazy(
  () => import("@/app/Pages/Settings/Settings.page.tsx")
);

export const SettingsRoute: RouteObject[] = [
  {
    path: "settings",
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SettingsPage />
          </Suspense>
        ),
      },
    ],
  },
];
