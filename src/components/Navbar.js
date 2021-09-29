import React from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'


const Navbar = () => {

    const { currentUser, logout } = useAuth();
    const history = useHistory()

      const handleLogout = async () => {
        try {
            await logout()
            history.push('/login')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="  top-0 text-xl bg-white border p-4 flex flex-row md:px-28">
            <Link to="/">
                <h1 className="text-2xl font-bold md:px-20 ">Bucket</h1>
            </Link>

            {
                currentUser ?
                    <button onClick={handleLogout} className="ml-auto md:mr-10 mr-2 px-6 py-1 rounded bg-indigo-400 shadow text-white font-semibold ">
                        Log out
                    </button>
                    :
                    <Link to="/login" className="ml-auto md:mr-10 mr-2 px-6 py-1 rounded bg-indigo-400 shadow text-white font-semibold ">
                        Log in
                    </Link>

            }
           
        </div>
    );
}

export default Navbar;