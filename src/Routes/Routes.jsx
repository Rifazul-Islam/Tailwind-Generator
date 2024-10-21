import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import CardGenerator from "../pages/ToolsGenaretor/CardGenerator/CardGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card-generator",
        element: <CardGenerator />,
      },
    ],
  },
]);

export default router;
