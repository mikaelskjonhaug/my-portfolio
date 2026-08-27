// ponytail: date is line 1 of each .md — file mtime isn't readable from the browser
// and doesn't survive a clone. Title is the filename. Body is everything after line 1.
const files = import.meta.glob("./*.md", { query: "?raw", import: "default", eager: true });

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const [date, ...rest] = raw.trimStart().split("\n");
    return {
      title: path.slice(2, -3),
      date: date.trim(),
      body: rest.join("\n").trim(),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date))
  .map((post, index) => ({ ...post, id: index + 1 }));
