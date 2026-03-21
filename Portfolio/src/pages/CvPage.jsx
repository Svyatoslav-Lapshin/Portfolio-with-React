import cvData from "../data/cv.json";

function CvPage() {
  return (
    <div className="container">
      <header>
        <h1 className="title-rubric">Curriculum Vitae!</h1>
      </header>

      <main className="hero cv-page">
        <article className="skills">
          <h2>Skills</h2>
          <ul>
            <li>
              <strong> C#</strong>
            </li>
            <li>
              <strong> HTML</strong>
            </li>
            <li>
              <strong> CSS</strong>
            </li>
            <li>
              <strong> JavaScript</strong>
            </li>
            <li>
              <strong> Git</strong>
            </li>
            <li>
              <strong> SQL</strong>
            </li>
            <li>
              <strong> React</strong>
            </li>
            <li>
              <strong> Agile Methodologies</strong>
            </li>
            <li>
              <strong> Problem Solving</strong>
            </li>
            <li>
              <strong> Communication</strong>
            </li>
            <li>
              <strong>Unity</strong>
            </li>
          </ul>
        </article>

        <article className="work-experience">
          <h2>Work Experience</h2>
          <ul>
            {cvData.workExperience.map((job, index) => (
              <li key={index}>
                <strong>
                  {job.company}-{job.location}
                </strong>
                - {job.position}({job.start}-{job.end})
              </li>
            ))}
          </ul>
        </article>

        <article className="education">
          <h2>Education</h2>
          <ul>
            {cvData.education.map((edu, index) => (
              <li key={index}>
                <strong>
                  {edu.school}-{edu.location}
                </strong>
                - {edu.program} ({edu.start}-{edu.end})
              </li>
            ))}
          </ul>
        </article>

        <article className="courses">
          <h2>Courses</h2>
          <ul>
            {cvData.courses.map((cou, index) => (
              <li key={index}>
                <strong>
                  {cou.name}-{cou.location}
                </strong>
                - {cou.name} ({cou.start}-{cou.end})
              </li>
            ))}
          </ul>
        </article>

        <article className="languages">
          <h2>Languages</h2>
          <ul>
            <li>
              <strong>Swedish</strong> - Good understanding of speech and
              writing.
            </li>
            <li>
              <strong>English</strong> - Good understanding of speech and
              writing.
            </li>
            <li>
              <strong>Russian</strong> - Native
            </li>
          </ul>
        </article>
      </main>
    </div>
  );
}
export default CvPage;
