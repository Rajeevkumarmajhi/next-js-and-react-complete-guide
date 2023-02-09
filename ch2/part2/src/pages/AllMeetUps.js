import React, { useState } from 'react'
import MeetupList from '../components/meetups/MeetupList';

function AllMeetUps() {

    const [isLoading,setIsLoading] = useState(true);
    const [loadedMeetups,setLoadedMeetups] = useState([]);

    fetch(
        'https://react-getting-started-122ec-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
    ).then( response => {
        return response.json();
    }).then( data => {
        setIsLoading(false);
        setLoadedMeetups(data);
    });

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    const DUMMY_DATA = [
        {
            id: 'm1',
            title: 'This is a first meetup',
            image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description:
                'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        },
        {
            id: 'm2',
            title: 'This is a second meetup',
            image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description:
                'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        },
    ];

    return (
        <div>
            <h1>All meetup page</h1>
            <MeetupList meetups={DUMMY_DATA} />

        </div>
    )
}

export default AllMeetUps
