import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface Blog {
  id: string;
  title: string;
  content: string;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const response = await fetch(`https://api.vercel.app/blog/${params.id}`);
  const json = await response.json();
  return json;
}

export default function Blog() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <h1 className="text-4xl font-extrabold py-2">{data.title}</h1>
      <article className="py-5">{data.content}</article>
    </>
  );
}
