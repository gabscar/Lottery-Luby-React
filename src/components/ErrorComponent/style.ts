import styled from "styled-components";


export const ErrorContainer= styled.div`
    max-width: 960px;
    width: 100%; 
    margin: 30px auto;
    transform: scale(0.8);

    .landing-page{
        max-width: 960px;
        height: 475px;
        margin: 0;
        box-shadow: 0px 0px 8px 1px #ccc;
        background: #fafafa;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font: normal normal bold 60px/70px Helvetica Neue;
        margin: 0;
    }
    p {
        font: normal normal bold 16px/70px Helvetica Neue;
        width: 35%; 
        margin: 16px auto 24px;
        text-align: center;
    }
    button {
        border-radius: 50px;
        padding: 8px 24px;
        font-size: 16px;
        cursor: pointer;
        background: #62AD9B;
        color: #fff;
        border: none;
        box-shadow: 0 4px 8px 0 #ccc;
    }
`


