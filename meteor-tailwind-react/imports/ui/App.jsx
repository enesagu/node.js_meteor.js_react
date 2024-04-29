import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "/imports/ui/pages/sign-in";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}