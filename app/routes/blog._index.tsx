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
      <h1 className="text-4xl font-extrabold py-2">Blog List</h1>
      <ul className="list-disc pl-4 py-5">
        {data.map((blog: Blog) => (
          <li className="py-1" key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
