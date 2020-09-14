import React from 'react'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import {Link} from 'react-router-dom'




const Playlists = (props) => {
console.log(props.limiter)

    const dataPlaylists = [
        {
            id: 101,
            category_id: 3,
            name: 'Home playlist 1 ',
            img: 'https://images.unsplash.com/photo-1598267320102-eb7edbb00ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            des: 'Lorem ipsum'
        },
        {
            id: 102,
            category_id: 3,
            name: 'Home playlist 2 ',
            img: 'https://images.unsplash.com/photo-1598260851056-1d8432342255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            des: 'Lorem ipsum'
        },
        {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3 ',
            img:'https://images.unsplash.com/photo-1598200549070-052acce8abf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80',
            des:'Lorem ipsum'
        },
        {
            id: 104,
            category_id: 1,
            name: 'Focus playlist 1 ',
            img:'https://images.unsplash.com/photo-1598146898849-5c7c93975a9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            des:'Lorem ipsum'
        },
        {
            id: 105,
            category_id: 4,
            name: 'Sunday playlist  ',
            img: 'https://images.unsplash.com/photo-1598241478438-d9f6f29e8691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            des:'Lorem ipsum'
        },
        {
            id: 106,
            category_id: 2,
            name: 'Mood playlist 1 ',
            img:'https://images.unsplash.com/photo-1598160875942-6a8c5479fef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            des:'Lorem ipsum'
        },
        {
            id: 107,
            category_id: 2,
            name: 'Mood playlist 2  ',
            img:'https://images.unsplash.com/photo-1598158125189-99ce6c374757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            des:'Lorem ipsum'
        },
        {
            id: 101,
            category_id: 2,
            name: 'Mood playlist 2  ',
            img:'https://images.unsplash.com/photo-1598158125189-99ce6c374757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            des:'Lorem ipsum'
        },
        {
            id: 107,
            category_id: 2,
            name: 'Mood playlist 2  ',
            img:'https://images.unsplash.com/photo-1598158125189-99ce6c374757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            des:'Lorem ipsum'
        },
        {
            id: 104,
            category_id: 1,
            name: 'Focus playlist 1 ',
            img:'https://images.unsplash.com/photo-1598146898849-5c7c93975a9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            des:'Lorem ipsum'
        },

    ]
    const matchedPlaylists = dataPlaylists.filter(
       ( playlist) => playlist.category_id === props.category_id
       )
    
        return (
            <div className="cardWrapInner">
                { matchedPlaylists.map((playlist,id )=> (
                    <Link to={`/playlist/` + playlist.id}>
                    <div className="card" key={id}>
                        <div className="cardImage">
                            <img src={playlist.img}
                                alt="pic 1" />
                        </div>
                        <div className="cardContent">
                            <span className="playIcon">
                                <PlayIcon/>

                            </span>
                <h3>{playlist.name}</h3>
                            <span>
                            {playlist.des}    
                            </span>

                        </div>
                       
                    </div>
                    </Link>
                ))}
</div>
 )
  }


    export default Playlists