const groups = [
  ["Languages", ["Python", "JavaScript", "C"]],
  ["Frameworks", ["Django", "FastAPI", "Node.js", "React"]],
  ["Databases", ["PostgreSQL", "MongoDB"]],
  ["Cloud", ["AWS", "Google Cloud"]]
];

export default function Skills() {
  return (
    <div className="section-layout">
      <header className="section-header">
        <span>skills.txt</span>
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
