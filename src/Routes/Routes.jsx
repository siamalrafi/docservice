import Home from "../Pages/Home/Home";
import Blog from '../Pages/Extra/Blog/Blog';
import SingleBlog from '../Pages/Extra/Blog/SingleBlog';
import PrivateRoutes from './PrivateRoutes';
import About from "../Pages/Extra/About/About";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Services from '../Pages/Services/Services'
import SingleService from '../Pages/Services/SingleService'
import DashboardLayout from "../Layout/DashboardLayout";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from '../Pages/Dashboard/ManageDoctors/ManageDoctors'
import Payment from "../Pages/Dashboard/Payment/Payment";
import DisplayError from "../Pages/Shared/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                loader: async ({ params }) => fetch(`https://doc-service-server-mocha.vercel.app/services/${params.name}`),
                element: <SingleService></SingleService>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/blogs/:id',
                element: <SingleBlog></SingleBlog>,
                loader: async ({ params }) => fetch(`https://doc-service-server-mocha.vercel.app/blogs/${params.id}`),

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
                element: <PrivateRoutes> <DashboardLayout></DashboardLayout>     </PrivateRoutes>,
                children: [
                    {
                        path: '/dashboard/myAppointment',
                        element: <MyAppointment></MyAppointment>
                    },
                    {
                        path: '/dashboard/allUsers',
                        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
                    },
                    {
                        path: '/dashboard/addDoctor',
                        element: <AdminRoute><AddDoctor></AddDoctor>
                        </AdminRoute>
                    },
                    {
                        path: '/dashboard/manageDoctors',
                        element: <AdminRoute><ManageDoctors></ManageDoctors>
                        </AdminRoute>
                    },
                    {
                        path: '/dashboard/payment/:id',
                        element: <Payment></Payment>,
                        loader: ({ params }) => fetch(`https://doc-service-server-mocha.vercel.app/bookings/${params.id}`)
                    },
                ]
            },
        ]
    }
]);


export default router;
