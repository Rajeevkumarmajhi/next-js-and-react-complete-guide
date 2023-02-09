import React from 'react'
import NewMeetUpForm from '../components/meetups/NewMeetUpForm'

function NewMeetup() {

    function onAddMeetUpHandler(meetupData)
    {
        fetch(
            'https://react-getting-started-122ec-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method:"POST",
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        )
        
    }
    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetUpForm onAddMeetUp={onAddMeetUpHandler} />
        </section>
    )
}

export default NewMeetup
