import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import { APP_ROUTES } from "@/constants";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Home from "@/pages/Home";

const About = lazy(() => import("@/pages/About"));
const OutTeam = lazy(() => import("@/pages/OutTeam"));
const Marketplace = lazy(() => import("@/pages/Marketplace"));
const Roadmap = lazy(() => import("@/pages/Roadmap"));
const Whitepaper = lazy(() => import("@/pages/Whitepaper"));

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: APP_ROUTES.HOME, element: <Home /> },
      { path: APP_ROUTES.ABOUT, element: <About /> },
      { path: APP_ROUTES.OUR_TEAM, element: <OutTeam /> },
      { path: APP_ROUTES.MARKETPLACE, element: <Marketplace /> },
      { path: APP_ROUTES.ROADMAP, element: <Roadmap /> },
      { path: APP_ROUTES.WHITEPAPER, element: <Whitepaper /> },
    ],
  },
]);
