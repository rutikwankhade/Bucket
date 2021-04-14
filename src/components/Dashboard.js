import React from 'react';
import avatar from '../assets/avatar.svg'
import {useAuth} from '../contexts/AuthContext'

const Dashboard = () => {

    const {currentUser} = useAuth();
console.log(currentUser)

    return (
        <div className="">
            <div className="bg-indigo-500 text-xl text-white p-4 flex flex-row">
                <h1 className="text-2xl font-semibold px-20">Bucket</h1>
                <button 
                className="bg-indigo-400 text-white px-4 rounded ml-auto mr-10">Log out</button>

            </div>
            <div className="flex ">
                <div className="w-3/12 h-screen sticky top-0 bg-gray-100">
                    <img src={avatar } alt="avatar" className="w-36 mx-auto mt-12" />
                <h2 className="text-xl text-center mt-6 bg-white p-2 rounded m-4">{currentUser.email}</h2>
                
                </div>
                <div>
                    <h1 className="text-center p-40 text-2xl font-bold italic">📃 Create your Bucket list and 🎉 fulfill your dreams</h1>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;