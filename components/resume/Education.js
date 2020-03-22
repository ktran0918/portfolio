import { Section, Table } from './ResumeSection';

export default function Education() {
  return (
    <Section
      gridCol="span 2"
      headingBackground="#D73F09"
      headingColor="white"
    >
      <h2>Education</h2>

      <Table>
        <tr>
          <th>Oregon State University</th>
          <th>Corvallis, OR</th>
        </tr>

        <tr>
          <th>Bachelor of Science in Computer Science</th>
          <th>June 2020</th>
        </tr>

        <tr>
          <ul>
            <li>
              Focus: <strong>Web and Mobile Development</strong>, <strong>System Administration</strong>
            </li>
            <li>
              Consecutive terms in the <strong>Honor Roll</strong>, <strong>Dean's List</strong>
            </li>
          </ul>
        </tr>
      </Table>
    </Section>
  );
}