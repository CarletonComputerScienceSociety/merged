import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-container">
            <img className="navbar-image" alt="logo" src="https://i.imgur.com/c41MHJN.png"/>
            <div className="navbar-items">
                <div><a href="">About</a></div>
                <div><a href="">Organizations</a></div>
                <div><a href="https://github.com/CarletonComputerScienceSociety/community-project">Contribute</a></div>
            </div>
        </div>
    </div>
  )
}

export { Navbar }
