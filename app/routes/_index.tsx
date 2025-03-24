import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <h1 className="text-4xl font-extrabold py-2">Server Action</h1>
      <Form method="post" className="flex flex-col items-start gap-y-2 my-5">
        <label>
          Name:
          <input
            name="name"
            className="ml-2 bg-gray-800 px-2 py-1 rounded my-4"
          />
        </label>
        <button
          type="submit"
          className="border border-gray-200 px-2 py-1 rounded my-4"
        >
          Get greeting
        </button>
      </Form>
      <p>Message: {actionData?.message}</p>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");

  return { message: `Hello, ${name}!` };
}
