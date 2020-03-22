import { Section, Table } from './ResumeSection';

export default function Accomplishments() {
  return (
    <Section
      gridCol="span 2"
      headingBackground="maroon"
      headingColor="white"
    >
      <h2>Accomplishments</h2>

      <Table>
        <tr>
          <th>Workplace</th>
        </tr>

        <tr>
          <td>
            <ul>
              <li>
                Consistently praised for <strong>utmost professionalism</strong> and <strong>excellent communication</strong>
              </li>
              <li>
                Recognized for improvement to maintainability and documentation of large code bases
              </li>
            </ul>
          </td>
        </tr>
      </Table>

      <Table>
        <tr>
          <th>Academics</th>
        </tr>

        <tr>
          <td>
            <ul>
              <li>
                Consistently earned A’s in upper division computer science classes; lowest grade was a B+
              </li>
              <li>
                Dean’s List, Honor Roll
              </li>
            </ul>
          </td>
        </tr>
      </Table>
    </Section>
  );
}