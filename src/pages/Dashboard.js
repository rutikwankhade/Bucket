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

            <div className="flex md:flex-row flex-col">

                <div className=" md:w-4/12 md:px-10 md:fixed mt-4 flex flex-col items-center">
                    {/* <img src={currentUser.photoURL || avatar} alt="avatar" className="w-24 mx-auto mt-12 border-4 border-white rounded-full" />
                    <h1 className="text-2xl text-center  py-1  ">{currentUser.displayName}</h1> */}


                    <div className="w-full shadow-sm bg-white  p-4   rounded-xl  ">
                        <h1 className="text-6xl text-center font-bold">{list && list.length}</h1>
                        <p className="text-xl text-center">Total goals in your bucket list.</p>

                        <div className="flex items-center justify-center px-10 pt-4">

                            <div className="flex items-center border p-2 px-4 rounded-xl mx-1">
                                <span className="text-3xl font-bold mx-2 text-green-400">
                                    {list && list.filter((wish) => wish.completed === false).length}
                                </span>
                                <span>Remaining</span>
                            </div>

                            <div className="flex items-center  p-2 rounded-xl px-4 border mx-1">
                                <span className="text-3xl font-bold mx-2 text-red-400">
                                    {list && list.filter((wish) => wish.completed === true).length}
                                </span>
                                <span>Completed</span>
                            </div>


                        </div>



                        <form onSubmit={handleSubmitItem} className="flex py-6 flex-col  ">



                            <textarea required placeholder="What's something you always wanted to do?" ref={titleRef}
                                className="text-xl w-full h-40  my-2 p-2 border rounded outline-none" />


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
                                <option>Challenge</option>


                            </select>

                            <button className="text-white text-xl font-semibold  bg-indigo-400 hover:bg-indigo-500 rounded p-2 mt-2">Add to my Bucket List</button>
                        </form>

                    </div>


                </div>



                <div className="md:px-10 py-4 md:w-8/12 ml-auto mr-2">


                    <div className="bg-white p-4 rounded-xl shadow-sm flex md:flex-row flex-wrap text-center items-center justify-center">

                        <div
                            onClick={(e) => setListCategory('')}
                            className="cursor-pointer flex flex-col bg-yellow-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">📑</span>
                            <span className="text-sm font-semibold">All</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Travel')}
                            className="cursor-pointer flex flex-col bg-yellow-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🏖</span>
                            <span className="text-sm font-semibold">Travel</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Fun')}
                            className="cursor-pointer flex flex-col bg-pink-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🎉</span>
                            <span className="text-sm font-semibold">Fun</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Adventure')}
                            className="cursor-pointer flex flex-col bg-red-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🏄‍♂️</span>
                            <span className="text-sm font-semibold">Adventure</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Creative')}
                            className="cursor-pointer flex flex-col bg-indigo-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🎨</span>
                            <span className="text-sm font-semibold">Creative</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Skills')}
                            className="cursor-pointer flex flex-col bg-green-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🤹</span>
                            <span className="text-sm font-semibold">Skills</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Education')}
                            className="cursor-pointer flex flex-col bg-purple-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">🎓</span>
                            <span className="text-sm font-semibold">Education</span>
                        </div>

                        <div
                            onClick={(e) => setListCategory('Personal')}
                            className="cursor-pointer flex flex-col bg-yellow-100 p-2 rounded shadow-sm m-2 w-20">
                            <span className="text-2xl">📙</span>
                            <span className="text-sm font-semibold">Personal</span>
                        </div>
                    </div>

                    <div>


                        <div className=" flex flex-col mt-4 mx-auto overflow-y-scroll md:h-96 ">


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
                                                className={`bg-white shadow-sm rounded-md md:mx-4 my-1 flex flex-row ${wish.completed === false ? 'border-green-50 ' : 'border-red-50'}`}>

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