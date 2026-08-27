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
    'href="#about"',
    'href="#skills"',
    'href="#experience"',
    'href="#projects"',
    "About me",
    "Skills",
    "Experience",
    "Selected work",
    "<details",
  ]) {
    assert.match(html, new RegExp(marker));
  }
  assert.doesNotMatch(html, /opacity:0/);
});
