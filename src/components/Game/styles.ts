import styled from "styled-components";




export const GameSection = styled.div`
    width: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: center;  
    margin-left: 8.125rem; 
    margin-right: 2.563rem;  
    .title {
        display: flex;
        align-items: center;
        flex-direction: row;
        text-transform: uppercase;
        color: #707070;
    }
    .title h2{
        font: italic normal bold 24px Helvetica Neue;
        letter-spacing: 0px;
    }
    .title p{
        font: italic normal 300 24px Helvetica Neue;
        letter-spacing: 0px;
        margin-left: 0.5rem;
    }
    .chooseGame{
        margin-bottom:1.75rem;
    }
    .chooseGame .GameMode{
        display: flex;
        margin-left: 0rem; 
    }
    .chooseGame p{
        text-align: left;
        font: italic normal bold 17px Helvetica Neue;
        letter-spacing: 0px;
        color: #868686;
        opacity: 1;
    }
    .rules{
        width: 90%;
        color: #868686;
        margin-bottom: 1.688rem;
        text-align: left;
    }
    .rules p:first-child{        
        font: italic normal bold 17px/24px Helvetica Neue;
    }
    .rules p:last-child{
        font: italic normal normal 17px/24px Helvetica Neue;
    }
    .buttonsActionGame{
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        margin-bottom:0.5rem;
    }
    .buttonsActionGame button{
        cursor: pointer;
        background-color: #f7f7f7;
        border: 2px solid #27c383;
        font-weight: 500;
        padding: 1.063rem 1.375rem;
        color: #27c383;
        border-radius: 10px;
        opacity: 1;
        height: 3.25rem;
    }
    .buttonsActionGame .buttons-left button:first-child{
        margin-right: 1.563rem;
    }
    .buttonsActionGame .right-btn{
        display: flex;
        background-color: #27c383;
        color: #f7f7f7;
        font-size: 1rem;
        align-items: center;
        padding: 1.063rem 1.375rem;
        height: 3.25rem;
        width: 13.063rem;
        margin-right: 2rem;
    }
    @media (max-width:1000px){
        
        max-width:1000px;
        align-items: center;
        height: 100%;
        .chooseGame {
            padding: 0% 5% 0% 5%;
        }
    }
    
`

export const ButtonGameMode = styled.button<{color:string; selected:boolean}>`
   
    color : ${({color,selected})=>(selected ===true ? '#FFFFFF':color)};
    background-color:${({color,selected})=>(selected ===true ? color:'#FFFFFF' )};
    border : ${({color})=>'2px solid' +color};
    padding : 0rem 1.25rem;
    border-radius : 1.25rem;
    margin-left : 1rem;
    cursor : pointer;
    font: italic normal bold 15px Helvetica Neue;
    outline: none;
    min-width: 113px;
    heigth:20px;
`
export const ButtonNumber = styled.button<{color:string}>`

    padding: 0.75rem 0.75rem 0.75rem 0.75rem;
    margin-left: 5px;
    margin-bottom: 20px;
    border-radius: 6rem;
    background-color: ${({color})=>color};    
    color: white;
    font-weight: 400;
    cursor: pointer;    
    border: none;
    width: 3.5rem;
    height: 3.5rem;
   
`


export const ContainerGames = styled.div`

    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2.6rem;
    margin-bottom: 10%;  
    @media (max-width:1000px){
        
        flex-direction: column;
        align-items: center;
        height: 100%;
        
    }

`