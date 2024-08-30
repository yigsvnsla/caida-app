"use server";
import { redirect } from "next/navigation";

export async function joinTable(formData: FormData) {
  // Create a new post
  // ...
  // Redirect to the new post
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log(formData);
  // redirect(`/posts/${data.id}`);
}
