import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-container">
          <Link href="/">
            <img className="navbar-image" alt="logo" src="https://i.imgur.com/c41MHJN.png"/>
          </Link>
          <div className="navbar-items">
            <div><Link href="/about">About</Link></div>
            <div><Link href="/organizations">Organizations</Link></div>
            <div><a href="https://github.com/CarletonComputerScienceSociety/community-project">Contribute</a></div>
          </div>
        </div>
    </div>
  )
}

export { Navbar }
