const Signup = () => {
    return ( 
        <div className=" w-5/12 mx-auto border-2 p-10 rounded">
            <h2 className="text-2xl">Signup</h2>
            <form className="flex flex-col justify-center px-20 py-12">
            <input type="text" placeholder="Username" className="border-2 p-2 m-2"></input>

                <input type="email" placeholder="Email" className="border-2 p-2 m-2"></input>
                <input type="password" placeholder="Password" className="border-2 p-2 m-2"></input>
                <input type="password" placeholder="Confirm Password" className="border-2 p-2 m-2"></input>

                <button className="px-5 py-2 mx-auto rounded w-40 m-4 bg-indigo-500 text-white">Sign up</button>

            </form>
        </div>
     );
}
 
export default Signup;