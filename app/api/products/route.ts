import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/product";

export async function GET(request: Response) {
  try {
    await dbConnect();
    const products = await Product.find();

    return NextResponse.json(
      {
        message: `Connection was succesfull`,
        payload: products,
        success: true,
        timestamp: Date.now(),
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        message: `Conncetion failed!`,
        success: false,
        timestamp: Date.now(),
      },
      { status: 500 },
    );
  }
}
