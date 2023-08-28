    import styled from "styled-components";

    export const ContainerProfile = styled.header`

        box-shadow: 0px 0px 6px 0px, #aaccee;
        background: var(--white);
        overflow-x: hidden;
        `;

    export const ContentProfile = styled.div`
        max-width: 100%;
        margin: 0 auto;

        padding: 0 1rem 0.5;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .navbar {
            width: 100%;
            height: 78px;
            display: flex;
            justify-content: center;
            
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            background: #fdfeff;
        }

        .navbar-content {
            display: flex;
            justify-content: space-between;
            height: 100%;
            width: auto;
        }

        .nav-group-left,
        .nav-group-right {
            display: flex;
            align-items: center;
            gap: 30px;
        }

        .img-nav {
            width: 110px;
            height: 33px;
            margin-right: 20px;
            flex-shrink: 0;
        }

        .nav-link {
            margin-right: 10px;
            padding: 0;
            font-size: var(--font-medium);
        }

        .profile-link {
            color: var(--orange);
        }

        .search-bar-desktop-wrapper {
            display: flex;
            align-items: center;
            padding: 8px;
            width: 355px;
            height: 43.959px;
            flex-shrink: 0;
            border-radius: 8px;
            background: #eff3f8;
        }

        .search-bar-mobile-wrapper {
            display: none;
            justify-content: center;
            align-items: center;
            padding: 8px;
            width: 320px;
            height: auto;
            flex-shrink: 0;
            border-radius: 8px;
            background: #eff3f8;
            margin-top: 30px;
        }

        .search-icon {
            width: 20px;
            height: 20px;
            
            margin-right: 8px;
        }

        .search-bar {
            display: inline-flex;
            
            border: none;
            background-color: transparent;
            outline: none;
            font-family: inherit;
            font-size: var(--font-small);
            line-height: 30px;
        }

        .user-profile {
            display: flex;
            align-items: center;
            margin-left: 20rem;
            padding: 20px;
            gap: 2px;
        }

        .user-profile img {
            width: 40px;
            height: 40px;
        }

        .user-name {
            margin-left: 5px;
            white-space: nowrap;
            font-size: var(--font-small);
        }

        .arrow-down {
            border: solid var(--orange);
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 3px;
            margin-left: 12px;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
        }

        .desktop-only {
            display: block;
        }

        .mobile-only {
            display: none;
        }

        @media screen and (max-width: 1279px) {
            header{
                overflow-x: hidden;
            }
            .navbar-content {
            
            flex-direction: row;
            justify-content: space-between;
            }

            .nav-group-left,
            .nav-group-right {
            display: flex;
            align-items: center;
            width: 800%;
            }

            .nav-group-left {
            justify-content: flex-start;
            }

            .nav-group-right {
            justify-content: flex-end;
            }

            .img-nav {
            width: 80px;
            height: 24px;
            }

            .user-profile img {
            width: 30px;
            height: 30px;
            }

            .search-bar-desktop-wrapper {
            display: none;
            }

            .search-bar-mobile-wrapper {
            display: flex;
            margin: auto;
            margin-top: 30px;
            }

            .desktop-only {
            display: none;
            }

            .mobile-only {
            display: block;
            }
        }
`;
