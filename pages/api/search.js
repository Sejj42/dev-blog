import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { getPosts } from "@/lib/posts";

export default function handler(req, res) {
  let posts;

  if (process.env.NODE_ENV === "production") {
  } else {
    posts = getPosts();
  }

  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category } }) =>
      title.toLowerCase().includes(req.query.q) ||
      excerpt.toLowerCase().includes(req.query.q) ||
      category.toLowerCase().includes(req.query.q)
  );

  res.status(200).json({ results });
}
