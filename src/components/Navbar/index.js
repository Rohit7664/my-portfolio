import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  ResumeBtn,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo onClick={toggleHome}>
            <span className="colored-span-tag">Rohit</span>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars style={{ background: "#000" }} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                HOME
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="skills"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                SKILLS
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                PROJECTS
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contacts"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                CONTACTS
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <ResumeBtn
              to="https://drive.google.com/drive/u/1/folders/1RoWSnF6EfJGVwTmSJhFXaUQFHengRjIw"
              target="_blank"
              rel="noreferrer noopener"
            >
              RESUME
            </ResumeBtn>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
