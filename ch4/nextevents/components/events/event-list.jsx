import React from 'react'
import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props) {

    const { items } = props;

    return (
        <ul className={classes.list}>
            {
                items.map(event =>
                    <EventItem
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        image={event.image}
                        date={event.date}
                        location={event.location}
                    />
                )
            }
        </ul>
    )
}

export default EventList
