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
import MyClass from "../Dashboard/InstractureMenu/MyClass";
import UpdateClass from "../Dashboard/InstractureMenu/UpdateClass";
import AllClasses from "../Pages/AllClasses/AllClasses";
import MySelectedClasses from "../Dashboard/UserMenu/MySelectedClasses";
import Payment from "../Pages/Payment/Payment";
import MyPaymentHistory from "../Dashboard/UserMenu/MyPaymentHistory";
import EnrolledClasses from "../Dashboard/UserMenu/EnrolledClasses";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "teacher",
        element: <Instructor></Instructor>,
      },
      {
        path: "all-classes",
        element: <AllClasses></AllClasses>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-users",
        element: <Users></Users>,
      },
      {
        path: "add-form",
        element: <AddClass></AddClass>,
      },
      {
        path: "manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "feedback/:id",
        element: <FeedBack></FeedBack>,
        loader: ({ params }) =>
          fetch(
            ` https://assignment-server-12-saifulaija.vercel.app/feedback/${params.id}`
          ),
      },
      {
        path: "my-classes",
        element: <MyClass></MyClass>,
      },
      {
        path: "update-class/:id",
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) =>
          fetch(
            ` https://assignment-server-12-saifulaija.vercel.app/update/${params.id}`
          ),
      },
      {
        path: "my-bookings",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            ` https://assignment-server-12-saifulaija.vercel.app/payment/${params.id}`
          ),
      },
      {
        path: "payment-classes",
        element: <MyPaymentHistory></MyPaymentHistory>,
      },
      {
        path: "enrolled-classes",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
