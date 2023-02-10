import { useRouter } from 'next/router'
import React from 'react'

function index() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            This is selected client page

        </div>
    )
}

export default index
