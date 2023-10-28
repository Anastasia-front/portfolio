import { generateText, mailOptions, transporter } from "@/utils";

export async function POST(req: any) {
  const body = await req.json();
  await transporter.sendMail({ ...mailOptions, text: generateText(body) });
  return new Response("Successful");
}
