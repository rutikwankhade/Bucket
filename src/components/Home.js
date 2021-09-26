import React from 'react';
import Typical from 'react-typical'
import { Link } from 'react-router-dom'

import Hero from '../assets/hero-4.jpg'
import bucket from '../assets/bucket.png'
import listImg from '../assets/list.png'
import flyImg from '../assets/fly.png'


const Home = () => {
    return (
        <div className="bg-white">
            <div className="  top-0 text-xl bg-white border p-4 flex flex-row md:px-28">
                <h1 className="text-2xl font-bold md:px-20 ">Bucket</h1>
                <Link to="/login" className="ml-auto md:mr-10 mr-2 px-6 py-1 rounded bg-indigo-400 shadow text-white font-semibold ">Log in</Link>
            </div>

            <div className="bg-purple-50 m-0 p-2">



                <div className="md:mx-40 md:my-10  bg-white shadow-sm  mx-auto  flex md:flex-row flex-col justify-center items-center">
                    <div className="md:w-8/12      ">

                        <div className="p-12">

                            <h1 className="mt-4 text-5xl font-bold ">Create your bucket list and fulfill your dreams.</h1>


                            <div className="my-6">

                                <h3 className="text-xl font-semibold ">I always wanted to</h3>
                                <Typical
                                    steps={['Go on a treck', 1000, 'Run a marathon', 1000, 'Write a novel', 1000]}
                                    loop={Infinity}
                                    wrapper="p"
                                    className="text-2xl italic font-semibold bg-yellow-200 w-max "
                                />
                            </div>

                            <Link to="signup">
                                <button className="mt-4 bg-indigo-400 font-bold shadow  text-white rounded px-6 py-2 text-xl">Let's do this !</button>
                            </Link>

                        </div>


                    </div>

                    <img src={Hero} alt="hero" className="rounded w-6/12" />

                </div>

            </div>



            <div className="flex flex-row items-center px-40">


                <div className="md:w-1/2 p-10 ">
                    <div className="mt-4">
                        <img src={bucket} alt="bucket" className="w-32 h-32 mr-6" />

                        <h2 className="text-2xl font-bold">bucket list</h2>
                        <p className="text-2xl italic ">is a number of experiences or achievements that a person hopes to have or accomplish during their lifetime.</p>
                    </div>
                </div>

                <div className="w-1/2">
                    <h1 className="text-center text-2xl font-semibold my-6 p-2">It could be anything, no rules</h1>
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




            <div className="m-20  flex md:flex-row flex-col justify-center ">
                <img src={listImg} className="md:w-1/3" alt="illustration" />
                <div className="md:w-1/2 mt-24">
                    <h2 className="text-4xl font-bold mb-4 bg-yellow-200 w-max">Why create a bucket list?</h2>
                    <div className="text-2xl">
                        <p>List and track your goals, wishes and childhood dreams. Do things that you love and care about.</p>
                        <p className="mt-4">Achieve your dreams and live your life to the fullest.</p>
                    </div>

                </div>

            </div>

            <div className="m-20 flex md:flex-row flex-col-reverse justify-center">
                <div className="md:w-1/2 mt-24">
                    <h2 className="text-4xl font-bold mb-4 bg-yellow-200 w-max">How to create one?</h2>
                    <p className="text-2xl">Start with the first things that come into your head when you ask yourself, what's the thing that you always wanted to do.</p>
                    <p className="text-2xl mt-6">Don't limit yourself, Don't think about if you can or should. Imagine what would you do if you had unlimited time, money and resources.</p>

                </div>
                <img src={flyImg} className="md:w-1/3" alt="illustration" />
            </div>

            <div className="md:w-1/2 md:mx-44 my-20">
                <Link to="signup">
                    <button className="mx-auto bg-indigo-400 text-white text-2xl px-8 py-4 rounded">📃 Create my Bucket list now</button>
                </Link>
            </div>

            <footer className="bg-purple-100 p-8">
                <p className="font-semibold italic text-right">Built with ❤ by
                    <a href="https://rutikwankhade.dev" className="text-indigo-400"> Rutik Wankhade</a></p>
            </footer>
        </div>
    );
}

export default Home;