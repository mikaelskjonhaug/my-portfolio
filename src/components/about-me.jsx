export default function AboutMe() {
  return (
    <div className="section-layout">
      <header className="section-header">
        <span>about.md</span>
        <h2>About me</h2>
      </header>
      <div className="section-copy">
        <p>
          I&apos;m Mikael, a software engineer at Hortus AI and a computer science
          student at UC Berkeley.
        </p>
        <p>
          I like turning ambitious ideas into reliable products—especially where
          web engineering, developer tooling, and machine learning meet.
        </p>
        <dl className="quick-facts">
          <div><dt>Based in</dt><dd>Berkeley, CA</dd></div>
          <div><dt>Currently</dt><dd>Building at Hortus AI</dd></div>
          <div><dt>Studying</dt><dd>Computer Science</dd></div>
        </dl>
      </div>
    </div>
  );
}
