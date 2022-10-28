import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { AuthContext } from '../../authprovider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const { createUser, createUserWithGoogle, createUserWithFacebook } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const url = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm.value;
        if (password !== confirmPass) {
            toast.error("Oops! seems like 'confirm password' did not match 'password'");
        }
        createUser(email, password, name, url)
            .then(result => {
                const user = result.user;
                // console.log(user)
                form.reset();
                setError('');
                toast.success("Welcome to your mission 'Captain'");
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
                const user = result.user;
                // console.log(user)
                setError('');
                toast.success("Welcome to your mission 'Captain'");
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error("Oops! something wrong 'Captain'");
                setError(error.message);
            })
    }

    const createFacebookUserOnClick = () => {
        createUserWithFacebook()
            .then(result => {
                const user = result.user;
                // console.log(user);
                setError('');
                toast.success("Welcome to your mission 'Captain'");
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
                    <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="url" name='photoURL' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" name='confirm' className="input input-bordered" required />
                        </div>
                        <p>Already have an account ?<Link to='/login' className="link link-hover text-success font-bold">     Login now</Link></p>
                        <p className='text-red-400 text-lg'>{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <hr />
                        <p className='text-center mt-4 text-lg'> or</p>
                        <hr />
                        <button onClick={createGoogleUserOnClick} className="btn btn-outline btn-primary"><FaGoogle />  Register with Google</button>
                        <button onClick={createFacebookUserOnClick} className="btn btn-outline btn-primary"><FaFacebook />  Register with Facebook</button>

                    </form>
                    <Toaster position="top-center"
                        reverseOrder={false} />
                </div>
            </div>
        </div>
    );
};

export default Register;