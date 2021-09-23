
import styled from 'styled-components';


export const FooterContainer = styled.footer`
   
    
    
    text-align: center;
    color: #707070;
    border-top: 1px solid #ebebeb;
    padding-top: 0.5rem;
    padding-bottom: 0rem;
    
`;


export const HeaderContainer=styled.header`
    display: flex;
    padding: 0% 13% 0% 9%;
    justify-content: space-between;
    border-bottom: 1px solid #ebebeb;
    
    .logoBox {
        display: flex;
    }
    .logoBox .logo{
        display:flex;
        font: italic normal bold 44px/70px Helvetica Neue;
        padding-top: 10px;
        border-bottom: 5px solid #b5c401;
        border-radius: 4%;
    }
    a{
        text-align: center;
        font: italic normal bold 20px/70px Helvetica Neue;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
        text-decoration: none;
        padding: 15px 20px 0px;
        cursor: pointer;
    }
    .pagesLinks .arrow-logout{
        width: 15px;
        height:15px;
        margin-left:0.5rem;
    }
`;



