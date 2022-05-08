import { getPosts } from "@/lib/posts";

export default function handler(req, res) {
  let posts;

  if (process.env.NODE_ENV === "production") {
    posts = require("../../cache/data").posts;
  } else {
    posts = getPosts();
  }

  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category } }) =>
      title.toLowerCase().includes(req.query.q) ||
      excerpt.toLowerCase().includes(req.query.q) ||
      category.toLowerCase().includes(req.query.q)
  );

  res.status(200).json(JSON.stringify({ results }));
}
