import { About } from "../pages/About";
import { Home } from "../pages/Home";

export const appRoutes = [
  {
    id: "home",
    path: "/",
    element: <Home />,
  },
  {
    id: "about",
    path: "/about",
    element: <About />,
  },
];
