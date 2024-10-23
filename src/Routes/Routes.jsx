import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import CardGenerator from "../pages/ToolsGenaretor/CardGenerator/CardGenerator";
import GridGenerator from "../pages/ToolsGenaretor/GridGenerator/GridGenerator";
import LoginFromGenerator from "../pages/ToolsGenaretor/LoginFromGenerator/LoginFromGenerator";

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
      {
        path: "/grid-generator",
        element: <GridGenerator />,
      },
      {
        path: "/login-form-generator",
        element: <LoginFromGenerator />,
      },
    ],
  },
]);

export default router;
