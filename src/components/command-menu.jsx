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

  if (event.metaKey || event.ctrlKey || event.altKey || !/^[1-9]$/.test(event.key)) {
    return null;
  }

  const index = Number(event.key) - 1;
  return index < linkCount ? index : null;
}

export default function CommandMenu({ links }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      const action = getNavigationAction(event, links.length);

      if (action === "menu") {
        event.preventDefault();
        if (!dialogRef.current.open) dialogRef.current.showModal();
      } else if (typeof action === "number") {
        document.querySelector(`#${links[action].toLowerCase()}`)?.scrollIntoView();
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
          {links.map((label, index) => (
            <a key={label} href={`#${label.toLowerCase()}`} onClick={close}>
              <kbd>{index + 1}</kbd>
              <span>{label}</span>
              <span aria-hidden="true">↵</span>
            </a>
          ))}
        </nav>
      </div>
    </dialog>
  );
}
