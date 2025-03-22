import { Link, useLoaderData } from "@remix-run/react";

interface Blog {
  id: string;
  title: string;
  content: string;
}

export async function loader() {
  const response = await fetch("https://api.vercel.app/blog");
  const json = await response.json();
  return json;
}

export default function Blog() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Blog List</h1>
      <ul>
        {data.map((blog: Blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
