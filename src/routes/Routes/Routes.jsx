import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Menu from "../../pages/Menu/Menu/Menu";
import Order from "../../pages/Order/Order/Order";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Cart from "../../pages/Dashboard/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUsers from "../../pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../../pages/Dashboard/AddItem";
import ManageItems from "../../pages/Dashboard/ManageItems";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/menu',
                element: <Menu></Menu>,
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
        ]
    },
    { path: '/login', element: <Login></Login> },
    { path: '/signup', element: <SignUp></SignUp> },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // admin routes
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
        ]
    }
]);

export default router;