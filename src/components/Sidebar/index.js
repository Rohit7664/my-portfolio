import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarResumeBtn } from './SidebarElements'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='home' onClick={toggle} spy={true} smooth={true} offset={-100} duration={500}>Home</SidebarLink>
                <SidebarLink to='about' onClick={toggle} spy={true} smooth={true} offset={-100} duration={500}>About</SidebarLink>
                <SidebarLink to='skills' onClick={toggle} spy={true} smooth={true} offset={-100} duration={500}>Skills</SidebarLink>
                <SidebarLink to='projects' onClick={toggle} spy={true} smooth={true} offset={-100} duration={500}>Projects</SidebarLink>
                <SidebarLink to='contacts' onClick={toggle} spy={true} smooth={true} offset={-100} duration={500}>Contacts</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarResumeBtn to='https://drive.google.com/drive/folders/1Jgr6K1Psix8TY_qJFLU8xye7BY_pLaa_?usp=drive_link' target='_blank' rel='noreferrer noopener' onClick={toggle}>Resume</SidebarResumeBtn>
            </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar