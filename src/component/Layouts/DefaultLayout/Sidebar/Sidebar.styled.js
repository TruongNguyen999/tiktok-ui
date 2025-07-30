import styled from "styled-components";

export const WrapperSidebar = styled.div`
    max-width: 240px;
    width: 240px;
`

export const SidebarContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LogoSearch = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.25rem 0 0.5rem 0rem;
    gap: 1.5rem;
    width: 208px;
`

export const Logo = styled.img`
    height: 42px;
    width: 118px;
    padding-left: 0.5rem;
`

export const Search = styled.div`
    height: 40px;
    display: flex;
    justify-content: start;
    background-color: rgb(242, 242, 242);
    border-radius: 25px;
    cursor: pointer;
    align-items: center;
    color: rgba(0, 0, 0, 0.34);

    & > svg {
        width: 19px;
        height: 19px;
        margin-left: 10px;
        margin-right: 10px;
    }
`

export const DivScrollContainer = styled.div`
    width: 100%;
    max-width: 208px;
    height: 100%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none; 
    margin-top: 20px;
`

export const DivScrollMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & a {
        text-decoration: none;
        color: rgba(0, 0, 0, 1);
    }
`

export const ScrollMainContent = styled.h2`
    display: flex;
    align-items: center;
    height: 40px;
    min-height: 40px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    position: relative;

    & > svg {
        width: 32px;
        height: 32px;

        &.ml {
            margin-left: 5px;
        }
    }

    ${props => props.$active ? `
        color: red;

        & > svg {
            fill: red;
        }
    ` : ''}

    &:hover {
        background-color: rgb(242, 242, 242);
    }
`

export const ScrollMainContentText = styled.span`
    margin-left: 15px;
`