import { useState } from 'react'
import { categories } from '../utils'

const Explore = () => {

    const [loading, setLoading] = useState(false)
    const [ideaTag, setIdeaTag] = useState('')

    const [ideas, setIdeas] = useState([])



    const fetchIdeas = async (category) => {

        setIdeaTag(category)

        const query = `
     {
        ideas(where: {category: {_eq: ${category}}}) {
            id,
            idea
    }
}`

        setLoading(true)
        const response = await fetch('https://bucket-list-api.hasura.app/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
        const ApiResponse = await response.json();
        setLoading(false)

        // console.log(ApiResponse.data.ideas);
        setIdeas(ApiResponse.data.ideas)
        window.scrollBy(0, 500);


    };

    return (
        <div>
            <div className="text-center mx-auto text-xl py-2">
                {loading ? <span> Wait I am thinking...</span> : <span></span>}
            </div>
            <div className="md:w-10/12 mx-auto flex md:flex-row flex-col justify-center py-4 flex-wrap">

                {
                    categories.map(category => {
                        return (

                            <div className="shadow-xl cursor-pointer flex flex-col items-center justify-center border-gray-100  bg-white md:w-1/5 p-10 m-4 rounded-xl"
                                onClick={() => fetchIdeas(category.title)}

                            >
                                <img src={category.img} alt="adventure" className="w-24 transform hover:scale-125 duration-300" />
                                <h1 className="text-2xl capitalize py-2">{category.title}</h1>
                            </div>


                        )
                    })
                }


            </div>


            <div>
                <h1 className="text-6xl py-6 text-gray-800 font-bold text-center capitalize">{ideaTag}</h1>
            </div>

            <div className="flex flex-wrap justify-center md:w-10/12 mx-auto">
                {ideas && ideas.map(idea => {
                    return (
                        <div className="cursor-pointer text-center bg-white transform hover:scale-125 duration-500 px-8 shadow-sm rounded-xl p-4 text-gray-700 text-2xl m-4">
                            {idea.idea}
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Explore;