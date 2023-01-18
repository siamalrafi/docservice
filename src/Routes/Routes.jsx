import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Extra/ErrorPage/ErrorPage";
import Blog from '../Pages/Extra/Blog/Blog';
import Dashboard from '../Pages/Dashboard/Dashboard';
import PrivateRoutes from './PrivateRoutes';
import About from "../Pages/Extra/About/About";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Services from '../Pages/Services/Services'
import SingleService from '../Pages/Services/SingleService'

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
                loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.name}`),
                element: <SingleService></SingleService>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes> <Dashboard></Dashboard> </PrivateRoutes>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard />
                    }
                ]
            },
        ]
    }
]);


export default router;
