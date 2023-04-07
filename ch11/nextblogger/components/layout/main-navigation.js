import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import classes from './main-navigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <Link href='/' >
                <Logo />
            </Link>
            <ul>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </header>
    )
}

export default MainNavigation
