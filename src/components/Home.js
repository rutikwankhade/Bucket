import React from 'react';
import Hero from '../assets/hero.png'
const Home = () => {
    return ( 
        <div className="">
            <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-200  sticky top-0 text-xl text-white p-4 flex flex-row">
                <h1 className="text-2xl font-semibold px-20">Bucket</h1>

            </div>
            <div className="flex flex-row">
                <div className="w-1/2 p-20 pt-40">
                    <h1 className="text-4xl font-bold text-gray-600">Create your bucket list and fulfill your dreams</h1>
                    <button className="mt-4 bg-indigo-400 text-white rounded px-6 py-2 text-xl">Let's do this !</button>

                </div>
                <img src={Hero} className=""/>
            </div>
        </div>
     );
}
 
export default Home;