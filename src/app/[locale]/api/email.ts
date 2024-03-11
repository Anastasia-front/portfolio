import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handles POST requests to /api

export async function POST(request: NextRequest) {
  const password = process.env.NEXT_PUBLIC_SMTP_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_SMTP_EMAIL;

  const formData = await request.formData();
  const name = formData.get("name");
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
    const mail = await transporter.sendMail({
      from: myEmail,
      to: myEmail,
      subject: ` ${message}`,
      html: `
       <p>Name: ${name} </p>
       <p>Email: ${email} </p>
       <p>Message: ${message} </p>
       `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
  }
}
