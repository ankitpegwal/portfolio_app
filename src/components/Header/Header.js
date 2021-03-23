import React from 'react'
import Typed from 'react-typed'

const array=[ "Google Ads","Facebook Ads","Web Devolopment"]

const Header = () => {
    return (
        <div className="header-wraper" >
<div className="main-info">
<h1>Hay! I'm Ankit Kumar </h1>
<h4> I know About {" "}
<Typed  className="typed" strings={array}  typeSpeed={70} backSpeed={50} loop
 />
</h4>

</div>
            
        </div>
    )
}

export default Header;
