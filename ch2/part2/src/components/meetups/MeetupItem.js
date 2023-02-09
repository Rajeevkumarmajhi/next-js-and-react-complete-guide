import React, { useContext } from 'react'
import FavoriteContext from '../../store/FavoriteContext';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {

    const FavoriteCtx = useContext(FavoriteContext);

    const itemisFavorite = FavoriteCtx.itemisFavorite(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemisFavorite){
            FavoriteCtx.removeFavorite(props.id);
        }else{
            FavoriteCtx.addFavorite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address
            });
        }
    }
    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img  src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler} > { itemisFavorite ? "Remove From Favorites":"To Favorites"}</button>
                </div>
            </li>
        </Card>
    )
}

export default MeetupItem
