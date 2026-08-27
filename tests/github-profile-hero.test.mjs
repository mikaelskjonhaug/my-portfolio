import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("GitHub profile hero contains only the compact two-line treatment", async () => {
  const svg = await readFile("public/github-profile-hero.svg", "utf8");

  for (const value of ["#F8F8F2", "#8BE9FD", "hello, i'm", "ikael", "kjonha"]) {
    assert.ok(svg.includes(value));
  }
  assert.doesNotMatch(svg, /Blog|Skills|Experience|Projects|<circle/);
  assert.doesNotMatch(svg, /<rect/);
  assert.match(svg, /<text x="192" y="145"[^>]*text-anchor="start"[^>]*>hello, i'm<\/text>/);
  assert.match(svg, /<text x="192" y="272"[^>]*text-anchor="start"/);
  assert.match(svg, /<tspan fill="#8BE9FD">m<\/tspan>ikael<tspan fill="#8BE9FD">s<\/tspan>kjonha/);
  assert.match(svg, /<tspan fill="#BD93F9">\.ug<\/tspan>/);
  assert.doesNotMatch(svg, /<(?:image|use)\b|(?:href|src)="https?:/);
});
