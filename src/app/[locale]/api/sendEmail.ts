import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request: Request) {
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_EMAIL_LOCAL;

  console.log("dealing with request");
  const formData = await request.formData();
  const subject = formData.get("subject");
  const email = formData.get("email");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: myEmail,
      pass: password,
    },
  });
  try {
    const mailOption = {
      from: email,
      to: myEmail,
      subject: subject,
      html: `
        <h3> From: ${email}</h3>
        <li> Subject: ${subject}</li>
        <li> Message: ${message}</li> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
