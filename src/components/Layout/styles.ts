
import styled from 'styled-components';


export const Footer = styled.footer`
    text-align: center;
    color: #707070;
    border-top: 1px solid #ebebeb;
    padding: 1%;
`;


export const HeaderContainer=styled.header`
    display: flex;
    padding: 0% 5% 0% 5%;
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
`;



