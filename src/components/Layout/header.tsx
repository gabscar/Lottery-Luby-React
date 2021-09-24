

import React from 'react';
import {HeaderContainer} from './styles';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { AuthActions } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';
const Header: React.FC =()=>{

    let location = useLocation();
    
    let checkHome =  location.pathname ==='/home';
    const dispatch = useDispatch();
    const onClickedLogout=()=>{
        console.log('teste')
        dispatch(AuthActions.logOut());
       
    }
    return(
        <HeaderContainer>
            <div className="logoBox">
                <Link className="logo" to="/game">TGL</Link>
                {!checkHome &&  <Link to="/home">Home</Link>}
            </div>
            <div className="pagesLinks">
                {<Link to="/home">Account</Link>}
                <Link onClick={onClickedLogout} to='/'>LogOut<FontAwesomeIcon  className ='arrow-logout'icon={faArrowRight} /></Link>
            </div>
        </HeaderContainer>
    )
}



export default Header;