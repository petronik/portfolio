import React from 'react'
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import {projects} from '../../assets/data/projects'
import ProjectItem from './ProjectItem';

//SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
padding:10em 0;
height: 92vh;
background: linear-gradient(217deg, rgba(246,158,62,.8), rgba(246,158,62,0) 60.71%),
            linear-gradient(127deg, rgba(235,246,222,.8), rgba(235,246,222,0) 60.71%),
            linear-gradient(336deg, rgba(67,137,167,.8), rgba(67,137,167,0) 60.71%);

text-align: center;
.projects__all-items {
  display: flex;
  gap: 200px;
  margin-top: 6em;
  }
  .swiper {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev, 
  .swiper-button-next {
    height: 50px;
    width: 50px;
    background: black;
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: white;
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__all-items {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 20px;
      gap: 5rem;
      .project-item__img {
        width: 100%;
      }
    }
  }
`;

export function Projects() {
  return (
    <ProjectSectionStyle>
      <h3>some of my recent works</h3>
      <h1>PROJECTS</h1>
      <div className="projects__all-items">
        <Swiper
          modules={[Navigation]}
           spaceBetween={30}
           slidesPerView={1}
           navigation breakpoints={{
             // when window width is >= 640px
             640: {
               slidesPerView: 1,
             },
             // when window width is >= 768px
             768: {
               slidesPerView: 2,
             },
             // when window width is >= 1200px
             1200: {
               slidesPerView: 3,
             },
           }}
        >
          {projects.map((project, index) => {
            //if(index >= 5) return;
            return (
              <SwiperSlide key={index}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                  />
                </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </ProjectSectionStyle>
  )
}


