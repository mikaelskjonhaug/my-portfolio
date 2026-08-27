const groups = [
  ["Languages", ["Python", "JavaScript", "Java", "C++", "C", "Swift", "SQL"]],
  ["Frameworks", ["Django", "FastAPI", "Node.js", "React", "NumPy", "PyTorch"]],
  ["Quality", ["Pytest", "Cypress", "Git", "Docker"]],
  ["Platforms", ["PostgreSQL", "MongoDB", "Cloudflare", "Heroku", "Render", "AWS"]],
];

export default function Skills() {
  return (
    <div className="section-layout">
      <header className="section-header">
        <span>stack.json</span>
        <h2>Skills</h2>
      </header>
      <div className="skill-groups">
        {groups.map(([label, skills]) => (
          <div className="skill-group" key={label}>
            <h3>{label}</h3>
            <ul>
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
