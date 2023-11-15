import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            
                {
                    path: '/',
                    element:<Home></Home>
                },
                {
                    path: '/about',
                    element:<About></About>
                },
                {
                    path: '/Login',
                    element:<Login></Login>
                },
                {
                    path: '/signup',
                    element:<SignUp></SignUp>
                },
            
        ]
    }
])