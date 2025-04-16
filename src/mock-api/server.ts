import express from "express";
import mockUsers from "./mock-users";

const app = express();
const PORT = 3001;

app.get("/", (_, res) => {
  const jsonLines = mockUsers.map((user) => JSON.stringify(user)).join("\n");
  res.set("Content-Type", "application/json");
  res.send(jsonLines);
});

app.listen(PORT, () => {
  console.log(`Mock API running http://localhost:${PORT}`);
});
