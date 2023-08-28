import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        
        

        --background: #D9E6F7;
        --white: #FDFEFF;
        --orange: #ED6D25;
        --text: #868686;

        --text-title: #ED6D25
        --placeholder: #AACCEE;
        --input: #EFF3F8

        --font-smallest: 0.8rem;
        --font-small: 1.0rem;
        --font-medium: 1.3rem;
        --font-large: 1.4rem;
        --font-largest: 1.8rem;

        
    }
    
    *{
        font-family: 'Roboto Flex', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;

        
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