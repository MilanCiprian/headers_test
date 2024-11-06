"use server"
import { headers } from "next/headers";

export async function getIP() {
  const requestHeaders = await headers(); // this generate the error
  const remoteIP = requestHeaders.get("x-forwarded-for")?.split(":").pop() || "unknown";
  return remoteIP;
}
