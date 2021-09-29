import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
         <div className="  top-0 text-xl bg-white border p-4 flex flex-row md:px-28">
            <Link to="/">
            <h1 className="text-2xl font-bold md:px-20 ">Bucket</h1>
            </Link>
                <Link to="/login" className="ml-auto md:mr-10 mr-2 px-6 py-1 rounded bg-indigo-400 shadow text-white font-semibold ">Log in</Link>
            </div>
     );
}
 
export default Navbar;