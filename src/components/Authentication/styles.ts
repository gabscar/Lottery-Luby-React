import styled from "styled-components";


export const ContainerForm = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top:10%;
  h1{
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
    height: 45%;
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
    font: italic normal bold 35px/70px Helvetica Neue;
    .icon {
      margin-left: 10px;
      margin-right: 0px;
      width: 24px;
      height: 20px;
    }
  }
  form .forgot{
    font: italic normal normal 17px/70px Helvetica Neue;
    color: #C1C1C1;
    letter-spacing: 0px;
    opacity: 1;
    cursor:pointer;
    text-align: end;
    padding-right: 1rem;
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
  @media(max-width:900px){
    margin-bottom:10%;
    form {
      padding-bottom:30%;
    }
  }
  @media(max-width:1366px){
    form {
      height: 230px;
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
  padding-top: 0rem;
  h2{
    font: italic normal bold 65px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    width: 244px;
    align-self: center;
    padding-bottom:1rem;
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
    padding-top:1rem;
  }
  @media(max-width:360px){
    h1{
      font: italic normal bold 43px Helvetica Neue;
      margin-bottom: 0px;
    }
    h2{
      font: italic normal bold 45px Helvetica Neue;
      max-heigth:100px;
    }
    span{

      font: italic normal bold 22px Helvetica Neue;
    }
  }

`;


export const ContainerMain = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media(max-width:900px){
      flex-direction: column;
    }

`


