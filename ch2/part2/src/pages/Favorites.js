import React, { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList';
import FavoriteContext from '../store/FavoriteContext'

function Favorites() {
    const FavoriteCtx = useContext(FavoriteContext);

    let content;

    if(FavoriteCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start adding some?</p>;
    }else{
        content = <MeetupList meetups={FavoriteCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            { content }
        </section>
    )
}

export default Favorites
