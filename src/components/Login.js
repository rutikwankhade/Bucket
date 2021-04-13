import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory()



    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <div className="mt-20 text-center md:w-5/12 mx-auto border-2 md:p-10 pt-20 rounded">
            <h2 className="text-2xl">Login</h2>
            {error && <p className="p-2 bg-red-100 m-4 mx-20">{error}</p>}
            <form onSubmit={handleSubmit}
                className="flex flex-col justify-center md:px-20 px-10">


                <input type="email" placeholder="Email" ref={emailRef}
                    className="border-2 p-2 m-2"></input>
                <input type="password" placeholder="Password" ref={passwordRef}
                    className="border-2 p-2 m-2"></input>


                <button disabled={loading}
                    className="px-5 py-2 mx-auto rounded w-40 m-4 bg-indigo-500 text-white">Log In</button>
                <div>
                    <h2>Need an account? <Link to="/signup" className="text-indigo-500 font-semibold">Sign Up</Link></h2>
                </div>
            </form>
        </div>
    );
}

export default Login;