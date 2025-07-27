import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";

import Wallet from "./pages/Wallet";

import AdminLayout from "./layouts/AdminLayout";

import Dashboard_admin from "./layouts/_components/Dashboard_admin";

import RegisterForm from "./pages/SignUp";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signup",
        element: <RegisterForm />,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/dashboard",
        element: <Dashboard_admin />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}
export default App;
