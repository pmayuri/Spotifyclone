import React from 'react'
import Playlists from './Playlists'

const Categories = () => {

    const dataCategories = [
        {
            id: 1,
            name: 'Charts',
tagline: ''
        },
        {
            id: 2,
            name: 'Focus',
            tagline: 'Music to help you concentrate.'

        },
        {
            id: 3,
            name: 'Mood',
            tagline: 'Playlists to match your mood.'

        },
        {
            id: 4,
            name: 'Popular new releases',
            tagline: ''

        },
    ]



    return (
        <div className="mainInner">
            
                {dataCategories.map((category,id) => (
                    <div className="cardsWrap" key={id}>
                        <h2>{category.name}</h2>
                     {/*   <span className="seeAll ">SEE ALL</span> */}
                <p className="subtext">{category.tagline}</p>
                        <Playlists category_id={category.id} />

                    </div>

                ))}




        </div>
    )
}

export default Categories