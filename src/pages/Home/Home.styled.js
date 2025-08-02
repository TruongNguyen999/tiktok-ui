import styled from "styled-components";

export const WrapperContainer = styled.div`
    height: 100vh;
    width: calc(100vw - 240px);
    overflow-y: hidden;
`

export const VideoContainer = styled.div`
    background: ${(props) => (props.$active ? '#e0f7fa' : '#f5f5f5')};
    padding: 20px;
    margin: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
`