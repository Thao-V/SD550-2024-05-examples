import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import Child from "./components/Child";
import EditProduct from "./components/EditProduct";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "child",
        element: <Child />
      }
    ]
  },
  {
    path: "/add-product",
    element: <AddProduct />
  },
  {
    path: "/edit-product/:id",
    element: <EditProduct />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
