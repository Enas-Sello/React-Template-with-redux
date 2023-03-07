import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Root from "./Root"

const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>error</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])
export default Routs
