import { sendEmail } from "@/utils";
import { NextApiResponse } from "next";

interface FormData {
  subject: string;
  email: string;
  message: string;
}

export async function POST(req: any, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      await sendEmail(body);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
