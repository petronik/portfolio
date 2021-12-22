import React from 'react'

import styled from 'styled-components';
import LogoImage from '../../assets/img/logo.svg'

const LogoWrapper = styled.div`
display: flex;
flex-direction: row;
    align-items: center;
`;
const LogoImg = styled.div`
    width: calc(40px + 2vmin);
    height: calc(40px + 2vmin);

    img {
        width: 100%;
        height: 100%;
    }

    @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

    animation: App-logo-spin infinite 15s linear;
`;
const LogoText = styled.div`
    font-size: calc(10px + 2vmin);
    margin:0;
    margin-left: 4px;
    color: #222;
    font-weight: 900;
    text-transform: uppercase;
`;


export function Logo (props) {
    return  <LogoWrapper>
                <LogoImg>
                    <img src={LogoImage} alt="Pertonik Logo" />
                </LogoImg>
                <LogoText>
                    petronik
                </LogoText>
            </LogoWrapper>
}
