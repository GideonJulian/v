import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
<<<<<<< HEAD
import Wallet from "./pages/Wallet";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./layouts/AdminLayout";

import Dashboard_admin from "./layouts/_components/Dashboard_admin";
=======
import RegisterForm from "./pages/SignUp";
>>>>>>> 10d4404ac6d9f059ebd667790a499ca90dd47496

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
<<<<<<< HEAD
      },
      {
        path: "about",
        element: <About />,
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
=======
      },{
        path: 'about',
        element: <About />
      },{
        path: 'signup',
        element: <RegisterForm />
      }
>>>>>>> 10d4404ac6d9f059ebd667790a499ca90dd47496
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}
export default App;
