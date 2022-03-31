import adventureIcon from '../assets/adventure.png'
import creativeIcon from '../assets/creative.png'
import challengeIcon from '../assets/challenge.png'
import experienceIcon from '../assets/experience.png'
import funIcon from '../assets/fun.png'
import skillsIcon from '../assets/skills.png'
import educationIcon from '../assets/education.png'
import travelIcon from '../assets/travel.png'

import { useState } from 'react'
import {
    categories
} from '../utils'
const Ideas = () => {

    const [category, setCategory] = useState('')

    return (
        <div>

            <div className="md:w-10/12 mx-auto flex justify-center py-4 flex-wrap">
                {category}
                {
                    categories.map(idea => {
                        return (
                            <div className="shadow flex flex-col items-center justify-center border-gray-100  bg-white w-1/5 p-10 m-4 rounded-xl"
                                onClick={() => setCategory(idea.title)}

                            >

                                <img src={idea.img} alt="adventure" className="w-24 transform hover:scale-125 duration-300" />
                                <h1 className="text-2xl py-2">{idea.title}</h1>
                            </div>

                        )
                    })
                }


            </div>


        </div>
    );
}

export default Ideas;