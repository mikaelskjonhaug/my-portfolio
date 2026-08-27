export default function EntryDropdown({ logo, title, subtitle, meta, overview, link, linkLabel, name }) {
  const Logo = logo;

  return (
    <details className="entry" name={name}>
      <summary>
        {typeof Logo === "string"
          ? <img src={Logo} alt="" />
          : <span className="project-icon"><Logo aria-hidden="true" /></span>}
        <span className="entry-title">
          <strong>{title}</strong>
          <span>{subtitle}</span>
        </span>
        {meta}
        <span className="entry-toggle" aria-hidden="true">+</span>
      </summary>
      <div className="entry-details">
        <ul>
          {overview.map((item) => <li key={item}>{item}</li>)}
        </ul>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkLabel} ↗
          </a>
        )}
      </div>
    </details>
  );
}
