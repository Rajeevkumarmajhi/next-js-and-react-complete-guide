import React from 'react'
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
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
                <div>
                    <button className={classes.actions} >To Favorites</button>
                </div>
            </li>
        </Card>
    )
}

export default MeetupItem
