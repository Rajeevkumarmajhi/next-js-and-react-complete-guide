import { createContext, useState } from "react"

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite:(favoriteMeetup)=>{},
    removeFavorite:(meetupId) =>{},
    itemisFavorite:(meetupId)=>{},

});

export function FavoriteContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    const context = {
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemisFavorite:itemIsFavoriteHandler,
    };

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }


    return <FavoriteContext.Provider value={context}>
        { props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext