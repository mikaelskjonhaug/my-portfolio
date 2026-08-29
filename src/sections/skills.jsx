const groups = [
  ["languages", ["Python", "JavaScript", "C++", "Java", "C"]],
  ["frameworks", ["Django", "FastAPI", "Node.js", "React", "PyTorch"]],
  ["databases", ["PostgreSQL", "MongoDB", "SQLite"]],
  ["cloud", ["AWS", "Google Cloud"]],
  ["tools", ["Git", "GitHub Actions", "SSH", "Jupyter Notebook"]],
];

export default function Skills() {
  return (
    <div className="section-layout">
      <header className="section-header">
        <span>skills.txt</span>
        <h2>Skills</h2>
      </header>
      <pre className="skill-plaintext">
        {groups.map(([label, skills]) => (
          <span className="skill-line" key={label}>
            <span className="skill-key">{label}</span>
            <span className="skill-punct">:</span> {skills.join(", ")}
            <span className="skill-newline">\n</span>
            {"\n"}
          </span>
        ))}
      </pre>
    </div>
  );
}
