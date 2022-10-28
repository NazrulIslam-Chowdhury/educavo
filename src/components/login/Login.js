import React, { useState } from 'react';
import { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authprovider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const { loginWithEmailPass, createUserWithGoogle, createUserWithFacebook } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmailPass(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                toast.success("Welcome abroad 'Captain' !");
                navigate(from, { replace: true });

            })
            .catch(error => {
                toast.error("Oops! something wrong 'Captain'");
                setError(error.message);
            })

    }

    const createGoogleUserOnClick = () => {
        createUserWithGoogle()
            .then(result => {
                alert('Login successful');
                const user = result.user;
                // console.log(user);
                toast.success("Welcome abroad 'Captain' !");
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error("Oops! something wrong 'Captain'");
                setError(error.message)
            })
    }

    const createFacebookUserOnClick = () => {
        createUserWithFacebook()
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast.success("Welcome abroad 'Captain' !");
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error("Oops! something wrong 'Captain'");
                setError(error.message);
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>

                            </label>
                            <p>Don't have an account ?<Link className='link link-hover text-success font-bold' to='/register'> Register now</Link></p>
                            <p className='text-red-400 text-lg'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <hr />
                        <p className='text-center mt-4 text-lg'> or</p>
                        <hr />
                        <button onClick={createGoogleUserOnClick} className="btn btn-outline btn-primary"><FaGoogle />  Login with Google</button>
                        <button onClick={createFacebookUserOnClick} className="btn btn-outline btn-primary"><FaFacebook />  Login with Facebook</button>
                        <Toaster position="top-center"
                            reverseOrder={false} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;