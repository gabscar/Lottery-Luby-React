

import React from 'react';
import {HeaderContainer} from './styles';
import { Link } from 'react-router-dom';


const Header: React.FC =()=>{

    return(
        <HeaderContainer>
            <div className="logoBox">
                <Link className="logo" to="/">TGL</Link>
                <Link to="/">Home</Link>
            </div>
            <div className="pagesLinks">
                <Link to="/">Account</Link>
                <Link to="/">LogOut</Link>
            </div>
        </HeaderContainer>
    )
}



export default Header;