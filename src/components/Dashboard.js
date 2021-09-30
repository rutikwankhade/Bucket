import React, { useRef, useEffect, useState } from 'react';
import closeIcon from '../assets/close.svg'


import { useAuth } from '../contexts/AuthContext'
import { firestore } from '../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Dashboard = () => {


    useEffect(() => {
        console.log(currentUser)
    })

    const { currentUser } = useAuth();
    const listRef = firestore.collection(`users/${currentUser.uid}/list`)
    const [list] = useCollectionData(listRef, { idField: "id" });

    const titleRef = useRef();
    const [category, setCategory] = useState('')

    const [listCategory, setListCategory] = useState('')


    // const allListRef = firestore.collection(`bucketlist`)
    // const [AllList] = useCollectionData(allListRef);



    const handleSubmitItem = (e) => {
        e.preventDefault();

        listRef.add({
            title: titleRef.current.value,
            completed: false,
            category: category
            // createdAt: firestore.FieldValue.serverTimestamp()

        })

        titleRef.current.value = ""
    }

    const handleCompleteWish = (id, completed) => {
        listRef.doc(id).set({ completed: !completed }, { merge: true })

    }

    const handleDeleteWish = (id) => {
        listRef.doc(id).delete()
    }


    return (
        <div>

            <div className="flex md:flex-row flex-col bg-gray-50">

                <div className="bg-pink-50 md:w-4/12 px-10 fixed h-screen flex flex-col items-center">
                    {/* <img src={currentUser.photoURL || avatar} alt="avatar" className="w-24 mx-auto mt-12 border-4 border-white rounded-full" />
                    <h1 className="text-2xl text-center  py-1  ">{currentUser.displayName}</h1> */}


                    <div className="w-full border-2 bg-white transform translate-y-10 py-4   rounded-xl  ">
                        <h1 className="text-6xl text-center font-bold">{list && list.length}</h1>
                        <p className="text-xl text-center">Total goals in your bucket list.</p>

                        <div className="flex items-center justify-between px-10 pt-4">

                            <div className="flex items-center border p-2 rounded">
                                <span className="text-2xl font-bold mx-2 text-green-400">
                                    {list && list.filter((wish) => wish.completed === false).length}
                                </span>
                                <span>Remaining</span>
                            </div>

                            <div className="flex items-center border p-2 rounded">
                                <span className="text-2xl font-bold mx-2 text-red-400">
                                    {list && list.filter((wish) => wish.completed === true).length}
                                </span>
                                <span>Completed</span>
                            </div>


                        </div>


                    </div>
                    <form onSubmit={handleSubmitItem} className="flex border-2 flex-col bg-white pt-20 px-6 py-10 rounded">


                        <h1 className="text-2xl font-semibold text-center my-4">What's something you always wanted to do?</h1>

                        <input required placeholder="What's on your list?" ref={titleRef}
                            className="text-xl w-full	 my-2 p-2 border-2 rounded outline-none" />


                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            className="text-xl border p-2 rounded">
                            <option>Travel</option>
                            <option>Adventure</option>
                            <option>Fun</option>
                            <option>Creative</option>
                            <option>Skills</option>
                            <option>Experience</option>
                            <option>Education</option>
                            <option>Personal</option>


                        </select>

                        <button className="text-white text-xl font-semibold  bg-indigo-400 hover:bg-indigo-500 rounded p-2 mt-2">Add to my Bucket List</button>
                    </form>

                </div>



                <div className="px-10 py-4 md:-8/12 ml-auto mr-2">


                    <div className="bg-white p-4 rounded flex text-center items-center justify-center">

                        <div
                            onClick={(e) => setListCategory('')}
                            className="cursor-pointer flex flex-col bg-yellow-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">📑</span>
                            <span className="text-sm font-bold">All</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Travel')}
                            className="cursor-pointer flex flex-col bg-yellow-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🏖</span>
                            <span className="text-sm font-bold">Travel</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Fun')}
                            className="cursor-pointer flex flex-col bg-pink-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🎉</span>
                            <span className="text-sm font-bold">Fun</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Adventure')}
                            className="cursor-pointer flex flex-col bg-red-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🏄‍♂️</span>
                            <span className="text-sm font-bold">Adventure</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Creative')}
                            className="cursor-pointer flex flex-col bg-indigo-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🎨</span>
                            <span className="text-sm font-bold">Creative</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Skills')}
                            className="cursor-pointer flex flex-col bg-green-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🤹</span>
                            <span className="text-sm font-bold">Skills</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Education')}
                            className="cursor-pointer flex flex-col bg-purple-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🎓</span>
                            <span className="text-sm font-bold">Education</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Personal')}
                            className="cursor-pointer flex flex-col bg-yellow-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">📙</span>
                            <span className="text-sm font-bold">Personal</span>
                        </div>
                    </div>

                    <div>


                        <div className="bg-gray-50 flex flex-col mt-4 mx-auto overflow-y-scroll md:h-96 ">


                            {
                                list && list.filter(wish => {
                                    if (listCategory === "") {
                                        return wish;
                                    } else if (wish.category.toLowerCase().includes(listCategory.toLowerCase())) {
                                        return wish;
                                    }
                                    return 0

                                })


                                    .map(wish => {
                                        return (
                                            <div key={wish.id}
                                                className={`bg-white shadow-sm border rounded-md mx-4  flex flex-row ${wish.completed === false ? 'border-green-50 ' : 'border-red-50'}`}>

                                                <div className="p-2 px-6 flex items-center">
                                                    <input type="checkbox"
                                                        checked={wish.completed}

                                                        onClick={() => handleCompleteWish(wish.id, wish.completed)}
                                                        className="text-green-600  h-4 w-4 mr-6" />

                                                    <h1 className={`text-xl font-semibold ${wish.completed === true ? 'line-through text-gray-600' : ''}`}>{wish.title}</h1>
                                                </div>

                                                <div className="ml-auto mr-2 flex flex-row items-center">
                                                    <img src={closeIcon} alt="delete" onClick={() => handleDeleteWish(wish.id)}
                                                        className="bg-gray-50 hover:bg-pink-100 rounded-full p-1 w-8 h-8  mt-2 mb-auto cursor-pointer" />

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