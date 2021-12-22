import React from "react";

import styled from "styled-components";


const MediaWrapper = styled.div`
    display:flex;
    height: 100%;
`;
const MediaList = styled.ul`
    dislplay: flex;
    flex-direction: row;
    
    list-style-type: none;
    padding: 0 5px;
    margin: 1.3em;

    >li{
        display: inline-block;
        margin-right: calc(10px + 1vmin);
        font-size: calc(16px + 2vmin);
    }
`;



export function Media (props) {
    return (
        <MediaWrapper>
            <MediaList>
                <li>
                    <a href="https://github.com/petronik" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/peter-nikolaiev-977a0b155/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                    </a>
                </li>
            </MediaList>
        </MediaWrapper>
    )
}