import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import googleIcon from '../assets/google.png'
import signupImg from '../assets/signupImg.png'
const Signup = () => {

    // const userNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, signupWithGoogle } = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory();



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }



    const handleSignupWithGoogle = () => {
        setLoading(true)

        signupWithGoogle();
        history.push('/dashboard')
        setLoading(false)
    }

    return (
        <div>


            <div className="md:mt-10 flex items-center justify-center">
                <div className="text-center w-full md:w-4/12 mx-auto py-20 px-4 md:border-2 rounded-2xl">
                    <h2 className="text-2xl mb-4">Signup</h2>
                    {error && <p className="p-2 bg-red-100 m-4 mx-20">{error}</p>}
                    <form onSubmit={handleSubmit}
                        className="flex flex-col justify-center px-10">
                        {/* <input type="text" placeholder="Username" ref={userNameRef}
                    className="border-2 p-2 m-2 rounded"></input> */}

                        <input type="email" placeholder="Email" ref={emailRef}
                            className="border-2 p-2 m-2 rounded"></input>
                        <input type="password" placeholder="Password" ref={passwordRef}
                            className="border-2 p-2 m-2 rounded"></input>
                        <input type="password" placeholder="Confirm Password" ref={passwordConfirmRef}
                            className="border-2 p-2 m-2 rounded"></input>

                        <button disabled={loading}
                            className="px-5 py-2 mx-auto rounded w-40 m-4 bg-indigo-500 text-white">Sign up</button>


                    </form>


                    <button
                        onClick={handleSignupWithGoogle}
                        className="border flex items-center justify-center shadow-sm rounded my-2 hover:bg-gray-100 p-2 text-xl"
                    >
                        <img src={googleIcon} className="mx-2 h-6 w-6" alt="google" />
                        Continue with google
                    </button>


                    <div>
                        <h2>Already a user? <Link to="/login" className="text-indigo-500 font-semibold">Log in</Link> </h2>
                    </div>


                </div>
                <img src={signupImg} alt="illustration" className="mt-10 md:mr-20 md:w-1/3 md:block hidden" />
            </div>
        </div>
    );
}

export default Signup;