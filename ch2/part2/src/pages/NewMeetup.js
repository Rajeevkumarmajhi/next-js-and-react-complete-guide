import React from 'react'
import NewMeetUpForm from '../components/meetups/NewMeetUpForm'

function NewMeetup() {

    function onAddMeetUpHandler(meetupData)
    {
        
    }
    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetUpForm onAddMeetup={onAddMeetUpHandler} />
        </section>
    )
}

export default NewMeetup
