import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  return {
    id: params.id,
  };
}

export default function Blog() {
  const data = useLoaderData<typeof loader>();
  return <h1>Blog {data.id}</h1>;
}
