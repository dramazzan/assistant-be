import dotenv from "dotenv";

dotenv.config();

const parseCorsOrigins = (value) => {
  if (!value || value === "*") {
    return "*";
  }

  return value
    .split(",")
    .map((origin) => origin.trim().replace(/\/$/, ""))
    .filter(Boolean);
};

export const env = {
  port: process.env.PORT || 5000,
  openaiApiKey: process.env.OPENAI_API_KEY,
  openaiModel: process.env.OPENAI_MODEL || "gpt-4.1-mini",
  corsOrigins: parseCorsOrigins(process.env.CORS_ORIGIN),
};
