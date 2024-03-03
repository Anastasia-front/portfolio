interface FormData {
  subject: string;
  email: string;
  message: string;
}

const password = process.env.NEXT_PUBLIC_SMTP_PASSWORD;
const email = process.env.NEXT_PUBLIC_SMTP_EMAIL;

export async function sendEmail(formData: FormData) {
  const response = await fetch("/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });

  console.log("sendEmail");

  if (!response.ok) {
    throw new Error("Failed to send message");
  }
  console.log(response.status);
  return response.status;
}
