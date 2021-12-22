import React from 'react'

import {projects} from '../../assets/data/projects'

import styled from 'styled-components'

const Container = styled.div`
min-height: 92vh;
background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
overflow: auto;
padding-top: 3em;

> h1, h3{
  color: white;
  text-align: center;
}
> h1 {
  text-transform: uppercase;
  font-size: 5em;
}

  .wrapper{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

`;
const Link = styled.a`
text-align: center;
text-decoration: none;
color: white;
width: 33%;
margin: 10px;

> img {
  // width: 100%;
  // height: auto;
  border-radius: 20px;
}
`;
export  function Projects(props) {
  return (
    <Container>
      <h3>some of my recent works</h3>
      <h1>projects</h1>
      <div className='wrapper'>
        {projects.map((project, idx) => (
          <Link href={project.link} target="_blank" key={idx}>
            <img src={project.img} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.desc} </p>

          </Link>
        ))}
      </div>
    </Container>
  )
}
