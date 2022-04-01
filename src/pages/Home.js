import React, { useEffect } from 'react';
import Typical from 'react-typical'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

import Hero from '../assets/hero.webp'
import Hero2 from '../assets/hero2.png'
import Hero3 from '../assets/hero3.png'


const Home = () => {

    const history = useHistory()
    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser) {
            history.push('/dashboard')
        }
    })


    return (
        <div className="">

            <div className=" m-0 p-2">

                <div className="md:mx-40 md:my-10 rounded-xl bg-white shadow-sm  mx-auto  flex md:flex-row flex-col justify-center items-center">
                    <div className="md:w-8/12 ">

                        <div className="p-12">

                            <h1 className="mt-4 text-5xl text-gray-800 font-bold">Create and track your bucket list</h1>


                            <div className="my-6">

                                <h3 className="text-xl font-semibold py-2">I always wanted to</h3>
                                <Typical
                                    steps={['Go on a treck', 1000, 'Run a marathon', 1000, 'Write a novel', 1000]}
                                    loop={Infinity}
                                    wrapper="p"
                                    className="text-2xl italic bg-yellow-100 p-2 px-6 rounded-full font-semibold  w-max "
                                />
                            </div>

                            <Link to="signup">
                                <button className="mt-4 bg-indigo-400 hover:bg-indigo-500 font-semibold shadow  text-white rounded px-6 py-2 text-xl">Get Started</button>
                            </Link>

                        </div>


                    </div>

                    <img src={Hero} alt="hero" className="rounded w-6/12" />

                </div>

            </div>





            <div className="flex md:flex-row md:w-8/12 mx-auto flex-col items-center">



                <div className="md:w-8/12 mx-auto">
                    <h1 className="text-center text-3xl font-semibold my-6 p-2">It could be anything, no rules</h1>
                    <p className="text-2xl italic text-center py-2 ">It's a number of experiences or achievements that a person hopes to have or accomplish during their lifetime.</p>


                    <div className="flex flex-row flex-wrap  m-4 mx-auto justify-center">
                        <span className="bg-indigo-100 rounded-full m-2 px-6 py-2 text-xl">Adventure</span>
                        <span className="bg-pink-100 rounded-full m-2 px-6 py-2 text-xl">Fun</span>
                        <span className="bg-gray-100 rounded-full m-2 px-6 py-2 text-xl">Creativity</span>
                        <span className="bg-purple-100 rounded-full m-2 px-6 py-2 text-xl">Skills</span>
                        <span className="bg-yellow-100 rounded-full m-2 px-6 py-2 text-xl">Travel</span>
                        <span className="bg-green-100 rounded-full m-2 px-6 py-2 text-xl">Experiences</span>
                        <span className="bg-red-100 rounded-full m-2 px-6 py-2 text-xl">Personal</span>
                        <span className="bg-blue-100 rounded-full m-2 px-6 py-2 text-xl">Education</span>

                    </div>
                </div>


            </div>




            <div className="md:w-8/12 my-10 mx-auto  bg-white  rounded-xl flex items-center md:flex-row flex-col  ">
                <img src={Hero2} className="md:w-1/3 rounded-xl" alt="illustration" />
                <div className=" p-10">
                    <h2 className="md:text-4xl text-3xl font-bold mb-4">Why create a bucket list?</h2>
                    <div className="text-2xl">
                        <p>List and track your goals, wishes and childhood dreams. Do things that you love and care about.</p>
                        <p className="mt-4">Achieve your dreams and live your life to the fullest.</p>
                    </div>

                </div>

            </div>




            <div className="md:w-8/12 my-10 mx-auto  bg-white rounded-xl bg-white m-4 flex md:flex-row flex-col-reverse items-center">
                <div className="p-10">
                    <h2 className="md:text-4xl text-3xl font-bold mb-4">How to create one?</h2>
                    <p className="text-2xl">Start with the first things that come into your head when you ask yourself, what's the thing that you always wanted to do.</p>
                    <p className="text-2xl mt-6">Don't limit yourself. </p>

                </div>
                <img src={Hero3} className="md:w-1/3 rounded-xl" alt="illustration" />
            </div>

            <div className="bg-indigo-400 md:w-8/12 mx-auto shadow-lg rounded-xl my-20 p-20 text-center">

                <p className="text-4xl font-semibold pb-10  text-white">Imagine what would you do if you had unlimited time, money and resources.</p>

                <Link to="signup">
                    <button className="mx-auto bg-white shadow-sm  font-semibold text-2xl px-8 py-4 rounded-xl">📃 Create my Bucket list now</button>
                </Link>
            </div>

            <footer className=" p-8 bottom-0">
                <p className="font-semibold italic text-center">Built with ❤ by
                    <a href="https://rutikwankhade.dev" className="text-indigo-400"> Rutik Wankhade</a></p>
            </footer>
        </div>
    );
}

export default Home;