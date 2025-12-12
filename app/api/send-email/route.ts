import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ message: "test is ok" }), {
    status: 200,
    headers: { "Content-type": "application/json" },
  });
}

export type UserData = {
  name: string;
  surname: string;
  mail: string;
  message: string;
};

export async function POST(request: NextRequest) {
  const { name, surname, mail, message }: UserData = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
      pass: process.env.NEXT_PUBLIC_SMTP_PASS,
    },
  });

  const mailOptions = {
    subject: `New message from ${name} ${surname}`,
    from: process.env.NEXT_PUBLIC_SMTP_EMAIL,
    to: process.env.NEXT_PUBLIC_SMTP_EMAIL,
    replyTo: mail,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: `Thanks ${name} ${surname} for sending the message!`,
        success: true,
        timestamp: Date.now(),
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Something is wrong: ${error}`,
        success: false,
        timestamp: Date.now(),
      },
      {
        status: 500,
      },
    );
  }
}
