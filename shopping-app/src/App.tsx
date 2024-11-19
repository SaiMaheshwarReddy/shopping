import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemsList from "./pages/ItemsList";
import ShoppingHistory from "./pages/ShoppingHistory";
import Statistics from "./pages/Statistics";
import { AppErrorBoundary } from "./shared/AppErrorBoundary";
import Layout from "./shared/Layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ItemsList />,
        },
        {
          path: "/shopping-history",
          element: <ShoppingHistory />,
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
      ],
    },
  ]);
  return (
    <AppErrorBoundary fallback={<>Loading...</>}>
      <RouterProvider router={router} />
    </AppErrorBoundary>
  );
}

export default App;
