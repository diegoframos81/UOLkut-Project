import styled from "styled-components";

export const ContainerLayout = styled.div`

    .body-container {
    display: flex;
    width: 100%;
    padding-top: 80px;
    padding-bottom: 60px;
    justify-content: center;
    background-color: #D9E6F7;
    }

    .body-content {
    display: flex;
    flex-direction: row;
    width: 85vw;
    /* max-width: 1280px; */
    justify-content: space-between;
    }

    .profile-section {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 25px;
    }

    .left-section {
        margin-left: 10%;
        width: 23%;
    }

    .center-section {
        margin-left: 5%;
        margin-right: 5%;
    }

    .right-section {
        margin-right: auto;
    width: 23%;
    }

    @media screen and (max-width: 1279px) {

    .body-content {
        flex-direction: column;
        width: 100%;
        gap: 2.3rem;
    }

    .profile-section {
        align-self: center;
        padding: 0rem 2rem;
    }

    .left-section {
        width: 100%;
    }

    .center-section {
        width: 100%;
    }

    .right-section {
        width: 100%;
    }

    .user-value .bordered-word:nth-child(2){
        display: none;
    }

    .user-value .bordered-word:nth-child(3) {
        display: none;
    }

    .user-tags-items {
        flex-wrap: wrap;
    }
    }

    @media (max-width: 800px) {
  .main {
    display: flex;
    flex-direction: column;
  }

  .isDesktop {
    display: none;
  }

  .isMobile {
    display: block;
    order: 1;
  }

  
}
`