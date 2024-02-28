import axios from "axios";

import { CHAT_ID, TELEGRAM_KEY } from "@/constants";
import { generateText } from "@/helpers";

interface FormData {
  subject: string;
  email: string;
  message: string;
}

export async function sendMessageToTelegram(data: FormData) {
  const url = `https://api.telegram.org/bot${TELEGRAM_KEY}/sendMessage?chat_id=${CHAT_ID}`;

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
