import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div>
      <h1>This is home page. good</h1>
      <ul>
        <li>
          <Link href="/portfolio" >Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
