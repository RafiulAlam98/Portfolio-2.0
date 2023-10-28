import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Layout/Main";
import Homepage from "../pages/Homepage";
import BlogDetails from "../pages/BlogDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blog-detail",
        element: <BlogDetails />,
      },
    ],
  },
]);
