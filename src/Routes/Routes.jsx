import Home from "../Pages/Home/Home";
// import Services from "../Pages/Services/Services";
import Blog from '../Pages/Extra/Blog/Blog';
import Dashboard from '../Pages/Dashboard/Dashboard';
import PrivateRoutes from './PrivateRoutes';
import Services from '../Pages/Home/Services/Services';
import About from "../Pages/Extra/About/About";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import ErrorPage from "../Pages/Extra/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/Services',
                element: <Services></Services>
            },
            {
                path: '/Services/:name',
                element: <Services></Services>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes>
                    <Dashboard></Dashboard>
                </PrivateRoutes>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
]);

export default router;
