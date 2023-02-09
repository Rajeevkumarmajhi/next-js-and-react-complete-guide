import { createContext, useState } from "react"

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
});

function FavoriteContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    const context = {
        favorites:userFavorites,
        totalFavorites:userFavorites.length
    };


    return <FavoriteContext.Provider value={context}>
        { props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext
