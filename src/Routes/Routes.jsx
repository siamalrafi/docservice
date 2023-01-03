import Home from "../Pages/Home/Home";
import SignUp from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';


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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;
