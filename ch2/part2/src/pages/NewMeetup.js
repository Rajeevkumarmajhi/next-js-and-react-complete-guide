import React from 'react'
import { useNavigate } from 'react-router-dom';
import NewMeetUpForm from '../components/meetups/NewMeetUpForm'

function NewMeetup() {

    const navigate = useNavigate();

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
        ).then(()=>{
            navigate('/');
        })
        
    }
    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetUpForm onAddMeetUp={onAddMeetUpHandler} />
        </section>
    )
}

export default NewMeetup
