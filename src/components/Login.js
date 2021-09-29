import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import googleIcon from '../assets/google.png'

import loginImg from '../assets/loginImg.png'

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, signupWithGoogle } = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory()



    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <div >
            <div className="flex md:mt-10">
                <div className=" text-center md:w-4/12 w-full mx-auto md:border-2 md:p-10 py-20 md:pt-20 rounded-2xl">
                    <h2 className="text-2xl mb-6">Login</h2>
                    {error && <p className="p-2 bg-red-100 m-4 mx-20">{error}</p>}
                    <form onSubmit={handleSubmit}
                        className="flex flex-col justify-center px-10 ">


                        <input type="email" placeholder="Email" ref={emailRef}
                            className="border-2 p-2 m-2 rounded"></input>
                        <input type="password" placeholder="Password" ref={passwordRef}
                            className="border-2 p-2 m-2 rounded"></input>


                        <button disabled={loading}
                            className="px-5 py-2 mx-auto rounded w-40 m-4 bg-indigo-500 text-white">Log In</button>
                        <div>

                            <button
                                onClick={signupWithGoogle}
                                className="border flex items-center justify-center shadow-sm rounded my-2 hover:bg-gray-100 p-2 text-xl"
                            >
                                <img src={googleIcon} className="mx-2 h-6 w-6" alt="google" />
                                Continue with google
                            </button>
                            <h2>Need an account? <Link to="/signup" className="text-indigo-500 font-semibold">Sign Up</Link></h2>
                        </div>
                    </form>
                </div>

                <img src={loginImg} alt="illustration" className="w-1/3 mx-auto hidden md:block" />
            </div>

        </div>
    );
}

export default Login;