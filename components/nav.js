import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand mb-0 h1" href="#">Johnson Family Super Bowl Pool</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <Link activeClassName="active" href="/entryform"><li className="nav-item">
                        <span className="nav-link">Entry Form <span className="sr-only">(current)</span></span>
                    </li></Link>
                    <Link activeClassName="active" href="/bigboard"><li className="nav-item">
                        <span className="nav-link">The Big Board</span>
                    </li></Link>
                    <Link activeClassName="active" href="/propbetboard"><li className="nav-item">
                        <span className="nav-link">Prop Bet Board</span>
                    </li></Link>
                </ul>
            </div>
        </div>
    </nav>
)

export default Nav
