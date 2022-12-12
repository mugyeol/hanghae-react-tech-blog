import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --color-point1: #415c5A;
  --color-point2: #F6C69E;
  --color-black: #323232;
}
@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
    font-family: 'NanumSquareNeo-Variable';
  }

  body {
    /* overflow: hidden; */
    width: 100vw;
    height: 100vh;
  }

  html {
    font-size: 10px;
  }
`;

export default GlobalStyle;
