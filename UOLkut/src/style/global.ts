import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #D9E6F7;
        --white: #FDFEFF;
        --orange: #ED6D25;

        --text-title: #ED6D25
        --placeholder: #AACCEE;
        --input: #EFF3F8
    }
    
    *{

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    // font-size: 16px; (Desktop)
    html {
        @media (max-width: 1050px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }


    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    buttton {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`