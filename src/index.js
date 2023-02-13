import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Component/error";
import SginUp from "./Component/SginUp";
import SginIN from "./Component/SginIN";
import Do from "./Component/Do";


//#3
const router = createBrowserRouter([
  {
    path: "/",
    element : <SginUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/in",
    element: <SginIN />,
  },
  {
    path: "/do",
    element: <Do />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
  {console.log("test")}
  <RouterProvider router={router} />
  </div>
  );

//#2 inside root
/*  <React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode> */
