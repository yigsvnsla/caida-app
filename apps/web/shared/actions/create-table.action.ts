"use server";
import { redirect } from "next/navigation";

export async function createTable(formData: FormData) {
  console.log("createTable action: ", formData);

  const res = await fetch("http://localhost:4000/create-table", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      gameMode: Number(formData.get("mode")),
      playerCount: Number(formData.get("players")),
      hostNickname: formData.get("username"),
    }),
  });
  const { roomId } = await res.json();
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log();

  redirect(`/posts/${roomId}`);
}
