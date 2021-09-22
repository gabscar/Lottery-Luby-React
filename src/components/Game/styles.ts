import styled from "styled-components";




export const GameSection = styled.div`
    width: 80%;
    padding-top: 1.5rem; 
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: center;  
    margin-left: 130px;  
    .title {
        display: flex;
        align-items: center;
        flex-direction: row;
        text-transform: uppercase;
        color: #707070;
    }
    .title h2{
        font: italic normal bold 24px/85px Helvetica Neue;
        letter-spacing: 0px;
    }
    .title p{
        font: italic normal 300 24px/85px Helvetica Neue;
        letter-spacing: 0px;
        margin-left: 0.5rem;
    }
    .chooseGame{
        margin-bottom:1.75rem;
    }
    .chooseGame .GameMode{
        display: flex; 
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
`

export const ButtonGameMode = styled.button<{color:string; selected:boolean}>`
   
    
    color : ${({color,selected})=>(selected ===true ? '#FFFFFF':color)};
    background-color:${({color,selected})=>(selected ===true ? color:'#FFFFFF' )};
    border : ${({color})=>'2px solid' +color};
    padding : 0.3rem 1.25rem;
    border-radius : 1.25rem;
    margin-left : 1.5rem;
    cursor : pointer;
    font: italic normal bold 15px Helvetica Neue;
    outline: none;
    min-width: 113px;

    

`
