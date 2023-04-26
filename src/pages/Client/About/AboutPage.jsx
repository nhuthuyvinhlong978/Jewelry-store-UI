import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import About from '../../../components/About/About';
import ProjectCount from '../../../components/ProjectCount/ProjectCount';
import Team from '../../../components/Team/Team';
const AboutPage = () => {
  return (
    <div>
      <Breadcrumb />
      <About />
      <ProjectCount />
      <Team />
    </div>
  );
};

export default AboutPage;
