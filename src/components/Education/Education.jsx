import React from 'react'
import styled from 'styled-components';
import Table from './Table';


const ContainerEdu = styled.div`
display: flex;
height: 93vh;
justify-content: center;
align-items: center;
background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
 > p{
  font-size: calc(10px + 2vmin);
  font-weight: bold;
 }
`;
const list = [
  {name: 'Robertson College', year: '2021', title: 'Full-Stack Web Developer'},
  {name: 'Odessa State Environmental University', year: '2014', title: 'Bachelor in Management'},
]
export function Education (props) {
  return (
    <ContainerEdu >
      <Table list={list} />
    </ContainerEdu>
  )
}


