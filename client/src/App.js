import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const Layout = () => {                         
 return( <div className="app" >
    <Navbar/>
    <Outlet/>        
    <Footer/>
  </div>
 )
}


const router = createBrowserRouter([               
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    
      {
        path: "/products/:id",
        element: <Products/>,
      },
    
      {
        path: "/product/:id",
        element: <Product/>,
      },
    ]
  },
]);



function App() {
  return (
    <RouterProvider router={router} /> 
  );
}

export default App;
