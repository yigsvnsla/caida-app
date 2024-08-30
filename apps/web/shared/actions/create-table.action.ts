"use server";
import { redirect } from "next/navigation";

export async function createTable(formData: FormData) {
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
  console.log("createTable action: ", formData);
  // console.log("createTable response: ", await res.json());

  redirect(`./room/${roomId}`);
}
