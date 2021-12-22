import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { Media } from './media'

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;
const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color:#fff;
  width:100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;
const LinkItem = styled.li`
    width: 100%;
    padding: 0 1.1em;
    margin: 0.5em;
    color: #222;
    font-weight: 500;
    font-size: calc(12px + 1vmin);
    display: flex;
    border-bottom: 2px solid transparent;
    transition: all 220ms ease-in-out;
    
    &:hover {
        border-bottom: 2px solid #2ecc71;
    }
`;
const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;
export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);


    return (
        <NavLinksContainer>
          <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
          {isOpen && (
            <LinksWrapper>
              <LinkItem>
                  <Link href="#">About Me</Link>
              </LinkItem>
              <LinkItem>
                  <Link href="#">Edication</Link>
              </LinkItem>
              <LinkItem>
                  <Link href="#">Projects</Link>
              </LinkItem>
              <LinkItem>
                  <Link href="#">Contacts</Link>
              </LinkItem>
              <Media />
            </LinksWrapper>
          )}
            
        </NavLinksContainer>
    )
}