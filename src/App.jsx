import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";

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
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}
export default App;
