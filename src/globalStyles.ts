import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Ubuntu";
        src: url("/frontend/fonts/Ubuntu/Ubuntu-Medium.ttf") format("ttf"),
    }

    body {
    background: #293133;
    color: white;
    font-family: Ubuntu, Sans-Serif;
    max-width: inherit
    }
`;

export default GlobalStyle;