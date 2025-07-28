import { Assets } from "../../../../config";
import { LogoSearch, SidebarContent, WrapperSidebar, Logo, Search } from "./Sidebar.styled";

const Sidebar = () => {
  return <WrapperSidebar>
    <SidebarContent>
        <LogoSearch>
            <Logo src={Assets.logo} alt="tiktok" />
            <Search>
                
            </Search>
        </LogoSearch>
    </SidebarContent>
  </WrapperSidebar>
};

export default Sidebar;
