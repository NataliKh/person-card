import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "@/app/layouts/AppLayout";
import { HomePage } from "@/pages/home";
import { MemberPage } from "@/pages/member";
import { FavoritesPage } from "@/pages/favorites";
import { routes } from "@/shared/config/routes";

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: routes.member(":id"), element: <MemberPage /> },
        { path: routes.favorites(), element: <FavoritesPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
