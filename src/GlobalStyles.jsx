import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --fontStack : 'Nunito Sans', sans-serif;
        --fontSizeHome : 18px;
        --fontSizeDetail : 14px;

        --boxShadow : rgba(0, 0, 0, 0.3);
        --borderRadius : 5px;
        --background : ${({ theme }) => theme.background};
        --text : ${({ theme }) => theme.text};
        --input : ${({ theme }) => theme.input};
        --element : ${({ theme }) => theme.element};
        
      }

    * {
    margin: 0;
    padding: 0;
  }
  
  *,
  *:before, 
  *:after {
    box-sizing: border-box;
  }
  
  body {
    font-family: var(--fontStack);
    background : var(--background);
    transition: all .2s linear;
  }
  
  
  img {
    max-width: 100%;
    display: block;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }  
input{
  font-family: var(---fontStack);
}

button {
  font-family: var(---fontStack);
    border : none;
    &:hover{
        cursor: pointer;
    }
}

`;
export default GlobalStyle;
