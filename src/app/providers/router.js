import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "@/app/layouts/AppLayout";
import { HomePage } from "@/pages/home";
import { MemberPage } from "@/pages/member";
import { FavoritesPage } from "@/pages/favorites";
import { routes } from "@/shared/config/routes";
const router = createBrowserRouter([
    {
        element: _jsx(AppLayout, {}),
        children: [
            { index: true, element: _jsx(HomePage, {}) },
            { path: routes.member(":id"), element: _jsx(MemberPage, {}) },
            { path: routes.favorites(), element: _jsx(FavoritesPage, {}) },
        ],
    },
], { basename: import.meta.env.BASE_URL });
export function AppRouter() {
    return _jsx(RouterProvider, { router: router });
}
