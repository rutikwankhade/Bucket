import React from 'react';
import Typical from 'react-typical'
import { Link } from 'react-router-dom'

import Hero from '../assets/hero.png'
import bucket from '../assets/bucket.png'

const Home = () => {
    return (
        <div className="">
            <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-200  top-0 text-xl text-white p-4 flex flex-row">
                <h1 className="text-2xl font-semibold px-20">Bucket</h1>
                <Link to="/login" className="ml-auto mr-10 border-white px-6 py-1 rounded bg-pink-300 border-2 ">Log in</Link>
            </div>
            <div className="flex md:flex-row flex-col justify-center">
                <div className="md:w-1/2 md:p-20 p-6 md:pt-32 pt-20">
                    <div className="my-6">

                        <h3 className="text-2xl font-semibold ml-2">I always wanted to</h3>
                        <Typical
                            steps={['Go on a treck', 1000, 'Run a marathon', 1000, 'Write a novel', 1000]}
                            loop={Infinity}
                            wrapper="p"
                            className="text-4xl italic font-semibold text-indigo-400 rounded-md p-2 m-2 shadow"
                        />
                    </div>
                    <h1 className="mt-4 text-4xl font-bold text-gray-600">Create your bucket list and fulfill your dreams.</h1>
                    <Link to="signup">
                        <button className="mt-8 bg-indigo-400 text-white rounded px-6 py-2 text-xl">Let's do this !</button>
                    </Link>

                </div>
                <img src={Hero} alt="hero"className="" />
            </div>

            <div className=" flex flex-row border-2 shadow p-10 w-8/12 rounded-md mx-auto my-20">
                <img src={bucket} alt="bucket" className="w-32 h-32 mr-6" />
                <div className="mt-4">
                    <h2 className="text-2xl font-bold">bucket list</h2>
                    <p className="text-xl italic ">a number of experiences or achievements that a person hopes to have or accomplish during their lifetime.</p>
                </div>
            </div>

            <div>
                <h1 className="text-center text-2xl font-semibold my-6">It could be anything, no rules</h1>
                <div className="flex flex-row flex-wrap w-6/12 my-4 mx-auto justify-center">
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
    );
}

export default Home;