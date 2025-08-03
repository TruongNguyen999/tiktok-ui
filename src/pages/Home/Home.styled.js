import styled from "styled-components";

export const WrapperContainer = styled.div`
  height: 100vh;
  width: calc(100vw - 240px);
  overflow-y: hidden;
  background-color: var(--background-mode);
`;

export const VideoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;

export const Video = styled.div`
  height: 92%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  & video {
    height: 100%;
    width: 100%;
    max-width: 400px;
    object-fit: cover;
  }
`;

export const VideoActions = styled.div`
  display: flex;
  flex-direction: column;
  height: 92%;
  justify-content: end;
  margin-left: 10px;
`;

export const BtnAction = styled.button`
  border: none;
  background: none;
  outline: none;
  padding: 0px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;

  ${(props) => props.mb && `margin-bottom: 20px;`}
  ${(props) => props.mt && `margin-top: 10px;`}

  & > img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
  }

  & span {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0px;
    border-radius: 50%;
    transition: 200ms ease-in-out;
    cursor: pointer;
    width: 48px;
    height: 48px;
    background-color: var(--background-color-blur);
    margin-top: 8px;
    margin-bottom: 6px;
    color: var(--text-color-actions);

    &.plus {
      position: absolute;
      top: 100%;
      left: 50%;
      translate: -50% -50%;
      background-color: #fe2c55;
      width: 24px;
      height: 24px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px;

      & svg {
        width: 14px;
        height: 14px;
        cursor: pointer;
      }
    }

    &:hover {
      background-color: var(--background-color-action-video-hover-blur);
    }
  }

  & strong {
    font-family: var(--font-fammily);
    font-size: 12px;
    line-height: 16px;
    color: var(--text-color-actions-75);
    text-align: center;
  }
`;
