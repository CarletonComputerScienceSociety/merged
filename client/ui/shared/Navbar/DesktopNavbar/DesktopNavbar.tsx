import React from 'react';
import Link from 'next/link';

const DesktopNavbar = () => (
  <div className="navbar">
    <div className="navbar-container">
      <Link href="/">
        <a>
          <img
            className="navbar-image"
            alt="logo"
            src="https://i.imgur.com/uusT5cG.png"
          />
        </a>
      </Link>
      <div className="navbar-items">
        <div>
          <Link href="/about"><a>About</a></Link>
        </div>
        <div>
          <Link href="/organizations"><a>Organizations</a></Link>
        </div>
        <div>
          <a href="https://github.com/CarletonComputerScienceSociety/community-project">
            Contribute
          </a>
        </div>
      </div>
    </div>
  </div>
);

export { DesktopNavbar };
