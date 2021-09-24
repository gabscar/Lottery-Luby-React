import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }
    #root {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100vh;
    }
`;