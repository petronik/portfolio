import React from 'react';

import styled from 'styled-components';

const ContainerAbout = styled.div`
height: 92vh;
background: linear-gradient(0.35turn, #3f87a6, #ebf8e1, #f69d3c);
display: flex;
justify-content: center;
align-items: flex-end;
flex-wrap: wrap;

> p{
  width:65%;
  font-weight: bold;
  font-size: calc(10px + 2vmin);
}
`;

export function About (props) {
  return (
    <ContainerAbout>
      <p>Hi, my name is Petro Nikolayev but you can call me Pete. I am a creative web developer currently based in Ukraine. I have keen interest in React. I graduated from Robertson College, Canada.</p>
      <p>Feel free to drop me a line!</p>
    </ContainerAbout> 
  )
}