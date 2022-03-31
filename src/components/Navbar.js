import React from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import bucket from '../assets/bucket.png'

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
        <div className="bg-white md:w-10/12 mx-auto rounded-full shadow-sm text-xl p-4 flex flex-row items-center md:px-20">
            <Link to="/">
                <div className="flex items-center">
                    <img src={bucket} alt="bucket" className="w-6 h-6 mx-2" />
                    <h1 className=" font-semibold ">Bucket</h1>

                </div>
            </Link>

            <Link to="/explore-ideas" className="mx-4 text-xl" >
                <span className="mx-4 hover:text-yellow-400">✨ Explore ideas
                </span>
            </Link>

            {
                currentUser ?
                    <div className="ml-auto md:mr-10">
                          <Link to="/dashboard" className="hover:text-yellow-400  mr-2 px-6 py-1 rounded  font-semibold ">
                      dashboard
                    </Link>
                        <button onClick={handleLogout} className="hover:text-yellow-400  mr-2 px-6 py-1 rounded font-semibold ">
                            Log out
                        </button>
                    </div>
                    :
                    <Link to="/login" className="hover:text-yellow-400 ml-auto md:mr-10 mr-2 px-6 py-1 rounded  font-semibold ">
                        Log in
                    </Link>

            }

        </div>
    );
}

export default Navbar;