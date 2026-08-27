import assert from "node:assert/strict";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

process.env.BROWSERSLIST_IGNORE_OLD_DATA = "true";

test("portfolio content is visible before the hero animation completes", async (t) => {
  const vite = await createServer({
    appType: "custom",
    server: { hmr: false, middlewareMode: true, ws: false },
  });
  t.after(() => vite.close());

  const { default: App } = await vite.ssrLoadModule("/src/App.jsx");
  const html = renderToStaticMarkup(createElement(App));

  for (const marker of [
    'href="#blog"',
    'href="#skills"',
    'href="#experience"',
    'href="#projects"',
    'aria-label="Quick navigation"',
    "Blog",
    "No posts yet.",
    "Skills",
    "Experience",
    "Selected work",
    "<details",
  ]) {
    assert.match(html, new RegExp(marker));
  }
  assert.match(html, /aria-label="mikaelskjonha\.ug"/);
  assert.doesNotMatch(html, /opacity:0/);
});

test("keyboard shortcuts map to menu and numbered navigation actions", async (t) => {
  const vite = await createServer({
    appType: "custom",
    server: { hmr: false, middlewareMode: true, ws: false },
  });
  t.after(() => vite.close());

  const { getNavigationAction } = await vite.ssrLoadModule(
    "/src/components/command-menu.jsx",
  );
  const event = (key, extra = {}) => ({ key, target: { tagName: "BODY" }, ...extra });

  assert.equal(getNavigationAction(event("k", { metaKey: true }), 4), "menu");
  assert.equal(getNavigationAction(event("k", { ctrlKey: true }), 4), "menu");
  assert.equal(getNavigationAction(event("1"), 4), 0);
  assert.equal(getNavigationAction(event("4"), 4), 3);
  assert.equal(getNavigationAction(event("5"), 4), null);
  assert.equal(
    getNavigationAction(event("1", { target: { tagName: "INPUT" } }), 4),
    null,
  );
});
