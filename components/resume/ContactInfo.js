/** @jsx jsx */

import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

import { Section } from './ResumeSection';

const BioTable = styled.table`
  td {
    padding: 5px 10px;
    &:first-of-type {
      text-align: center;
    }
    &:nth-of-type(2) {
      font-weight: bold;
    }

    a {
      text-decoration: none;
    }
  }
`;

const imgStyles = css`
  height: 70px;
  border-radius: 100px;
`;


function SocialIcon(props) {
  const { name } = props;

  return (
    <i class={`fa fa-2x fa-${name}`}></i>
  );
}


export default function ContactInfo() {
  return (
    <Section
      gridCol="1"
      headingBackground="forestgreen"
      headingColor="white"
    >
      <h2>Bio</h2>
      <BioTable>
        <tr>
          <td>
            <img css={imgStyles} src="/static/profile.jpg" alt="profile picture" />
          </td>
          <td style={{ fontSize: '150%', fontVariant: 'small-caps' }}>Khoa Tran</td>
        </tr>
        <tr>
          <td><SocialIcon name="briefcase" /></td>
          <td>
            Student Full Stack Developer @ <strong style={{ color: '#D73F09' }}>
              Oregon State University
            </strong>
            <br />
            Aspiring Full Stack / DevOps Engineer
          </td>
        </tr>

        <tr>
          <td><SocialIcon name="linkedin" /></td>
          <td>
            <a href="https://www.linkedin.com/in/ktran0918/">ktran0918</a>
          </td>
        </tr>

        <tr>
          <td><SocialIcon name="github" /></td>
          <td>
            <a href="https://github.com/ktran0918/">ktran0918</a>
          </td>
        </tr>
      </BioTable>

    </Section>
  );
}