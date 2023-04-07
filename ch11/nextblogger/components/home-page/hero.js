import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                src='/images/rkmavatar.jpeg'
                alt='Rajeev Majhi' 
                width={300}
                height={300}
                />
            </div>
            <h1>Hi! I am Rajeev</h1>
            <p>I blog about web development - espicially frontend framework like React or Angular. </p>
            
        </section>
    )
}

export default Hero
