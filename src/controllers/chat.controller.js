import { createChatAnswer } from "../services/chat.service.js";

export async function sendMessage(req, res, next) {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Сообщение не может быть пустым",
      });
    }

    const answer = await createChatAnswer(message.trim());

    res.json({ answer });
  } catch (error) {
    next(error);
  }
}
