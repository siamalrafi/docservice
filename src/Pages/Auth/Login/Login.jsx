import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Google from '../../../assets/icons/google.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import { AuthContext } from '../../../Context/UserContext';
import useToken from '../../../Hooks/userToken';

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                setLoginUserEmail(user.email);
                toast.success(`successfully logged in`);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
                toast.error(`Error Occurred.}`);
            });

    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setLoginUserEmail(user.email);
                console.log(user);
                toast.success(`successfully logged in`);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error.message))
    };


    return (
        <div>
            <div className="mx-auto max-w-6xl p-8">
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                        <div className="md:text-4xl text-xl font-black uppercase">LogIN</div>
                        <div className="text-xl mt-4">Get your best service from DocService.</div>
                        <p className='py-3'>
                            Join thousands of others industry professionals Doctors. Keep up-to-date with the latest mobile news, innovation and technology from around the globe. Don't miss out!
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full">
                        <div className="shadow-md flex-auto max-w-sm px-10 py-5">

                            <form onSubmit={handleLogin}>
                                <div className="w-full">
                                    <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span className="text-red-400 mr-1">*</span> Email</div>
                                    <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input name='email' placeholder="jhon@doe.com" type="email" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /></div>
                                </div>

                                <div className="w-full">
                                    <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span className="text-red-400 mr-1">*</span> Password</div>
                                    <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input name='password' type="password" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" placeholder='************' /></div>
                                </div>
                                <div className="mt-6 relative">
                                    <button type="submit" className="shadow-md font-medium py-2 px-4 text-green-100
                  cursor-pointer bg-purple-500 rounded text-lg tr-mt  absolute text-center w-full" >Login In</button>
                                </div>
                            </form>
                            <p className='pt-16'>Don't have an account?  <Link className='text-secondary' to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center my-5 gap-10 justify-items-center'>
                    <button onClick={handleGoogleSignIn}>
                        <span>
                            <img src={Google} alt="Google" />
                        </span>
                        <span className='font-bold'>Google</span>
                    </button>
                    <button>
                        <span>
                            <img src={Facebook} className="h-14 w-14" alt="Facebook" />
                        </span>
                        <span className='font-bold'> FaceBook </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;