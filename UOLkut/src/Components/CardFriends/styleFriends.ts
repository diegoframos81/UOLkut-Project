import styled from "styled-components";

export const ContentFriends = styled.div`
    

    


    .card-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: space-around;
    }

    .card-header span:first-child {
        color: #4B4B4B;
        
        font-size: var(--font-small);
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
    }

    .card-header span:last-child {
        color: var(--orange);
        
        font-size: var(--font-smallest);
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
    }

    .card-body-friends {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-around;
        width: 100%;
        height: 100%;
    }

    .friends-row {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 20px 0px
    }

    .friends-thumb-container {
        display: flex;
        width: fit-content;
        height: 80px;
        flex-direction: column;
        align-items: center;
    }

    .friends-thumb-container span {
        color: #4B4B4B;
        
        font-size: var(--font-smallest);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align-last: center;
        margin-top: 8px;
    }

    .friend-tumb {
        height: 56px;
        width: 56px;
        object-fit: cover;
        border-radius: 100%;
}
`