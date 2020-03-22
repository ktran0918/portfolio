import styled from '@emotion/styled';

import { Section } from './ResumeSection';

const SkillsTable = styled.table`
  th {
    text-align: right;
  }

  th, td {
    padding: 5px 10px;
  }
`;


export default function Skills() {
  return (
    <Section
      gridCol="3"
      headingBackground="gold"
      headingColor="black"
    >
      <h2>Skills</h2>

      <SkillsTable>
        <tr>
          <th>Languages</th>
          <td>JavaScript (ES6+), Python, Java, C/C++, SQL</td>
        </tr>

        <tr>
          <th>Frameworks</th>
          <td>Node.js, React, Angular, REST, GraphQL, Express</td>
        </tr>

        <tr>
          <th>Environments</th>
          <td>Google Cloud Platform, AWS, CentOS, Ubuntu, Git, Windows, MacOS</td>
        </tr>
      </SkillsTable>
    </Section>
  );
}