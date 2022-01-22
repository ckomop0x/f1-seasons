import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
  }
    
  * {
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
    line-height: 1.5;
  }
  
  #root {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
