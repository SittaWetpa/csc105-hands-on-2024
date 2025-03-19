import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage.jsx"
import FavouritesPage from "./pages/FavouritesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Navbar from "./component/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import FavouriteDetailPage from "./pages/FavouriteDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "*", //for any wrong url
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/fav",
        element: <FavouritesPage/>
      },
      {
        path: "/fav/:number",
        element: <FavouriteDetailPage/>
      },
      
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
