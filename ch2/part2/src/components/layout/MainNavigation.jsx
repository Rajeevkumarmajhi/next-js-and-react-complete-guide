import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoriteContext from '../../store/FavoriteContext';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const FavoriteCtx = useContext(FavoriteContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo} >React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites <span className={classes.badge}> {FavoriteCtx.totalFavorites} </span> </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
