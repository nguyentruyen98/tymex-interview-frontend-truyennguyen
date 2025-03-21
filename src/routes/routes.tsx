import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import { APP_ROUTES } from "@/constants";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Home from "@/pages/Home";

const About = lazy(() => import("@/pages/About"));
const OurTeam = lazy(() => import("@/pages/OurTeam"));
const Marketplace = lazy(() => import("@/pages/Marketplace"));
const Roadmap = lazy(() => import("@/pages/Roadmap"));
const Whitepaper = lazy(() => import("@/pages/Whitepaper"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const Error = lazy(() => import("@/pages/Error"));

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: APP_ROUTES.HOME, element: <Home /> },
      { path: APP_ROUTES.ABOUT, element: <About /> },
      { path: APP_ROUTES.OUR_TEAM, element: <OurTeam /> },
      { path: APP_ROUTES.MARKETPLACE, element: <Marketplace /> },
      { path: APP_ROUTES.ROADMAP, element: <Roadmap /> },
      { path: APP_ROUTES.WHITEPAPER, element: <Whitepaper /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
