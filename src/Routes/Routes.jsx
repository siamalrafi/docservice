import Home from "../Pages/Home/Home";
import SignUp from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';
import Services from "../Pages/Services/Services";
import Blog from '../Pages/Blog/Blog';
import Dashboard from '../Pages/Dashboard/Dashboard';
import PrivateRoutes from './PrivateRoutes';


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
