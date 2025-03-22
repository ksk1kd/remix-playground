import { Link } from "@remix-run/react";

export default function Blog() {
  return (
    <>
      <h1>Blog List</h1>
      <ul>
        <li>
          <Link to="/blog/1">Blog 1</Link>
        </li>
        <li>
          <Link to="/blog/2">Blog 2</Link>
        </li>
        <li>
          <Link to="/blog/3">Blog 3</Link>
        </li>
        <li>
          <Link to="/blog/4">Blog 4</Link>
        </li>
        <li>
          <Link to="/blog/5">Blog 5</Link>
        </li>
      </ul>
    </>
  );
}
