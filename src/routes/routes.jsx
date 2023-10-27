import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Layout/Main";
import Homepage from "../pages/Homepage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);
