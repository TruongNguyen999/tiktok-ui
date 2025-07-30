import {
  AppActionbarIcon,
  DowloadActionbarIcon,
  TiktokActionbarIcon,
} from "../../../../assets/index";
import {
  ActionbarBtn,
  Container,
  Content,
  DivFixedTopActionbar,
  IconWrapper,
  Tulltip,
  Wrapper,
  Text,
  DivVertical,
  ProfileContainer,
  BtnProfileActionbar,
  BtnContentProfileActionbar,
  IconContainer,
  DivAvartar,
  ImgActionbar,
} from "./Actionbar.styled";

const Actionbar = () => {
  return (
    <DivFixedTopActionbar>
      <Wrapper>
        <Container>
          <Content>
            <Tulltip>
              <ActionbarBtn>
                <IconWrapper>
                  <TiktokActionbarIcon />
                </IconWrapper>
                <Text>Nhận xu</Text>
              </ActionbarBtn>
            </Tulltip>
          </Content>
          <Content>
            <Tulltip>
              <ActionbarBtn>
                <IconWrapper>
                  <AppActionbarIcon />
                </IconWrapper>
                <Text>Tải ứng dụng</Text>
              </ActionbarBtn>
            </Tulltip>
          </Content>
          <Content>
            <Tulltip>
              <ActionbarBtn>
                <IconWrapper>
                  <DowloadActionbarIcon />
                </IconWrapper>
                <Text>Ứng dụng</Text>
              </ActionbarBtn>
            </Tulltip>
          </Content>
          <DivVertical />
          <ProfileContainer>
            <BtnProfileActionbar>
              <BtnContentProfileActionbar>
                <IconContainer>
                  <DivAvartar>
                    <ImgActionbar src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7329574158050787330~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=837bfa6d&x-expires=1753948800&x-signature=OZvbZ39Ur4LyOmRi5dBQ6iKxSvQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" />
                  </DivAvartar>
                </IconContainer>
              </BtnContentProfileActionbar>
            </BtnProfileActionbar>
          </ProfileContainer>
        </Container>
      </Wrapper>
    </DivFixedTopActionbar>
  );
};

export default Actionbar;
