import { Section, Table } from './ResumeSection';
import jobs from '../../data/experience';

export default function Experience() {
  return (
    <Section
      gridCol="span 3"
      headingBackground="indigo"
      headingColor="white"
    >
      <h2>Experience</h2>
      {jobs.map(job =>
        <Table>
          <tr>
            <th>{job.employer}</th>
            <th>{job.location}</th>
          </tr>

          <tr>
            <th>{job.position}</th>
            <th>{job.startdate} - {job.enddate}</th>
          </tr>

          <tr>
            <td>
              <ul>
                {job.responsibilities.map(res =>
                  <li>{res}</li>
                )}
              </ul>
            </td>
          </tr>
        </Table>
      )}
    </Section>
  );
}