import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function eventDetailPage() {
    const router = useRouter();

    const eventId = router.query.eventid;
    const event = getEventById(eventId);

    if(!event)  {
        return <p>No event found!</p>
    }
    return (
        <div>
            <Fragment>
                <EventSummary title={event.title} />
                <EventLogistics date={event.date} address={event.location} image={event.image}  imageAlt={event.title} />
                <EventContent>
                    <p> { event.description } </p>
                </EventContent>
            </Fragment>
        </div>
    )
}

export default eventDetailPage
