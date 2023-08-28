
import styled from 'styled-components';

export const Container = styled.header`
    box-shadow: 0px 0px 6px 0px, #AACCEE;
    background: var(--white)
    
`;

export const Content = styled.div`
        max-width: 1200px;
        margin: 0 auto;

        padding: 0 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

    span {
        display: flex;
        align-items: center;

        color: #ED6D25;
        
        font-size: 36px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;

        margin-left: -8rem;
        padding-top: 1.5rem;
    }

    p {
        color: #4B4B4B;
        
        margin-top: -2rem;
        
        margin-left: 62rem;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }

`;