import React from 'react';
import Link from 'next/link';
import { faHome, faUsers, faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MobileNavbar = () => (
  <div className="mobile-navbar">
    <div className="mobile-navbar-inner">
        <Link href="/">
            <a>
                <FontAwesomeIcon icon={faHome} />
            </a>
        </Link>
        <Link href="/organizations">
            <a>
                <FontAwesomeIcon icon={faUsers} />
            </a>
        </Link>
        <Link href="/about">
            <a>
                <FontAwesomeIcon icon={faInfo} />
            </a>
        </Link>
    </div>
  </div>
);

export { MobileNavbar };
