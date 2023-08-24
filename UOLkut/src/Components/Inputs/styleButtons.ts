import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
    background: ${props => props.$primary ? "var(--orange)" : "#FFF"};
    color: ${props => props.$primary ? "#FFF" : "#ED6D25"};

    
    width: 24.2em;
    height: 4em;
    font-size: 1.03em;
    margin: 0.5em;
    padding: 0.22em 1em;
    border: 2px solid var(--orange);
    border-radius: 8px;
    cursor: pointer;
    
    &:hover{
        filter: brightness(0.9);
    }
`;