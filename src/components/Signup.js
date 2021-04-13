import React, { useRef } from 'react'

const Signup = () => {

    const userNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()


    return (
        <div className=" md:w-5/12 mx-auto border-2 md:p-10 pt-20 rounded">
            <h2 className="text-2xl">Signup</h2>
            <form className="flex flex-col justify-center md:px-20 px-10 py-12">
                <input type="text" placeholder="Username" ref={userNameRef}
                    className="border-2 p-2 m-2"></input>

                <input type="email" placeholder="Email" ref={emailRef}
                    className="border-2 p-2 m-2"></input>
                <input type="password" placeholder="Password" ref={passwordRef}
                    className="border-2 p-2 m-2"></input>
                <input type="password" placeholder="Confirm Password" ref={passwordConfirmRef}
                    className="border-2 p-2 m-2"></input>

                <button className="px-5 py-2 mx-auto rounded w-40 m-4 bg-indigo-500 text-white">Sign up</button>
                <div>
                    <h2>Already a user? Log in</h2>
                </div>
            </form>
        </div>
    );
}

export default Signup;