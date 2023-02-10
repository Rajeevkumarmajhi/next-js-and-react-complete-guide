import { useRouter } from 'next/router'
import React from 'react'

function SelectedClientProjectPage() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>This is selected client project page</h1> 
        </div>
    )
}

export default SelectedClientProjectPage
