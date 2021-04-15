import React, { useState, useRef} from 'react';
import avatar from '../assets/avatar.svg'
import bucket from '../assets/bucket.png'
import closeIcon from '../assets/close.svg'


import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import { firestore } from '../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Dashboard = () => {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const listRef = firestore.collection(`users/${currentUser.uid}/list`)
    const [list] = useCollectionData(listRef, { idField: "id" });

    const titleRef = useRef();
    const descRef = useRef();

    // console.log(currentUser)
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
            completed: false,
            // createdAt: firestore.FieldValue.serverTimestamp()

        })

        titleRef.current.value=""
        descRef.current.value=""
    }

    const handleCompleteWish = (id, completed) => {
        listRef.doc(id).set({ completed: !completed }, { merge: true })

    }

    const handleDeleteWish = (id) => {
        listRef.doc(id).delete()
    }


    return (
        <div className="">
            <div className="bg-indigo-500 sticky top-0 text-xl text-white p-4 flex flex-row">
                <h1 className="text-2xl font-semibold px-20">Bucket</h1>
                <button onClick={handleLogout}
                    className="bg-indigo-400 text-white px-4 rounded ml-auto mr-10">Log out</button>

            </div>
            <div className="flex flex-row ">
                <div className=" p-10 fixed h-screen bg-gray-100 flex flex-col items-center">
                    <img src={avatar} alt="avatar" className="w-24 mx-auto mt-12 border-4 border-white rounded-full" />
                    <h2 className="text-xl text-center mt-6 bg-pink-200 px-6 py-1 rounded-full m-4">{currentUser.email}</h2>


                    <form onSubmit={handleSubmitItem} className="flex flex-col">
                        <input required placeholder="What's something you always wanted to do?" ref={titleRef}
                            className="w-96 mt-2 p-2 border-2 rounded outline-none" />
                        <textarea required placeholder="Tell us more!" ref={descRef}
                            className="mt-2 p-2 h-40 border-2 rounded outline-none" />
                        <button className="text-white text-xl bg-indigo-400 hover:bg-indigo-500 rounded p-2 mt-2">Add to my Bucket List</button>
                    </form>

                </div>
                <div className=" p-10  w-8/12 ml-auto mr-2">
                    {error && <span className="bg-red-100 p-2 m-4">{error}</span>}
                    <h1 className="text-center  text-2xl font-bold italic">📃 Create your Bucket list and 🎉 fulfill your dreams</h1>

                    <div >


                        <div className="flex flex-col mt-10 justify-center items-center">


                            {list && list.map(wish => {
                                return (
                                    <div key={wish.id}
                                        className="border-2  m-2 rounded-md w-10/12 border-t-8 border-pink-200 flex flex-row">
                                        <div className="p-6">
                                            <h1 className="text-2xl font-semibold">{wish.title}</h1>
                                            <p className="mt-2 italic">{wish.description}</p>
                                        </div>

                                        <div className="ml-auto mr-2 flex flex-col items-center">

                                            <img src={closeIcon} alt="delete" onClick={() => handleDeleteWish(wish.id)}
                                                className="bg-gray-50 rounded-full p-1 w-8 h-8  mt-2 mb-auto cursor-pointer" />
                                            <button onClick={() => handleCompleteWish(wish.id, wish.completed)}
                                                className="mb-2 mt-auto bg-indigo-400 text-white px-4 p-1 rounded ">Done</button>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;