import app from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.port, () => {
  console.log(`Server OK! URL: http://localhost:${env.port}`);
});

server.on("error", (error) => {
  console.error("Server start error:", error.message);
  process.exit(1);
});
