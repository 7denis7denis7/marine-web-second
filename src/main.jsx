import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Terms from './pages/Terms/Terms'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/terms',
    element: <Terms />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
