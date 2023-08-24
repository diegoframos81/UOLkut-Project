import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
    background: ${props => props.$primary ? "var(--orange)" : "#FFF"};
    color: ${props => props.$primary ? "#FFF" : "#ED6D25"};


    width: 19em;
    height: 3em;
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 2px solid var(--orange);
    border-radius: 3px;
    cursor: pointer;
    
    &:hover{
        filter: brightness(0.9);
    }
`;