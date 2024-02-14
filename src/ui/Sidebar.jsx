import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 991px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 99;
    transform: translatex(-260px);
    transition: all 0.4s;
  }
`;

const MenuDiv = styled.div`
  position: fixed;
  top: 15px;
  left: 10px;
  z-index: 999;
  font-size: 22px;
  transition: all 0.4s;
  display: none;

  @media (max-width: 991px) {
    display: block;
  }
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => setIsOpen(!isOpen);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      <MenuDiv onClick={handleClick}>
        {isOpen ? <IoMdClose /> : <IoIosMenu />}
      </MenuDiv>
      <StyledSidebar className={`${isOpen ? "open-menu" : ""}`}>
        <Logo />
        <MainNav closeMobileMenu={closeMobileMenu} />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
