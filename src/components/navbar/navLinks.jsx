import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

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
`;
const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    color: #222;
    font-weight: 500;
    font-size: calc(12px + 1vmin);
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;
    &:hover {
        border-top: 2px solid #2ecc71;
    }
`;
// const Li = styled.a`
//     text-decoration: none;
//     color: inherit;
//     font-size: inherit;
// `;
export function NavLinks(props) {
    
    return (
        <NavLinksContainer>
            <LinksWrapper>
                <LinkItem>
                    <Link to={'/'}>About Me</Link>
                </LinkItem>
                <LinkItem>
                    <Link to={'/education'}>Education</Link>
                </LinkItem>
                <LinkItem>
                    <Link to={'/projects'}>Projects</Link>
                </LinkItem>
                <LinkItem>
                    <Link to={'/contacts'}>Contacts</Link>
                </LinkItem>
            </LinksWrapper>
        </NavLinksContainer>
    )
}