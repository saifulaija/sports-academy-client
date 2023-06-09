import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Users from "../Dashboard/DashboardLayout/AdminMenu/Users";
import AddClass from "../Dashboard/InstractureMenu/AddClass";
import ManageClasses from "../Dashboard/DashboardLayout/AdminMenu/ManageClasses";
import Instructor from "../Pages/Instructor/Instructor";
import FeedBack from "../components/FeedBack/FeedBack";


const router = createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
              path:'login',
              element:<Login></Login>
            },
            {
              path:'register',
              element:<Register></Register>
            },
            {
              path:'teacher',
              element:<Instructor></Instructor>
            }
           
        ]    
      },
      {
        path:'dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
          {
            path:'add-users',
            element:<Users></Users>
          },
          {
            path:'add-form',
            element:<AddClass></AddClass>
          },
          {
            path:'manage-classes',
            element:<ManageClasses></ManageClasses>
          },
          {
            path:'feedback/:id',
            element:<FeedBack></FeedBack>,
            loader: ({params}) => fetch(`http://localhost:5000/feedback/${params.id}`)
          }
        ]
      }
])

export default router