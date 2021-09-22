import styled from "styled-components";


export const ContainerForm = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h2{
    font: italic normal bold 35px/70px Helvetica Neue;
    align-self:center;
    font-size:1.5rem;
    color: #707070;
  }

  .formDiv{

    align-self:center;
    justify-content:center;
    border-radius:15px;
    width: 45%;
    height: 40%;
    border: 1px solid #00000014;
    padding: 10px 0 10px 0;
    margin: 1rem 0 1rem 0;
    background-color: white;
  }
  .formDivForgot{
    align-self:center;
    justify-content:center;
    border-radius:15px;
    width: 45%;
    height: 20%;
    border: 1px solid #00000014;
    padding: 10px 0 10px 0;
    margin: 1rem 0 1rem 0;
    background-color: white;
  }
  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: white;
  }

  form input{
    height: 2rem;
    padding: 20px;
    border-bottom: 2px solid #00000014;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: white;
  }

  form button {
    width: 100%;
    border: none;
    background-color: white;
    font-size: 1.8rem;
    background-color: transparent;
    color: #b5c401;
    path {
      color: #b5c401;
    }
    svg {
      margin-left: 10px;
      margin-right: 0px;
    }
  }
  form .forgot{
    font: italic normal normal 17px/70px Helvetica Neue;
    color: #C1C1C1;
    letter-spacing: 0px;
    opacity: 1;
    cursor:pointer;
    text-align: end;
  }
  .signUpButton{
    width: 100%;
    align-self: center;
    font: italic normal bold 35px/70px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    background-color: transparent;
    cursor: pointer;
    border:none;   
    margin-top:30px;
    svg {
      margin-left: 10px;
      margin-right: 0px;
    }
  }
`;



export const ContainerSlogan = styled.div `
  background-color: #f7f7f7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align:center;
  justify-content: center;

  h2{
    font: italic normal bold 65px/70px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    width: 244px;
    height: 217px;
    align-self: center;
  
  }
  
  span{
    background: #B5C401 0% 0% no-repeat padding-box;
    border-radius: 15px;
    opacity: 1;
    width:15%;    
    align-self: center;
    font: italic normal bold 22px Helvetica Neue;
    letter-spacing: 0px;
    color: #FFFFFF;
  }
  h1{
    text-align: center;
    font: italic normal bold 83px/85px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
    opacity: 1;
  }

`;


export const ContainerMain = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;


`


