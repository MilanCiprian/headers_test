"use server"
import { getIP } from "./_util/getIP";

export default async function Home() {
  const ip = getIP();
  return (
    <h1>TEST IP {ip}</h1>
  );
}
