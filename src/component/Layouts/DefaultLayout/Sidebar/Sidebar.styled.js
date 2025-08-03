import styled from "styled-components";

export const WrapperSidebar = styled.div`
    max-width: 240px;
    width: 240px;
    background-color: var(--background-mode);
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
    background-color: var(--background-color-blur);
    border-radius: 25px;
    cursor: pointer;
    align-items: center;
    color: var(--text-color-placeholder);
    font-size: calc(var(--font-size) - 2px);

    & > svg {
        width: 19px;
        height: 19px;
        margin-left: 10px;
        margin-right: 10px;
        fill: var(--text-color);
    }
`

export const DivScrollContainer = styled.div`
    width: 100%;
    max-width: 208px;
    height: 100%;
    margin-top: 20px;
`

export const DivScrollMain = styled.div`
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 145px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none; 

    & a {
        text-decoration: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        color: var(--text-color);
    }
`

export const ScrollMainContent = styled.h2`
    display: flex;
    align-items: center;
    height: 40px;
    min-height: 40px;
    border-radius: 10px;
    font-weight: 300;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    position: relative;
    font-size: var(--font-size);

    & > svg {
        width: 32px;
        height: 32px;

        &.ml {
            margin-left: 5px;
            width: 26px;
        }
    }

    ${props => props.$active ? `
        color: var(--text-color-active);

        & > svg {
            fill: var(--text-color-active);
        }
    ` : ''}

    &:hover {
        background-color: var(--background-color-hover-blur);
    }
`

export const ScrollMainContentText = styled.span`
    margin-left: 15px;
`