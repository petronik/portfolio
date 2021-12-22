import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {projects} from '../../assets/data/projects'


const ProjectItemStyles = styled.div`
  .project-item__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid gray;
    img {
      height: 100%;
    }
  }
  .project-item__info {
    margin-top: 1em;
    background-color: rgba(77, 59, 84, .3);
    padding: 1em;
    border-radius: 12px;
  }
  .project-item__title {
    font-size: calc(10px + 2vmax);
  }
  .project-item__desc {
    font-size: calc(10px + 2vmax);
    font-family: 'RobotoMono Regular';
    margin-top: 1em;
  }
  @media only screen and (max-width: 768px) {
    .project-item__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  
}) {
  return (
    
    <ProjectItemStyles>
      <Link to={'/projects'} className='project-item__img'>
        <img src={projects[0].img} alt="phot" />
      </Link>
      <div className="project-item__info">
        <Link to={'#'}>
          <h3 className="project-item__title">Project1</h3>
        </Link>
        <p className="project-item__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sit.
        </p>
      </div>
    </ProjectItemStyles>
  )
}

