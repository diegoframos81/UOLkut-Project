import styled from "styled-components";

export const ContentCommunitie = styled.div`


.card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-around;
}

.card-body-communities {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;
    width: 100%;
    height: 100%;
}

.communities-row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px 0px
}

.communities-thumb-container {
    display: flex;
    width: fit-content;
    height: 80px;
    flex-direction: column;
    align-items: center;
}

.communities-thumb-container span {
    margin-top: 8px;
    color: #4B4B4B;
    font-family: SF Pro Display, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align-last: center;
}

.seeAll {
    color: var(--orange);
}

.community-tumb {
    height: 56px;
    width: 56px;
    object-fit: cover;
    border-radius: 12px;
}
`