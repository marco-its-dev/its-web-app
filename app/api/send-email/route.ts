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

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true, // usa SSL
//   auth: {
//     user: "your-email@gmail.com",  // il tuo indirizzo Gmail
//     pass: "xxxx xxxx xxxx xxxx",   // password app (senza spazi!)
//   },
// });

export async function POST(request: NextRequest) {
  const { name, surname, mail, message }: UserData = await request.json();

  return NextResponse.json(
    {
      message: `Thanks ${name} ${surname} for sending the message!`,
      success: true,
      timestamp: Date.now(),
    },
    { status: 200 },
  );
}
