import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
font: italic bold calc(10px + 2vmax) Georgia, serif;
height: 92vh;
background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 45.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 45.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 45.71%);

> p{
  
    > i{
    margin-right: 1em;
    }
}
`;

export function Contacts() {
  return (
    <Container>
      <p><i className="fas fa-at"></i>peronik@ukr.net</p>
      <p><i className="fab fa-github-alt"></i>@petronik</p>
    </Container>
  )
}


