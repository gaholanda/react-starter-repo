import { About } from "../pages/About";
import { Home } from "../pages/Home";

export const appRoutes = [
  {
    id: "home",
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    id: "about",
    path: "/about",
    exact: true,
    element: <About />,
  },
];
