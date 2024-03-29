import styled from "styled-components";

export const ContainersUserTag = styled.div`
    
    .user-tags {
    display: flex;
    margin-top: 20px;
    }

    ul {
    display: flex;
    list-style: none;
    padding: 0;
    padding-top: 16px;
    padding-bottom: 32px;
    margin: 0;
    gap: 70px;
    }

    li {
    color: #4B4B4B;
    
    font-size: var(--font-small);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }

    .tag-content {
    display: flex;
    align-items: center;
    gap: 8px;
    }

    img {
    width: 24px;
    height: 24px;
    }

    @media (max-width:800px) {
        .user-tags{
            width: 75%;
        }
    }

    ul {
    display: flex;
    list-style: none;
    padding: 0;
    padding-top: 16px;
    padding-bottom: 32px;
    margin: 0;
    gap: 50px;
    }

    li {
    color: #4B4B4B;
    
    font-size: var(--font-small);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }

    .tag-content {
    display: flex;
    align-items: center;
    gap: 2px;
    }

    img {
    width: 25px;
    height: 25px;
    }
`