import styled from "styled-components";


export const CartContainer = styled.div`
    height: 30.2rem;
    background-color: #FFF;
    border-radius: 0.625rem;
    border: 1px solid #E2E2E2;
    width: 35%;
    position: relative;
    margin-right: 12.438rem; 

    h2{
        margin-top: 0rem;
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
        button{
            padding-left:1rem;
        } 
        img{
            width:30px;
            heigth:30px;
        }
        
    }
    
    .cart-element .cart-item::-webkit-scrollbar{
        width: 0.4rem;
    }

    .cart-element .cart-item::-webkit-scrollbar-track{
        background: #f7f7f7;
    }

    .cart-element .cart-item::-webkit-scrollbar-thumb{
        background-color: #f7f7f7;   
        border-radius: 20px;       
        border: 0.1px solid #868686;  
    }
   
    .totalCart{
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom:2rem;   
    }

    .totalCart h2{
        display:flex;
        font-size: 1.5rem;
        margin-right: 0.5rem;
        font: italic normal bold 24px Helvetica Neue;
        text-align: center;
        justify-content:center;
        flex-direction: row;
    }

    .totalCart .total{
        text-align: center;
        font: normal normal 300 24px Helvetica Neue;
        letter-spacing: 0px;
        color: #707070;
        text-transform: uppercase;
        padding-left:0.5rem;
        
    }

    .save-btn{
        display: flex;
        align-items: center;
        justify-content: center;   
        position: absolute;
        width: 100%;
        border: 1px solid #E2E2E2; 
        height: 6rem;
        cursor: pointer;
        bottom: 0rem;       
        color: #27c383;    
        font: italic normal bold 35px/70px Helvetica Neue;
        &:hover{
            background-color: #cfd1cf;
        }
        
    }
    .save-btn .icon{
        width: 24px;
        height: 20px;
        margin-left:18px;
    }
    @media (max-width:1000px){     
            
        width: 50%;
        align-self: center;
        justify-self: center;
        margin:0% 5% 0% 5%;
        
    }
    @media (max-width:1366px){
        width:45%;
    }
    @media (max-width:500px){
        width: 80%;
        margin-right: 0rem;
        align-self:center; 
        justify-self: center;
    }
`


export const CartInsertedItem = styled.div<{color:string}>`
    
    align-items:center;
    flex-direction : row;
    display:flex;                  
    width :100%;
    padding-top : 0rem;
    padding-bottom : 1rem;
    
    button{
        background-color:#fff;
        border:none;    
        cursor: pointer;
        
    }
    img{
        width: 20px;
        height: 24px;
        padding: 20%; 
    }
    .rightDiv{
        border-left : ${({color})=>'4px solid' + color};
        border-radius : 4px 0px 0px 4px;
        width : 234px;
        margin-left:14.4px;
        display:flex;
        flex-direction:column;
        
    }
    .rightDiv .pNumbers{
        padding-left: 5%;
        padding-right: 5%;  
        margin-bottom : 0rem;
        text-align: left;
        font: italic normal bold 15px/20px Helvetica Neue;
        letter-spacing: 0px;
        color: #868686;
        opacity: 1;
    }

    .rightDiv .pNameandValue{
        padding-left: 5%;
        flex-direction : row;
        normal normal normal 16px Helvetica Neue;
        margin-top : 0rem;
    }
    .rightDiv .pNameandValue .gameMode{
        color :${({color})=>color};
        font: italic normal bold 16px Helvetica Neue;
        padding-right: 5%;
    }

`


export const CartEmptyContainer=styled.div`
    color: #868686;
    display: flex;
    justifyContent: center;
    alignItems: center;
    font: italic normal bold 17px Helvetica Neue;
`