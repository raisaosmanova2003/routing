import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Users from "../pages/admin/Users/Users";
import AdminRoot from "../pages/admin/AdminRoot";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import SiteRoot from "../pages/site/SiteRoot";
import Error from "../pages/Error/Error";
import AddProduct from "../pages/admin/AddProduct/AddProduct";
  const routes =[
    {
      path: "/",
      element:<SiteRoot/>,
      children:[{
        path: "/",
        element: <Home />,
      },{
        path: "shop",
        element: <Shop />,
      }, 
      
      {
        path:"*",
        element:<Error/>,
      }
    ]
      }, 
        {
          path: "/admin",
          element:<AdminRoot/>,
          children:[{
            path:"",
            element:<Dashboard/>
          },
           {
            path: "products",
            element: <Products/>
          },  {
            path: "users",
            element: <Users/>
          },
          {
            path: "add",
            element: <AddProduct/>
          }, 

        ]
      }
    ]
    
  export default routes;