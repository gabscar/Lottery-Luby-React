import styled from "styled-components";


export const Container = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  h2{
    align-self:center;
    font-size:1.5rem;
  }

  .formDiv{
    align-self:center;
    border-radius:15px;
    width: 45%;
    height: 50%;
    border: 1px solid #00000014;
    padding: 10px 0 10px 0;
    margin: 1rem 0 1rem 0;
    background-color: white;
  }
  form {
    display: flex;
    flex-direction: column;
    border-color: teal;
    height: 100%;
    background-color: white;
  }

  form input{
    height: 8rem;
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
  }
`;