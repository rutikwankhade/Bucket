import React, { useState, useRef } from 'react';
import avatar from '../assets/avatar.svg'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import { firestore } from '../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Dashboard = () => {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const listRef = firestore.collection(`users/${currentUser.uid}/list`)
    const [list] = useCollectionData(listRef);

    const titleRef = useRef();
    const descRef = useRef();

    console.log(currentUser)
    const history = useHistory()

    const handleLogout = async () => {
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to logout')
        }
    }




    const handleSubmitItem = (e) => {
        e.preventDefault();

        listRef.add({
            title: titleRef.current.value,
            description: descRef.current.value,
            completed:false,
            createdAt: firestore.FieldValue.serverTimestamp()

        })
    }




    return (
        <div className="">
            <div className="bg-indigo-500 sticky top-0 text-xl text-white p-4 flex flex-row">
                <h1 className="text-2xl font-semibold px-20">Bucket</h1>
                <button onClick={handleLogout}
                    className="bg-indigo-400 text-white px-4 rounded ml-auto mr-10">Log out</button>

            </div>
            <div className="flex  ">
                <div className=" p-10 sticky bg-gray-100 flex flex-col items-center">
                    <img src={avatar} alt="avatar" className="w-24 mx-auto mt-12 border-4 border-white rounded-full" />
                    <h2 className="text-xl text-center mt-6 bg-pink-200 px-6 py-1 rounded-full m-4">{currentUser.email}</h2>


                    <form onSubmit={handleSubmitItem} className="flex flex-col">
                        <input placeholder="What's something you always wanted to do?" ref={titleRef}
                            className="w-96 mt-2 p-2 border-2 rounded outline-none" />
                        <textarea placeholder="Tell us more!" ref={descRef}
                            className="mt-2 p-2 h-40 border-2 rounded outline-none" />
                        <button className="text-white text-xl bg-indigo-400 hover:bg-indigo-500 rounded p-2 m-2">Add to my Bucket List</button>
                    </form>

                </div>
                <div className="overflow-y-scroll">
                    {error && <span className="bg-red-100 p-2 m-4">{error}</span>}
                    <h1 className="text-center p-40 text-2xl font-bold italic">📃 Create your Bucket list and 🎉 fulfill your dreams</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;