import { faAddressCard, faBars, faBriefcase, faFileSignature, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../../aaa.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container">
        <a className="navbar-brand" href="#"><img src={logo} alt="logo.." className="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
        <FontAwesomeIcon icon={faBars}  style={{color:"white"}} />
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#"> <FontAwesomeIcon icon={faHome} /> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><FontAwesomeIcon icon={faBriefcase} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><FontAwesomeIcon icon={faAddressCard} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><FontAwesomeIcon icon={faFileSignature} /></a>
            </li>
         
          </ul>
       
        </div>
        </div>
      </nav>
    )
}

export default Navbar
