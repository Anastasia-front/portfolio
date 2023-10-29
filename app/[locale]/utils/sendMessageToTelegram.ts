import axios from "axios";

import { generateText } from "./generateText";

interface FormData {
  subject: string;
  email: string;
  message: string;
}

export async function sendMessageToTelegram(text: FormData) {
  const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_API_KEY}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_DIALOGUE_KEY}`;

  try {
    const response = await axios.post(url, {
      parse_mode: "html",
      text: generateText(text.message),
    });

    return response.data;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    throw error;
  }
}
