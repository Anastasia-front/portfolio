interface FormData {
  subject: string;
  email: string;
  message: string;
}

import sgMail from "@sendgrid/mail";
const sendgridApiKey = process.env.SENDGRID_API_KEY;

if (!sendgridApiKey) {
  //   throw new Error("SENDGRID_API_KEY is not set in the environment variables.");
  console.log("sendgridApiKey not found");
} else {
  sgMail.setApiKey(sendgridApiKey);
}

export async function sendEmail(data: FormData) {
  const email = {
    to: "palitsanastasia3.ap@gmail.com",
    from: data.email,
    subject: data.subject,
    text: data.message,
    html: `<strong>${data.message}</strong>`,
  };

  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
