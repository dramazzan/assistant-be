import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { env } from "./config/env.js";

const app = express();

app.use(
  cors({
    origin(origin, callback) {
      if (env.corsOrigins === "*" || !origin) {
        callback(null, true);
        return;
      }

      const normalizedOrigin = origin.replace(/\/$/, "");

      if (env.corsOrigins.includes(normalizedOrigin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
  }),
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/chat", chatRouter);
app.use(errorHandler);

export default app;
