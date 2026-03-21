import { useEffect, useState } from "react";
function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Svyatoslav-Lapshin/repos")
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter(
          (repo) =>
            repo.name == "Labb-4-SchoolDB" ||
            repo.name == "RestAPI-Labb" ||
            repo.name == "Labb1-CV" ||
            repo.name == "Labb-3-SchoolDB",
        );
        setProjects(filtered);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <header>
        <h1 className="title-rubric"> Projects Page!</h1>
      </header>

      <main className="hero projects-page">
        {loading ? (
          <h2 className="loading">Loading...</h2>
        ) : (
          projects.map((project) => {
            return (
              <article key={project.id} className="project-card">
                <h2>{project.name}</h2>
                <p className="project-description">
                  Programming Language: {project.language}
                </p>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  GitHub Project Page
                </a>
              </article>
            );
          })
        )}
      </main>
    </div>
  );
}

export default ProjectsPage;
