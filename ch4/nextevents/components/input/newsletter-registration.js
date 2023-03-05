import NotificationContext from '@/store/notification-context';
import { useContext, useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
    const notificationCtx = useContext(NotificationContext);

    const emailInputRef = useRef();

    function registrationHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;

        notificationCtx.showNotification({
            title:"Signing Up",
            message:"Registering for Newsletter",
            status: "Pending",
        });

        fetch('api/newsletter',{
            method:"POST",
            body: JSON.stringify( { email: enteredEmail } ),
            headers:{
                'Content-Type':"application/json",
            }
        }).then( (response) => {
            if(response.ok){
                return response.json()
            }
            return response.json().then(data => {
                throw new Error( data.message || 'Something went wrong');
            })

        })
        .then(data => {
            notificationCtx.showNotification({
                title:"Success!",
                message:"Successfully registered for newsletter",
                status:"success",
            })
        }).catch(error =>{
            notificationCtx.showNotification({
                title:"Error!",
                message:"Notification registration failed!",
                status:"error",
            });
        });

        // fetch user input (state or refs)
        // optional: validate input
        // send valid data to API
    }

    return (
        <section className={classes.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={classes.control}>
                    <input
                        type='email'
                        id='email'
                        placeholder='Your email'
                        aria-label='Your email'
                        ref={emailInputRef}
                    />
                    <button>Register</button>
                </div>
            </form>
        </section>
    );
}

export default NewsletterRegistration;