import styled from "styled-components";



export const ListContainer = styled.div`

    
    heigth:100%;
    padding-top:4.5rem;
    padding-left: 8.125rem;
    padding-bottom: 28rem;

    .listCard{
        align-itens:left;
        border-left: 4px solid red;
        border-radius : 4px 0px 0px 4px;
        width: 417px;
        display:flex;
        flex-direction:column;
        padding: 0% 2% 0% 2%;
    }
    .numbers{
        font: italic normal bold 20px Helvetica Neue;
        color: #868686;
        margin-top 0rem;
    }
    .dateAndValue{
        font: normal normal normal 17px Helvetica Neue;
        color: #868686;
        margin-top 0rem;
    }
    span{
        color: red;
        font: italic normal bold 20px Helvetica Neue;
    }

`

export const RecentGamesContainer = styled.div`
    display: flex;
    flex-direction:row;
    
    .Filters{
        display: flex;
        flex-direction: row;
        p{
            font: italic normal bold 24px Helvetica Neue;
        }
        span{
            align-self: center;
            margin-left: 40px;
            font: italic normal normal 17px Helvetica Neue;
            color: #868686;
        }
    }

    .NewBet{ 
        display:flex;
        padding-left:20%;
        button{
            align-self: center;
            background-color: white;
            border: none;
            font-size: 1.5rem;
            font: italic normal bold 24px Helvetica Neue;
            color: #B5C401;
            opacity: 1;
        }
    }
`


export const ButtonFilter = styled.button<{color:string; selected:boolean}>`
   
    align-self: center;
    color : ${({color,selected})=>(selected ===true ? '#FFFFFF':color)};
    background-color:${({color,selected})=>(selected ===true ? color:'#FFFFFF' )};
    border : ${({color})=>'2px solid' +color};
    border-style: solid;
    border-radius: 20px;
    cursor: pointer;
    font: italic normal bold 14px Helvetica Neue;
    font-weight: bold;
    outline: none;
    width: 123px;
    height: 34px;
    margin-left:12px;
`