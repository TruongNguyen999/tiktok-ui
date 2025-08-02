import { LogoIcon, SearchIcon } from "../../../../assets/index";
import {
  LogoSearch,
  SidebarContent,
  WrapperSidebar,
  Search,
  DivScrollContainer,
  DivScrollMain,
  ScrollMainContent,
  ScrollMainContentText,
} from "./Sidebar.styled";
import { Link, useLocation } from "react-router-dom";
import { ListMenu } from "../../../../utils/Menu";

const Sidebar = () => {
  const location = useLocation()

  const onRenderMenu = () => {
    let result;
    const normalizedPath = location.pathname.replace(/^\/tiktok-ui/, '');
    if (ListMenu && ListMenu.length > 0) {
      result = ListMenu.map((menu, i) => {
        let Icon = menu.icon;
        return (
          <Link to={menu.path} key={'link' + i}>
            <ScrollMainContent $active={normalizedPath === menu.path}>
              <Icon />
              <ScrollMainContentText>{menu.name}</ScrollMainContentText>
            </ScrollMainContent>
          </Link>
        );
      });
    }

    return result;
  };

  return (
    <WrapperSidebar>
      <SidebarContent>
        <LogoSearch>
          <LogoIcon />
          <Search>
            <SearchIcon />
            <span>Tìm kiếm</span>
          </Search>
        </LogoSearch>

        <DivScrollContainer>
          <DivScrollMain>{onRenderMenu()}</DivScrollMain>
        </DivScrollContainer>
      </SidebarContent>
    </WrapperSidebar>
  );
};

export default Sidebar;
