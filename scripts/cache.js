const matter = require("gray-matter");
const fs = require("fs");
const path = require("path");

function postData() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return `export const posts = ${JSON.stringify(posts)}`;
}

try {
  fs.readdirSync("cache");
} catch (error) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", postData(), (err) => {
  if (err) return console.log(err);
  console.log("Posts Cached.");
});
