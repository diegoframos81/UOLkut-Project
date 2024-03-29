import styled from "styled-components";

export const ContainerCardProfile = styled.div`
    
    
    .profile-picture {
        border-radius: 100%;
        border: 3px solid var(--orange);
        padding: 3px;
        object-fit: cover;
        height: 12rem;
        width: 12rem;
        align-self: center;
        aspect-ratio: 1 / 1;
    }

    .profile-name {
        color: #4B4B4B;
        
        font-size: var(--font-large);
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
        padding: 30px 0px 10px 0px;
    }

    .profile-summary {
        color: #4B4B4B;
        
        font-size: var(--font-medium);
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        padding: 15px 0px;
    }
`