import React from 'react'
import { Logo } from '../logo';

import styled from 'styled-components'
import { NavLinks } from './navLinks';
import { Media } from './media';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../responsive'
import { MobileNavLinks } from './mobileNavLinks'


const NavBarContainer = styled.div`
    width: 97vw;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5em;
    margin-top: 10px;
    
`;
const LeftSection = styled.div`
    displat: flex;
    `;
const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    height: 100%;
    `;
const RightSection = styled.div`
    displat: flex;
    `;

    export function Navbar(props) {
        const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile})
        return  (
            <NavBarContainer>
                <LeftSection>
                    <Logo />
                </LeftSection>
                <MiddleSection>
                    {!isMobile && <NavLinks />}
                </MiddleSection>
                <RightSection>
                    {!isMobile && <Media />}
                    {isMobile && <MobileNavLinks />}
                </RightSection>
            </NavBarContainer>
        );
    }