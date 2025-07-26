import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import RegisterForm from "./pages/SignUp";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },{
        path: 'about',
        element: <About />
      },{
        path: 'signup',
        element: <RegisterForm />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}
export default App;
