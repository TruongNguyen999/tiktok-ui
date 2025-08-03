import styled from "styled-components";

export const DivFixedTopActionbar = styled.div`
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 7;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 8px;
    transition: 400ms cubic-bezier(0.65, 0, 0.35, 1);
`

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 12px;
`

export const Container = styled.div`
    display: inline-flex;
    height: 48px;
    padding: 8px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 0px;
    border-radius: 99px;
    background-color: var(--background-color-blur);
    box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 10px 0px;
`

export const Content = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 8px;
    margin-top: 8px;
`

export const Tulltip = styled.div`
    display: inline-block;
`

export const ActionbarBtn = styled.button`
    border: none;
    background: none transparent;
    outline: none;
    font-family: "IBM Plex Sans", TikTokFont, Arial, Tahoma, PingFangSC, sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--ui-text-1-display);
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    right: 0px;
    bottom: 0px;
    gap: 4px;
    padding: 0px 8px;
    min-width: 32px;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    height: 32px;
    border-radius: 52px;
    cursor: pointer;
    line-height: 30px;
    text-align: center;
    max-width: 120px;
    transition: transform 0.3s cubic-bezier(0.4, 0.14, 0.3, 1);
    transform-origin: right bottom;
    transform: none;

    &:hover {
        background-color: var(--background-color-hover-blur);
    }
`

export const IconWrapper = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    min-width: 16px;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
`

export const Text = styled.span`
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;+
`

export const DivVertical = styled.div`
    height: 20px;
    width: 1px;
    margin: 0px 8px;
    background-color: rgba(0, 0, 0, 0.12);
    align-self: center;
`

export const ProfileContainer = styled.div`
    display: inline-flex;
    height: 48px;
    padding: 8px 8px 8px 0px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 8px;
    border-radius: 99px;
    background: transparent;
    box-shadow: none;
`

export const BtnProfileActionbar = styled.button`
    min-width: 32px;
    height: 32px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 1);
    border-radius: 100%;
    font-size: 16px;
    line-height: 21px;
    appearance: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: none;
    font-weight: 500;
    letter-spacing: 0.15px;
    cursor: pointer;

    &:hover {
        background-color: var(--background-color-hover-blur);
    }
`

export const BtnContentProfileActionbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconContainer = styled.div`
    display: flex;
    flex-shrink: 0;
    font-size: 19px;
`

export const DivAvartar = styled.div`
    font-size: 32px;
    width: 2rem;
    height: 2rem;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    position: relative;
`

export const ImgActionbar = styled.img`
    width: 30px;
    height: 30px;
    padding: 3px;
    border-radius: 50%;
`