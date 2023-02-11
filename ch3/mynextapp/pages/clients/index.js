import Link from 'next/link';
import React from 'react'

function clients() {

    const clients = [
        { id: "max", name: "Rajeev Majhi" },
        { id: "manu", name: "Manueal Majhi" },
    ];


    return (
        <div>
            <h1>Clients page</h1>
            <ul>
                {clients.map(client => <li key={client.id}>
                    <Link href={{
                        pathname: "clients/[id]",
                        query:{ id:client.id }
                    }}>{client.name}</Link>
                </li>)}
            </ul>
        </div>
    )
}

export default clients
