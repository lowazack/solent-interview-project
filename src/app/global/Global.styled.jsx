import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: lightgray;
    }

    body, input, button, textarea {
        font-size: 1rem;
        font-family: Calibri, 'Trebuchet MS', sans-serif;
    }
    
    * {
        box-sizing: border-box;
    }
    
    .container {
      margin: auto;
      padding-left: 20px;
      padding-right: 20px;
      width: 100%;
      max-width: 800px;
    }
`;