import { useEffect, useRef } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function getNavigationAction(event, linkCount) {
  const tag = event.target?.tagName;

  if (event.target?.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(tag)) {
    return null;
  }

  if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
    return "menu";
  }

  if (event.key === "Escape") return "close";

  if (event.key === "0" && !event.metaKey && !event.ctrlKey && !event.altKey) {
    return "top";
  }

  if (event.metaKey || event.ctrlKey || event.altKey || !/^[1-9]$/.test(event.key)) {
    return null;
  }

  const index = Number(event.key) - 1;
  return index < linkCount ? index : null;
}

export default function CommandMenu({ links, socialLinks }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      const action = getNavigationAction(event, links.length);

      if (action === "menu") {
        event.preventDefault();
        if (!dialogRef.current.open) dialogRef.current.showModal();
      } else if (action === "close" && dialogRef.current.open) {
        event.preventDefault();
        dialogRef.current.close();
      } else if (action === "top") {
        document.querySelector("#top")?.scrollIntoView();
        if (dialogRef.current.open) dialogRef.current.close();
      } else if (typeof action === "number") {
        document.querySelector(`#${links[action].toLowerCase()}`)?.scrollIntoView();
        if (dialogRef.current.open) dialogRef.current.close();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [links]);

  const close = () => dialogRef.current.close();

  return (
    <dialog
      ref={dialogRef}
      className="command-menu"
      aria-label="Quick navigation"
      onClick={(event) => event.target === event.currentTarget && close()}
    >
      <div className="command-panel">
        <header className="command-header">
          <span><strong>&gt;_</strong> jump to</span>
          <button type="button" onClick={close} aria-label="Close quick navigation">
            esc
          </button>
        </header>
        <nav className="command-links" aria-label="Command navigation">
          <a href="#top" onClick={close}>
            <kbd>0</kbd>
            <span>Hero</span>
            <span aria-hidden="true">↵</span>
          </a>
          {links.map((label, index) => (
            <a key={label} href={`#${label.toLowerCase()}`} onClick={close}>
              <kbd>{index + 1}</kbd>
              <span>{label}</span>
              <span aria-hidden="true">↵</span>
            </a>
          ))}
          <span className="command-group-label">connect</span>
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={close}
            >
              <span className="command-social-mark" aria-hidden="true">↗</span>
              <span>{label}</span>
              <span aria-hidden="true">↵</span>
            </a>
          ))}
        </nav>
      </div>
    </dialog>
  );
}
