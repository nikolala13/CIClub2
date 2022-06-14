import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to = 'about' onClick={toggle}>About</SidebarLink>
            <SidebarLink to = 'utility' onClick={toggle}>Utility</SidebarLink>
            <SidebarLink to = 'services' onClick={toggle}>Rewards</SidebarLink>
        </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;