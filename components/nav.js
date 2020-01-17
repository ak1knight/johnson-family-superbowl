import React from 'react'
import Link from 'next/link'
import {useRouter} from "next/router";

const Nav = () => {
    const router = useRouter();
    return <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand mb-0 h1" href="#">Johnson Family Super Bowl Pool</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${router.route == '/' && 'active'}`}>
                        <Link href="/">
                            <a className="nav-link">Entry Form <span className="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li className={`nav-item ${router.route == '/big_board' && 'active'}`}>
                        <Link href="/big_board">
                            <a className="nav-link">The Big Board</a>
                        </Link>
                    </li>
                    <li className={`nav-item ${router.route == '/propbetboard' && 'active'}`}>
                        <Link href="/propbetboard">
                            <a className="nav-link">Prop Bet Board</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Nav
