import { User } from "../types/User";

export const fetchUserData = async (endpoint: string): Promise<User[]> => {
  try {
    const res = await fetch(endpoint);

    if (!res.ok) {
      console.error(`The response status code was ${res.status}`);
      process.exit(1);
    }

    const text = await res.text();
    const users = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.startsWith("{") && line.endsWith("}"))
      .map((line, i) => {
        try {
          return JSON.parse(line);
        } catch (err) {
          console.error(`JSON parse error at line ${i + 1}:`, line);
          throw err;
        }
      });
    return users;
  } catch (err: any) {
    console.error(`Fetch failed with error: ${err.message}`);
    process.exit(1);
  }
};
