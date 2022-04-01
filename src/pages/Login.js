import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import googleIcon from '../assets/google.png'


const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, signupWithGoogle, currentUser } = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    useEffect(() => {
        if (currentUser) {
            history.push('/dashboard')
        }
    })

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


    const handleSignupWithGoogle = () => {
        setLoading(true)

        signupWithGoogle();
        history.push('/dashboard')
        setLoading(false)
    }


    const handleLoginAsGuest = async () => {

        let email = "guest@gmail.com";
        let password ="guest123"

        try {
            setError('')
            setLoading(true)
            await login(email, password)
            history.push('/dashboard')
        } catch {
            setError('Failed to sign in')
        }
        
    }

    return (
        <div >
            <div className="flex mt-4">
                <div className=" text-center bg-white md:w-4/12 w-full mx-auto shadow-sm p-10 px-12  rounded-2xl">
                    <h2 className="text-2xl font-semibold mb-6">Welcome back!</h2>
                    {error && <p className="p-2 bg-red-100 m-4 mx-20">{error}</p>}
                    <form onSubmit={handleSubmit}
                        className="flex flex-col justify-center text-xl">


                        <input type="email" placeholder="Email" ref={emailRef}
                            className="border p-2 m-2 rounded"></input>
                        <input type="password" placeholder="Password" ref={passwordRef}
                            className="border p-2 m-2 rounded"></input>


                        <button disabled={loading}
                            className="font-semibold px-5 py-2 mx-auto rounded-full w-1/2 m-2 bg-indigo-500 text-white">Log In</button>
                        <div>


                        </div>
                    </form>

                    <button
                        onClick={handleSignupWithGoogle}
                        className="px-6 mx-auto border flex items-center justify-center shadow-sm rounded-full my-2 hover:bg-gray-100 p-2 text-xl"
                    >
                        <img src={googleIcon} className="mx-2 h-6 w-6" alt="google" />
                        Continue with google
                    </button>

                    <button className="bg-gray-700 text-white rounded-full px-10 py-2 mx-2 text-xl font-semibold my-2 hover:bg-gray-800" onClick={handleLoginAsGuest}>Continue as a guest</button>
                    <h2>Need an account? <Link to="/signup" className="text-yellow-300 font-semibold">Sign Up</Link></h2>
                </div>

            </div>

        </div>
    );
}

export default Login;