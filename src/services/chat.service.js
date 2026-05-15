import { openai } from "../lib/openai.js";
import { env } from "../config/env.js";

export async function createChatAnswer(message) {
  const response = await openai.responses.create({
    model: env.openaiModel,
    input: message,
  });

  return response.output_text;
}
