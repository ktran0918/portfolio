import styled from "@emotion/styled";
import { css, jsx } from '@emotion/core';

import Layout from "../components/Layout";

import ContactInfo from '../components/resume/ContactInfo';
import Education from '../components/resume/Education';
import Experience from '../components/resume/Experience';
import GitHubProjects from '../components/resume/GitHubProjects';
import Skills from '../components/resume/Skills';
import Accomplishments from '../components/resume/Accomplishments';

const ResumeBody = styled.main`
  width: 90%;
  margin: 10px auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 1fr auto;
`;

export default function Resume() {
  return (
    <Layout>
      <h1>My Resume</h1>
      <ResumeBody>
        <ContactInfo />
        <Education />
        <Experience />
        <GitHubProjects />
        <Accomplishments />
        <Skills />
      </ResumeBody>
    </Layout>
  );
}