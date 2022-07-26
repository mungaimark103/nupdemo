import React from 'react'
import {Link} from 'react-router-dom';
function Header() {
  return (
    <header>
<div className="container-fluid">
            <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h4 className="heading"><Link className='link' to="/">URBAN POLICY PLATFORM</Link></h4>

            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <nav className="nav">
                <ul className="nav-items">
                    <li><Link className='link'to="/cities">HOME</Link></li>
                    <li><Link className='link'to="/data">ABOUT US</Link></li>
                    <li><Link className='link' to="/info">COVID-19</Link></li>
                    <li><Link className='link' to="/">PROJECTS</Link></li>
                    <li><Link className='link' to="/">PROGRAMMES</Link></li>
                    <li><Link className='link' to="/">NEWS AND EVENTS</Link></li>
                    <li><Link className='link' to="/">LEARNING</Link></li>
                </ul>
            </nav>
            </div>

           </div>
        </div>
    
        </header>
  
  )
}

export default Header