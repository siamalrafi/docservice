import React, { useContext } from 'react';
import Google from '../../assets/icons/google.svg';
import Facebook from '../../assets/icons/facebook.svg';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';


const SignUp = () => {
    const { createUser, nameUpdate, varifyEmail, googleSignIn, } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                toast.success(`${name},Successfully Sign In.`);
                nameUpdate(name)
                    .then(() => {
                        toast.success('Profile Name updated!');

                        varifyEmail()
                            .then(() => {
                                toast.success('Email verification sent!');
                            });

                    })
                    .catch((error) => {
                        toast.error(error.message)
                    });

                // ...
                console.log(user);
            })
            .catch((error) => console.error(error));

    };


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.error(error.message))

    }





    return (
        <div className="mx-auto max-w-6xl px-12">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                    <div className="md:text-4xl text-xl font-black uppercase">SignUp</div>
                    <div className="text-xl mt-4">Develop your workforce and make it a selling machine</div>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-end w-full ">
                    <div className="shadow-md flex-auto max-w-sm p-10 pb-20">

                        <form onSubmit={handleSubmit}>

                            <div className="w-full">
                                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span className="text-red-400 mr-1">*</span>  Name</div>
                                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                                    <input name='name' placeholder="Jhon Bobi" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required /></div>
                            </div>

                            <div className="w-full">
                                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span className="text-red-400 mr-1">*</span> Email</div>
                                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                                    <input name='email' type="email" placeholder="jhon@doe.com" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span className="text-red-400 mr-1">*</span> Password</div>
                                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                                    <input name='password' type="password" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required />
                                </div>
                            </div>

                            <div className="mt-6 relative">
                                <button type="submit" className="shadow-md font-medium py-2 px-4 text-green-100
                  cursor-pointer bg-purple-500 rounded text-lg tr-mt  absolute text-center w-full" >Submit</button>
                            </div>

                        </form>
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
    );
};

export default SignUp;