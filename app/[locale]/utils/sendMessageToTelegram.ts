import axios from "axios";

import { generateText } from "./generateText";

interface FormData {
  subject: string;
  email: string;
  message: string;
}

const telegramKey = process.env.NEXT_PUBLIC_TELEGRAM_API_KEY;
const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

export async function sendMessageToTelegram(data: FormData) {
  const url = `https://api.telegram.org/bot${telegramKey}/sendMessage?chat_id=${chatId}`;

  try {
    const response = await axios.post(url, {
      parse_mode: "html",
      text: generateText(data),
    });

    return response.data;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    throw error;
  }
}
