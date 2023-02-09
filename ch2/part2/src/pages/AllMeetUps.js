import React, { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList';

function AllMeetUps() {

    const [isLoading,setIsLoading] = useState(true);
    const [loadedMeetups,setLoadedMeetups] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        fetch(
            'https://react-getting-started-122ec-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
        ).then( response => {
            return response.json();
        }).then( data => {
            const meetups = [];
            for(const key in data){
                const meetup = {
                    id:key,
                    ...data[key]
                }
                meetups.push(meetup)
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });

    },[]);

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <div>
            <h1>All meetup page</h1>
            <MeetupList meetups={loadedMeetups} />

        </div>
    )
}

export default AllMeetUps
