import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

import { useState } from 'react';
import { AuthContext } from '../../authprovider/AuthProvider';

const Register = () => {
    const { createUser, createUserWithGoogle } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const url = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm.value;
        if (password !== confirmPass) {
            alert('Password did not match');
        }
        createUser(email, password, name, url)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    const createGoogleUserOnClick = () => {
        createUserWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error('error', error);
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
                        <p>Already have an account ?<Link to='/login' className="link link-hover">     Login now</Link></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <hr />
                        <p className='text-center mt-4 text-lg'> or</p>
                        <hr />
                        <button onClick={createGoogleUserOnClick} className="btn btn-outline btn-primary"><FaGoogle />  Register with Google</button>
                        <button className="btn btn-outline btn-primary"><FaFacebook />  Register with Facebook</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;