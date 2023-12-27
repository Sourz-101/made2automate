import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import AddProductPage from "./components/addProduct/AddProductPage.jsx";
import HomePage from "./components/home/HomePage.jsx";
import MyOrderPage from "./components/MyOrders/MyOrderPage.jsx";
import Barcode from "./components/addProduct/Barcode.jsx";
import EComListing from "./components/addProduct/EComListing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/add-product-page", element: <AddProductPage /> },
      { path: "/my-order-page", element: <MyOrderPage /> },
      { path: "/add-product-page/barcode", element: <Barcode /> },
      { path: "/add-product-page/barcode/e-com-listing",element: <EComListing />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
