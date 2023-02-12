import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/events-search';
import { getAllEvents } from '@/dummy-data'
import { useRouter } from 'next/router';
import React, { Fragment } from 'react'

function AllEventPage() {
    const router = useRouter();
    const events = getAllEvents();

    function findEventHandler(year,month)
    {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }


    return (
        <Fragment>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={events}/>
        </Fragment>
    )
}

export default AllEventPage
