import styled from "styled-components";


export const CartContainer = styled.div`
    height: 30.2rem;
    background-color: #FFF;
    border-radius: 0.625rem;
    border: 1px solid #E2E2E2;
    width: 25%;
    position: relative;

    h2{
        margin-top: 2rem;
        margin-left: 1rem;
        color: #707070;
        font: italic normal bold 24px/85px Helvetica Neue;
    }

    .cart-element{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 18rem;
    }

    .cart-element .cart-item{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;  
        overflow-y: scroll;
        overflow-x: hidden; 
    }

    .cart-element .cart-item::-webkit-scrollbar{
        width: 0.4rem;
    }

    .cart-element .cart-item::-webkit-scrollbar-track{
        background: var(--white);
    }

    .cart-element .cart-item::-webkit-scrollbar-thumb{
        background-color: var(--white);   
        border-radius: 20px;       
        border: 0.1px solid var(--ligthgray);  
    }

    .totalCart{
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
            
    }

    .totalCart h2{
        font-size: 1.5rem;
        margin-right: 0.5rem;
        font: italic normal bold 24px/85px Helvetica Neue;
        text-align: center;
        justify-content:center;
    }

    .totalCart .total{
        text-align: center;
        font: normal normal 300 24px/85px Helvetica Neue;
        letter-spacing: 0px;
        color: #707070;
        text-transform: uppercase;
        
        
    }

    .save-btn{
        display: flex;
        align-items: center;
        justify-content: center;   
        position: absolute;
        width: 100%;
        border: 1px solid var(--cartColor); 
        height: 6rem;
        cursor: pointer;
        bottom: 0rem;       
        color: #27c383;    
        font: italic normal bold 35px/70px Helvetica Neue;
        
    }
    .save-btn .icon{
        width: 24px;
        height: 20px;
        margin-left:18px;
    }
`